/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          50:  '#f0faf4',
          100: '#d9f2e3',
          200: '#b3e5c8',
          400: '#4db87a',
          600: '#008445',
          700: '#006b38',
          800: '#00542c',
          900: '#003d20',
        },
      },
      fontFamily: {
        display: ["'Roboto Condensed'", 'sans-serif'],
        body: ["'Roboto'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
