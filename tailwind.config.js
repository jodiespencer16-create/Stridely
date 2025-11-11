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
        "neutral-light": "#F5F8FA"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}