/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f3057",
        bleu: "#04587a",
        vert: "#008891",
        blanc: "#e7e7de",
        rose: "#f39189",
        gris: "#61677a",
        whitie: "#f2f2f2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "inset-bottom": "inset 0 -2px 4px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
