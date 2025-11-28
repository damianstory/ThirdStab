import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.industryimmersionseries.ca'),
  title: "Industry Immersion Series by myBlueprint",
  description: "Discover career opportunities through industry partnerships. Micro grants, mentorship, and real-world experience for Canadian students grades 7-12.",
  keywords: "industry immersion, canadian students, micro grants, career exploration, mentorship",
  openGraph: {
    title: "Industry Immersion Series",
    description: "Bringing Industry Into The Classroom One Activity At A Time",
    type: "website",
    images: [
      {
        url: "/images/meta-preview.png",
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
      <body className={openSans.className}>
        <LanguageProvider>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}