/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',    // Blue
        secondary: '#50E3C2',  // Green
        accent: '#F5A623',     // Orange
        background: {
          gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
        },
        textPrimary: '#FFFFFF', // White
        textSecondary: '#FFDD57', // Yellow
        buttonBackground: '#007BFF', // Blue
        buttonHover: '#0056b3', // Darker Blue
      },
    },
  },
  plugins: [],
}

