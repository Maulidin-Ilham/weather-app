/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#146C94",
        blueSecondary: "#19A7CE",
        blueLg: "#AFD3E2",
        greyLg: "#F6F1F1",
      },
    },
  },
  plugins: [],
};
