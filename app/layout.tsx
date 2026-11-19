import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "./_components/json-ld";

const siteTitle = "TEMPO AI LLC | Elson, the AI outbound agent";
const siteDescription =
  "TEMPO AI LLC builds Elson, an AI outbound agent that finds companies with a dated, sourced signal and drafts one-to-one emails you approve.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      {
        url: "./favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: "TEMPO AI LLC",
  },
  twitter: { card: "summary", title: siteTitle, description: siteDescription },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
