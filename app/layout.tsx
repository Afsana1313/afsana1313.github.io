import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import CustomCursor from "./component/CustomCursor";

import "./globals.css";
import Particle from "./component/Particle";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});
export const metadata: Metadata = {
  metadataBase: new URL("https://afsana1313.github.io/"),
  title: {
    default: "Afsana Zaman Nipa | Software Developer",
    template: "%s | Afsana Zaman Nipa"
  },
  description:
    "Portfolio of Afsana Zaman Nipa, a Software Developer specializing in Next.js, React, Machine Learning, and AI research.",
  keywords: [
    "Afsana Zaman Nipa",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "Machine Learning",
    "AI Engineer",
    "Portfolio"
  ],
  authors: [{ name: "Afsana Zaman Nipa" }],
  openGraph: {
    title: "Afsana Zaman Nipa | Software Developer",
    description:
      "Personal portfolio of Afsana Zaman Nipa showcasing projects, research interests, and skills.",
    url: "https://afsana1313.github.io/",
    siteName: "Afsana Zaman Nipa Portfolio",
    locale: "en_US",
    type: "website"
  }
};

const geistMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Afsana Zaman Nipa",
              url: "https://afsana1313.github.io/",
              sameAs: [
                "https://github.com/Afsana1313",
                "https://www.linkedin.com/in/afsana-zaman-nipa/",
                "https://scholar.google.com/citations?view_op=list_works&hl=en&user=4iXSB-IAAAAJ",
                "https://medium.com/@afsana2013nipa",
                "https://www.facebook.com/n.afsana.zaman/"
              ],
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Independent / Open Source"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all `}
      >
        <div className="relative z-10">
          <CustomCursor />
          {children}
        </div>
        <Particle />
      </body>
    </html>
  );
}
