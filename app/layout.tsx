import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
