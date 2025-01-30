import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

export const AdventureFont = localFont({
  src: "./fonts/duplet.otf",
  display: "swap",
});
export const InterSans = Inter({
  variable: "--inter-sans",
  subsets: ["latin"],
});
