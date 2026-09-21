import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge"

const inter = Inter({subsets:['latin'], variable: '--font-sans'})
const calistoga = Calistoga({subsets:['latin'], variable: '--font-serif', weight : ['400'],})

export const metadata: Metadata = {
  metadataBase: new URL("https://moofouad.github.io/portfolio"),
  title: "Mohamed Fouad | Software Engineer | React, Next.js, TypeScript, Node.js",
  description: "Software Engineer based in Riyadh, Saudi Arabia with 2+ years of experience building production web applications across the full stack. Builds enterprise internal systems at GTS and runs Daftaar, a commercial SaaS product.",
  keywords: ["Mohamed Fouad", "Software Engineer", "Software Engineer Riyadh", "Full Stack Developer", "React.js Developer", "Next.js Developer", "Node.js Developer", "TypeScript Developer", "PostgreSQL", "Web Developer Saudi Arabia", "Software Engineer Saudi Arabia", "SaaS Developer", "Daftaar"],
  authors: [{ name: "Mohamed Fouad", url: "https://github.com/MooFouad" }],
  creator: "Mohamed Fouad",
  publisher: "Mohamed Fouad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moofouad.github.io/portfolio",
    siteName: "Mohamed Fouad - Software Engineer Portfolio",
    title: "Mohamed Fouad | Software Engineer",
    description: "Software Engineer in Riyadh building production web applications across the full stack — enterprise internal systems at GTS and Daftaar, a commercial SaaS product.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Fouad - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Fouad | Software Engineer",
    description: "Software Engineer in Riyadh building production web applications with React, Next.js, TypeScript, and Node.js.",
    creator: "@Mo_fouad0",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Fouad",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "GTS"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "Saudi Arabia"
    },
    email: "mofouad001@gmail.com",
    telephone: "+966505232544",
    url: "https://moofouad.github.io/portfolio",
    sameAs: [
      "https://www.linkedin.com/in/mohamed-fouad001",
      "https://github.com/MooFouad",
      "https://x.com/Mo_fouad0"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Menofia University"
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "REST API Design",
      "Docker",
      "Full Stack Development",
      "SaaS Development",
      "Web Performance"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={twMerge(inter.variable, calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
