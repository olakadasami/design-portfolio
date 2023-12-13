import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        footer: ["Poppins", "sans-serif"],
      },
      colors: {
        "bg-dark": "#1D1D1E",
        "color-white": "#FFFFFF",
        "color-dark": "#171A22",
        "color-yellow": "#FFC200",
        "color-blue": "#0B5FFF",
        "color-trans": "rgba(255, 255, 255, 0.05)",
      },
      gridTemplateRows: {
        // Simple 12 row grid
        "12": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
