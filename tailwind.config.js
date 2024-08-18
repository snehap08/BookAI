/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // For general text
        mono: ['Fira Code', 'monospace'],  // For code or monospace text
      },
    },
  },
  plugins: [],
}

