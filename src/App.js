import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECI TRON",
  description: "Un juego de Tron para la Escuela Colombiana de Ingeniería",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="min-h-screen bg-black">{children}</main>
      </body>
    </html>
  );
}
