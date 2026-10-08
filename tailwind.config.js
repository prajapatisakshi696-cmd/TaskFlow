/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12202F',
        paper: '#F4F7F6',
        mint: { DEFAULT: '#0F8F76', dark: '#0A6F5B', soft: '#DDF1EB' },
        amber: { flow: '#F2B134' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
