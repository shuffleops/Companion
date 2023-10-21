/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xs': '256px',
        '2xs': '384px',
        'xs': '512px',
        '3xl': '1792px',
        '4xl': '2048px',
      },

      fontSize: {
        "3xs": "12px",
        "2xs": '14px',
        "xs": '16px',
        "sm": '18px',
        "base": '20px',
        "lg": '22px',
        "xl": '24px',
        "2xl": "26px",
        "3xl": "28px",
        "4xl": "30px",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        'selectArrow-xs': '8px 4px',
        'selectArrow-sm': '12px 8px',
        'selectArrow-md': '16px 12px',
        'selectArrow-lg': '20px 16px',
      },
    },
  },
  plugins: [],
}