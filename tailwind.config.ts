import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColour',
        blue: {
          900: '#3B3752'
        },
        yellow: {
          500: "#FBC138"
        },
        tan: {
          500: "#F5EDE3"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    backgroundImage: {
      blue_bg: `url(/blue-bg.svg)`,
      tan_top: `url(/tan-top.svg)`
    }
  },
  plugins: [],
} satisfies Config;
