/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      booksbg: "#f2ebe8",
      primary: "#e5d7ce",
      "primary-dark": "#988375",
      secondary: "#9f785d",
      "secondary-light": "#c28f6c",
      "brown-purple": "#cca88f",
      "light-gray": "#E5E7EB",
      black: "#000000",
      white: "#ffffff",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
