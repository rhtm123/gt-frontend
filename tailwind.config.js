/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      // "light", 

      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#0048A4",
          "secondary": "#ff00d3",
          "accent": "#689ab8",
        },
      },

      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#0048A4",
          "secondary": "#ff00d3",
        },
      },
      
      
      
      
      "dark"],


  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
};
