/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      '2xl': '1.75rem',
    },
    letterSpacing: {
      widest: '.2em'
    },
    colors: {
      'cyan-100': 'hsl(193, 38%, 86%)',
      'neon-green-300': 'hsl(150, 100%, 66%)',

      'gray-blue-600': 'hsl(217, 19%, 38%)',
      'gray-blue-900': 'hsl(217, 19%, 24%)',
      'blue-900': 'hsl(218, 23%, 16%)',
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', "sans-serif"],
      },
      boxShadow: {
        "custom-shadow": "0px 0px 35px 0px hsl(150, 80%, 66%)",
      },
    },
  },
  plugins: [],
}
