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
