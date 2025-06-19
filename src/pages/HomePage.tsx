import React, { useState } from 'react';
import CustomLoader from '@/components/CustomLoader';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ProductGallery from '@/components/ProductGallery';
import ServiceCards from '@/components/ServiceCards';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import TrustedPartners from '@/components/TrustedPartners';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedGraphs from '@/components/AnimatedGraphs';
import ScrollPopup from '@/components/ScrollPopup';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <CustomLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Navbar />
      <main>
        <HeroCarousel />
        <ProductGallery />
        <ServiceCards />
        <InteractiveFeatures />
        <TrustedPartners />
        <AnimatedGraphs />
        <StatsSection />
        <Testimonials />
        <ParallaxSection />
        <ScrollPopup />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;