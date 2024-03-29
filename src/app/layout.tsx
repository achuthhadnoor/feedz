import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "🏕️ Feeds",
    template: "%s | Feeds",
  },
  description: "A simple event monitoring service for your apps",
  openGraph: {
    title: "Feeds",
    description: "Event Monitoring for your apps and api's",
    url: "https://feeds.achuth.dev",
    siteName: "feeds.achuth.dev",
    images: [
      {
        url: "https://feeds.achuth.dev/og.png",
        width: 2322,
        height: 1306,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "feedz",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

interface IRootLayout {
  children: React.ReactNode
}

export default async function RootLayout({
  children,
}: IRootLayout) {
  return (
    <html lang="en"
      suppressHydrationWarning
      className={inter.className}>
      <body >
        {/* Toast component and loading indicator */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
