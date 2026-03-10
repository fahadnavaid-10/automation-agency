import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F0F4F8',
        'bg-secondary': '#E2EAF0',
        'bg-dark': '#0A2540',
        'accent-teal': '#00B4D8',
        'accent-teal-hover': '#0096B7',
        'accent-gold': '#C9A84C',
        'text-primary': '#0A2540',
        'text-secondary': '#4A6080',
        'text-light': '#F0F4F8',
        'border-color': '#C8D8E8',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Clash Display', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
