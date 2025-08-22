import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'ippro': {'min': '339px'},
        'promax': {'min': '429px'},
        'pixel':  {'min': '479px'},
        'sm1': {'min': '640px'},
        'md1': {'min': '768px'},
        'lg1': {'min': '1024px'},
        'xl1': {'min': '1280px'},
        '2xl1': {'min': '1600px'},
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
