/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'reddit-gray': 'rgb(229, 235, 238)',
        'levelsfyi-gray': 'rgb(237, 237, 240)',
        'figma-gray': '#ECECEC'
      },
      width: {
        'desktop-width': '1150px',
        'form-width': '575px',
      }
    },
  },
  plugins: [],
};
