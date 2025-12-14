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
        background: "#F5F3EF",
        foreground: "#111111",
        accent: {
          DEFAULT: "#FF4D00",
          light: "#FF4D00",
          dark: "#E64500",
        },
        gray: {
          900: "#111111",
          800: "#555555",
          700: "#888888",
          600: "#AAAAAA",
          500: "#CCCCCC",
          400: "#EBEBEB",
          300: "#F5F3EF",
          200: "#FFFFFF",
          100: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          'Helvetica',
          '"Noto Sans JP"',
          'Arial',
          'sans-serif',
        ],
        display: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
