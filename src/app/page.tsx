// import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/hero-section";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";

export default function Home() {
  return (
    <div className=" relative w-full">
      <BgGradient></BgGradient>
      <div className="flex flex-col">
        <HeroSection></HeroSection>
        <DemoSection></DemoSection>
        <HowItWorksSection></HowItWorksSection>
        <PricingSection></PricingSection>
      </div>

      {/* <CTASection></CTASection> */}
    </div>
  );
}
