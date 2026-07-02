import { NextRequest, NextResponse } from "next/server";
import { extractContext } from "@/lib/knowledge-base";

// Initialiser Groq dynamiquement seulement si la clé est disponible
let groq: any = null;

async function initGroq() {
  if (!groq && process.env.GROQ_API_KEY) {
    const { default: Groq } = await import("groq-sdk");
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }
  return groq;
}

const SYSTEM_PROMPT = `Tu es un assistant 2iE Connect, aide-toi des informations fournies pour répondre aux questions des étudiants.

Informations de base:
- 2iE Connect est la plateforme numérique officielle des étudiants et boursiers de l'Institut 2iE
- L'Institut 2iE est situé à Ouagadougou, Burkina Faso
- Les 4 filières principales : BT-EMIH, BT-EREE, BGIS, ANC
- La plateforme propose : ressources académiques, bases de stages, opportunités IA, projets Give Back

RÈGLES IMPORTANTES:
1. Réponds UNIQUEMENT basé sur les informations fournies
2. Si une info n'est pas disponible, dis "Je n'ai pas cette info, contactez le support à support@2ie-edu.org"
3. Sois amical, professionnel et concis
4. Aide les étudiants à trouver des cours, TDs, stages, formations
5. Fournis des conseils pratiques basés sur les données réelles
6. Si on te demande quelque chose hors de la plateforme, redirection vers support

Ton objectif : aider les étudiants à mieux utiliser 2iE Connect et trouver les ressources qu'ils cherchent.`;

export async function POST(req: NextRequest) {
  try {
    const groqClient = await initGroq();

    if (!groqClient) {
      return NextResponse.json(
        {
          error: "Le service de chat n'est pas configuré. Veuillez ajouter GROQ_API_KEY dans .env.local",
        },
        { status: 503 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    // Extraire le contexte de la dernière question
    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const context = extractContext(lastUserMessage);

    // Préparer les messages avec le contexte
    const messagesWithContext = [
      ...messages.slice(0, -1),
      {
        role: "user" as const,
        content: `${lastUserMessage}\n\n[Contexte disponible:\n${context}]`,
      },
    ];

    // Appel à Groq avec streaming
    const stream = await groqClient.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...messagesWithContext,
      ],
      temperature: 0.3,
      max_tokens: 500,
      stream: true,
    });

    // Convertir le stream en réponse TextEncoder
    const encoder = new TextEncoder();
    let fullResponse = "";

    const customStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (chunk.choices?.[0]?.delta?.content) {
            const content = chunk.choices[0].delta.content;
            fullResponse += content;
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(customStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    const message =
      error instanceof Error ? error.message : "Une erreur est survenue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
