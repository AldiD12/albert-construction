import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#c9a84c",
        background: "#f8f6f2",
        "surface-container-low": "#f2f0eb",
        "surface-container": "#eceae4",
        "surface-container-high": "#e5e2db",
        "on-surface": "#1a1a1a",
        "on-surface-variant": "#5c4f38",
        "outline-variant": "#ddd5c0",
        charcoal: "#2d2d2d",
        muted: "#6b7280",
        "whatsapp-green": "#25D366",
        "forest-green": "#166534",
      },
      fontFamily: {
        headline: ["var(--font-epilogue)", "system-ui", "sans-serif"],
        body: ["var(--font-noto-serif)", "Georgia", "serif"],
        label: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
