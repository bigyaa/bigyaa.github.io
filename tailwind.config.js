/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',           // Black
        secondary: '#4F4F4F',         // Dark Gray
        accent: '#B3B3B3',            // Light Gray
        background: {
          gradient: 'bg-gradient-to-r from-black via-gray-800 to-white', // Black to White Gradient
        },
        textPrimary: '#FFFFFF',       // White
        textSecondary: '#CCCCCC',     // Light Gray
        buttonBackground: '#000000',  // Black
        buttonHover: '#4F4F4F',       // Dark Gray
      },
    },
  },
  plugins: [],
}

