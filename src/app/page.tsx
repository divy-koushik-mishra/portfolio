import AboutSection from "@/components/about";
import CTASection from "@/components/cta";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import SocialSection from "@/components/social";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <SocialSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}
