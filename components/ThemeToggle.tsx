"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true); // default dark for Olden Era
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("olden-era-theme", next ? "dark" : "light");
    } catch {}
  }

  if (!mounted) {
    return <div style={{ width: 36, height: 36 }} />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
        border: "1px solid var(--color-border)",
        background: "var(--color-bg-card)",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
          <circle cx="8" cy="8" r="3" />
          <path d="M8 1V2.5M8 13.5V15M1 8H2.5M13.5 8H15M3.05 3.05L4.1 4.1M11.9 11.9L12.95 12.95M3.05 12.95L4.1 11.9M11.9 4.1L12.95 3.05" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8Z" />
        </svg>
      )}
    </button>
  );
}
