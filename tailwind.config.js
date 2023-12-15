/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: "Montserrat, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    extend: {
      width: {
        85: "22.188rem",
      },
      colors: {
        "primary-500": "#6355D8FF",
        "primary-550": "#4D3ED3FF",
        "primary-600": "#3D2DC7FF",
        "neutral-550": "#6E7787FF",
      },
    },
  },
  plugins: [],
};
