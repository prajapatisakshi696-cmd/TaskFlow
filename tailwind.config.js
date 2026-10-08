/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12202F',
        paper: '#F4F7F6',
        mint: { DEFAULT: '#0F8F76', dark: '#0A6F5B', soft: '#DDF1EB' },
        // amber-flow is the brand accent; dark/hover fix the previously missing classes
        amber: { flow: '#F2B134', dark: '#7A5206', hover: '#FFC24D' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(18 32 47 / 0.06), 0 12px 32px -12px rgb(18 32 47 / 0.18)',
        float: '0 2px 4px rgb(18 32 47 / 0.06), 0 40px 80px -24px rgb(18 32 47 / 0.35)',
      },
      keyframes: {
        rise: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: { rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both' },
    },
  },
  plugins: [],
}