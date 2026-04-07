import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

import { Inter, Geist } from "next/font/google";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
      <html
        lang="en"
        className={cn(
          "h-full",
          "antialiased",
          inter.className,
          "font-sans",
          geist.variable,
        )}
      >
        <body className="flex min-h-full flex-col bg-neutral-100 dark:bg-neutral-700">
          <Toaster richColors position="top-center"/>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
