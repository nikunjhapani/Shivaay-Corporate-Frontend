/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", 
  ],
   theme: {
    extend: {
      fontFamily: {
        // cinzel: 'var(--font-cinzel)',
        playfair: 'var(--font-playfair)',
        poppins: 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
};
