import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Industry Immersion Series - Empowering Canadian Students",
  description: "Discover career opportunities through industry partnerships. Micro grants, mentorship, and real-world experience for Canadian students grades 7-12.",
  keywords: "industry immersion, canadian students, micro grants, career exploration, mentorship",
  openGraph: {
    title: "Industry Immersion Series",
    description: "Empowering Canadian students grades 7-12 with real-world industry experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}