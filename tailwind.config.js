/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{html,js}",
    "./test/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        supsm: "320px",
        sm: "480px",
        md: "768px",
        upmd: "900px",
        lg: "976px",
        uplg: "1084px",
        xl: "1440px",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        playpen: ["Playpen", "sans-serif"],
      },
      colors: {
        lightGreen: "rgb(103, 130, 49)",
        darkGreen: "rgba(63, 79, 31, 1)",
        lightBlue: "hsl(220, 80%, 60%)",
        darkBlue: "rgb(33, 78, 174)",
        veryDarkGray: "hsl(222, 47%, 10%)",
        darkGray: "hsl(217, 33%, 17%)",
        lightGray: "hsl(214, 32%, 85%)",
      },
    },
  },
  plugins: [],
};
