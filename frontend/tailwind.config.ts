import type { Config } from "tailwindcss";

const config: Config = {
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
      /*
      Website to see the colors:
      https://www.realtimecolors.com/dashboard?colors=ededed-33312B-FAB200-33312B-FAB200&fonts=Poppins-Poppins
      */
      colors: {
        base: "#2E2B25", // background
        sbase: "#33312B", // background items
        primary: {
          "100": "#FFC533",
          "200": "#D69A00",
          "300": "#FFC020",
          "400": "#FAB200",
          "500": "#E8A600",
          "600": "#D69A00",
          DEFAULT: "#FAB200", // buttons
        },

        // primary: "#FAB200", // buttons
        neutral: "#FFFFFF", // text
        renderer: "#f6f7f6",
        code: "#33312B",
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
