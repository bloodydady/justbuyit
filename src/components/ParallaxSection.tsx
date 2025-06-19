import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const ParallaxSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.4)'
          }}>

          <source src="https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }} />

        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-20 animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }} />

        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full opacity-20"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} />


        {/* Animated Shapes */}
        <div
          className="absolute top-20 right-20 animate-spin-slow"
          style={{ transform: `translateY(${scrollY * 0.6}px)` }}>

          <Sparkles className="w-12 h-12 text-yellow-400 opacity-70" />
        </div>
        <div
          className="absolute bottom-20 left-20 animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.7}px)` }}>

          <Zap className="w-16 h-16 text-purple-400 opacity-70" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/60 to-teal-900/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div
          className="max-w-5xl px-4"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                MEGA SALE
              </span>
            </h1>
            
            <p className="text-2xl md:text-4xl font-light mb-4 opacity-90">
              Up to 70% Off Everything
            </p>
            
            <p className="text-lg md:text-xl mb-8 opacity-75 max-w-3xl mx-auto">
              Don't miss out on our biggest sale of the year. Premium products at unbeatable prices. 
              Limited stock available!
            </p>
          </div>

          {/* Animated Counter */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 animate-pulse">48</div>
              <div className="text-sm opacity-75">Hours</div>
            </div>
            <div className="text-4xl font-bold text-white">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 animate-pulse">23</div>
              <div className="text-sm opacity-75">Minutes</div>
            </div>
            <div className="text-4xl font-bold text-white">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 animate-pulse">15</div>
              <div className="text-sm opacity-75">Seconds</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 ripple-container"
              onClick={handleRippleEffect}>

              Shop Sale Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-xl px-12 py-6 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white transition-all duration-300 hover:scale-105 ripple-container"
              onClick={handleRippleEffect}>

              View Catalog
            </Button>
          </div>

          {/* Floating promotional badges */}
          <div className="absolute -top-20 -left-20 animate-float-1">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm rotate-12 shadow-lg">
              NEW ARRIVALS
            </div>
          </div>
          
          <div className="absolute -bottom-20 -right-20 animate-float-2">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm -rotate-12 shadow-lg">
              FREE SHIPPING
            </div>
          </div>
        </div>
      </div>

      {/* Striking Object Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce-strike shadow-xl">
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          
          {/* Impact Effect */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/30 rounded-full animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        
        @keyframes bounce-strike {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-30px); }
          60% { transform: translateY(-15px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 4s ease-in-out infinite; }
        .animate-bounce-strike { animation: bounce-strike 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        
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

export default ParallaxSection;