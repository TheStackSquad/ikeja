// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ⬅️ This is the fix. It tells Tailwind where to find your class names.
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        merriweather: ["var(--font-merriweather-sans)"],
        josefin: ["var(--font-josefin-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
