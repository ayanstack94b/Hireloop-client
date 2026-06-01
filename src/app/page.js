import FeaturedJobsSection from "@/components/FeaturedJobsSection";
import FeaturesSection from "@/components/FeaturesSection";
import GlobalImpactSection from "@/components/GlobalImpactSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <GlobalImpactSection></GlobalImpactSection>
      <FeaturedJobsSection></FeaturedJobsSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection />
    </div>
  );
}
