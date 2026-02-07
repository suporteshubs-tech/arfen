import HeroSection from '../components/home/HeroSection';
import FoundersSection from '../components/home/FoundersSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CTABanner from '../components/home/CTABanner';
import PortfolioPreview from '../components/home/PortfolioPreview';
import ServicesSection from '../components/home/ServicesSection';
import LocationsSection from '../components/home/LocationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030306] overflow-x-hidden">
      <HeroSection />
      <FoundersSection />
      <FeaturesSection />
      <CTABanner />
      <PortfolioPreview />
      <ServicesSection />
      <LocationsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
