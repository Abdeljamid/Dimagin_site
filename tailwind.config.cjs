/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class", // Utilise 'class' pour activer le mode sombre manuellement
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Assure-toi que tous tes fichiers sont inclus
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
    },
  },
  plugins: [],
};
