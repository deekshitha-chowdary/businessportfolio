/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        blush: '#F6C1CC',
        lavender: '#E6DDF3',
        sage: '#DCE9E2',
        warmBeige: '#EADBC8',
        charcoal: '#3A3A3A',
        softBrown: '#6B4F4F',
        gold: '#FFD700',
        peach: '#FFDAB9', 
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
