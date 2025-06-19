import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ProductGallery from '@/components/ProductGallery';
import ServiceCards from '@/components/ServiceCards';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import PartnerLogos from '@/components/PartnerLogos';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollPopup from '@/components/ScrollPopup';
import Footer from '@/components/Footer';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
      }
      
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      
      .delay-100 {
        animation-delay: 0.1s;
      }
      
      .delay-200 {
        animation-delay: 0.2s;
      }
      
      .delay-300 {
        animation-delay: 0.3s;
      }
      
      .delay-500 {
        animation-delay: 0.5s;
      }
      
      .delay-700 {
        animation-delay: 0.7s;
      }
      
      .delay-1000 {
        animation-delay: 1s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (isLoading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <HeroCarousel />
        <ProductGallery />
        <ServiceCards />
        <InteractiveFeatures />
        <PartnerLogos />
        <StatsSection />
        <ParallaxSection />
        <Testimonials />
      </main>
      <Footer />
      <ScrollPopup />
    </div>
  );
};

export default HomePage;