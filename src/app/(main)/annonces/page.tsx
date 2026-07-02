"use client";
import { useState } from "react";
import { Bell, Calendar, Tag, Search, Plus, X, Pin, ChevronRight } from "lucide-react";

const CATEGORIES = ["Toutes", "Événement", "Académique", "Engagement", "Opportunité", "Officiel"];

const BADGE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Événement: { bg: "#EFF6FF", text: "#1565C0", border: "#BFDBFE" },
  Académique: { bg: "#F0FDF4", text: "#1E7A34", border: "#BBF7D0" },
  Engagement: { bg: "#FEF2F2", text: "#C8102E", border: "#FECACA" },
  Opportunité: { bg: "#FFFBEB", text: "#F5A623", border: "#FDE68A" },
  Officiel: { bg: "#F5F3FF", text: "#7c3aed", border: "#DDD6FE" },
};

const ANNONCES = [
  { id: 1, titre: "Conférence Internationale sur les Énergies Renouvelables 2024", contenu: "Rejoignez-nous pour une conférence exceptionnelle avec des experts du secteur énergétique africain. Des intervenants de 8 pays présenteront leurs travaux sur le solaire et l'éolien. Inscription gratuite pour les boursiers MCF.", date: "2024-05-15", cat: "Événement", auteur: "Admin MCF", epinglé: true, vue: 243 },
  { id: 2, titre: "Résultats des Examens du Semestre 2 — Promo 2021-2024", contenu: "Les résultats des examens du deuxième semestre sont désormais disponibles dans votre espace personnel. Consultez votre relevé de notes et signalez toute anomalie avant le 20 mai auprès de la scolarité.", date: "2024-05-14", cat: "Académique", auteur: "Registrar 2iE", epinglé: true, vue: 512 },
  { id: 3, titre: "Appel à Projets Give Back 2024 — Soumission ouverte", contenu: "La Mastercard Foundation lance l'appel à projets Give Back 2024. Soumettez votre proposition d'impact social avant le 30 juin. Un comité de sélection étudiera toutes les candidatures.", date: "2024-05-13", cat: "Engagement", auteur: "Programme Give Back", epinglé: false, vue: 187 },
  { id: 4, titre: "Bourse DAAD 2025 — Dépôt de dossiers", contenu: "Le DAAD ouvre les candidatures pour ses bourses d'excellence 2025 destinées aux étudiants d'Afrique subsaharienne. Master et Doctorat en Allemagne. Dossier à déposer avant le 15 septembre.", date: "2024-05-10", cat: "Opportunité", auteur: "Coordination Bourses", epinglé: false, vue: 334 },
  { id: 5, titre: "Assemblée Générale des Boursiers MCF — Mai 2024", contenu: "Convocation officielle à l'assemblée générale trimestrielle des boursiers Mastercard Foundation de l'Institut 2iE. Présence obligatoire. Ordre du jour joint en pièce annexe.", date: "2024-05-08", cat: "Officiel", auteur: "Direction MCF", epinglé: false, vue: 298 },
  { id: 6, titre: "Hackathon Eau & Technologie — Équipes ouvertes", contenu: "Rejoignez une équipe pour le Hackathon WaterTech Africa 2024. Les inscriptions sont ouvertes jusqu'au 1er août. Récompenses financières et incubation pour les meilleures équipes.", date: "2024-05-06", cat: "Événement", auteur: "Club Innovation 2iE", epinglé: false, vue: 156 },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleString("fr-FR", { month: "short" }).toUpperCase(),
    full: d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
  };
}

export default function AnnoncesPage() {
  const [cat, setCat] = useState("Toutes");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = ANNONCES.filter((a) =>
    (cat === "Toutes" || a.cat === cat) &&
    (search === "" || a.titre.toLowerCase().includes(search.toLowerCase()))
  ).sort((a, b) => (b.epinglé ? 1 : 0) - (a.epinglé ? 1 : 0));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[#F5A623] text-xs font-bold mb-3">
                <Bell size={12} />
                Fil d'actualités
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-2">Annonces Officielles</h1>
              <p className="text-slate-500 text-sm max-w-lg">
                Communiqués, actualités académiques et événements de la coordination MCF 2iE.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#F5A623] text-white hover:bg-amber-600 hover:-translate-y-0.5 transition-all duration-200 self-start sm:self-auto"
            >
              <Plus size={16} />
              Publier une annonce
            </button>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-4">
            {/* Filters */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-4">
              <div className="relative">
                <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher une annonce..." className="input-modern pl-11 text-sm" />
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`filter-chip text-xs ${cat === c ? "active" : ""}`}
                    style={cat === c && c !== "Toutes" ? { background: BADGE_COLORS[c]?.text, color: "white", borderColor: BADGE_COLORS[c]?.text } : {}}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Announcements list */}
            {filtered.map((a, i) => {
              const { day, month, full } = formatDate(a.date);
              const badge = BADGE_COLORS[a.cat] || BADGE_COLORS.Officiel;
              return (
                <div
                  key={a.id}
                  className={`bg-white rounded-2xl border shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 animate-fade-up overflow-hidden ${
                    a.epinglé ? "border-[#F5A623]/30" : "border-slate-100"
                  }`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {a.epinglé && (
                    <div className="flex items-center gap-2 px-5 py-2 bg-amber-50 border-b border-amber-100">
                      <Pin size={11} className="text-[#F5A623]" />
                      <span className="text-xs font-bold text-[#F5A623]">Épinglé</span>
                    </div>
                  )}
                  <div className="flex gap-4 p-5">
                    {/* Date */}
                    <div className="flex-shrink-0 w-14 text-center">
                      <div className="text-2xl font-black text-slate-900 leading-none">{day}</div>
                      <div className="text-xs font-bold text-slate-400 tracking-wider">{month}</div>
                    </div>
                    {/* Separator */}
                    <div className="w-px bg-slate-100 self-stretch" />
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-bold border" style={{ background: badge.bg, color: badge.text, borderColor: badge.border }}>
                          {a.cat}
                        </span>
                        <span className="text-xs text-slate-400">Par <strong className="text-slate-600">{a.auteur}</strong></span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 mb-2 leading-snug hover:text-[#1565C0] transition-colors cursor-pointer">
                        {a.titre}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">{a.contenu}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{full} · {a.vue} vues</span>
                        <button className="flex items-center gap-1 text-xs font-bold text-[#1565C0] hover:gap-2 transition-all">
                          Lire plus <ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-4 pb-3 border-b border-slate-100">Résumé du mois</h3>
              {[{ label: "Annonces publiées", value: "6", color: "#1565C0" }, { label: "Événements à venir", value: "3", color: "#1E7A34" }, { label: "Opportunités ouvertes", value: "5", color: "#F5A623" }].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-2.5 border-b border-slate-50">
                  <span className="text-xs text-slate-500">{s.label}</span>
                  <span className="text-base font-black" style={{ color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#0A1628] to-[#1565C0] rounded-2xl p-5 text-white">
              <Bell size={20} className="mb-3 text-white/60" />
              <h3 className="font-bold text-sm mb-2">Activer les notifications</h3>
              <p className="text-white/60 text-xs leading-relaxed mb-4">Recevez une alerte dès qu'une nouvelle annonce est publiée.</p>
              <button className="w-full py-2 rounded-xl bg-white/15 border border-white/20 text-white text-xs font-bold hover:bg-white/25 transition-colors">
                Activer
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Catégories</h3>
              <div className="space-y-2">
                {CATEGORIES.filter((c) => c !== "Toutes").map((c) => {
                  const count = ANNONCES.filter((a) => a.cat === c).length;
                  const badge = BADGE_COLORS[c] || BADGE_COLORS.Officiel;
                  return (
                    <button key={c} onClick={() => setCat(c)} className="flex items-center justify-between w-full px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group">
                      <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">{c}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md" style={{ background: badge.bg, color: badge.text }}>{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100">
              <h2 className="text-lg font-extrabold text-slate-900">Publier une annonce</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-xl hover:bg-slate-100"><X size={18} className="text-slate-500" /></button>
            </div>
            <div className="px-7 py-6 space-y-4">
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Titre</label><input className="input-modern" placeholder="Ex: Réunion d'information" /></div>
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Catégorie</label>
                <select className="input-modern">{CATEGORIES.filter(c => c !== "Toutes").map(c => <option key={c}>{c}</option>)}</select>
              </div>
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Contenu</label><textarea className="input-modern min-h-[120px] resize-none" placeholder="Détails de l'annonce..." /></div>
            </div>
            <div className="flex gap-3 px-7 py-5 border-t border-slate-100">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">Annuler</button>
              <button className="flex-1 py-2.5 rounded-xl bg-[#F5A623] text-white text-sm font-bold hover:bg-amber-600 transition-colors">Publier</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
