import AboutSection from "@/components/about";
import Breadcrumbs from "@/components/breadcrumbs";
import CTASection from "@/components/cta";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import SideProjectsSection from "@/components/sideProjects";
import SocialSection from "@/components/social";
import { profilePageJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd()),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", url: "/" }]} />
      <HeroSection />
      <SocialSection />
      <ServicesSection />
      <SideProjectsSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}
