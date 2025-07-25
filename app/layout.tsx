import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Knewave } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Craft.js - The JavaScript app builder",
  description: "Create full-stack web apps by chatting with AI",
  icons: {
    icon: "/craft-logo.svg",
    shortcut: "/craft-logo.svg",
    apple: "/craft-logo.svg",
  },
};

const knewave = Knewave({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-knewave",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${knewave.variable} font-geist antialiased`}>
        <SessionProvider>
          <ThemeProvider
            // attribute="class"
            defaultTheme="system"
            // enableSystem
            // disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
