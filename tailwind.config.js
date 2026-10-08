/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
  ink: '#EDE8F8',
  paper: '#09060F',
  surface: '#120C1F',
  deep: '#050309',
  brand: { DEFAULT: '#7C3AED', deep: '#6D28D9', light: '#C4B5FD', soft: '#241640' },
  mint: { DEFAULT: '#7C3AED', dark: '#C4B5FD', soft: '#241640' },
  amber: { flow: '#F2B134', dark: '#7A5206', hover: '#FFC24D' },
},
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.4), 0 12px 32px -12px rgb(0 0 0 / 0.6)',
        float: '0 0 0 1px rgb(167 139 250 / 0.14), 0 40px 80px -24px rgb(124 58 237 / 0.45)',
      },
      keyframes: {
        rise: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: { rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both' },
    },
  },
  plugins: [],
}