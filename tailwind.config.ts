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
        // Google Maps theme
        navy: "#202124",
        "navy-deep": "#1A1A2E",
        gold: "#FBBC05",
        "gold-light": "#FDD835",
        primary: "#4285F4",
        "primary-dark": "#3367D6",
        accent: "#EA4335",
        "accent-hover": "#D32F2F",
        success: "#34A853",
        "text-dark": "#202124",
        "text-light": "#F8F9FA",
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
