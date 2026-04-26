// Paste your ErrorBoundary.jsx code here
import React, { Component } from "react";
import { DARK } from "./theme.js";

/* ══════════════════════════════════════════════════════
   ROOT APP
══════════════════════════════════════════════════════ */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (this.state.error) {
            const t = DARK;
            return (
                <div style={{ minHeight: "100vh", background: t.bg, color: t.text, padding: 24 }}>
                    <div style={{ maxWidth: 900, margin: "0 auto", background: t.card, border: `1.5px solid ${t.danger}66`, borderRadius: 16, padding: 18, boxShadow: t.shadowCard }}>
                        <div style={{ fontWeight: 800, marginBottom: 10, color: t.danger }}>App crashed while rendering</div>
                        <div style={{ fontSize: 13, color: t.textDim, marginBottom: 12 }}>If you share the error text below, I can pinpoint the exact broken handler/component.</div>
                        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", fontSize: 12, lineHeight: 1.6, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 12, padding: 14, overflow: "auto" }}>
                            {String(this.state.error?.stack || this.state.error)}
                        </pre>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
