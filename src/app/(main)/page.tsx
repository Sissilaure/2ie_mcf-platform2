import Link from "next/link";
import {
  BookOpen, Briefcase, Zap, Heart, ArrowRight, Users, Award,
  CheckCircle, ChevronDown, Globe, TrendingUp, Shield
} from "lucide-react";
import StatCounter from "@/components/home/StatCounter";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";

/* ── Services Data ──────────────────────────────────── */
const SERVICES = [
  {
    href: "/ressources",
    icon: BookOpen,
    label: "Hub Ressources",
    desc: "Accédez à des centaines de cours, TD, annales et supports pédagogiques organisés par filière et par année.",
    color: "#1565C0",
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-100",
    pill: "BT-EMIH · BT-EREE · BGIS · ANC",
  },
  {
    href: "/stages",
    icon: Briefcase,
    label: "Stages & Expériences",
    desc: "Une base de données collaborative des expériences professionnelles partagées par les étudiants et alumni à travers l'Afrique.",
    color: "#1E7A34",
    bg: "from-green-50 to-green-100/50",
    border: "border-green-100",
    pill: "12+ pays · 15+ domaines",
  },
  {
    href: "/opportunites",
    icon: Zap,
    label: "Opportunités IA",
    desc: "Notre moteur d'intelligence artificielle analyse votre profil pour vous recommander des bourses, hackathons et formations sur mesure.",
    color: "#F5A623",
    bg: "from-amber-50 to-amber-100/50",
    border: "border-amber-100",
    pill: "Personnalisé · Temps réel",
  },
  {
    href: "/giveback",
    icon: Heart,
    label: "Vitrine Give Back",
    desc: "Découvrez et valorisez les projets d'impact social, les initiatives communautaires et les actions terrain des boursiers MCF.",
    color: "#C8102E",
    bg: "from-red-50 to-red-100/50",
    border: "border-red-100",
    pill: "28 projets · 13 000+ bénéficiaires",
  },
];

/* ── Testimonials ───────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Aminata Sawadogo",
    role: "BT-EMIH · L3 · Boursière MCF",
    text: "La plateforme m'a permis de trouver mon stage à l'ONEA en moins d'une semaine. La base de données des expériences des anciens est une vraie mine d'or.",
    country: "Burkina Faso",
    initial: "AS",
    color: "#1565C0",
  },
  {
    name: "Oumar Maïga",
    role: "BT-EREE · L2 · Boursier MCF",
    text: "Grâce aux recommandations IA, j'ai découvert une bourse pour une formation en énergies solaires au Maroc que je n'aurais jamais trouvée autrement.",
    country: "Mali",
    initial: "OM",
    color: "#1E7A34",
  },
  {
    name: "Fanta Coulibaly",
    role: "BGIS · M1 · Boursière MCF",
    text: "Le Hub Ressources m'a sauvé pendant les révisions. Toutes les annales depuis 2019 au même endroit, organisées par filière. Incroyable.",
    country: "Côte d'Ivoire",
    initial: "FC",
    color: "#C8102E",
  },
];

/* ── Features ───────────────────────────────────────── */
const FEATURES = [
  { icon: Shield, label: "Espace sécurisé", desc: "Données protégées, accès réservé aux étudiants 2iE" },
  { icon: Globe, label: "Panafricain", desc: "Étudiants de 12+ pays d'Afrique de l'Ouest et du Centre" },
  { icon: TrendingUp, label: "Intelligence IA", desc: "Recommandations personnalisées basées sur votre profil" },
  { icon: Users, label: "Communauté active", desc: "Réseau d'entraide entre pairs, alumni et coordinateurs" },
];

/* ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0A1628] overflow-hidden">
        {/* Orbs */}
        <div className="hero-orb w-[600px] h-[600px] bg-blue-600 top-[-200px] left-[-200px] animate-pulse-slow" />
        <div className="hero-orb w-[400px] h-[400px] bg-red-600 bottom-[-100px] right-[-100px] animate-pulse-slow animation-delay-300" />
        <div className="hero-orb w-[300px] h-[300px] bg-green-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-600" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="section-container relative z-10 py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-semibold mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              Plateforme officielle — Boursiers Mastercard Foundation · Institut 2iE
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-up-delay-1">
              Votre réussite,{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #F5A623, #C8102E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  notre mission.
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
              Ressources académiques, expériences professionnelles, opportunités intelligentes et projets communautaires — tout ce dont les étudiants de l'Institut 2iE ont besoin, au même endroit.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up-delay-3">
              <Link href="/connexion" className="btn-cta text-base px-8 py-4">
                Rejoindre la communauté
                <ArrowRight size={18} />
              </Link>
              <Link href="/ressources" className="btn-cta-outline text-base px-8 py-4">
                Explorer les ressources
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-up-delay-4">
              {[
                { label: "324+ membres", color: "#1565C0" },
                { label: "156 ressources", color: "#1E7A34" },
                { label: "89 stages partagés", color: "#F5A623" },
                { label: "28 projets Give Back", color: "#C8102E" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }} />
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce-subtle">
          <span className="text-xs font-medium tracking-widest uppercase">Découvrir</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ──────────────── MCF STRIP ──────────────── */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="section-container">
          <div className="text-center mb-8">
            <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase">
              En partenariat avec
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-[#1565C0] flex items-center justify-center font-black text-white text-sm">2iE</div>
              <div>
                <div className="text-xs font-black text-slate-900">Institut 2iE</div>
                <div className="text-xs text-slate-400">Ouagadougou, Burkina Faso</div>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C8102E, #F5A623)" }}>
                <span className="text-white font-black text-xs">MCF</span>
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">Mastercard Foundation</div>
                <div className="text-xs text-slate-400">Scholars Programme</div>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden sm:block" />
            <div className="flex gap-[3px]">
              {["#C8102E","#F5A623","#1E7A34","#1565C0"].map((c, i) => (
                <span key={i} className="block w-6 h-6 rounded-md" style={{ background: c }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── SERVICES ──────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1565C0] text-xs font-bold mb-4">
              4 espaces dédiés
            </div>
            <h2 className="section-title mb-3">
              Une plateforme pensée pour vous
            </h2>
            <p className="section-subtitle mx-auto">
              Chaque espace répond à un besoin précis des étudiants et boursiers de l'Institut 2iE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href}>
                  <div
                    className={`feature-card bg-gradient-to-br ${s.bg} border ${s.border} group h-full`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: s.color + "18" }}
                      >
                        <Icon size={22} style={{ color: s.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                          {s.label}
                        </h3>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ background: s.color + "15", color: s.color }}>
                          {s.pill}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-bold transition-all duration-200 group-hover:gap-3" style={{ color: s.color }}>
                      Explorer
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────── STATS ──────────────── */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="hero-orb w-80 h-80 bg-blue-800 top-0 right-0 opacity-10" />
        <div className="hero-orb w-64 h-64 bg-red-800 bottom-0 left-0 opacity-10" />

        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-3">Notre impact en chiffres</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Une communauté qui grandit et crée de l'impact à travers toute l'Afrique de l'Ouest.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={324} suffix="+" label="Membres actifs" color="#1565C0" />
            <StatCounter value={156} label="Ressources disponibles" color="#F5A623" />
            <StatCounter value={89} label="Stages référencés" color="#1E7A34" />
            <StatCounter value={13} suffix="k+" label="Bénéficiaires Give Back" color="#C8102E" />
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Pays représentés", value: "12+", icon: Globe },
              { label: "Filières couvertes", value: "6", icon: BookOpen },
              { label: "Bourses identifiées", value: "45+", icon: Award },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
                <Icon size={20} className="text-slate-400" />
                <div>
                  <div className="text-white font-extrabold text-lg">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── AI SECTION ──────────────── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[#F5A623] text-xs font-bold mb-5">
                <Zap size={12} />
                Intelligence Artificielle
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5 leading-tight">
                Des recommandations
                <br />
                <span className="text-gradient-blue">qui vous ressemblent</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Notre moteur IA analyse votre filière, votre année, vos centres d'intérêt et votre historique pour vous proposer des opportunités parfaitement adaptées à votre profil.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Bourses et financements personnalisés",
                  "Hackathons et compétitions adaptés",
                  "Formations et certifications recommandées",
                  "Alertes en temps réel sur les deadlines",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle size={16} className="text-[#1E7A34] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/opportunites" className="btn-cta">
                Voir mes opportunités
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* AI Chat Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-50 rounded-3xl" />
              <div className="relative p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-[#1565C0] flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Assistant 2iE Connect</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-slate-400">En ligne</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
                      AS
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 shadow-sm max-w-xs">
                      Quelles bourses correspondent à mon profil BT-EMIH L2 ?
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-[#1565C0] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white shadow-sm max-w-xs">
                      J'ai trouvé 3 opportunités correspondant à votre profil :
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#1565C0] flex items-center justify-center flex-shrink-0">
                      <Zap size={12} className="text-white" />
                    </div>
                  </div>

                  {[
                    { name: "Bourse DAAD Allemagne", tag: "Ingénierie · Clôt. 15 sept.", color: "#1565C0" },
                    { name: "Hackathon WaterTech Africa", tag: "Eau · En ligne · Août 2024", color: "#1E7A34" },
                    { name: "Programme OIDA Énergie", tag: "Renouvelables · Maroc", color: "#F5A623" },
                  ].map((opp) => (
                    <div key={opp.name} className="ml-10 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold text-slate-900">{opp.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{opp.tag}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: opp.color }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FEATURES ──────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#1565C0]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── TESTIMONIALS ──────────────── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Ils utilisent 2iE Connect</h2>
            <p className="section-subtitle mx-auto">
              La voix de nos étudiants, leur expérience, notre fierté.
            </p>
          </div>

          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* ──────────────── CTA FINAL ──────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0A1628 0%, #0d3d91 60%, #1565C0 100%)" }}
        />
        <div className="hero-orb w-96 h-96 bg-red-600 top-[-100px] right-[-100px] opacity-10" />
        <div className="hero-orb w-64 h-64 bg-yellow-500 bottom-[-50px] left-[-50px] opacity-10" />

        <div className="section-container relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
              Rejoignez la communauté
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-5">
              Prêt à transformer
              <br />votre parcours ?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Accédez gratuitement à toutes les ressources de la plateforme. Créez votre compte avec votre email institutionnel 2iE.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/connexion" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white text-[#1565C0] hover:bg-slate-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                Créer mon compte
                <ArrowRight size={18} />
              </Link>
              <Link href="/ressources" className="btn-cta-outline text-base px-8 py-4">
                Explorer d'abord
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
