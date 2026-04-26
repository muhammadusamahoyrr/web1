// Paste your dashboardHelpers.jsx code here
/* ══════════════════════════════════════════════════════
   DASHBOARD HELPERS
══════════════════════════════════════════════════════ */
const STitle = ({ children, icon, sub }) => {
    const t = useT();
    return (
        <div style={{ marginBottom: sub ? 16 : 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                {icon && <div style={{ width: 32, height: 32, borderRadius: 9, background: t.primaryGlow, display: "flex", alignItems: "center", justifyContent: "center" }}><Ic n={icon} s={15} c={t.primary} /></div>}
                <h3 style={{ fontSize: 16, fontWeight: 700, color: t.text, fontFamily: "'Playfair Display',serif" }}>{children}</h3>
            </div>
            {sub && <p style={{ fontSize: 12, color: t.textMuted, marginTop: 5, marginLeft: icon ? 41 : 0 }}>{sub}</p>}
        </div>
    );
};
const Lbl = ({ children }) => { const t = useT(); return <div style={{ fontSize: 11, color: t.textMuted, marginBottom: 6, fontWeight: 700, letterSpacing: "0.6px", textTransform: "uppercase" }}>{children}</div>; };
