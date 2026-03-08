/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: '#ffffff',
          100: '#cbcbca',
          200: '#777875',
          300: '#1f1f1f',
        },
        cream: {
          100: '#fbfaf9',
          200: '#ebe8e4',
          300: '#dad6ce',
          400: '#b8b4ab',
        },
        mint: {
          100: '#f3fae8',
          200: '#e1e9dd',
          300: '#96a797',
          400: '#263a39',
        },
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        geist: ['Geist', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

