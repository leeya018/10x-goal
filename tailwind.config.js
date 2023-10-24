module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./api/**/*.{js}",
    "./styles/**/*.{css}",
    "./images/**/*.{*}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pink_login_but1: "#F48045",
      pink_login_but2: "#F2586D",
      pink_login_but3: "#C45C91",
      blue_modal_but1: "#2697FF",
      gray_modal_but2: "#6A7268",
      gray_input: "#0B111D",
      gray: "#D9D9D9",
      green: "#40cea8",
      gray_dark: "#6A7268",
      blue: "#18A0FB",
      blue_dark: "#2b12ce",
      white: "#FFFFFF",
      black: "#000000",

      grayb2: "#E0D0BC",
      red: "#db2727",
      yellow: "#e8ef23",
      blueL_bank: "#2697FF",
    },
    extend: {
      textColor: ["group-hover"],
      backgroundImage: {
        background: "url('/images/background.png')",
        logo: "url('/images/logo.png')",
        flag1: "url('/images/is.png')",
        flag2: "url('/images/us.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
