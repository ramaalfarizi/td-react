/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // heading: "'Playfair Display', serif",
        // body: "'Inter', sans-serif"
      },
      colors: {
        // primary
        "biru-50": "#f0f9fb",
        "biru-100": "#d8ecf5",
        "biru-200": "#b6daeb",
        "biru-300": "#84c1dc",
        "biru-400": "#3d96c2",
        "biru-500": "#2e80ac",
        "biru-600": "#296891",
        "biru-700": "#275677",
        "biru-800": "#284862",
        "biru-900": "#253e54",
        "biru-950": "#142738",
        // secondary
        "oren-50": "#fef6ee",
        "oren-100": "#fdecd7",
        "oren-200": "#f9d4af",
        "oren-300": "#f5b67c",
        "oren-400": "#f29d61",
        "oren-500": "#ec6e23",
        "oren-600": "#dd5519",
        "oren-700": "#b73f17",
        "oren-800": "#92341a",
        "oren-900": "#762d18",
        "oren-950": "#40140a",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
