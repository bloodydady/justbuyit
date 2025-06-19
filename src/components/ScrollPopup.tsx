import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Gift, Mail } from 'lucide-react';

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Show popup when user scrolls 40% down the page and hasn't seen it yet
      if (scrollPercent > 40 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Also show after 30 seconds if user hasn't scrolled enough
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email);
      setIsVisible(false);
      // You could show a toast here
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <Card className="bg-white dark:bg-gray-800 max-w-md w-full shadow-2xl border-0 overflow-hidden animate-in zoom-in duration-300">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 animate-pulse" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Special Offer!</h3>
              <p className="text-white/90">Get 20% off your first purchase</p>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Join Our Newsletter
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Subscribe now and get exclusive deals, early access to sales, and the latest product updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-3 border-gray-300 dark:border-gray-600"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 font-semibold"
              >
                Get My 20% Discount
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={handleClose}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                No thanks, I'll pay full price
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex justify-center items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Easy unsubscribe</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ScrollPopup;