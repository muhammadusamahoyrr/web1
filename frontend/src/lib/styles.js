// Paste your styles.js code here
export const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;600;700;800&display=swap');`;

export const makeGlobal = () => `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; transition: background 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(64,240,220,0.4); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(64,240,220,0.6); }

/* Utility to hide scrollbar but keep functionality */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

@keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn   { from{opacity:0} to{opacity:1} }
@keyframes scaleIn  { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
@keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:0.5} }
@keyframes spin     { to{transform:rotate(360deg)} }
@keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
@keyframes glowD    { 0%,100%{box-shadow:0 0 30px rgba(64,240,220,0.3)} 50%{box-shadow:0 0 60px rgba(64,240,220,0.5)} }
@keyframes glowL    { 0%,100%{box-shadow:0 0 24px rgba(44,96,110,0.2)} 50%{box-shadow:0 0 48px rgba(44,96,110,0.35)} }
@keyframes slideR   { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
@keyframes shimmer  { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

.aFadeUp  { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.aScaleIn { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.aFloat   { animation: float 6s ease-in-out infinite; }
.aSlideR  { animation: slideR 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
`;
