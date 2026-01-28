import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adicionei aqui a cor azul da marca para facilitar
        vagupe: {
          DEFAULT: "#1e4b85", // O azul principal
          dark: "#163a66",    // O azul mais escuro (hover)
          light: "#eef4fb",   // Um azul clarinho para fundos (opcional)
        },
      },
      // Se quiseres personalizar a fonte (opcional)
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};

export default config;