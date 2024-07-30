/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      squada: ["Squada One"],
      Lora: ["Lora"],
      popins: ["Poppins"],
      display: ["Squada One"],
      body: ['"Poppins"'],
    },
    screens: {
      xsm: "310px",
      sm: "480px",
      md: "768px",
      lg: "913px",
      xl: "1440px",
    },

    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        blue1: "#0074C3",
        blue2: "#144C8C",
        blue3: "#11A5BA",
        black: "#1C242C",
        white: "#F2EFEB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
