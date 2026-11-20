import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drogaria Santa Maria',
  description: 'Farmácia & Manipulação - Cuidado Contínuo e Preço Justo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Importação dos Ícones do Material Design */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}