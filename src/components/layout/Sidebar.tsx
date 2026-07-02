"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Briefcase, Bell, Heart, Users, UserCircle, LogOut } from "lucide-react";

const NAV = [
  { href:"/dashboard", icon:Home,       label:"Tableau de bord" },
  { href:"/ressources", icon:BookOpen,  label:"Hub Ressources" },
  { href:"/stages",     icon:Briefcase, label:"Base de Stages" },
  { href:"/annonces",   icon:Bell,      label:"Annonces" },
  { href:"/giveback",   icon:Heart,     label:"Vitrine Give Back" },
  { href:"/contacts",   icon:Users,     label:"Contacts Programme" },
  { href:"/profil",     icon:UserCircle,label:"Mon Profil" },
];

const PAGE_COLOR: Record<string,string> = {
  "/dashboard":"#1565C0", "/ressources":"#1565C0", "/stages":"#1E7A34",
  "/annonces":"#F5A623", "/giveback":"#1E7A34", "/contacts":"#1565C0", "/profil":"#C8102E",
};

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside style={{
      width:240, height:"100vh", background:"white", borderRight:"1px solid #E2E8F0",
      display:"flex", flexDirection:"column", position:"fixed", left:0, top:0, zIndex:1000,
    }}>
      {/* Logo */}
      <div style={{ padding:"22px 20px 18px", borderBottom:"1px solid #E2E8F0" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:42, height:42, borderRadius:10, background:"#1565C0", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:14, color:"white", flexShrink:0 }}>2iE</div>
          <div>
            <div style={{ fontSize:13, fontWeight:800, color:"#0F172A", lineHeight:1.1 }}>Plateforme MCF</div>
            <div style={{ fontSize:11, color:"#64748B" }}>Institut 2iE</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex:1, padding:"12px 10px", overflowY:"auto", display:"flex", flexDirection:"column", gap:2 }}>
        {NAV.map(item => {
          const active = pathname === item.href;
          const accent = PAGE_COLOR[item.href] || "#1565C0";
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} style={{
              display:"flex", alignItems:"center", gap:12,
              padding:"10px 14px", borderRadius:12, fontSize:13,
              fontWeight:active?700:500, color:active?accent:"#64748B",
              background:active?accent+"12":"transparent",
              borderLeft:`3px solid ${active?accent:"transparent"}`,
              transition:"all 0.15s",
            }}>
              <Icon size={18} style={{ opacity:active?1:0.7 }} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding:"16px 12px", borderTop:"1px solid #E2E8F0" }}>
        <div style={{ display:"flex", height:4, borderRadius:4, overflow:"hidden", marginBottom:12 }}>
          {["#C8102E","#F5A623","#1E7A34","#1565C0"].map((c,i) => <div key={i} style={{ flex:1, background:c }}/>)}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", background:"#F8FAFC", borderRadius:10, marginBottom:10 }}>
          <div style={{ width:32, height:32, borderRadius:"50%", background:"#1565C0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color:"white", flexShrink:0 }}>AS</div>
          <div>
            <div style={{ fontSize:12, fontWeight:700, color:"#0F172A" }}>Aminata S.</div>
            <div style={{ fontSize:10, color:"#64748B" }}>BT-EMIH · L2</div>
          </div>
        </div>
        <Link href="/" style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:6,
          width:"100%", padding:"8px", borderRadius:10, fontSize:12, fontWeight:600,
          color:"#C8102E", border:"1.5px solid rgba(200,16,46,0.2)", background:"none",
        }}>
          <LogOut size={14} /> Déconnexion
        </Link>
      </div>
    </aside>
  );
}
