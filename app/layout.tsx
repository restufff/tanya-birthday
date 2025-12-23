import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"], // Regular and Bold for emphasis
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"], // Light, Regular, Bold
});

export const metadata: Metadata = {
  title: "Happy Birthday, Tanya",
  description: "A journey through time and love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-[#eef5f9] text-gray-800 overflow-x-hidden`}
      >
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply bg-noise"></div>
        <div className="fixed inset-0 pointer-events-none z-40 mix-blend-overlay opacity-30 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
        {children}
      </body>
    </html>
  );
}
