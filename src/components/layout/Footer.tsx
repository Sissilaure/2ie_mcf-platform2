"use client";
import Link from "next/link";
import { Mail, MapPin, ExternalLink, Github, Linkedin, Globe } from "lucide-react";

const LINKS = {
  plateforme: [
    { href: "/ressources", label: "Hub Ressources" },
    { href: "/stages", label: "Base de Stages" },
    { href: "/opportunites", label: "Opportunités IA" },
    { href: "/giveback", label: "Vitrine Give Back" },
    { href: "/annonces", label: "Actualités" },
  ],
  institution: [
    { href: "https://www.2ie-edu.org", label: "Site 2iE", ext: true },
    { href: "https://mastercardfdn.org", label: "Mastercard Foundation", ext: true },
    { href: "/connexion", label: "Espace Étudiant" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      {/* MCF gradient bar */}
      <div className="mcf-bar-animated h-1" />

      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black text-[#1565C0] text-lg">
                2iE
              </div>
              <div>
                <div className="font-extrabold text-sm leading-tight">2iE Connect</div>
                <div className="flex gap-[2px] mt-1">
                  {["#C8102E","#F5A623","#1E7A34","#1565C0"].map((c, i) => (
                    <span key={i} className="block w-4 h-[3px] rounded-full" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Plateforme numérique d'accompagnement académique et professionnel des étudiants de l'Institut 2iE et boursiers Mastercard Foundation.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <MapPin size={13} />
              <span>Ouagadougou, Burkina Faso</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1.5">
              <Mail size={13} />
              <a href="mailto:contact@2ie-edu.org" className="hover:text-white transition-colors">
                contact@2ie-edu.org
              </a>
            </div>
          </div>

          {/* Plateforme */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">La Plateforme</h4>
            <ul className="space-y-2.5">
              {LINKS.plateforme.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Institution</h4>
            <ul className="space-y-2.5">
              {LINKS.institution.map((l) => (
                <li key={l.href}>
                  {"ext" in l && l.ext ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <Link href={l.href} className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Notre Vision</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Devenir l'écosystème numérique de référence pour les étudiants ingénieurs d'Afrique de l'Ouest.
            </p>
            {/* Stats pills */}
            <div className="space-y-2">
              {[
                { label: "Membres actifs", value: "324+" },
                { label: "Pays représentés", value: "12+" },
                { label: "Projets Give Back", value: "28" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-xs">{s.label}</span>
                  <span className="text-white font-bold text-xs">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} 2iE Connect — Institut International d'Ingénierie de l'Eau et de l'Environnement. Tous droits réservés.
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Soutenu par</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-xs">Mastercard Foundation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
