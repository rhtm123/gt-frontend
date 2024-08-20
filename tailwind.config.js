/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h2: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h3: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h4: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h5: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h6: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            p: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            li: {
              marginTop: '0.1rem',  // Adjust as needed to half the default margin
              marginBottom: '0.1rem', // Adjust as needed to half the default margin
            },
          },
        },
      }
    }
  },
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
