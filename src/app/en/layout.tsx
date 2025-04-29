import { ReactNode } from "react";
import { Rubik } from "next/font/google";
import "../../app/globals.css";
import Navbar from "@/app/components/navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Terrae",
  description: "Full of adventure!",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: [
      {
        url: "/images/heroes_image_low.jpg",
        width: 1000,
        height: 1000,
        alt: "Terrae",
      },
    ],
  },
  twitter: {
    images: ["/images/heroes_image_low.jpg"],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${rubik.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
