import { WaitlistProvider } from "@/components/WaitlistProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import MoneyLeak from "@/components/MoneyLeak";
import WhyToolsFail from "@/components/WhyToolsFail";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import FeatureGrid from "@/components/FeatureGrid";
import Personas from "@/components/Personas";
import Integrations from "@/components/Integrations";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <WaitlistProvider>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <MoneyLeak />
        <WhyToolsFail />
        <HowItWorks />
        <Showcase />
        <FeatureGrid />
        <Personas />
        <Integrations />
        <BeforeAfter />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </WaitlistProvider>
  );
}
