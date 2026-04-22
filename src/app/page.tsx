import AboutSection from "@/components/about";
import Breadcrumbs from "@/components/breadcrumbs";
import CTASection from "@/components/cta";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import SideProjectsSection from "@/components/sideProjects";
import SocialSection from "@/components/social";

export default function Home() {
  return (
    <div className="">
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
