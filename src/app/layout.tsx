import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio website - Venkatesh Maliga",
  description:
    "A perfect portfolio website that show cases my skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className} h-full antialiased`}>
        <body className="flex min-h-full flex-col bg-neutral-100 dark:bg-neutral-700">
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
