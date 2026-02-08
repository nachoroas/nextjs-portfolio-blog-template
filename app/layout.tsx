import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio & Blog",
    template: "%s | Portfolio & Blog",
  },
  description: "Portfolio and blog showcasing projects and thoughts.",
  keywords: ["engineering", "blog", "portfolio", "software development"],
  authors: [{ name: "Portfolio" }],
  creator: "Portfolio",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://yourdomain.com",
    siteName: "Portfolio & Blog",
    title: "Portfolio & Blog",
    description: "Portfolio and blog showcasing projects and thoughts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Blog",
    description: "Portfolio and blog showcasing projects and thoughts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
