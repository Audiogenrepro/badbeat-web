import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";  // <--- IMPORT MUST BE HERE
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["700", "900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "BADBEAT | Underground Techno & House",
  description: "Official website for DJ Badbeat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} bg-background text-foreground antialiased`}>
        <Navbar />  {/* <--- THIS LINE IS CRITICAL. IS IT HERE? */}
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
