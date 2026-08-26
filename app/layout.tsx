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

const title = "Glen D'Souza | Technology Consultant & AI Solutions";
const description =
  "Technology consulting, AI solutions and digital infrastructure for small businesses, backed by more than 22 years of enterprise IT experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thedsouza.com"),
  title: {
    default: title,
    template: "%s | Glen D'Souza",
  },
  description,
  keywords: [
    "Glen D'Souza",
    "technology consultant",
    "small business technology consulting",
    "AI solutions",
    "proof of concept development",
    "business technology",
    "website development",
    "business email migration",
    "Microsoft 365",
    "digital infrastructure",
    "workflow automation",
    "Melbourne technology consultant",
  ],
  authors: [{ name: "Glen D'Souza" }],
  creator: "Glen D'Souza",
  publisher: "TD Group of Companies Pty Ltd",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://thedsouza.com",
    siteName: "Glen D'Souza",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}