import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  StructuredData,
  siteUrl,
  socialImageUrl,
  personId,
  websiteId,
} from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Glen D'Souza | Technology Consultant & Engineer";
const description =
  "Technology consultant and engineer in Melbourne, working across Australia. Practical problem solving across workplace IT, software, infrastructure and automation, backed by 22+ years of professional IT experience.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Glen D'Souza",
      url: siteUrl,
      jobTitle: "Technology Consultant & Engineer",
      worksFor: {
        "@type": "Organization",
        name: "TD Group of Companies Pty Ltd",
      },
      knowsAbout: [
        "Technology consulting",
        "Digital infrastructure",
        "Linux",
        "Docker",
        "Proxmox",
        "Microsoft 365",
        "Workflow automation",
        "Email authentication and deliverability",
        "Networking",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Glen D'Souza",
      description,
      publisher: { "@id": personId },
      inLanguage: "en-AU",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Glen D'Souza",
  },
  description,
  keywords: [
    "Glen D'Souza",
    "technology consultant",
    "technology consultant and engineer",
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
  applicationName: "Glen D'Souza",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Glen D'Souza",
    title,
    description,
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
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
      <head>
        <StructuredData data={jsonLd} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-lg focus:bg-sky-400 focus:px-4 focus:py-3 focus:font-semibold focus:text-slate-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
