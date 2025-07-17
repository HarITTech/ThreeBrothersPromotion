/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-4px': '0 0 8px rgba(0, 0, 0, 0.3)',
        'custom-contact': '0 0 8px rgba(255, 107, 0, 0.5)',
        'custom-contact-h': '0 0 22px rgba(249, 115, 22, 0.9)',
        'custom-connect': '0 0 8px rgba(255, 255, 255, 0.2)',
        'custom-connect-h': '0 0 18px rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        'helvetica-bold': ['Helvetica Bold', 'sans-serif'],
        'helvetica-oblique': ['Helvetica Oblique', 'sans-serif'],
        'helvetica-condensed': ['Helvetica Condensed', 'sans-serif'],
        'helvetica-rounded': ['Helvetica Rounded Bold', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./assests/service_bg_blur.png')",
        'hero-pattern-t': "url('./assests/service_bg_blur_t.png')",
        'hero-pattern-b': "url('./assests/service_bg_blur_b.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',     // IE
          'scrollbar-width': 'none',        // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',                // Chrome, Safari
          },
        },
      });
    },
  ],
};
