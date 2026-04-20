import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/middleware";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FridaSection } from "@/components/sections/FridaSection";
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

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar dict={dict.navbar} lang={lang} />
      
      <main className="flex-1">
        <HeroSection dict={dict.hero} />
        <ServicesSection dict={dict.services} />
        <FridaSection dict={dict.frida} />
        <TechnologiesSection dict={dict.technologies} />
        <PlatformsSection dict={dict.platforms} />
        <ProblemsSection dict={dict.problems} />
        <BenefitsSection dict={dict.benefits} />
        <AiSection dict={dict.ai} />
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
