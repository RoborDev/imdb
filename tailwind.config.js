module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // If you're using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myLightBackground: "#ffffff", // Custom light background color
        myDarkBackground: "#2d2d2d", // Custom dark background color
        myLightText: "#374151", // Custom light text color
        myDarkText: "#e5e7eb", // Custom dark text color
      },
    },
  },
  plugins: [],
  darkMode: "class", // Manual dark mode based on the class on the root element
};
