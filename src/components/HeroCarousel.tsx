import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, ShoppingBag } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
  {
    type: 'video',
    content: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
    title: 'Latest Tech Revolution',
    subtitle: 'Discover cutting-edge gadgets that transform your lifestyle',
    cta: 'Shop Tech Now',
    accent: 'from-purple-600 to-blue-600'
  },
  {
    type: 'video',
    content: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4',
    title: 'Fashion Forward',
    subtitle: 'Elevate your style with our premium fashion collection',
    cta: 'Explore Fashion',
    accent: 'from-pink-600 to-purple-600'
  },
  {
    type: 'image',
    content: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Home & Living',
    subtitle: 'Transform your space with our curated home collection',
    cta: 'Shop Home',
    accent: 'from-green-600 to-teal-600'
  },
  {
    type: 'video',
    content: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4',
    title: 'Summer Sale',
    subtitle: 'Up to 70% off on selected items - Limited time offer',
    cta: 'Shop Sale',
    accent: 'from-orange-600 to-red-600'
  }];


  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) =>
      <div
        key={index}
        className={`absolute inset-0 transition-all duration-1000 ${
        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`
        }>

          {slide.type === 'video' ?
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}>

              <source src={slide.content} type="video/mp4" />
            </video> :

        <img
          src={slide.content}
          alt={slide.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }} />

        }
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-60`} />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-4xl px-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up delay-200">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
                <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full relative overflow-hidden ripple-container"
                onClick={handleRippleEffect}>

                  <ShoppingBag className="mr-2 h-6 w-6" />
                  {slide.cta}
                </Button>
                <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full relative overflow-hidden ripple-container"
                onClick={handleRippleEffect}>

                  <Play className="mr-2 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110">

        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110">

        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) =>
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`
          } />

        )}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110">

        {isPlaying ? <Play className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .ripple-container {
          position: relative;
          overflow: hidden;
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          animation: ripple-effect 0.6s ease-out;
        }
        
        @keyframes ripple-effect {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </section>);

};

export default HeroCarousel;