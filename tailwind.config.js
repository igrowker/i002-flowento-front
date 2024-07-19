/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
        bghours: "var(--bg-status-square)",
        bgbutton: "var(--bg-button)",
      },
      minHeight: {
        gradiantRedToOrangeModal: "5.25rem",
        orangeModal: '6.5rem',
      },
      maxHeight: {
        orangeModal: '6.5rem',
      },
      width: {
        '86': '22.8rem',
        '83': '20.5rem',
      },
    },
  },
  plugins: [],
}
