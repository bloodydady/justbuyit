import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const ParallaxSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && sparkleRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = parallaxRef.current;
        const sparkle = sparkleRef.current;
        const rate = scrolled * -0.5;
        const sparkleRate = scrolled * 0.3;
        
        parallax.style.transform = `translateY(${rate}px)`;
        sparkle.style.transform = `translateY(${sparkleRate}px) rotate(${scrolled * 0.1}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Floating sparkle element */}
      <div
        ref={sparkleRef}
        className="absolute top-20 right-20 text-yellow-400 opacity-70"
      >
        <Sparkles className="w-16 h-16 animate-pulse" />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300 opacity-60" />
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-700 opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Exclusive
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Summer Sale
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Get up to 70% off on selected items. Don't miss out on this incredible opportunity to upgrade your lifestyle.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            Shop Sale Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            View Catalog
          </Button>
        </div>
        
        {/* Countdown timer mockup */}
        <div className="mt-12 flex justify-center space-x-4">
          {[
            { value: "07", label: "Days" },
            { value: "23", label: "Hours" },
            { value: "45", label: "Minutes" },
            { value: "12", label: "Seconds" }
          ].map((time, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">{time.value}</div>
                <div className="text-sm text-white/70 uppercase">{time.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse" />
      </div>
    </section>
  );
};

export default ParallaxSection;