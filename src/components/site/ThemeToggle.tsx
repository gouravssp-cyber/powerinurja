import { useEffect, useState } from "react";

function apply(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("piu-theme") as "light" | "dark" | null;
    const initial = stored ?? "light";
    setTheme(initial);
    apply(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    apply(next);
    window.localStorage.setItem("piu-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      className={`relative inline-flex h-8 w-14 items-center rounded-full border transition-colors duration-200 ${
        theme === "dark" ? "border-accent bg-accent/20" : "border-accent bg-muted"
      }`}
    >
      <span className="sr-only">Toggle color mode</span>

      <span
        className={`absolute left-1 top-1 h-6 w-6 rounded-full border border-accent  shadow-sm transition-transform duration-200 ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
