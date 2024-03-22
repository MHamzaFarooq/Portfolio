import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ 
  subsets:["latin"],
  weight:["400","500","700"],
  display:"swap",
  variable:"--manrope"
})

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
