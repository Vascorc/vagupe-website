import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- ESTA LINHA É CRUCIAL PARA O TAILWIND FUNCIONAR

// Configuração da fonte que definiste no tailwind.config.ts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "VAGUPE Consulting",
  description: "Desbloqueamos o Seu Potencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      {/* A classe inter.variable permite usar a fonte personalizada */}
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}