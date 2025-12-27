import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyOfflineSection from "@/components/WhyOfflineSection";
import PricingSection from "@/components/PricingSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Deal Maker Academy - Offline Intensive Training";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <ProblemSection />
      <SolutionSection />
      <WhyOfflineSection />
      <PricingSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
