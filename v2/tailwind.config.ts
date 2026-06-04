import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "slate-depth": "var(--slate-depth)",
        "watershed-teal": "var(--watershed-teal)",
        "alluvial-warm": "var(--alluvial-warm)",
        "prairie-gold": "var(--prairie-gold)",
        "field-paper": "var(--field-paper)",
        limestone: "var(--limestone)",
        chalk: "var(--chalk)",
        graphite: "var(--graphite)",
        silt: "var(--silt)",
        "riparian-green": "var(--riparian-green)",
        "sediment-red": "var(--sediment-red)",
        "deep-water": "var(--deep-water)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border-color)",
      },
      fontFamily: {
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        hero: [
          "clamp(3rem, 7vw, 5.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "section-title": [
          "clamp(2.125rem, 4.5vw, 3.25rem)",
          { lineHeight: "1.12", letterSpacing: "-0.01em" },
        ],
        "section-lead": ["1.25rem", { lineHeight: "1.65" }],
        "group-title": ["1.5rem", { lineHeight: "1.35" }],
        "card-title": [
          "clamp(1.375rem, 2.2vw, 1.75rem)",
          { lineHeight: "1.25" },
        ],
        "body-lg": ["1.3125rem", { lineHeight: "1.5" }],
        body: ["1.125rem", { lineHeight: "1.75" }],
        "body-sm": ["1rem", { lineHeight: "1.7" }],
        meta: ["0.9375rem", { lineHeight: "1.55" }],
        "meta-sm": ["0.875rem", { lineHeight: "1.5" }],
        nav: ["1rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        label: [
          "0.9375rem",
          { lineHeight: "1.4", letterSpacing: "0.1em" },
        ],
        tag: ["0.875rem", { lineHeight: "1.35" }],
        quote: [
          "clamp(1.375rem, 2.5vw, 1.875rem)",
          { lineHeight: "1.55" },
        ],
        contact: ["1.75rem", { lineHeight: "1.3" }],
        brand: ["1.75rem", { lineHeight: "1" }],
      },
      maxWidth: {
        prose: "50rem",
        cards: "65rem",
        hero: "80rem",
      },
      spacing: {
        section: "clamp(4rem, 8vw, 8rem)",
        gutter: "clamp(1.5rem, 5vw, 6rem)",
      },
    },
  },
  plugins: [],
};

export default config;
