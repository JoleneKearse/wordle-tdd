/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   "correct-light": "#D72483", // light mode
    //   "correct-dark": "#FD3E81", // dark mode
    //   "almost-dark": "#107F7B", // light mode
    //   "almost-light": "#16B6B0", // dark mode
    //   "neutral-100": "#EBEBEB", // light mode
    //   // text and incorrect colours
    //   "neutral-400": "#858585", // dark mode
    //   "neutral-500": "#474747", // light mode
    //   "neutral-900": "#0A0A0A",  // dark mode
    // },
    extend: {
      colors: {
      "correct-light": "#D72483", // light mode
      "correct-dark": "#FD3E81", // dark mode
      "almost-dark": "#107F7B", // light mode
      "almost-light": "#16B6B0", // dark mode
      "neutral-100": "#EBEBEB", // light mode
      // text and incorrect colours
      "neutral-400": "#858585", // dark mode
      "neutral-500": "#474747", // light mode
      "neutral-900": "#0A0A0A",  // dark mode
    },
    },
  },
  plugins: [],
};