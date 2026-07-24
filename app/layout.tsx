import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedsouza.com"),
  title: {
    default: "Glen D'Souza | Technology, AI & Digital Projects",
    template: "%s | Glen D'Souza",
  },
  description:
    "The personal website of Glen D'Souza, showcasing technology, artificial intelligence, digital projects, business ideas, and ongoing learning.",
  keywords: [
    "Glen D'Souza",
    "technology",
    "artificial intelligence",
    "AI projects",
    "digital projects",
    "web development",
    "Next.js",
    "business technology",
  ],
  authors: [{ name: "Glen D'Souza" }],
  creator: "Glen D'Souza",
  publisher: "Glen D'Souza",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://thedsouza.com",
    siteName: "Glen D'Souza",
    title: "Glen D'Souza | Technology, AI & Digital Projects",
    description:
      "Explore Glen D'Souza's technology journey, AI projects, digital initiatives, and ongoing learning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glen D'Souza | Technology, AI & Digital Projects",
    description:
      "Explore Glen D'Souza's technology journey, AI projects, digital initiatives, and ongoing learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
