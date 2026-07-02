const USER = { name:"Aminata Sawadogo", email:"aminata.sawadogo@2ie-edu.org", filiere:"BT-EMIH", promo:"2024-2027" };

export default function ProfilPage() {
  return (
    <div style={{ maxWidth:900 }}>
      <div className="page-header">
        <h1 className="page-title">Mon Profil</h1>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:20 }}>
        <div className="card" style={{ textAlign:"center", borderTop:"3px solid #C8102E" }}>
          <div style={{ width:90, height:90, borderRadius:"50%", background:"#1565C0", margin:"0 auto 16px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, fontWeight:900, color:"white" }}>{USER.name.charAt(0)}</div>
          <div style={{ fontSize:18, fontWeight:800, color:"#0F172A", marginBottom:4 }}>{USER.name}</div>
          <div style={{ fontSize:12, color:"#64748B", marginBottom:16 }}>Boursier·ère MCF</div>
          {[["Filière",USER.filiere,"#1565C0"],["Promotion",USER.promo,"#1E7A34"]].map(([k,v,c]) => (
            <div key={k} style={{ background:"#F8FAFC", padding:"10px 14px", borderRadius:10, border:"1px solid #E2E8F0", marginBottom:8 }}>
              <div style={{ fontSize:10, color:"#64748B", fontWeight:600, textTransform:"uppercase", marginBottom:2 }}>{k}</div>
              <div style={{ fontSize:13, fontWeight:700, color:c }}>{v}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 style={{ fontSize:15, fontWeight:700, marginBottom:20, paddingBottom:12, borderBottom:"1px solid #E2E8F0" }}>Informations Personnelles</h3>
          <div className="form-group"><label className="form-label">Nom complet</label><input className="form-input" defaultValue={USER.name} disabled style={{ background:"#F8FAFC" }}/></div>
          <div className="form-group"><label className="form-label">Email institutionnel</label><input type="email" className="form-input" defaultValue={USER.email} disabled style={{ background:"#F8FAFC" }}/></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div className="form-group"><label className="form-label">Téléphone</label><input className="form-input" placeholder="+226 00 00 00 00"/></div>
            <div className="form-group"><label className="form-label">Pays</label><select className="form-input"><option>Burkina Faso</option><option>Sénégal</option><option>Côte d'Ivoire</option><option>Mali</option></select></div>
          </div>
          <div style={{ marginTop:20, paddingTop:16, borderTop:"1px solid #E2E8F0" }}>
            <div style={{ fontSize:13, fontWeight:700, marginBottom:12 }}>Sécurité</div>
            <button className="btn" style={{ border:"2px solid #C8102E", color:"#C8102E", background:"transparent" }}>Changer de mot de passe</button>
          </div>
          <div style={{ marginTop:20, display:"flex", justifyContent:"flex-end" }}>
            <button className="btn btn-primary">Enregistrer les modifications</button>
          </div>
        </div>
      </div>
    </div>
  );
}
