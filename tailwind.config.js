/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
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
        'scrollbar-track': '#f1f1f1',
        'scrollbar-thumb': '#888',
        'scrollbar-thumb-hover': '#555',
      },
      scrollbar: {
        thin: {
          '::-webkit-scrollbar': 'width: 8px',
          '::-webkit-scrollbar-track': 'background: #f1f1f1',
          '::-webkit-scrollbar-thumb': 'background: #888',
          '::-webkit-scrollbar-thumb:hover': 'background: #555',
        },
      },
    },
    fontFamily: {
      jetmono: ['JetBrains Mono', 'monospace'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({addComponents}) {
      addComponents({
        '.scrollbar-thin': {
          '::-webkit-scrollbar': 'width: 8px',
          '::-webkit-scrollbar-track': 'background: #f1f1f1',
          '::-webkit-scrollbar-thumb': 'background: #888',
          '::-webkit-scrollbar-thumb:hover': 'background: #555',
        },
      });
    },
  ],
};
