/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "800px" },
        // => @media (max-width: 767px) { ... }

        s: { max: "639px" },
        xs: { max: "450px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        "rabar-26": ["rabar-28"],
        "rabar-33": ["rabar-33"],
      },
    },
  },
  plugins: [],
};
