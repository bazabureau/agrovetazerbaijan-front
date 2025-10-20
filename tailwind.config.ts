import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        brand: "var(--color-brand)",
        "brand-strong": "var(--color-brand-strong)",
        accent: "var(--color-accent)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        subtle: "0 10px 30px -18px rgba(23, 33, 70, 0.45)",
      },
    },
  },
  plugins: [animate],
};

export default config;
