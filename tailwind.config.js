/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'src/index.html',
    'src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: 'Karla, sans-serif',
        inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
