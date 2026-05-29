import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ember: "#ff5a00",
        emberSoft: "#ff7a1a",
        night: "#050505",
        coal: "#111214",
        ash: "#9ca3af"
      },
      boxShadow: {
        glow: "0 0 36px rgba(255,90,0,.25)",
        insetGlow: "inset 0 0 28px rgba(255,90,0,.12)"
      },
      backgroundImage: {
        "radial-ember": "radial-gradient(circle at center, rgba(255,90,0,.25), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
