import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  StructuredData,
  siteUrl,
  socialImageUrl,
  personId,
  websiteId,
  ownerName,
  siteName,
  companyName,
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

const title = `${siteName} | AI Technology Consultant & Engineer`;
const description =
  "AI technology consultant and engineer in Melbourne, working across Australia. Combines 30 years of IT experience with modern software engineering and AI to help businesses solve technology problems, modernise systems and build practical digital solutions.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: ownerName,
      url: siteUrl,
      jobTitle: "AI Technology Consultant & Engineer",
      worksFor: {
        "@type": "Organization",
        name: companyName,
      },
      knowsAbout: [
        "Technology consulting",
        "AI-assisted software development",
        "Software and web engineering",
        "End user computing",
        "Microsoft Intune",
        "Windows Autopilot",
        "Microsoft Entra ID",
        "VMware",
        "Technology architecture and integration",
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
      name: siteName,
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
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    ownerName,
    "AI technology consultant",
    "AI consulting for business",
    "technology consultant and engineer",
    "AI opportunity and strategy",
    "AI-enabled applications",
    "technology architecture and integration",
    "technical discovery",
    "prototyping",
    "business technology",
    "website development",
    "Microsoft 365",
    "digital infrastructure",
    "workflow automation",
    "Melbourne technology consultant",
    "Melbourne AI consultant",
  ],
  authors: [{ name: ownerName }],
  creator: ownerName,
  publisher: companyName,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName,
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
