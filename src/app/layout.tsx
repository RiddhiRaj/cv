import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
    <body className="transition-colors duration-150">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}