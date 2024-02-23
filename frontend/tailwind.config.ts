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
        base: "#33312B", // background
        sbase: "#2E2B25", // background items
        primary: "#FAB200", // buttons
        neutral: "#EDEDED", // text
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
