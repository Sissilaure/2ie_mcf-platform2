"use client";
import { useState } from "react";

interface Props {
  buttonText: string;
  modalTitle: string;
  children: React.ReactNode;
  buttonColor?: string;
  buttonTextColor?: string;
}

export default function AddModal({ buttonText, modalTitle, children, buttonColor = "#1565C0", buttonTextColor = "white" }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} style={{
        padding:"9px 18px", borderRadius:10, border:"none",
        background:buttonColor, color:buttonTextColor,
        fontSize:13, fontWeight:700, cursor:"pointer",
        display:"inline-flex", alignItems:"center", gap:6,
      }}>{buttonText}</button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h3 style={{ fontSize:18, fontWeight:700, color:"#0F172A", margin:0 }}>{modalTitle}</h3>
              <button onClick={() => setOpen(false)} style={{ background:"none", border:"none", fontSize:20, cursor:"pointer", color:"#64748B" }}>✕</button>
            </div>
            {children}
            <div style={{ display:"flex", gap:10, justifyContent:"flex-end", marginTop:20 }}>
              <button onClick={() => setOpen(false)} style={{ padding:"9px 18px", borderRadius:10, border:"1.5px solid #E2E8F0", background:"transparent", color:"#64748B", fontSize:13, fontWeight:700, cursor:"pointer" }}>Annuler</button>
              <button onClick={() => setOpen(false)} style={{ padding:"9px 18px", borderRadius:10, border:"none", background:buttonColor, color:buttonTextColor, fontSize:13, fontWeight:700, cursor:"pointer" }}>Publier</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
