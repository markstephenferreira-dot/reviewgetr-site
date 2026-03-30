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
        navy: "#1E293B",
        "navy-deep": "#0F172A",
        gold: "#F59E0B",
        "gold-light": "#FBBF24",
        primary: "#2563EB",
        "primary-dark": "#1E40AF",
        accent: "#DC2626",
        "accent-hover": "#B91C1C",
        "text-dark": "#0F172A",
        "text-light": "#F8FAFC",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
