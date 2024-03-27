import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          "400": "#242426",
          DEFAULT: "#131314", // "500"
        },
        text: "#E0E0E1",
        primary: {
          "200": "#4C4F51",
          "300": "#3D3F41",
          "400": "#2D2F30",
          DEFAULT: "#1E1F20", // "500"
          "600": "#1C1C1D",
          "700": "#191A1B",
        },
        accent: {
          "300": "#006BAD",
          "400": "#005A91",
          DEFAULT: "#004A77", // "500"
        },
      },
    },
  },
  plugins: [],
  // Only for PRODUCTION
  // safelist: [
  //   {
  //     pattern: /./
  //   },
  //   ]
};
export default config;
