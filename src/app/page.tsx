import AboutSection from "@/components/about";
import HeroSection from "@/components/hero";
import SocialSection from "@/components/social";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
  description: "Full-stack developer and product builder with experience in scalable applications, startup building, and technical leadership. Building the future of web applications.",
  keywords: [
    "full-stack developer",
    "product builder",
    "startup",
    "Next.js",
    "React",
    "TypeScript",
    "scalable applications",
    "technical leadership",
    "software architecture",
    "product development"
  ],
  openGraph: {
    title: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
    description: "Full-stack developer and product builder with experience in scalable applications, startup building, and technical leadership.",
    url: "https://divykoushik.com",
    siteName: "Divy Koushik Mishra",
    images: [
      {
        url: "/divy-koushik.webp",
        width: 1200,
        height: 630,
        alt: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
    description: "Full-stack developer and product builder with experience in scalable applications, startup building, and technical leadership.",
    images: ["/divy-koushik.webp"],
  },
  alternates: {
    canonical: "https://divykoushik.com",
  },
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <SocialSection />
      <AboutSection />
    </div>
  );
}
