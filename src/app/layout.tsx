import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Review Getr — Get More 5-Star Google Reviews Automatically",
    template: "%s | Review Getr",
  },
  description:
    "Review Getr helps local businesses get more 5-star Google reviews automatically. Request, respond to, and repost reviews — all in one platform. 14-day free trial.",
  keywords: [
    "Google reviews",
    "review management",
    "reputation management",
    "local business reviews",
    "5-star reviews",
    "automated reviews",
    "Google Business Profile",
    "review software",
  ],
  metadataBase: new URL("https://reviewgetr.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reviewgetr.com",
    siteName: "Review Getr",
    title: "Review Getr — Get More 5-Star Google Reviews Automatically",
    description:
      "Help your local business get more 5-star Google reviews automatically. Request, respond, and repost — all in one platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Review Getr — Get More 5-Star Google Reviews",
    description:
      "Automated Google Reviews management for local businesses. 14-day free trial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
