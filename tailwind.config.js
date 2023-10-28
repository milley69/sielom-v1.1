/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#4f8ff0",
      },
      spacing: {
        15: "3.75rem",
      },
      backgroundImage: {
        "hero-pattern": "url('images/bg-img.jpg')",
      },
    },
  },
  plugins: [],
};
