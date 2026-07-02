"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, BookOpen, Briefcase, Bell, Heart, Zap, LogIn } from "lucide-react";

const NAV_LINKS = [
  { href: "/ressources", label: "Ressources", icon: BookOpen, desc: "Cours, TD et annales" },
  { href: "/stages", label: "Stages & Pro", icon: Briefcase, desc: "Expériences professionnelles" },
  { href: "/opportunites", label: "Opportunités IA", icon: Zap, desc: "Bourses et formations" },
  { href: "/giveback", label: "Give Back", icon: Heart, desc: "Impact communautaire" },
  { href: "/annonces", label: "Actualités", icon: Bell, desc: "Événements et annonces" },
];

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isDark = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : isHome
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
        }`}
      >
        {/* MCF Bar on top */}
        <div className="mcf-bar-animated h-[3px]" />

        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* 2iE Logo Mark */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl font-black text-lg transition-all duration-300 ${
                isDark
                  ? "bg-white text-[#1565C0]"
                  : "bg-[#1565C0] text-white"
              } group-hover:scale-105`}>
                2iE
              </div>
              <div className="hidden sm:block">
                <div className={`text-sm font-extrabold leading-tight transition-colors duration-300 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  2iE Connect
                </div>
                <div className="flex gap-[2px] mt-[3px]">
                  {["#C8102E","#F5A623","#1E7A34","#1565C0"].map((c, i) => (
                    <span key={i} className="block w-4 h-[3px] rounded-full" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                      isActive
                        ? isDark
                          ? "text-white bg-white/15"
                          : "text-[#1565C0] bg-blue-50"
                        : isDark
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1565C0]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/connexion"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isDark
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LogIn size={15} />
                Connexion
              </Link>
              <Link
                href="/connexion"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#1565C0] text-white hover:bg-[#0d3d91] hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                Rejoindre
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isDark ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
              }`}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1565C0] flex items-center justify-center text-white font-black text-sm">2iE</div>
              <span className="font-extrabold text-slate-900">2iE Connect</span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100">
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          {/* Links */}
          <nav className="p-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#1565C0]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-[#1565C0]" : "text-slate-400"} />
                  <div>
                    <div className="text-sm font-bold">{link.label}</div>
                    <div className="text-xs text-slate-400">{link.desc}</div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="p-5 border-t border-slate-100 space-y-3">
            <Link href="/connexion" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all">
              <LogIn size={15} /> Connexion
            </Link>
            <Link href="/connexion" className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm font-bold bg-[#1565C0] text-white hover:bg-[#0d3d91] transition-all">
              S'inscrire gratuitement
            </Link>
          </div>

          {/* MCF Bar */}
          <div className="mx-5 mcf-bar" />
        </div>
      </div>
    </>
  );
}
