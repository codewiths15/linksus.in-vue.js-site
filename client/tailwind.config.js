/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "310px",
      msm: "360px",
      msmsm: "368px",
      mmsm: "385px",
      ssm: "412px",
      sm: "480px",
      smd: "553px",
      md: "768px",
      lg: "913px",
      xlg: "1015px",
      xxlg: "1200px",
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
        whiteo: "#FFF",
      },
      fontFamily: {
        squada: ["Squada One"],
        Lora: ["Lora"],
        popins: ["Poppins"],
      },
    },
  },
  variants: {},
  plugins: [],
};
