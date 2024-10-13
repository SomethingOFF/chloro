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
        primary: {
          background: {
            DEFAULT: "var(--primary-background-color)",
            500:"var(--primary-background-color-500)"
          },
          foreground: "var(--primary-text-color)",
        },
        secondary: {
          background: "var(--secondary-background-color)",
          foreground: "var(--secondary-text-color)",
        },
        tertiary: {
          background: "var(--tertiary-background-color)",
          foreground: "var(--tertiary-text-color)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
