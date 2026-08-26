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
        ava: {
          blue: {
            deep: "#0F172A",
            primary: "#1E3A8A",
            light: "#3B82F6",
          },
          turquoise: {
            DEFAULT: "#0D9488",
            light: "#14B8A6",
          },
          gold: {
            DEFAULT: "#D97706",
            light: "#F59E0B",
          },
          violet: {
            DEFAULT: "#6D28D9",
            light: "#8B5CF6",
          },
          sand: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
export default config;