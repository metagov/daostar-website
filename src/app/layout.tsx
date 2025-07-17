import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/TopNavigation";

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
        <TopNavigation />
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
