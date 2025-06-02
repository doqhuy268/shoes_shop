/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
      fontFamily: {
        bodyFont: ["DM Sans", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      colors: {
        primeColor: "#1e40af",
        lightText: "#64748b",
        primaryBg: "#ffffff",
        secondaryBg: "#f8fafc",
        primaryText: "#0f172a",
        secondaryText: "#475569",
        accentColor: "#3b82f6",
        lightBorder: "#e2e8f0",
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0,0,0,0.1)",
        cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
