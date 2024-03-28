/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cerulean-blue': {
          50: '#f2f4fc',
          100: '#e2e6f7',
          200: '#cbd4f2',
          300: '#a8b8e8',
          400: '#7f94db',
          500: '#6072d1',
          600: '#4450c1',
          700: '#4247b3',
          800: '#3b3c92',
          900: '#333675',
          950: '#232448',
        },
      },
    },
    fontFamily: {
      jetmono: ['JetBrains Mono', 'monospace'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
