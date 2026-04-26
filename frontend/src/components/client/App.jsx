// Paste your App.jsx code here
import React, { useState, useEffect } from "react";
import { DARK, LIGHT, ThemeCtx } from "./theme.js";
import { FONTS, makeGlobal } from "./styles.js";
import ErrorBoundary from "./ErrorBoundary.jsx";
import { ToastContainer } from "./Toast.jsx";
import Dashboard from "./Dashboard.jsx";
import AuthPage from "./AuthPage.jsx";
import Landing from "./Landing.jsx";

export default function App() {
    const [page, setPage] = useState("landing");
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => setIsDark(d => !d);
    const t = isDark ? DARK : LIGHT;

    useEffect(() => {
        const s = document.createElement("style");
        s.textContent = FONTS + makeGlobal();
        document.head.appendChild(s);
        return () => document.head.removeChild(s);
    }, []);

    useEffect(() => {
        document.body.style.background = isDark ? DARK.bg : LIGHT.bg;
    }, [isDark]);

    return (
        <ErrorBoundary>
            <ToastContainer theme={t}>
                {page === "dashboard" && <Dashboard go={setPage} isDark={isDark} toggleTheme={toggleTheme} />}
                {["login", "register", "forgot"].includes(page) && <AuthPage mode={page} go={setPage} isDark={isDark} toggleTheme={toggleTheme} />}
                {page === "landing" && <Landing go={setPage} isDark={isDark} toggleTheme={toggleTheme} />}
            </ToastContainer>
        </ErrorBoundary>
    );
}