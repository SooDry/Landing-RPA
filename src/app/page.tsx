import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FridaFactor } from "@/components/sections/FridaFactor";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AiSection } from "@/components/sections/AiSection";
import { UsecasesSection } from "@/components/sections/UsecasesSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { AmsSection } from "@/components/sections/AmsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FridaFactor />
        <TechnologiesSection />
        <PlatformsSection />
        <ProblemsSection />
        <BenefitsSection />
        <AiSection />
        <UsecasesSection />
        <MethodologySection />
        <AmsSection />
        <WhyUsSection />
        <RoiCalculator />
        <CtaSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
