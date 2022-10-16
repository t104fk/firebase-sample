/** @type {import('tailwindcss').Config} */
const SPACING_RHYTHM = 8;
const SPACING = {
  xs: SPACING_RHYTHM / 2,
  sm: SPACING_RHYTHM,
  md: SPACING_RHYTHM * 2,
  lg: SPACING_RHYTHM * 3,
  xl: SPACING_RHYTHM * 4,
};

const SPACING_PX = Object.fromEntries(
  Object.entries(SPACING).map(([k, v]) => [k, `${v}px`])
);

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      blue: "#224F92",
      red: "#B94B4B",
      gray: "#333333",
    },
    extend: {
      spacing: SPACING_PX,
    },
  },
  plugins: [],
};
