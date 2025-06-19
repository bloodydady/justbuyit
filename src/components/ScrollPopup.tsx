import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Gift, Mail, Star, Sparkles } from 'lucide-react';

const ScrollPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Show popup when user scrolls 40% down the page and hasn't seen it yet
      if (scrollPercent > 40 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown, isVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setTimeout(() => {
        setIsVisible(false);
        setShowSuccess(false);
        setEmail('');
      }, 2000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className={`w-full max-w-md mx-auto transform transition-all duration-500 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      } bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 border-0 shadow-2xl`}>
        <CardContent className="p-0 relative overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 opacity-20">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src="https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            {!showSuccess ? (
              <>
                {/* Animated Icons */}
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="relative">
                    <Gift className="h-12 w-12 text-purple-600 animate-bounce" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl animate-pulse">🎉</div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Exclusive Offer!
                </h3>

                {/* Subtitle */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  Get 20% OFF your first order
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Join our newsletter for exclusive deals and early access to sales
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-green-600">
                    <Star className="h-4 w-4" />
                    <span>Exclusive Deals</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Mail className="h-4 w-4" />
                    <span>Early Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600">
                    <Gift className="h-4 w-4" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-600">
                    <Sparkles className="h-4 w-4" />
                    <span>VIP Status</span>
                  </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-purple-700 dark:focus:border-purple-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ripple-container"
                    onClick={handleRippleEffect}
                  >
                    <Gift className="h-5 w-5 mr-2" />
                    Claim 20% Discount
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-6 flex justify-center items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Spam-free</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </>
            ) : (
              /* Success Message */
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Welcome to the VIP Club! 🎉
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Check your email for your exclusive 20% discount code
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  You'll receive amazing deals and be the first to know about new arrivals!
                </div>
              </div>
            )}
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-slow opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .ripple-container {
          position: relative;
          overflow: hidden;
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
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
    </div>
  );
};

export default ScrollPopup;