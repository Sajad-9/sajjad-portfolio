/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{html,js}",
    "./test/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    screens: {
      supsm: "320px",
      downsm: "400px",
      midsm: "450px",
      sm: "480px",
      upsm: "520px",
      md: "768px",
      upmd: "900px",
      lg: "976px",
      uplg: "1084px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        slideBounceInTop: {
          "0%": { opacity: "0", transform: "translateY(-100px)" },
          "70%": { opacity: "1", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        slideOutTop: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100px)" },
        },
        slideBounceInMiddle: {
          "0%": { opacity: "0", transform: "translateY(-220px)" },
          "70%": { opacity: "1", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        slideOutMiddle: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-220px)" },
        },
        slideBounceInBottom: {
          "0%": { opacity: "0", transform: "translateY(-340px)" },
          "70%": { opacity: "1", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        slideOutBottom: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-340px)" },
        },
      },
      animation: {
        "slide-bounce-in-top": "slideBounceInTop 0.5s ease-out forwards",
        "slide-out-top": "slideOutTop 0.5s ease-in forwards",
        "slide-bounce-in-middle": "slideBounceInMiddle 0.6s ease-out forwards",
        "slide-out-middle": "slideOutMiddle 0.6s ease-in forwards",
        "slide-bounce-in-bottom": "slideBounceInBottom 0.7s ease-out forwards",
        "slide-out-bottom": "slideOutBottom 0.7s ease-in forwards",
      },

      fontFamily: {
        cooper: ["CooperBlack", "sans-serif"],
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
