// Paste your Mesh.jsx code here
import React from "react";
import { useT } from "./theme.js";

const Mesh = () => {
    const t = useT();
    const isDark = t.mode === "dark";
    return (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: 800, height: 800, background: isDark ? "radial-gradient(ellipse, rgba(64,240,220,0.12) 0%, transparent 70%)" : "radial-gradient(ellipse, rgba(44,96,110,0.1) 0%, transparent 70%)", transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }} />
            <div style={{ position: "absolute", bottom: "15%", left: "-8%", width: 500, height: 500, background: isDark ? "radial-gradient(ellipse, rgba(172,223,215,0.08) 0%, transparent 75%)" : "radial-gradient(ellipse, rgba(64,240,220,0.08) 0%, transparent 75%)", transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }} />
            <div style={{ position: "absolute", top: "30%", right: "-5%", width: 400, height: 400, background: isDark ? "radial-gradient(ellipse, rgba(64,240,220,0.06) 0%, transparent 75%)" : "radial-gradient(ellipse, rgba(172,223,215,0.08) 0%, transparent 75%)", transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }} />
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: isDark ? 0.04 : 0.05 }}>
                <defs><pattern id="gridP" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke={isDark ? "#40F0DC" : "#2C606E"} strokeWidth="0.8" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#gridP)" />
            </svg>
        </div>
    );
};

export default Mesh;
