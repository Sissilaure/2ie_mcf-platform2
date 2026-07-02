"use client";
import { useState } from "react";
import { Download, Search, BookOpen, FileText, FlaskConical, BookMarked, Plus, X, ArrowRight } from "lucide-react";

const FILIERES = ["Toutes", "BT-EMIH", "BT-EREE", "BGIS", "ANC", "Centrale-2iE"];
const TYPES = ["Tous", "COURS", "TD", "ANNALES", "PROJET"];
const ANNEES = ["Toutes", "L1", "L2", "L3", "M1", "M2"];

const TYPE_CONFIG: Record<string, { icon: React.ElementType; color: string; bg: string; label: string }> = {
  COURS: { icon: BookOpen, color: "#1565C0", bg: "#EFF6FF", label: "Cours" },
  TD: { icon: FlaskConical, color: "#1E7A34", bg: "#F0FDF4", label: "TD / TP" },
  ANNALES: { icon: FileText, color: "#C8102E", bg: "#FEF2F2", label: "Annales" },
  PROJET: { icon: BookMarked, color: "#F5A623", bg: "#FFFBEB", label: "Projet" },
};

const RESSOURCES = [
  { id: 1, titre: "Hydraulique urbaine — Cours complet", type: "COURS", filiere: "BT-EMIH", annee: "L2", auteur: "Dr. Konaté", taille: "4.2 MB", telecharges: 87, date: "Mars 2024" },
  { id: 2, titre: "Hydraulique urbaine — TD corrigés série 1-4", type: "TD", filiere: "BT-EMIH", annee: "L2", auteur: "Aminata S.", taille: "1.8 MB", telecharges: 142, date: "Avr. 2024" },
  { id: 3, titre: "Énergies renouvelables — Cours photovoltaïque", type: "COURS", filiere: "BT-EREE", annee: "L3", auteur: "Dr. Zongo", taille: "6.1 MB", telecharges: 63, date: "Fév. 2024" },
  { id: 4, titre: "Géomatique appliquée — Examens 2022 + corrigés", type: "ANNALES", filiere: "BGIS", annee: "L2", auteur: "Fanta C.", taille: "2.4 MB", telecharges: 219, date: "Jan. 2024" },
  { id: 5, titre: "Assainissement — TP de terrain complet", type: "TD", filiere: "ANC", annee: "L1", auteur: "Oumar M.", taille: "3.3 MB", telecharges: 58, date: "Avr. 2024" },
  { id: 6, titre: "Chimie des eaux — Cours L1 + exercices", type: "COURS", filiere: "BT-EMIH", annee: "L1", auteur: "Dr. Sawadogo", taille: "5.0 MB", telecharges: 175, date: "Mar. 2024" },
  { id: 7, titre: "SIG avancé — TD pratiques QGIS", type: "TD", filiere: "BGIS", annee: "L3", auteur: "Habibou T.", taille: "8.7 MB", telecharges: 94, date: "Fév. 2024" },
  { id: 8, titre: "Électricité bâtiment — Annales 2019-2023", type: "ANNALES", filiere: "BT-EREE", annee: "M1", auteur: "Bah M.", taille: "3.1 MB", telecharges: 133, date: "Jan. 2024" },
  { id: 9, titre: "Gestion de projet — Rapport modèle", type: "PROJET", filiere: "Centrale-2iE", annee: "M1", auteur: "Diallo F.", taille: "1.2 MB", telecharges: 76, date: "Mai 2024" },
];

export default function RessourcesPage() {
  const [filiere, setFiliere] = useState("Toutes");
  const [type, setType] = useState("Tous");
  const [annee, setAnnee] = useState("Toutes");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = RESSOURCES.filter((r) =>
    (filiere === "Toutes" || r.filiere === filiere) &&
    (type === "Tous" || r.type === type) &&
    (annee === "Toutes" || r.annee === annee) &&
    (search === "" || r.titre.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1565C0] text-xs font-bold mb-3">
                <BookOpen size={12} />
                Hub Académique
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-2">Ressources Pédagogiques</h1>
              <p className="text-slate-500 text-sm max-w-lg">
                Cours, TD, annales et projets partagés par les étudiants et enseignants de l'Institut 2iE.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#1565C0] text-white hover:bg-[#0d3d91] hover:-translate-y-0.5 transition-all duration-200 shadow-glow self-start sm:self-auto"
            >
              <Plus size={16} />
              Ajouter une ressource
            </button>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Search + Filters */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-8 shadow-sm space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une ressource..."
              className="input-modern pl-11"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-y-4 gap-x-6">
            {/* Filière */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Filière</p>
              <div className="flex flex-wrap gap-2">
                {FILIERES.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFiliere(f)}
                    className={`filter-chip ${filiere === f ? "active" : ""}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Type</p>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`filter-chip ${type === t ? "active" : ""}`}
                    style={type === t && t !== "Tous" ? { background: TYPE_CONFIG[t]?.color, color: "white", borderColor: TYPE_CONFIG[t]?.color } : {}}
                  >
                    {t === "Tous" ? "Tous" : TYPE_CONFIG[t]?.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Année */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Année</p>
              <div className="flex flex-wrap gap-2">
                {ANNEES.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAnnee(a)}
                    className={`filter-chip ${annee === a ? "active" : ""}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-slate-500">
            <span className="font-bold text-slate-900">{filtered.length}</span> ressource{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <Search size={32} className="mx-auto mb-3 text-slate-300" />
            <p className="text-slate-500 font-medium">Aucune ressource ne correspond à vos critères.</p>
            <button
              onClick={() => { setFiliere("Toutes"); setType("Tous"); setAnnee("Toutes"); setSearch(""); }}
              className="mt-4 text-sm text-[#1565C0] font-semibold hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((r, i) => {
              const cfg = TYPE_CONFIG[r.type] || TYPE_CONFIG.COURS;
              const Icon = cfg.icon;
              return (
                <div
                  key={r.id}
                  className="resource-card group animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Type tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold"
                      style={{ background: cfg.bg, color: cfg.color }}
                    >
                      <Icon size={13} />
                      {cfg.label}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                      {r.filiere} · {r.annee}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-[#1565C0] transition-colors line-clamp-2">
                    {r.titre}
                  </h3>

                  {/* Meta */}
                  <div className="text-xs text-slate-400 mb-4 space-y-1">
                    <div>Par <span className="font-semibold text-slate-600">{r.auteur}</span> · {r.date}</div>
                    <div>{r.taille} · <span className="font-semibold text-slate-600">{r.telecharges}</span> téléchargements</div>
                  </div>

                  {/* Download */}
                  <button
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: cfg.color + "40", color: cfg.color, background: cfg.bg }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = cfg.color; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = cfg.bg; e.currentTarget.style.color = cfg.color; }}
                  >
                    <Download size={13} />
                    Télécharger
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100">
              <h2 className="text-lg font-extrabold text-slate-900">Ajouter une ressource</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-xl hover:bg-slate-100 transition-colors">
                <X size={18} className="text-slate-500" />
              </button>
            </div>
            <div className="px-7 py-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Titre</label>
                <input className="input-modern" placeholder="Ex: Hydraulique — Chapitre 1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Type</label>
                  <select className="input-modern">
                    <option>COURS</option><option>TD</option><option>ANNALES</option><option>PROJET</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Filière</label>
                  <select className="input-modern">
                    <option>BT-EMIH</option><option>BT-EREE</option><option>BGIS</option><option>ANC</option><option>Centrale-2iE</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Fichier</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-[#1565C0] transition-colors cursor-pointer">
                  <Download size={20} className="mx-auto mb-2 text-slate-300" />
                  <p className="text-xs text-slate-400">Glissez votre fichier ou cliquez pour parcourir</p>
                  <p className="text-xs text-slate-300 mt-1">PDF, PPT, DOCX — max 20 MB</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-7 py-5 border-t border-slate-100">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                Annuler
              </button>
              <button className="flex-1 py-2.5 rounded-xl bg-[#1565C0] text-white text-sm font-bold hover:bg-[#0d3d91] transition-colors">
                Publier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
