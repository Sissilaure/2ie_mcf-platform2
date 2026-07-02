"use client";
import Link from "next/link";
import { Users, BookOpen, Briefcase, Heart, ArrowRight, Star, Award } from "lucide-react";

const stats = [
  { label:"Membres Actifs", value:"324", sub:"+12% ce mois", color:"#1565C0", icon:<Users size={22}/> },
  { label:"Ressources", value:"156", sub:"+8 nouvelles", color:"#1E7A34", icon:<BookOpen size={22}/> },
  { label:"Stages Référencés", value:"89", sub:"+5 postes", color:"#F5A623", icon:<Briefcase size={22}/> },
  { label:"Projets Give Back", value:"28", sub:"Impact réel", color:"#C8102E", icon:<Heart size={22}/> },
];

const annonces = [
  { id:1, titre:"Conférence sur les Énergies Renouvelables", extrait:"Rejoignez-nous pour une conférence avec des experts du secteur.", date:"2024-05-15", badge:"Événement" },
  { id:2, titre:"Résultats des Examens Académiques", extrait:"Les résultats sont disponibles dans votre espace personnel.", date:"2024-05-14", badge:"Académique" },
  { id:3, titre:"Appel à Projets Give Back 2024", extrait:"Soumettez votre projet avant le 30 juin.", date:"2024-05-13", badge:"Engagement" },
];

const services = [
  { href:"/ressources", label:"Hub Ressources Pédagogiques", desc:"Cours, TD et annales pour toutes les filières.", color:"#1565C0", icon:"📚" },
  { href:"/stages", label:"Base de Stages", desc:"Expériences professionnelles de vos pairs.", color:"#1E7A34", icon:"💼" },
  { href:"/annonces", label:"Annonces Communauté", desc:"Dernières actualités du programme MCF.", color:"#F5A623", icon:"📣" },
];

const badgeColors: Record<string,string> = { "Événement":"#1565C0", "Académique":"#1E7A34", "Engagement":"#C8102E" };

export default function Dashboard() {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:28, animation:"fadeIn 0.3s ease" }}>
      {/* Banner */}
      <div style={{
        background:"linear-gradient(135deg,#1565C0,#0d3d91)", borderRadius:20,
        padding:"28px 36px", color:"white", position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:-40, right:-40, width:200, height:200, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }}/>
        <p style={{ margin:"0 0 6px", fontSize:13, opacity:0.8 }}>Bienvenue sur la plateforme MCF 2iE</p>
        <h2 style={{ margin:"0 0 8px", fontSize:26, fontWeight:900, color:"white" }}>Bonjour, Aminata 👋</h2>
        <p style={{ margin:0, fontSize:13, opacity:0.75 }}>BT-EMIH · L2 · Boursière Mastercard Foundation</p>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, display:"flex", height:4 }}>
          {["#C8102E","#F5A623","#1E7A34","#1565C0"].map((c,i) => <div key={i} style={{ flex:1, background:c }}/>)}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-4">
        {stats.map(s => (
          <div key={s.label} className="card" style={{ borderTop:`3px solid ${s.color}` }}>
            <div style={{ width:44, height:44, borderRadius:12, background:s.color+"15", color:s.color, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12 }}>{s.icon}</div>
            <div style={{ fontSize:26, fontWeight:800, color:s.color, lineHeight:1 }}>{s.value}</div>
            <div style={{ fontSize:13, fontWeight:600, color:"#0F172A", margin:"4px 0 2px" }}>{s.label}</div>
            <div style={{ fontSize:11, color:"#64748B" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="card">
        <h3 style={{ fontSize:16, fontWeight:700, marginBottom:16 }}>Nos Services Principaux</h3>
        <div className="grid grid-3">
          {services.map(s => (
            <Link key={s.href} href={s.href} style={{
              background:s.color+"08", border:`1.5px solid ${s.color}20`,
              borderRadius:14, padding:"20px 18px", display:"block",
            }}>
              <div style={{ fontSize:28, marginBottom:10 }}>{s.icon}</div>
              <div style={{ fontSize:14, fontWeight:700, color:"#0F172A", marginBottom:6 }}>{s.label}</div>
              <div style={{ fontSize:12, color:"#64748B", lineHeight:1.5 }}>{s.desc}</div>
              <div style={{ marginTop:12, fontSize:12, fontWeight:700, color:s.color }}>Explorer →</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:20 }}>
        {/* Annonces */}
        <div className="card">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
            <h3 style={{ fontSize:15, fontWeight:700 }}>Dernières Actualités</h3>
            <Link href="/annonces" style={{ fontSize:12, fontWeight:600, color:"#1565C0", display:"flex", alignItems:"center", gap:4 }}>Voir tout <ArrowRight size={14}/></Link>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {annonces.map(a => {
              const d = new Date(a.date);
              return (
                <div key={a.id} style={{ display:"flex", gap:14, padding:"12px 14px", background:"#F8FAFC", borderRadius:12 }}>
                  <div style={{ minWidth:52, height:52, borderRadius:10, background:"#F5A62315", borderLeft:"3px solid #F5A623", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ fontSize:16, fontWeight:800, color:"#0F172A", lineHeight:1 }}>{d.getDate()}</span>
                    <span style={{ fontSize:9, color:"#64748B", fontWeight:700, textTransform:"uppercase" }}>{d.toLocaleString("fr-FR",{month:"short"})}</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                      <span style={{ background:(badgeColors[a.badge]||"#1565C0")+"18", color:badgeColors[a.badge]||"#1565C0", fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:20 }}>{a.badge}</span>
                    </div>
                    <div style={{ fontSize:13, fontWeight:700, color:"#0F172A", marginBottom:2 }}>{a.titre}</div>
                    <div style={{ fontSize:12, color:"#64748B" }}>{a.extrait}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div className="card" style={{ borderTop:"3px solid #F5A623" }}>
            <div style={{ textAlign:"center", marginBottom:12 }}>
              <Star size={28} color="#F5A623" style={{ margin:"0 auto 8px" }}/>
              <div style={{ fontSize:14, fontWeight:700 }}>Vos Accomplissements</div>
            </div>
            {[["Ressources Consultées","24","#1565C0"],["Stages Candidaturés","3","#1E7A34"]].map(([l,v,c]) => (
              <div key={l} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid #E2E8F0" }}>
                <span style={{ fontSize:12, color:"#64748B" }}>{l}</span>
                <span style={{ fontSize:16, fontWeight:800, color:c }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ background:"linear-gradient(135deg,#1E7A34,#145a26)", borderRadius:16, padding:"20px 18px", color:"white", textAlign:"center" }}>
            <Award size={28} style={{ margin:"0 auto 10px" }}/>
            <div style={{ fontSize:13, fontWeight:700, marginBottom:8 }}>Engagement Give Back</div>
            <div style={{ fontSize:12, opacity:0.9, marginBottom:14, lineHeight:1.5 }}>Partagez votre projet d'impact social.</div>
            <Link href="/giveback" style={{ background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.4)", color:"white", padding:"8px 16px", borderRadius:10, fontSize:12, fontWeight:700, display:"inline-block" }}>Proposer un projet</Link>
          </div>
          <div className="card">
            <div style={{ fontSize:13, fontWeight:700, marginBottom:12, paddingBottom:10, borderBottom:"1px solid #E2E8F0" }}>Liens Rapides</div>
            {[["Mon Profil","/profil"],["Contacts Programme","/contacts"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 10px", borderRadius:8, color:"#64748B", fontSize:13, fontWeight:500 }}>
                <span>{l}</span><ArrowRight size={14} color="#1565C0"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
