import type { Metadata, Viewport } from "next";
import { Noto_Sans_Lao } from "next/font/google";

import { TopBar } from "@/components/TopBar";
import { BottomBar } from "@/components/BottomBar";

import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/constants/site-data";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SITE_URL + "/logo.png",
        width: 800,
        height: 600,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_URL + "/logo.png",
        width: 800,
        height: 600,
        alt: SITE_TITLE,
      },
    ],
  },
};

const lao = Noto_Sans_Lao({ subsets: ["lao"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${lao.className}`} suppressHydrationWarning>
        <TopBar />
        <main className="py-20">{children}</main>
        <BottomBar />
      </body>
    </html>
  );
}
