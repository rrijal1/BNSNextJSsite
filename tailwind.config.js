/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#013265",
          white: "#fffefe",
          red: "#be1e2d",
          grey: "#dee5dc",
        },
        footerBlue: "#22364d",
      },
      maxWidth: {
        "card-max": "540px",
      },
      fontFamily: {
        main: [
          "var(--font-raleway)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        form: [
          "var(--font-merriweather-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
