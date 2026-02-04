/**
 * @fileoverview Root layout component for Ngoga Portfolio
 *
 * This file defines the root HTML structure, metadata for SEO,
 * font configurations, and global styling for the entire application.
 *
 * @module app/layout
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Geist Sans font configuration
 * Primary font used for body text throughout the application
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Geist Mono font configuration
 * Monospace font used for code snippets and technical content
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Page Metadata
 *
 * SEO configuration including title, description, keywords,
 * author information, and Open Graph data for social sharing.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = {
  title: "Ngoga Fidele - Full-Stack Developer",
  description: "Experienced React and NestJS developer specializing in modern web applications, API development, and scalable solutions.",
  keywords: ["React", "NestJS", "Full-Stack Developer", "TypeScript", "Node.js", "Next.js"],
  authors: [{ name: "Ngoga Fidele" }],
  openGraph: {
    title: "Ngoga Fidele - Full-Stack Developer",
    description: "Experienced React and NestJS developer specializing in modern web applications.",
    type: "website",
  },
};

/**
 * Root Layout Component
 *
 * Wraps all pages with the HTML document structure,
 * applies font CSS variables, and enables antialiased text rendering.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns The HTML document structure
 */
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
        {children}
      </body>
    </html>
  );
}
