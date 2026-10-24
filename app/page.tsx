import { WaitlistProvider } from "@/components/WaitlistProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhyToolsFail from "@/components/WhyToolsFail";
import HowItWorks from "@/components/HowItWorks";
import Statuses from "@/components/Statuses";
import Showcase from "@/components/Showcase";
import Modes from "@/components/Modes";
import FeatureGrid from "@/components/FeatureGrid";
import Integrations from "@/components/Integrations";
import Personas from "@/components/Personas";
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
        <Problem />
        <WhyToolsFail />
        <HowItWorks />
        <Statuses />
        <Showcase />
        <Modes />
        <FeatureGrid />
        <Integrations />
        <Personas />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </WaitlistProvider>
  );
}
