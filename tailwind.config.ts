import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        // Irish Theme Colors
        "deep-black": "#0A0A0A",
        "neon-glow-green": "#00FF7F",
        "primary-green": "#00C853",
        "light-mint": "#E8F5E8",
        "orange-accent": "#FF6B35",
        "gray-text": "#B0B0B0",
        // New Irish Colors
        "emerald-green": "#007F5F",
        "clover-mint": "#D2F4E2",
        "sunset-orange": "#F28500",
        "rich-graphite": "#101112",
        "soft-white": "#FAFAFA",
        "gold-glow": "#FFD700",
        // Additional Irish Colors
        "shamrock-green": "#009A44",
        "emerald-glow": "#00C853",
        "forest-green": "#004D40",
        "pale-mint": "#E0F2E7",
        "deep-graphite": "#0D1117",
        "pure-white": "#FFFFFF",
        "warm-gold": "#FFB300",
        "irish-orange": "#FF8F00",
      },
      backgroundImage: {
        "irish-hills":
          "linear-gradient(135deg, rgba(0,127,95,0.8) 0%, rgba(16,17,18,0.9) 100%), url('/placeholder.svg?height=800&width=1200&text=Irish+Hills')",
        "neon-grid":
          "linear-gradient(90deg, transparent 24%, rgba(0,127,95,0.1) 25%, rgba(0,127,95,0.1) 26%, transparent 27%, transparent 74%, rgba(0,127,95,0.1) 75%, rgba(0,127,95,0.1) 76%, transparent 77%, transparent), linear-gradient(transparent 24%, rgba(0,127,95,0.1) 25%, rgba(0,127,95,0.1) 26%, transparent 27%, transparent 74%, rgba(0,127,95,0.1) 75%, rgba(0,127,95,0.1) 76%, transparent 77%, transparent)",
        "emerald-glow": "radial-gradient(circle, rgba(0,127,95,0.2) 0%, transparent 70%)",
      },
      boxShadow: {
        emerald: "0 0 30px rgba(0, 127, 95, 0.4)",
        "sunset-glow": "0 0 25px rgba(242, 133, 0, 0.5)",
        "gold-shine": "0 0 20px rgba(255, 215, 0, 0.6)",
        "neon-border": "0 0 15px rgba(0, 127, 95, 0.3), inset 0 0 15px rgba(0, 127, 95, 0.1)",
        shamrock: "0 0 30px rgba(0, 154, 68, 0.4)",
        "irish-orange": "0 0 25px rgba(255, 143, 0, 0.5)",
      },
      animation: {
        "emerald-pulse": "emeraldPulse 3s ease-in-out infinite",
        "gold-shimmer": "goldShimmer 2s ease-in-out infinite alternate",
        "neon-flicker": "neonFlicker 1.5s ease-in-out infinite alternate",
        "shamrock-glow": "shamrockGlow 3s ease-in-out infinite",
        "irish-pulse": "irishPulse 2s ease-in-out infinite",
      },
      keyframes: {
        emeraldPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 127, 95, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 127, 95, 0.8)" },
        },
        goldShimmer: {
          "0%": { boxShadow: "0 0 15px rgba(255, 215, 0, 0.4)" },
          "100%": { boxShadow: "0 0 25px rgba(255, 215, 0, 0.8)" },
        },
        neonFlicker: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.8" },
        },
        shamrockGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 154, 68, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 154, 68, 0.8)" },
        },
        irishPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      fontFamily: {
        irish: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        celtic: ["Georgia", "Times New Roman", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
