import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terrae",
  description: "Terrae Official Website",
  icons: {
    icon: "images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
