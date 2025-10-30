/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
        },
        surface: {
          DEFAULT: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          800: "#0f172a",
          900: "#0b1220",
        },
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 1px rgb(0 0 0 / 0.04)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
