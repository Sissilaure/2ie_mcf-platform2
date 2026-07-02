const MOCK = [
  { id:1, nom:"Dr. Aminata Ouédraogo", role:"Responsable Programme MCF", email:"aminata.ouedraogo@2ie-edu.org", telephone:"+226 25 49 28 00" },
  { id:2, nom:"M. Serge Kaboré", role:"Coordinateur Académique", email:"serge.kabore@2ie-edu.org", telephone:"+226 25 49 28 01" },
  { id:3, nom:"Mme. Fatima Diallo", role:"Chargée des Bourses", email:"fatima.diallo@2ie-edu.org", telephone:null },
  { id:4, nom:"M. Jean-Claude Traoré", role:"Conseiller Professionnel", email:"jc.traore@2ie-edu.org", telephone:"+226 25 49 28 03" },
  { id:5, nom:"Dr. Ibrahim Coulibaly", role:"Directeur des Études", email:"ibrahim.coulibaly@2ie-edu.org", telephone:"+226 25 49 28 04" },
  { id:6, nom:"Mme. Rose Sankara", role:"Assistante Administrative", email:"rose.sankara@2ie-edu.org", telephone:null },
];
const COLORS = ["#1565C0","#1E7A34","#C8102E","#F5A623","#1565C0","#1E7A34"];

export default function ContactsPage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Annuaire des Contacts</h1>
          <p style={{ color:"#64748B", fontSize:13 }}>Équipe de coordination du programme Mastercard Foundation à 2iE.</p>
        </div>
      </div>
      <div className="grid grid-3">
        {MOCK.map((c, i) => {
          const col = COLORS[i % COLORS.length];
          return (
            <div key={c.id} className="card" style={{ textAlign:"center", borderTop:`3px solid ${col}` }}>
              <div style={{ width:68, height:68, borderRadius:"50%", background:col, margin:"0 auto 14px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, fontWeight:800, color:"white" }}>{c.nom.charAt(0)}</div>
              <div style={{ fontSize:15, fontWeight:700, color:"#0F172A", marginBottom:4 }}>{c.nom}</div>
              <div style={{ fontSize:12, color:"#64748B", marginBottom:16 }}>{c.role}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                <a href={`mailto:${c.email}`} style={{ padding:"7px 12px", borderRadius:8, border:"1.5px solid #E2E8F0", color:"#1565C0", fontSize:11, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>✉️ {c.email}</a>
                {c.telephone && <a href={`tel:${c.telephone}`} style={{ padding:"7px 12px", borderRadius:8, border:"1.5px solid #E2E8F0", color:"#1E7A34", fontSize:11, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>📞 {c.telephone}</a>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
