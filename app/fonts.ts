import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
export const OutFit = Outfit({
  variable: "--outfit-sans",
  subsets: ["latin"],
});
