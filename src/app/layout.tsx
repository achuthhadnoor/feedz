import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "🏕️ Feeds",
    template: "%s | Feeds",
  },
  description: "App Notifications should not be in slack again",
};

interface IRootLayout {
  children: React.ReactNode
}

export default async function RootLayout({
  children,
}: IRootLayout) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
