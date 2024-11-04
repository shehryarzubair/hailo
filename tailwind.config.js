/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#201f1f",
        blue: "#62a1c7",
        gray: "#939393",
        white: "#ffffff",
        body: "#f5f5f6",
        "blue-light": "#c1d0d8",
        yellow: "#FFD33C",
      },
    },
  },
  plugins: [],
};
