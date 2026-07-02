"use client";
import { useState } from "react";
import { Heart, Users, Globe, TrendingUp, Plus, X, ArrowRight } from "lucide-react";

const PROJETS = [
  { id: 1, titre: "Forages solidaires — Région du Sahel", desc: "Construction de 3 forages dans des villages isolés pour améliorer l'accès à l'eau potable. Projet mené en collaboration avec la mairie locale.", impact: { value: "3 500", label: "bénéficiaires directs" }, tags: ["Eau", "Infrastructure"], etudiants: ["Koné Ibrahim", "Traoré Moussa"], pays: "Burkina Faso", annee: "2023", color: "#1565C0" },
  { id: 2, titre: "Hygiène scolaire — Programme régional", desc: "Sensibilisation aux bonnes pratiques d'hygiène dans 12 écoles primaires de la région Centre-Ouest. Distribution de kits sanitaires.", impact: { value: "2 400", label: "élèves sensibilisés" }, tags: ["Santé", "Éducation"], etudiants: ["Sawadogo Aïcha", "Compaoré Salif"], pays: "Burkina Faso", annee: "2023", color: "#1E7A34" },
  { id: 3, titre: "Kit solaire communautaire", desc: "Installation de systèmes solaires dans 8 villages sans accès au réseau électrique national. Éclairage public et chargeurs communautaires.", impact: { value: "4 000", label: "habitants éclairés" }, tags: ["Énergie", "Communauté"], etudiants: ["Ouédraogo Yves", "Zongo Rasmané"], pays: "Burkina Faso", annee: "2024", color: "#F5A623" },
  { id: 4, titre: "Bibliothèque numérique mobile", desc: "Tablettes avec contenu pédagogique hors-ligne déployées dans des collèges ruraux sans connexion internet.", impact: { value: "3 200", label: "élèves bénéficiaires" }, tags: ["Éducation", "Tech"], etudiants: ["Diallo Fatoumata", "Bah Mamadou"], pays: "Guinée", annee: "2024", color: "#C8102E" },
  { id: 5, titre: "Jardin potager scolaire à Banfora", desc: "Création de 4 jardins potagers dans des écoles primaires pour améliorer la nutrition et enseigner l'agroécologie.", impact: { value: "800", label: "enfants bénéficiaires" }, tags: ["Agriculture", "Nutrition"], etudiants: ["Kaboré Raïssa", "Nikiéma Paul"], pays: "Burkina Faso", annee: "2024", color: "#1E7A34" },
  { id: 6, titre: "Plateforme quiz éducatif offline", desc: "Application mobile de quiz pédagogique offline pour le cycle moyen. Téléchargée dans 20 établissements scolaires.", impact: { value: "5 000", label: "utilisateurs actifs" }, tags: ["Tech", "Éducation"], etudiants: ["Coulibaly Fanta", "Traoré Abdou"], pays: "Côte d'Ivoire", annee: "2023", color: "#1565C0" },
];

const GLOBAL_STATS = [
  { icon: Users, value: "13 000+", label: "Bénéficiaires totaux", color: "#1565C0" },
  { icon: Globe, value: "6", label: "Pays couverts", color: "#1E7A34" },
  { icon: Heart, value: "28", label: "Projets réalisés", color: "#C8102E" },
  { icon: TrendingUp, value: "4", label: "Domaines d'impact", color: "#F5A623" },
];

const TAG_COLORS: Record<string, string> = {
  Eau: "#1565C0", Infrastructure: "#1565C0", Santé: "#1E7A34", Éducation: "#1E7A34",
  Énergie: "#F5A623", Communauté: "#F5A623", Tech: "#9333ea", Agriculture: "#16a34a", Nutrition: "#16a34a"
};

export default function GiveBackPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#0A1628] via-[#145a26] to-[#1E7A34] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #C8102E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F5A623 0%, transparent 40%)" }} />
        <div className="section-container py-16 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold mb-4">
                <Heart size={12} />
                Programme Give Back · Mastercard Foundation
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                Des étudiants qui<br />transforment l'Afrique
              </h1>
              <p className="text-white/70 text-sm max-w-lg leading-relaxed">
                Les boursiers Mastercard Foundation de l'Institut 2iE s'engagent dans des projets d'impact social concrets au service de leurs communautés.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-white text-[#1E7A34] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 shadow-lg flex-shrink-0"
            >
              <Plus size={16} />
              Soumettre un projet
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {GLOBAL_STATS.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + "30" }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-xs text-white/60">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="section-container py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-slate-900 mb-2">Projets récents</h2>
          <p className="text-slate-500 text-sm">Chaque projet raconte une histoire d'engagement et d'impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJETS.map((p, i) => (
            <div key={p.id} className="feature-card group animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              {/* Color top bar */}
              <div className="h-1 -mx-6 -mt-6 mb-5 rounded-t-2xl" style={{ background: p.color }} />

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md text-xs font-bold" style={{ background: (TAG_COLORS[t] || "#1565C0") + "12", color: TAG_COLORS[t] || "#1565C0" }}>
                    {t}
                  </span>
                ))}
                <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-50 text-slate-400 border border-slate-100">{p.pays} · {p.annee}</span>
              </div>

              <h3 className="font-extrabold text-slate-900 mb-3 group-hover:text-[#1E7A34] transition-colors leading-snug">{p.titre}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">{p.desc}</p>

              {/* Impact box */}
              <div className="p-4 rounded-2xl mb-4 border" style={{ background: p.color + "08", borderColor: p.color + "20" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: p.color }}>Impact réalisé</div>
                <div className="text-2xl font-black" style={{ color: p.color }}>{p.impact.value}</div>
                <div className="text-xs text-slate-500">{p.impact.label}</div>
              </div>

              {/* Students */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <div className="flex -space-x-2">
                  {p.etudiants.slice(0, 3).map((e, j) => (
                    <div key={j} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: p.color }}>
                      {e.charAt(0)}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-500 flex-1 truncate">{p.etudiants.join(", ")}</span>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl animate-fade-up max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100">
              <h2 className="text-lg font-extrabold text-slate-900">Soumettre un projet Give Back</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-xl hover:bg-slate-100"><X size={18} className="text-slate-500" /></button>
            </div>
            <div className="px-7 py-6 space-y-4">
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Titre du projet</label><input className="input-modern" placeholder="Ex: Forages solidaires à Dori" /></div>
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Description</label><textarea className="input-modern min-h-[90px] resize-none" placeholder="Objectifs, actions menées, résultats obtenus..." /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Impact chiffré</label><input className="input-modern" placeholder="Ex: 500 bénéficiaires" /></div>
                <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Pays</label><input className="input-modern" placeholder="Ex: Burkina Faso" /></div>
              </div>
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Étudiants impliqués</label><input className="input-modern" placeholder="Noms séparés par des virgules" /></div>
            </div>
            <div className="flex gap-3 px-7 py-5 border-t border-slate-100">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">Annuler</button>
              <button className="flex-1 py-2.5 rounded-xl bg-[#1E7A34] text-white text-sm font-bold hover:bg-[#145a26] transition-colors">Soumettre</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
