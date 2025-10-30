import React, { useEffect, useState } from "react";

// Persisted theme with system preference fallback
function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    // Listen for system theme changes to keep in sync when user hasn't set a hard preference
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      if (!stored) setTheme(e.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-800/70 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
    >
      {isDark ? (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 text-amber-300"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636" />
        </svg>
      ) : (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 text-slate-700"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
