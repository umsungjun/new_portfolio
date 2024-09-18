/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        web: "1055px",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientAnimation: "gradientAnimation 15s ease infinite",
      },
    },
  },
  plugins: [],
};
