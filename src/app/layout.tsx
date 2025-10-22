import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge"

const inter = Inter({subsets:['latin'], variable: '--font-sans'})
const calistoga = Calistoga({subsets:['latin'], variable: '--font-serif', weight : ['400'],})

export const metadata: Metadata = {
  title: "Mohamed Fouad | MERN Stack Developer | Frontend Specialist",
  description: "Passionate MERN Stack Developer specializing in React.js, Next.js, and TypeScript. Currently working at GTS in Riyadh, Saudi Arabia. Expert in building responsive, high-performance web applications with SEO optimization and modern UI/UX design.",
  keywords: ["Mohamed Fouad", "MERN Stack Developer", "Frontend Developer", "React.js Developer", "Next.js Developer", "TypeScript", "Full Stack Developer", "Web Developer Riyadh", "GTS Developer", "JavaScript Developer", "React Developer Saudi Arabia"],
  authors: [{ name: "Mohamed Fouad", url: "https://github.com/MooFouad" }],
  creator: "Mohamed Fouad",
  publisher: "Mohamed Fouad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moofouad.github.io/portfolio",
    siteName: "Mohamed Fouad Portfolio",
    title: "Mohamed Fouad | MERN Stack Developer | Frontend Specialist",
    description: "Passionate MERN Stack Developer specializing in React.js, Next.js, and TypeScript. Currently working at GTS in Riyadh, Saudi Arabia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Fouad - MERN Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Fouad | MERN Stack Developer",
    description: "Passionate MERN Stack Developer specializing in React.js, Next.js, and TypeScript. Building exceptional user experiences.",
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
    jobTitle: "MERN Stack Developer",
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
