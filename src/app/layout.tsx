import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge"

const inter = Inter({subsets:['latin'], variable: '--font-sans'})
const calistoga = Calistoga({subsets:['latin'], variable: '--font-serif', weight : ['400'],})

export const metadata: Metadata = {
  title: "Mohamed Fouad | Full Stack Developer | MERN Stack Expert",
  description: "Experienced Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and TypeScript. Currently working at GTS in Riyadh, Saudi Arabia. Expert in architecting scalable web applications with exceptional performance, SEO optimization, and modern UI/UX design.",
  keywords: ["Mohamed Fouad", "Full Stack Developer", "MERN Stack Developer", "React.js Developer", "Next.js Developer", "Node.js Developer", "TypeScript Developer", "MongoDB Developer", "Web Developer Riyadh", "GTS Developer", "JavaScript Developer", "Full Stack Engineer Saudi Arabia", "Software Engineer"],
  authors: [{ name: "Mohamed Fouad", url: "https://github.com/MooFouad" }],
  creator: "Mohamed Fouad",
  publisher: "Mohamed Fouad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moofouad.github.io/portfolio",
    siteName: "Mohamed Fouad - Full Stack Developer Portfolio",
    title: "Mohamed Fouad | Full Stack Developer | MERN Stack Expert",
    description: "Experienced Full Stack Developer specializing in the MERN stack, Next.js, and TypeScript. Currently working at GTS in Riyadh, Saudi Arabia. Building scalable, high-performance web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Fouad - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Fouad | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, Next.js, and TypeScript. Architecting exceptional web applications with modern technologies.",
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
  verification: {
    google: "your-google-verification-code",
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
    jobTitle: "Full Stack Developer",
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
    telephone: "+966503671924",
    url: "https://moofouad.github.io/portfolio",
    sameAs: [
      "https://www.linkedin.com/in/mohamed-fouad-6426231a5/",
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
      "HTML5",
      "CSS3",
      "Redux",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Web Development",
      "Frontend Development",
      "Full Stack Development",
      "SEO",
      "Responsive Design"
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
