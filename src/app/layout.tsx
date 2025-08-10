import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/TopNavigation";
import HandImage from "@/components/HandImage";
import Footer from "@/components/Footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAOstar | Standards, Research and Public Goods for DAOs",
  description: "Standards, Research and Public Goods for DAOs. Explore our research reports, fellowship programs, and contribute to the advancement of DAO governance.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Mesh Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-10">
          <Image
            src="/img/mesh.png"
            alt="Mesh overlay"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <HandImage />
        <TopNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
