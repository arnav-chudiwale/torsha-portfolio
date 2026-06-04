import type { Metadata, Viewport } from "next";
import {
  DM_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://torsha-goswami.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Torsha Goswami · Terrain",
  description:
    "Portfolio of Torsha Goswami — environmental scientist and watershed ecologist. Watershed modeling, GIS, prairie streams, and environmental change.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Torsha Goswami · Terrain",
    description:
      "Studying how water shapes landscapes and how landscapes shape water.",
    images: [{ url: "/portrait.jpg", width: 1200, height: 1600, alt: "Torsha Goswami" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Torsha Goswami · Terrain",
    description:
      "Studying how water shapes landscapes and how landscapes shape water.",
    images: ["/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('terrain-theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
