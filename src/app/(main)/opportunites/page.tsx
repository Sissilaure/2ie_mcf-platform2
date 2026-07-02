"use client";
import { useState, useEffect } from "react";
import { Zap, Search, Clock, Globe, Award, ArrowRight, Bookmark, Send, X, Bot, User, ChevronRight } from "lucide-react";

const CATEGORIES = ["Toutes", "Bourse", "Hackathon", "Formation", "Programme", "Compétition"];
const NIVEAUX = ["Tous", "L1", "L2", "L3", "M1", "M2"];

const OPPS = [
  { id: 1, titre: "Bourse DAAD — Master en Allemagne", org: "DAAD Deutschland", cat: "Bourse", pays: "Allemagne", deadline: "2024-09-15", niveau: ["L3", "M1", "M2"], montant: "850 €/mois", desc: "Financement complet pour un master d'ingénierie en Allemagne. Inclut les frais de scolarité, un forfait logement et une assurance maladie.", score: 98 },
  { id: 2, titre: "Hackathon WaterTech Africa 2024", org: "WaterAid Foundation", cat: "Hackathon", pays: "En ligne", deadline: "2024-08-01", niveau: ["L1", "L2", "L3"], montant: "5 000 USD", desc: "Compétition internationale sur les solutions innovantes pour l'accès à l'eau en Afrique subsaharienne. Prix cash et incubation.", score: 95 },
  { id: 3, titre: "Programme African Renewable Energy", org: "OIDA / Banque Africaine", cat: "Programme", pays: "Maroc", deadline: "2024-07-30", niveau: ["L3", "M1"], montant: "Logement + billet", desc: "Programme d'immersion de 3 semaines au Maroc sur les énergies solaires. Networking avec des leaders du secteur.", score: 92 },
  { id: 4, titre: "Formation SIG & Télédétection", org: "ESRI Africa", cat: "Formation", pays: "Afrique du Sud", deadline: "2024-08-20", niveau: ["L2", "L3", "M1"], montant: "Certifiant", desc: "Formation certifiante intensive sur ArcGIS Pro et la télédétection satellite. Prise en charge partielle pour boursiers MCF.", score: 88 },
  { id: 5, titre: "Concours Ingénierie Durable AUF", org: "Agence Universitaire Francophonie", cat: "Compétition", pays: "Canada", deadline: "2024-09-30", niveau: ["M1", "M2"], montant: "10 000 CAD", desc: "Appel à projets sur l'ingénierie durable et le développement local. Jury international, finalistes invités à Montréal.", score: 85 },
  { id: 6, titre: "Bourse d'Excellence AFD Burkina Faso", org: "Agence Française Développement", cat: "Bourse", pays: "France", deadline: "2024-10-01", niveau: ["M1", "M2"], montant: "1 200 €/mois", desc: "Financement de master d'excellence dans les domaines eau, énergie et environnement. Ouverte aux ressortissants burkinabè.", score: 90 },
];

type Message = {
  role: "bot" | "user";
  text: string;
};

const CHAT_INIT: Message[] = [
  { role: "bot", text: "Bonjour ! Je suis votre assistant 2iE Connect. Décrivez-moi votre profil et vos objectifs, je trouve les meilleures opportunités pour vous." }
];

function DeadlineCountdown({ deadline }: { deadline: string }) {
  const days = Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000);
  const color = days <= 14 ? "#C8102E" : days <= 30 ? "#F5A623" : "#1E7A34";
  return (
    <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color }}>
      <Clock size={11} />
      {days > 0 ? `${days} jours restants` : "Clôturé"}
    </div>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 95 ? "#1E7A34" : score >= 85 ? "#1565C0" : "#F5A623";
  return (
    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-black" style={{ background: color + "15", color }}>
      <Zap size={9} />
      {score}% match
    </div>
  );
}

export default function OpportunitesPage() {
  const [cat, setCat] = useState("Toutes");
  const [niveau, setNiveau] = useState("Tous");
  const [search, setSearch] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState(CHAT_INIT);
  const [input, setInput] = useState("");
  const [saved, setSaved] = useState<number[]>([]);

  const filtered = OPPS
    .filter((o) =>
      (cat === "Toutes" || o.cat === cat) &&
      (niveau === "Tous" || o.niveau.includes(niveau)) &&
      (search === "" || o.titre.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => b.score - a.score);

  const CAT_COLORS: Record<string, string> = {
    Bourse: "#1565C0", Hackathon: "#C8102E", Formation: "#1E7A34", Programme: "#F5A623", Compétition: "#9333ea"
  };

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "J'analyse votre profil... Voici 3 opportunités qui correspondent à vos critères. Souhaitez-vous que je les affiche en priorité dans la liste ?" }
      ]);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[#F5A623] text-xs font-bold mb-3">
                <Zap size={12} />
                Moteur IA
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-2">Opportunités Personnalisées</h1>
              <p className="text-slate-500 text-sm max-w-lg">
                Bourses, hackathons et formations sélectionnées par notre IA selon votre profil d'étudiant 2iE.
              </p>
            </div>
            <button
              onClick={() => setChatOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#F5A623] text-white hover:bg-amber-600 hover:-translate-y-0.5 transition-all duration-200 self-start sm:self-auto"
            >
              <Bot size={16} />
              Assistant IA
            </button>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-8 shadow-sm space-y-4">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher une opportunité..." className="input-modern pl-11" />
          </div>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Catégorie</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button key={c} onClick={() => setCat(c)} className={`filter-chip ${cat === c ? "active" : ""}`}
                    style={cat === c && c !== "Toutes" ? { background: CAT_COLORS[c], borderColor: CAT_COLORS[c], color: "white" } : {}}
                  >{c}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Niveau</p>
              <div className="flex flex-wrap gap-2">
                {NIVEAUX.map((n) => (
                  <button key={n} onClick={() => setNiveau(n)} className={`filter-chip ${niveau === n ? "active" : ""}`}>{n}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-5"><span className="font-bold text-slate-900">{filtered.length}</span> opportunité{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((o, i) => {
            const color = CAT_COLORS[o.cat] || "#1565C0";
            const isSaved = saved.includes(o.id);
            return (
              <div key={o.id} className="opportunity-card group animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold" style={{ background: color + "15", color }}>{o.cat}</span>
                      <ScoreBadge score={o.score} />
                    </div>
                    <h3 className="font-extrabold text-slate-900 group-hover:text-[#1565C0] transition-colors leading-snug">{o.titre}</h3>
                  </div>
                  <button
                    onClick={() => setSaved(prev => isSaved ? prev.filter(id => id !== o.id) : [...prev, o.id])}
                    className={`p-2 rounded-xl transition-all duration-200 flex-shrink-0 ${isSaved ? "bg-blue-50 text-[#1565C0]" : "hover:bg-slate-50 text-slate-300 hover:text-slate-400"}`}
                  >
                    <Bookmark size={16} fill={isSaved ? "#1565C0" : "none"} />
                  </button>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{o.desc}</p>

                {/* Info row */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Award size={12} className="text-slate-400" />
                    {o.montant}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Globe size={12} className="text-slate-400" />
                    {o.pays}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{o.org}</div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <DeadlineCountdown deadline={o.deadline} />
                  <button className="flex items-center gap-1.5 text-xs font-bold transition-all duration-200 hover:gap-2" style={{ color }}>
                    Voir les détails
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Chat Panel */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none" onClick={() => setChatOpen(false)} />
          <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:w-96 shadow-2xl animate-fade-up flex flex-col" style={{ maxHeight: "80vh" }}>
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-[#F5A623] flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Assistant 2iE Connect</div>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-xs text-slate-400">En ligne · IA</span></div>
              </div>
              <button onClick={() => setChatOpen(false)} className="ml-auto p-1.5 rounded-xl hover:bg-slate-100"><X size={16} className="text-slate-400" /></button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                      <Bot size={13} className="text-[#F5A623]" />
                    </div>
                  )}
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#1565C0] text-white rounded-tr-sm"
                      : "bg-slate-100 text-slate-700 rounded-tl-sm"
                  }`}>
                    {m.text}
                  </div>
                  {m.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-[#1565C0] flex items-center justify-center flex-shrink-0">
                      <User size={13} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-4 border-t border-slate-100 flex-shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Décrivez votre profil..."
                className="input-modern flex-1 text-sm py-2.5"
              />
              <button onClick={sendMessage} className="w-10 h-10 rounded-xl bg-[#F5A623] flex items-center justify-center hover:bg-amber-600 transition-colors flex-shrink-0">
                <Send size={15} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
