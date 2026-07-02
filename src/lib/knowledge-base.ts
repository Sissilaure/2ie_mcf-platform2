// Base de connaissances structurée pour le RAG
export const KNOWLEDGE_BASE = {
  resources: [
    {
      id: "ressource_1",
      type: "cours",
      titre: "Introduction aux énergies renouvelables",
      filiere: "BT-EREE",
      niveau: "L1",
      description: "Fondamentaux des énergies solaires, éoliennes et hydroélectriques",
      keywords: ["énergie", "renouvelable", "solaire", "éolien", "hydro"],
    },
    {
      id: "ressource_2",
      type: "td",
      titre: "Exercices pratiques - Hydraulique appliquée",
      filiere: "BT-EMIH",
      niveau: "L2",
      description: "TD sur les calculs de débit, pression et dimensionnement",
      keywords: ["hydraulique", "débit", "pression", "calcul"],
    },
    {
      id: "ressource_3",
      type: "annales",
      titre: "Examens 2019-2023 Thermodynamique",
      filiere: "BT-EMIH",
      niveau: "L3",
      description: "Sujets et corrections des dernières années",
      keywords: ["examen", "thermodynamique", "correction", "annales"],
    },
  ],
  stages: [
    {
      id: "stage_1",
      entreprise: "ONEA (Office National d'Eau et Assainissement)",
      pays: "Burkina Faso",
      domaine: "Hydraulique",
      niveau: "L2-L3",
      description: "Stages opérationnels en gestion de l'eau et traitement",
      keywords: ["stage", "eau", "onea", "hydraulique", "burkina"],
      contact: "coordination@onea.bf",
    },
    {
      id: "stage_2",
      entreprise: "SONABEL (Société Nationale d'Électricité)",
      pays: "Burkina Faso",
      domaine: "Électricité",
      niveau: "L2-M1",
      description: "Stages en production et distribution électrique",
      keywords: ["stage", "électricité", "sonabel", "énergie"],
      contact: "stages@sonabel.bf",
    },
    {
      id: "stage_3",
      entreprise: "Agence Française de Développement",
      pays: "Mali",
      domaine: "Environnement",
      niveau: "L3-M1",
      description: "Projets d'impact environnemental et développement durable",
      keywords: ["stage", "environnement", "afd", "développement", "mali"],
      contact: "internships@afd.fr",
    },
  ],
  formations: [
    {
      id: "form_1",
      titre: "Bourse DAAD - Master en Allemagne",
      type: "bourse",
      domaines: ["Ingénierie", "Environnement"],
      niveau: "L3-M2",
      pays: "Allemagne",
      montant: "850€/mois",
      deadline: "2024-09-15",
      description: "Financement complet pour master en ingénierie",
      keywords: ["bourse", "daad", "allemagne", "master", "financement"],
    },
    {
      id: "form_2",
      titre: "Hackathon WaterTech Africa 2024",
      type: "hackathon",
      domaines: ["Technologie", "Eau"],
      niveau: "L1-L3",
      montant: "5000 USD",
      pays: "En ligne",
      deadline: "2024-08-01",
      description: "Compétition innovation pour solutions eau en Afrique",
      keywords: ["hackathon", "watertech", "innovation", "eau", "afrique"],
    },
    {
      id: "form_3",
      titre: "Formation SIG & Télédétection",
      type: "certification",
      domaines: ["SIG", "Géomatique"],
      niveau: "L2-M1",
      pays: "Afrique du Sud",
      description: "Formation certifiante ArcGIS Pro et télédétection",
      keywords: ["formation", "sig", "télédétection", "arcgis", "certif"],
    },
  ],
  faq: [
    {
      question: "Comment postuler à une formation?",
      answer: "Les formations sont accessibles via la section Opportunités. Cliquez sur l'opportunité, lisez les critères d'éligibilité et cliquez sur 'Postuler'. Une copie de votre CV et lettre de motivation sera demandée.",
      keywords: ["postuler", "formation", "candidature"],
    },
    {
      question: "Quelles filières sont représentées?",
      answer: "2iE Connect couvre 4 filières principales : BT-EMIH (Énergie et Mécanique des Hydrosystèmes), BT-EREE (Énergie Renouvelable et Efficacité Énergétique), BGIS (Géo-Information et Surveillance), et ANC (Agronomes et Naturalistes Chercheurs).",
      keywords: ["filière", "programme", "cursus", "spécialité"],
    },
    {
      question: "Comment trouver un stage?",
      answer: "Consultez la section 'Stages & Expériences' pour parcourir les offres validées. Vous pouvez filtrer par pays, domaine et niveau. Contactez directement les coordinateurs listés pour confirmer votre intérêt.",
      keywords: ["stage", "expérience", "entreprise", "alternance"],
    },
    {
      question: "Y a-t-il des ressources pédagogiques?",
      answer: "Oui! La section 'Hub Ressources' propose 156+ ressources : cours, TDs, annales, supports par filière et année. Utilisez les filtres pour trouver exactement ce qu'il vous faut.",
      keywords: ["ressource", "cours", "td", "annale", "étude"],
    },
  ],
};

// Fonction utilitaire pour extraire le contexte pertinent
export function extractContext(query: string): string {
  const queryLower = query.toLowerCase();
  let results: string[] = [];

  // Chercher dans les ressources
  KNOWLEDGE_BASE.resources.forEach((r) => {
    if (r.keywords.some((k) => queryLower.includes(k))) {
      results.push(`${r.type}: ${r.titre} (${r.filiere} ${r.niveau})`);
    }
  });

  // Chercher dans les stages
  KNOWLEDGE_BASE.stages.forEach((s) => {
    if (s.keywords.some((k) => queryLower.includes(k))) {
      results.push(`Stage: ${s.entreprise} - ${s.domaine} (${s.pays})`);
    }
  });

  // Chercher dans les formations
  KNOWLEDGE_BASE.formations.forEach((f) => {
    if (f.keywords.some((k) => queryLower.includes(k))) {
      results.push(`${f.type}: ${f.titre}`);
    }
  });

  // Chercher dans les FAQs
  KNOWLEDGE_BASE.faq.forEach((faq) => {
    if (faq.keywords.some((k) => queryLower.includes(k))) {
      results.push(`FAQ: ${faq.question} - ${faq.answer}`);
    }
  });

  return results.slice(0, 5).join("\n");
}
