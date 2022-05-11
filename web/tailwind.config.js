module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "lightgray",
          "surface-primary": "#FFFFFF",
          "surface-secondary": "#F4F4F5",
          "surface-hover": "#E4E4E7",
          stroke: "#D4D4D8",
          "text-primary": "#27272A",
          "text-secondary": "#71717A",
        },
        dark: {
          primary: "#09090A",
          "surface-primary": "#18181B",
          "surface-secondary": "#27272A",
          "surface-hover": "#3F3F46",
          stroke: "#52525B",
          "text-primary": "#F4F4F5",
          "text-secondary": "#A1A1AA",
        },
        brand: {
          300: "#996DFF",
          500: "#8257E5",
        },
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
