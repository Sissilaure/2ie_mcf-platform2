"use client";
import { useState } from "react";
import { Briefcase, Search, MapPin, Mail, Plus, X, Star, ExternalLink, Building2 } from "lucide-react";

const DOMAINES = ["Tous", "Eau & Assainissement", "Énergies Renouvelables", "Informatique & SIG", "Génie Civil", "Environnement"];
const PAYS = ["Tous", "Burkina Faso", "Niger", "Mali", "Côte d'Ivoire", "Sénégal", "Cameroun"];

const FLAG_MAP: Record<string, string> = {
  "Burkina Faso": "BF", "Niger": "NE", "Mali": "ML",
  "Côte d'Ivoire": "CI", "Sénégal": "SN", "Cameroun": "CM"
};

const STAGES = [
  { id: 1, entreprise: "ONEA", fullName: "Office National de l'Eau et de l'Assainissement", pays: "Burkina Faso", ville: "Ouagadougou", domaine: "Eau & Assainissement", duree: "3 mois", feedback: "Missions variées sur les réseaux AEP. Encadrement solide, équipe accueillante. Je recommande vivement pour les EMIH.", note: 5, contactSup: "contact@onea.bf", user: { name: "Koné Ibrahim", filiere: "BT-EMIH", annee: "L3" } },
  { id: 2, entreprise: "GIZ", fullName: "Deutsche Gesellschaft für Internationale Zusammenarbeit", pays: "Burkina Faso", ville: "Bobo-Dioulasso", domaine: "Énergies Renouvelables", duree: "6 mois", feedback: "Projet solaire en zone rurale. Autonomie réelle sur le terrain. Contacts internationaux très enrichissants.", note: 5, contactSup: "giz@bf.de", user: { name: "Sawadogo Aïcha", filiere: "BT-EREE", annee: "L2" } },
  { id: 3, entreprise: "SEEN", fullName: "Société d'Exploitation des Eaux du Niger", pays: "Niger", ville: "Niamey", domaine: "Eau & Assainissement", duree: "4 mois", feedback: "Réseau eau potable Niamey. Travaux techniques intenses. Bonne expérience sur les réseaux de distribution.", note: 4, contactSup: "seen@niger.com", user: { name: "Maïga Oumar", filiere: "BT-EMIH", annee: "M1" } },
  { id: 4, entreprise: "SAGI", fullName: "Société Africaine de Géomatique et Informatique", pays: "Mali", ville: "Bamako", domaine: "Informatique & SIG", duree: "3 mois", feedback: "Développement SIG avec QGIS et Python. Bonnes pratiques cartographiques. Équipe jeune et dynamique.", note: 4, contactSup: "sagi@mali.com", user: { name: "Coulibaly Fanta", filiere: "BGIS", annee: "L3" } },
  { id: 5, entreprise: "CIE", fullName: "Compagnie Ivoirienne d'Électricité", pays: "Côte d'Ivoire", ville: "Abidjan", domaine: "Énergies Renouvelables", duree: "5 mois", feedback: "Stage en distribution électrique et projets d'extension réseau. Très formateur sur le plan technique et organisationnel.", note: 5, contactSup: "cie-stagiaires@cie.ci", user: { name: "Bah Mamadou", filiere: "BT-EREE", annee: "M1" } },
  { id: 6, entreprise: "ONAS", fullName: "Office National de l'Assainissement du Sénégal", pays: "Sénégal", ville: "Dakar", domaine: "Eau & Assainissement", duree: "3 mois", feedback: "Chantier d'assainissement urbain. Beaucoup de terrain. Mission parfaitement adaptée au profil ANC.", note: 4, contactSup: "stagiaires@onas.sn", user: { name: "Diallo Fatoumata", filiere: "ANC", annee: "L3" } },
];

function StarRow({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill={i < n ? "#F5A623" : "none"} className={i < n ? "text-amber-400" : "text-slate-200"} />
      ))}
    </div>
  );
}

export default function StagesPage() {
  const [domaine, setDomaine] = useState("Tous");
  const [pays, setPays] = useState("Tous");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = STAGES.filter((s) =>
    (domaine === "Tous" || s.domaine === domaine) &&
    (pays === "Tous" || s.pays === pays) &&
    (search === "" || s.entreprise.toLowerCase().includes(search.toLowerCase()) || s.domaine.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-[#1E7A34] text-xs font-bold mb-3">
                <Briefcase size={12} />
                Expériences Professionnelles
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-2">Répertoire de Stages</h1>
              <p className="text-slate-500 text-sm max-w-lg">
                Retours d'expériences authentiques partagés par les étudiants de 2iE à travers toute l'Afrique.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#1E7A34] text-white hover:bg-[#145a26] hover:-translate-y-0.5 transition-all duration-200 shadow-glow-green self-start sm:self-auto"
            >
              <Plus size={16} />
              Partager mon stage
            </button>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-8 shadow-sm space-y-4">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher une entreprise ou un domaine..." className="input-modern pl-11" />
          </div>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Domaine</p>
              <div className="flex flex-wrap gap-2">
                {DOMAINES.map((d) => (
                  <button key={d} onClick={() => setDomaine(d)} className={`filter-chip ${domaine === d ? "active" : ""}`}>{d}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Pays</p>
              <div className="flex flex-wrap gap-2">
                {PAYS.map((p) => (
                  <button key={p} onClick={() => setPays(p)} className={`filter-chip ${pays === p ? "active" : ""}`}>{p}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-slate-500"><span className="font-bold text-slate-900">{filtered.length}</span> expérience{filtered.length > 1 ? "s" : ""} partagée{filtered.length > 1 ? "s" : ""}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((s, i) => (
            <div key={s.id} className="stage-card group animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  {/* Company Avatar */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0">
                    <Building2 size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 group-hover:text-[#1E7A34] transition-colors">{s.entreprise}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{s.fullName}</p>
                  </div>
                </div>
                {/* Country badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0">
                  <MapPin size={11} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-600">{s.pays}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-green-50 text-[#1E7A34] text-xs font-bold border border-green-100">{s.domaine}</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-semibold border border-slate-100">{s.duree}</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-semibold border border-slate-100">{s.ville}</span>
              </div>

              {/* Feedback quote */}
              <div className="bg-slate-50 rounded-xl px-4 py-3 mb-4 border-l-2 border-[#1E7A34]">
                <p className="text-sm text-slate-600 italic leading-relaxed line-clamp-3">"{s.feedback}"</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1E7A34] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {s.user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{s.user.name}</div>
                    <div className="text-xs text-slate-400">{s.user.filiere} · {s.user.annee}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <StarRow n={s.note} />
                  <a
                    href={`mailto:${s.contactSup}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-[#1565C0] text-xs font-bold hover:bg-blue-50 hover:border-blue-200 transition-all"
                  >
                    <Mail size={11} />
                    Contact
                  </a>
                </div>
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
              <h2 className="text-lg font-extrabold text-slate-900">Partager mon expérience</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-xl hover:bg-slate-100 transition-colors"><X size={18} className="text-slate-500" /></button>
            </div>
            <div className="px-7 py-6 space-y-4">
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Entreprise</label><input className="input-modern" placeholder="Ex: ONEA, GIZ, CIE..." /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Domaine</label>
                  <select className="input-modern">{DOMAINES.filter(d => d !== "Tous").map(d => <option key={d}>{d}</option>)}</select>
                </div>
                <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Pays</label><input className="input-modern" placeholder="Ex: Burkina Faso" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Ville</label><input className="input-modern" placeholder="Ex: Ouagadougou" /></div>
                <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Durée</label><input className="input-modern" placeholder="Ex: 3 mois" /></div>
              </div>
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Retour d'expérience</label><textarea className="input-modern min-h-[100px] resize-none" placeholder="Comment s'est passé votre stage ? Missions, encadrement, conseils..." /></div>
              <div><label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email superviseur (optionnel)</label><input className="input-modern" placeholder="superviseur@entreprise.com" /></div>
            </div>
            <div className="flex gap-3 px-7 py-5 border-t border-slate-100">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">Annuler</button>
              <button className="flex-1 py-2.5 rounded-xl bg-[#1E7A34] text-white text-sm font-bold hover:bg-[#145a26] transition-colors">Publier</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
