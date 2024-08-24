/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Katin: ['Kanit', 'serif'],
        Inter: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
};
