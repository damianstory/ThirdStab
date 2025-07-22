import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Industry Immersion Series by myBlueprint",
  description: "Discover career opportunities through industry partnerships. Micro grants, mentorship, and real-world experience for Canadian students grades 7-12.",
  keywords: "industry immersion, canadian students, micro grants, career exploration, mentorship",
  openGraph: {
    title: "Industry Immersion Series",
    description: "Bringing Industry Into The Classroom One Activity At A Time",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/Op4S0Z1.png",
        width: 1200,
        height: 630,
        alt: "Industry Immersion Series",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}