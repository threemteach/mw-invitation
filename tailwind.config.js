/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: {
          50: '#f0f5fa',
          100: '#e1ebf5',
          200: '#c3d7eb',
          300: '#a5c3e1',
          400: '#699ccb',
          500: '#215589',
          600: '#1e4d7b',
          700: '#194067',
          800: '#143352',
          900: '#102a43',
        },
        cream: '#FBF8F3',
        charcoal: '#2F3A45',
        gold: '#D4AF37',
      },
      fontFamily: {
        viaoda: ['"Viaoda Libre"', '"EB Garamond"', 'cursive', 'serif'],
        alex: ['"Alex Brush"', 'cursive'],
        garamond: ['"EB Garamond"', 'serif'],
        baskerville: ['"Libre Baskerville"', 'Baskerville', '"Times New Roman"', 'serif'],
        lora: ['"Lora"', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
