import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Truck, 
  Gift, 
  Star, 
  Zap, 
  Shield, 
  Play,
  ChevronRight
} from 'lucide-react';

const InteractiveFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      id: 0,
      icon: Cpu,
      title: 'Tech Specifications',
      subtitle: 'Latest Technology',
      description: 'Cutting-edge specifications and performance metrics',
      content: {
        title: 'Premium Tech Specs',
        details: [
          'Latest ARM processors with 40% better performance',
          'Advanced AI-powered features for smart automation',
          '5G connectivity with ultra-low latency',
          'Quantum-dot display technology',
          'Military-grade durability testing'
        ],
        video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
        stats: { performance: '95%', efficiency: '88%', satisfaction: '92%' }
      },
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 1,
      icon: Truck,
      title: 'Delivery Information',
      subtitle: 'Fast & Reliable',
      description: 'Express delivery options and tracking information',
      content: {
        title: 'Lightning-Fast Delivery',
        details: [
          'Same-day delivery in major cities',
          'Real-time GPS tracking for all orders',
          'Contactless delivery options available',
          'Express shipping to 50+ countries',
          'Eco-friendly packaging materials'
        ],
        video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4',
        stats: { speed: '24hrs', coverage: '99%', satisfaction: '96%' }
      },
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 2,
      icon: Gift,
      title: 'Special Offers',
      subtitle: 'Exclusive Deals',
      description: 'Limited-time promotions and member benefits',
      content: {
        title: 'Exclusive Member Benefits',
        details: [
          'Early access to new product launches',
          'Member-only flash sales and discounts',
          'Loyalty points with every purchase',
          'Free premium support and warranty',
          'Birthday and anniversary special offers'
        ],
        video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4',
        stats: { savings: '70%', members: '1M+', rewards: '500K' }
      },
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 3,
      icon: Star,
      title: 'Premium Quality',
      subtitle: 'Certified Excellence',
      description: 'Quality assurance and certification standards',
      content: {
        title: 'Quality Assurance Program',
        details: [
          'ISO 9001 certified manufacturing process',
          'Rigorous 50-point quality inspection',
          'Premium materials sourced globally',
          'Expert craftsmanship and attention to detail',
          'Lifetime warranty on selected products'
        ],
        video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
        stats: { quality: '99.9%', defects: '< 0.1%', returns: '< 2%' }
      },
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('interactive-features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleRippleEffect = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <section id="interactive-features" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Interactive Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive features and discover what makes us the preferred choice for millions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden ripple-container ${
                      activeTab === index
                        ? `bg-gradient-to-r ${feature.color} text-white shadow-xl`
                        : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                    } ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={(e) => {
                      handleTabClick(index);
                      handleRippleEffect(e);
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        activeTab === index 
                          ? 'bg-white/20' 
                          : `bg-gradient-to-r ${feature.color} text-white`
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {feature.title}
                        </h3>
                        <p className={`text-sm ${
                          activeTab === index 
                            ? 'text-white/80' 
                            : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {feature.subtitle}
                        </p>
                      </div>
                      <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                        activeTab === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                    
                    {/* Active indicator */}
                    {activeTab === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-2">
            <Card className={`h-full transition-all duration-500 ${
              features[activeTab].bgColor
            } border-0 shadow-xl ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <Badge className={`bg-gradient-to-r ${features[activeTab].color} text-white mb-4`}>
                        <Zap className="h-4 w-4 mr-1" />
                        Featured
                      </Badge>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                        {features[activeTab].content.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {features[activeTab].content.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[activeTab].color} mt-2 flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                      {Object.entries(features[activeTab].content.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${features[activeTab].color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Video/Visual */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <video
                      key={activeTab}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src={features[activeTab].content.video} type="video/mp4" />
                    </video>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-gray-800" />
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={`bg-gradient-to-r ${features[activeTab].color} text-white animate-pulse`}>
                        <Shield className="h-4 w-4 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
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
    </section>
  );
};

export default InteractiveFeatures;