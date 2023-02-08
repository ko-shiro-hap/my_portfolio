/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "Oswald",
          "Noto Sans JP",
          "Helvetica Neue",
          "Arial",
          "Hiragino Kaku Gothic ProN",
          "Hiragino Sans",
          "Meiryo",
          "sans-serif",
        ]
      },
      colors: {
        "primary": "#6200EA"
      }
    },
  },
  plugins: [],
}
