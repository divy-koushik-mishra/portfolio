import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/theme-context";
import FooterSection from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";

const SITE_URL = "https://divykoushik.in";

export const metadata: Metadata = {
  title: {
    default: "Divy Koushik Mishra — Full-Stack Developer in Gurugram",
    template: "%s | Divy Koushik Mishra",
  },
  description:
    "Full-Stack Developer & Founding Engineer in Gurugram, India. I build React, Next.js, and TypeScript products for startups — MVPs, web apps, mobile.",
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
    title: "Divy Koushik Mishra — Full-Stack Developer in Gurugram",
    description:
      "Full-Stack Developer & Founding Engineer in Gurugram, India. I build React, Next.js, and TypeScript products for startups — MVPs, web apps, mobile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divy Koushik Mishra — Full-Stack Developer in Gurugram",
    description:
      "Full-Stack Developer & Founding Engineer in Gurugram, India. I build React, Next.js, and TypeScript for startups.",
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
    "@id": `${SITE_URL}/#person`,
    name: "Divy Koushik Mishra",
    url: SITE_URL,
    image: `${SITE_URL}/divy-koushik.webp`,
    email: "divykoushikmishra@gmail.com",
    jobTitle: "Full-Stack Developer & Founding Engineer",
    description:
      "Full-Stack Developer & Founding Engineer in Gurugram, India. Building React, Next.js, and TypeScript products for startups.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
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
      "https://www.instagram.com/divy_koushik_mishra/",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "HandyPanda",
        url: "https://www.handypanda.in",
      },
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2025-02-18",
    dateModified: new Date().toISOString(),
    mainEntity: personSchema,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Divy Koushik Mishra",
    url: SITE_URL,
    description:
      "Portfolio of Divy Koushik Mishra — Full-Stack Developer & Founding Engineer based in Gurugram, India.",
    author: {
      "@id": `${SITE_URL}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
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
