import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { OutFit } from "./fonts";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  title: "YR Pesticides and Fertilizers",
  description: "Helps You Grow Better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden antialiased `}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
