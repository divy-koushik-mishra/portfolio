export const SITE_URL = "https://www.divykoushik.in";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Divy Koushik Mishra",
    url: SITE_URL,
    image: `${SITE_URL}/divy-koushik.webp`,
    email: "divykoushikmishra@gmail.com",
    jobTitle: "Founding Engineer",
    description:
      "Founding Engineer. Full-stack product builder in Gurugram, India. Building systems and curating taste — MVPs that ship, React, Next.js, TypeScript.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Indian Institute of Technology Madras",
      url: "https://www.iitm.ac.in/",
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
      "https://github.com/divy-koushik-mishra",
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
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: "Divy Koushik Mishra — Profile",
    dateCreated: "2025-02-18",
    dateModified: "2026-04-23",
    mainEntity: personJsonLd(),
    author: { "@id": `${SITE_URL}/#person` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Divy Koushik Mishra",
    url: SITE_URL,
    description:
      "Portfolio of Divy Koushik Mishra — Founding Engineer based in Gurugram, India. Building systems, curating taste.",
    author: { "@id": `${SITE_URL}/#person` },
  };
}

export function collectionPageJsonLd(params: {
  path: string;
  name: string;
  description: string;
}) {
  const url = `${SITE_URL}${params.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: params.name,
    description: params.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    author: { "@id": `${SITE_URL}/#person` },
  };
}
