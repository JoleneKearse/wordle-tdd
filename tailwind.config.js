/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "correct-light": "#D72483", // light mode
        "correct-dark": "#FD3E81", // dark mode
        "almost-dark": "#107F7B", // light mode
        "almost-light": "#16B6B0", // dark mode
        "neutral-100": "#EBEBEB", // light mode
        "neutral-300": "#8a8a8a",
        // text and incorrect colours
        "neutral-400": "#858585", // dark mode
        "neutral-500": "#474747", // light mode
        "neutral-900": "#0A0A0A", // dark mode
        messages: "#A84FC0",
      },
    },
  },
  plugins: [],
};
