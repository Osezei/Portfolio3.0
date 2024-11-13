import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

const monts = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osezei's Portfolio",
  description: "Created by Osezei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monts.className}>{children}</body>
    </html>
  );
}
