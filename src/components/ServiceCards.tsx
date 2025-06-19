import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Truck,
  Shield,
  Headphones,
  CreditCard,
  RefreshCw,
  Award,
  Clock,
  Globe,
  Heart,
  Zap } from
'lucide-react';

const ServiceCards: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
  {
    id: 1,
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on orders over $50',
    details: 'Fast and reliable delivery to your doorstep',
    color: 'from-blue-500 to-blue-600',
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment processing',
    details: 'Your payment information is always protected',
    color: 'from-green-500 to-green-600',
    video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 3,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer service',
    details: 'Get help whenever you need it',
    color: 'from-purple-500 to-purple-600',
    video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 4,
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day hassle-free returns',
    details: 'Not satisfied? Return it within 30 days',
    color: 'from-orange-500 to-orange-600',
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
  },
  {
    id: 5,
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Premium quality products only',
    details: 'We stand behind every product we sell',
    color: 'from-red-500 to-red-600',
    video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 6,
    icon: Clock,
    title: 'Fast Processing',
    description: 'Orders processed within 24 hours',
    details: 'Quick turnaround for faster delivery',
    color: 'from-teal-500 to-teal-600',
    video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 7,
    icon: Globe,
    title: 'Global Reach',
    description: 'Shipping to 50+ countries',
    details: 'Worldwide delivery available',
    color: 'from-indigo-500 to-indigo-600',
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
  },
  {
    id: 8,
    icon: Heart,
    title: 'Customer Love',
    description: '99% customer satisfaction rate',
    details: 'Join thousands of happy customers',
    color: 'from-pink-500 to-pink-600',
    video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4'
  }];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleRippleEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose JUSTBUYIT?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're committed to providing the best shopping experience with unmatched service and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 bg-white dark:bg-gray-800 border-0 shadow-lg relative overflow-hidden ripple-container ${
                isVisible ? 'animate-slide-up' : 'opacity-0'}`
                }
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={handleRippleEffect}>

                {/* Background Video */}
                {hoveredCard === service.id &&
                <div className="absolute inset-0 opacity-10">
                    <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover">

                      <source src={service.video} type="video/mp4" />
                    </video>
                  </div>
                }

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <CardContent className="p-8 text-center relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Details */}
                  <p className="text-sm text-gray-500 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {service.details}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full animate-pulse`} />
                  </div>

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Zap className="h-4 w-4 text-yellow-400 animate-bounce" />
                  </div>

                  {/* Checkmark */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </CardContent>

                {/* Floating Animation */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100" />
              </Card>);

          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10M+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-gray-600 dark:text-gray-400">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .ripple-container {
          position: relative;
          overflow: hidden;
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(147, 51, 234, 0.3);
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

export default ServiceCards;