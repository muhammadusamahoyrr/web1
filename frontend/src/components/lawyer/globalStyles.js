// Lawyer global styles — paste your code here
import { useTheme } from "./theme.js";

// ============================================================
// GLOBAL STYLES
// ============================================================
const injectGS = (t) => {
    const id = "ag-gs"; let el = document.getElementById(id);
    if (!el) { el = document.createElement("style"); el.id = id; document.head.appendChild(el); }
    el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{font-size:15px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
    body{font-family:'DM Sans',sans-serif;background:${t.bg};color:${t.text};transition:background .3s,color .3s;line-height:1.5}
    ::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:${t.border};border-radius:4px}::-webkit-scrollbar-thumb:hover{background:${t.borderHi}}
    input,select,textarea,button{font-family:'DM Sans',sans-serif}
    .serif{font-family:'Cormorant Garamond',serif}.mono{font-family:'JetBrains Mono',monospace}
    @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
    @keyframes shimmer{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}
    .fade-up{animation:fadeUp .38s cubic-bezier(.22,.68,0,1.2) both}.fade-in{animation:fadeIn .25s ease both}
    .s1{animation-delay:.05s}.s2{animation-delay:.1s}.s3{animation-delay:.15s}.s4{animation-delay:.2s}
    button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid ${t.primary};outline-offset:2px}
    tr:hover td{background:${t.mode === 'dark' ? 'rgba(64,240,220,0.04)' : 'rgba(44,96,110,0.03)'}!important;transition:background .12s}
  `;
};
export { injectGS };
