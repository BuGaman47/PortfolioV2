/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        primaryTitle: '#ffffff',
        primaryAccent: '#22c55e',
        primaryContent: '#cbd5f5',
        primarySubcontent: '#94a3b8',
        primaryBg: '#020617',
      }
    },
  },
  plugins: [require("daisyui")],
}