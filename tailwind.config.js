/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors:{
        primary: "#00a750"
      },
      backgroundImage:{
        'gather': "url('/src/assets/job-bg.jpg')",
        'gather-2': "url('/src/assets/job-bg-2.jpg')"
      }
    },
  },
  plugins: [require('preline/plugin'),  require('@tailwindcss/forms')],
}

