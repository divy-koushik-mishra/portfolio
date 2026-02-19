import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/theme-context";
import FooterSection from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";

const SITE_URL = "https://divykoushik.in";

export const metadata: Metadata = {
  title: {
    default: "Divy Koushik Mishra — Full-Stack Developer & Founding Engineer",
    template: "%s | Divy Koushik Mishra",
  },
  description:
    "Full-Stack Developer and Founding Engineer specializing in React, Next.js, TypeScript, and scalable product development. Available for freelance, consulting, and full-time roles. Built MVPs that secured VC funding.",
  keywords: [
    "Divy Koushik Mishra",
    "Full-Stack Developer",
    "Founding Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Freelance Developer India",
    "Technical Consultant",
    "Startup Engineer",
    "MVP Development",
    "Software Engineer",
    "Web Developer",
    "Node.js",
    "Python",
    "FastAPI",
    "React Native",
    "AWS",
    "T3 Stack",
    "tRPC",
    "Prisma",
    "PostgreSQL",
  ],
  authors: [{ name: "Divy Koushik Mishra", url: SITE_URL }],
  creator: "Divy Koushik Mishra",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Divy Koushik Mishra",
    title: "Divy Koushik Mishra — Full-Stack Developer & Founding Engineer",
    description:
      "Full-Stack Developer and Founding Engineer specializing in React, Next.js, TypeScript, and scalable product development. Available for freelance, consulting, and full-time roles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divy Koushik Mishra — Full-Stack Developer & Founding Engineer",
    description:
      "Full-Stack Developer and Founding Engineer. React, Next.js, TypeScript. Available for freelance & consulting.",
    creator: "@divy_koushik",
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
  other: {
    "ai-content-declaration":
      "This site contains human-authored content about Divy Koushik Mishra, a Full-Stack Developer available for hire.",
  },
};

function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Divy Koushik Mishra",
    url: SITE_URL,
    email: "divykoushikmishra@gmail.com",
    jobTitle: "Full-Stack Developer & Founding Engineer",
    description:
      "Full-Stack Developer and Founding Engineer specializing in React, Next.js, TypeScript, and scalable product development. Available for freelance, consulting, and full-time roles.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology, Madras",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "tRPC",
      "AWS",
      "Docker",
      "React Native",
      "System Architecture",
      "Full-Stack Development",
      "MVP Development",
      "Startup Engineering",
      "UI/UX Design",
      "DevOps",
    ],
    sameAs: [
      "https://github.com/divy-koushik-mishra/",
      "https://www.linkedin.com/in/divy-koushik-mishra",
      "https://x.com/divy_koushik",
      "https://www.instagram.com/divy.koushik.mishra/",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "HandyPanda",
        url: "https://www.handypanda.in",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Divy Koushik Mishra",
    url: SITE_URL,
    description:
      "Portfolio of Divy Koushik Mishra — Full-Stack Developer and Founding Engineer available for freelance, consulting, and full-time roles.",
    author: {
      "@type": "Person",
      name: "Divy Koushik Mishra",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <JsonLd />
        <GoogleAnalytics />
      </head>
      <body
        className={` antialiased selection:bg-foreground selection:text-background`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
