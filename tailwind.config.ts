import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Text: "#000000",
        Background: "#ffffff",
        primary: "#a94cb8",
        Secondary: "#c777df",
        Accent: "#e6cff7",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
