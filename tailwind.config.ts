import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "grey-hover": "#252525",
        "grey-lab": "#B6B6B6",
        "grey-border": "#333333",
        "grey-black": "#030303",
        "grey-subtle": "#141415",
        "alpha-white-400": "hsla(0, 0%, 0%, 0.12)",
        "alpha-200": "hsla(0, 0%, 100%, 0.08)",
        "alpha-300": "hsla(0, 0%, 100%, 0.1)",
        "alpha-400": "hsla(0, 0%, 100%, 0.12)",
        "alpha-600": "hsla(0, 0%, 100%, 0.18)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: "rgb(var(--brand))",
        "brand-secondary": "rgb(var(--brand-secondary))",
        "brand-text": "rgb(var(--brand-text))",
        "brand-hover": "hsl(var(--brand-hover))",
      },
    },
  },
  plugins: [],
} satisfies Config;
