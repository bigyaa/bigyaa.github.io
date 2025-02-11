/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",           // Black
        secondary: "#4F4F4F",         // Dark Gray
        accent: "#B3B3B3",            // Light Gray
        textPrimary: "#FFFFFF",       // White
        textSecondary: "#CCCCCC",     // Light Gray
        buttonBackground: "#000000",  // Black
        buttonHover: "#4F4F4F",       // Dark Gray
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #000000, #4F4F4F, #FFFFFF)", // Black → Gray → White Gradient
      },
    },
  },
  plugins: [],
};