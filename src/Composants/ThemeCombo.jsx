import React, { useEffect, useState } from "react";

const THEMES = [
  { id: "light", label: "☀️ Light" },
  { id: "dark", label: "🌙 Dark" },
  { id: "retro", label: "🕹 Retro" },
  { id: "lemonade", label: "🍋 Lemonade" },
  { id: "cupcake", label: "🧁 Cupcake" },
  { id: "cyberpunk", label: "🤖 Cyberpunk" },
  { id: "coffee", label: "☕ Coffee" },
];

export default function ThemeCombo() {
  const themeIds = THEMES.map((t) => t.id);

  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored && themeIds.includes(stored)) return stored;
      return "lemonade";
    } catch {
      return "lemonade";
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  return (
    <select
      id="theme-select"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="select select-bordered select-sm w-full max-w-xs"
    >
      {THEMES.map((t) => (
        <option key={t.id} value={t.id}>
          {t.label}
        </option>
      ))}
    </select>
  );
}
