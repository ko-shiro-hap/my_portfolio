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
        "primary": "#6200EA",
        "secondary": "#440BD4",
      },
      screens: {
        'xs': '498px',
        'lg': '992px',
        'xl': '1152px',
      },
      width: {
        "0.25": "0.0625rem",
      },
      height: {
        "105": "26.25rem",
      },
      spacing: {
        "1/6": "17%",
        "0.25": "0.0625rem",
        "25": "6.25rem",
        "62": "15.5rem",
      },
      borderWidth: {
        "16": "16px",
        "10": "10px",
      },
    },
  },
  plugins: [],
}
