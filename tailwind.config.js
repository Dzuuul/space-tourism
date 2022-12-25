/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'bellefair': ['Bellefair', 'serif'],
      'barlow': ['Barlow Condensed', 'sans-serif'],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'white': "#ffffff",
      'midnight': "#0B0D17",
      'whitemoon': "#D0D6F9",
    },
    extend: {
      backgroundImage: {
        'landing': "url('/src/assets/home-bg.svg')",
        'destination' : "url('/src/assets/destination-bg.svg')",
      },
    },
  },
  plugins: [],
};
