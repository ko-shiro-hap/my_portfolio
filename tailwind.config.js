/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6200EA'
      }
    },
  },
  plugins: [],
}
