/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-family)', 'sans-serif'],
        chakra: ['chakra', 'sans-serif'],
      },
      colors: {
        blackgb: "var(--blackgb)",
        gray100: "var(--gray100)",
        gray300: "var(--gray300)",
        white: "var(--white)",
        redprimary: "var(--redprimary)",
        redsecondary: "var(--redsecondary)",
        redapproval: "var(--redapproval)",
        orangeprimary: "var(--orangeprimary)",
        orangesecondary: "var(--orangesecondary)",
        bghours:"var(--bg-status-square)", 
      },
    },
  },
  plugins: [],
}
