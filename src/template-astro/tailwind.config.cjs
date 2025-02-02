/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // pc first
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        green: 'var(--green-color)',
        error: 'var(--error-color)',
        link: 'var(--link-color)',
      },
      backgroundSize: {
        full: '100% 100%',
      },
    },
  },
  important: '#body',
}
