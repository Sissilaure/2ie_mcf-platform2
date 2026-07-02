"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowLeft, CheckCircle, Zap } from "lucide-react";

const PERKS = [
  "Accès à 156+ ressources pédagogiques",
  "Base de stages de 12+ pays d'Afrique",
  "Recommandations IA personnalisées",
  "Réseau de 324 boursiers MCF",
];

export default function ConnexionPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/"), 1200);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Visual */}
      <div className="hidden lg:flex lg:w-[55%] relative bg-[#0A1628] flex-col overflow-hidden">
        {/* Background orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15 bg-blue-600 top-[-150px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-red-500 bottom-[-100px] right-[-100px]" />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-10 bg-green-600 top-[40%] left-[60%]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Back link */}
        <div className="relative z-10 p-8">
          <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors group">
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Retour au site
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-12 pb-12">
          {/* Logos */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white font-black text-[#1565C0] text-xl shadow-lg">
              2iE
            </div>
            <div className="flex gap-0.5">
              {["#C8102E","#F5A623","#1E7A34","#1565C0"].map((c, i) => (
                <span key={i} className="block w-7 h-7 rounded-lg" style={{ background: c }} />
              ))}
            </div>
          </div>

          <h1 className="text-4xl xl:text-5xl font-black text-white leading-tight mb-5">
            Bienvenue sur<br />
            <span style={{ background: "linear-gradient(135deg, #F5A623, #C8102E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              2iE Connect
            </span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md">
            La plateforme numérique officielle des étudiants et boursiers de l'Institut International d'Ingénierie de l'Eau et de l'Environnement.
          </p>

          {/* Perks */}
          <div className="space-y-3 mb-10">
            {PERKS.map((p) => (
              <div key={p} className="flex items-center gap-3 text-white/80 text-sm">
                <CheckCircle size={16} className="text-[#1E7A34] flex-shrink-0" />
                {p}
              </div>
            ))}
          </div>

          {/* AI teaser */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 w-fit">
            <div className="w-8 h-8 rounded-xl bg-[#F5A623] flex items-center justify-center">
              <Zap size={15} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Module IA actif</div>
              <div className="text-xs text-white/40">Recommandations personnalisées</div>
            </div>
          </div>
        </div>

        {/* MCF bar at bottom */}
        <div className="mcf-bar-animated h-1" />
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 bg-white">
        {/* Mobile back */}
        <div className="lg:hidden w-full max-w-md mb-6">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors group">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Retour
          </Link>
        </div>

        <div className="w-full max-w-md">
          {/* Logo (mobile only) */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1565C0] flex items-center justify-center font-black text-white text-base">2iE</div>
            <span className="font-extrabold text-slate-900">2iE Connect</span>
          </div>

          {/* Header */}
          <div className="mb-7">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-1">
              {tab === "login" ? "Se connecter" : "Créer un compte"}
            </h2>
            <p className="text-slate-500 text-sm">
              {tab === "login"
                ? "Accédez à votre espace sécurisé."
                : "Rejoignez la communauté 2iE Connect gratuitement."}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex bg-slate-100 rounded-xl p-1 mb-6">
            {[["login", "Se connecter"], ["register", "S'inscrire"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id as "login" | "register")}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  tab === id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === "register" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Nom complet</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-modern"
                  placeholder="Ousmane Traoré"
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email institutionnel</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-modern"
                placeholder="prenom.nom@2ie-edu.org"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Mot de passe</label>
                {tab === "login" && (
                  <a href="#" className="text-xs text-[#1565C0] font-semibold hover:underline">Mot de passe oublié ?</a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-modern pr-11"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {tab === "register" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Filière</label>
                  <select className="input-modern text-sm">
                    <option value="">Choisir...</option>
                    <option>BT-EMIH</option><option>BT-EREE</option><option>BGIS</option><option>ANC</option><option>Centrale-2iE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Année</label>
                  <select className="input-modern text-sm">
                    <option value="">Choisir...</option>
                    <option>L1</option><option>L2</option><option>L3</option><option>M1</option><option>M2</option>
                  </select>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#1565C0] text-white hover:bg-[#0d3d91] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Chargement…</>
              ) : (
                tab === "login" ? "Se connecter" : "Créer mon compte"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-5">
            Problème de connexion ?{" "}
            <a href="mailto:support@2ie-edu.org" className="text-[#1565C0] font-semibold hover:underline">Contacter le support</a>
          </p>

          {/* MCF bar */}
          <div className="mcf-bar mt-8 h-[3px]" />
        </div>
      </div>
    </div>
  );
}
