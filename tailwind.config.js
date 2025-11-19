module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2365F2",
        secondary: "#1ED760",
        accent: "#FF6B01",
        "neutral-dark": "#222E3A",
        "neutral-light": "#F5F8FA",
        "teal": "#1A7B7B",
        "gold": "#D4A574",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'body': { fontFamily: 'Inter, sans-serif' },
        'h1, h2, h3': { fontFamily: 'Poppins, sans-serif' },
      })
    }
  ],
}
