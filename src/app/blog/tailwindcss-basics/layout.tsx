import type { Metadata } from "next";

import "../../globals.css";

import { Inter } from "next/font/google";
import { Container } from "@/components/container";

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
    <Container className="min-h-screen p-4 md:pt-16 md:pb-10 prose">
      {children}
    </Container>
  );
}
