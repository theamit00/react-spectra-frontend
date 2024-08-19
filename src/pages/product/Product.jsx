import FaqSection from "@/components/FaqSection/FaqSection";
import BuildYourSiteSection from "./BuildYourSiteSection";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import OurPlatformSection from "./OurPlatformSection";
import PowerfulSolutionSection from "./PowerfulSolutionSection";
import ReviewSection from "@/components/ReviewSection/ReviewSection";


const Product = () => {
  return (
    <main>
      <HeroSection/>
      <FeatureSection/>
      <BuildYourSiteSection/>
      <PowerfulSolutionSection/>
      <OurPlatformSection/>
      <FaqSection/>
      <ReviewSection/>
    </main>
  );
}

export default Product