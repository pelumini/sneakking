import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakking",
  description: "Your best online plug for sneakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
