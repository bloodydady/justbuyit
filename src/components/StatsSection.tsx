import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  ShoppingCart,
  Award,
  Globe,
  TrendingUp,
  Heart,
  Zap,
  Star } from
'lucide-react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    orders: 0,
    satisfaction: 0,
    countries: 0,
    growth: 0,
    reviews: 0,
    products: 0,
    awards: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const targetStats = {
    customers: 2500000,
    orders: 15000000,
    satisfaction: 98.5,
    countries: 85,
    growth: 340,
    reviews: 890000,
    products: 125000,
    awards: 47
  };

  const stats = [
  {
    id: 'customers',
    icon: Users,
    label: 'Happy Customers',
    value: animatedStats.customers,
    suffix: 'M+',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
  },
  {
    id: 'orders',
    icon: ShoppingCart,
    label: 'Orders Delivered',
    value: animatedStats.orders,
    suffix: 'M+',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 'satisfaction',
    icon: Heart,
    label: 'Satisfaction Rate',
    value: animatedStats.satisfaction,
    suffix: '%',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 'countries',
    icon: Globe,
    label: 'Countries Served',
    value: animatedStats.countries,
    suffix: '+',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
  },
  {
    id: 'growth',
    icon: TrendingUp,
    label: 'Growth Rate',
    value: animatedStats.growth,
    suffix: '%',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 'reviews',
    icon: Star,
    label: 'Customer Reviews',
    value: animatedStats.reviews,
    suffix: 'K+',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4'
  },
  {
    id: 'products',
    icon: Zap,
    label: 'Products Available',
    value: animatedStats.products,
    suffix: 'K+',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
  },
  {
    id: 'awards',
    icon: Award,
    label: 'Industry Awards',
    value: animatedStats.awards,
    suffix: '+',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4'
  }];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 3000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          customers: Math.round(targetStats.customers / 1000000 * easeProgress * 100) / 100,
          orders: Math.round(targetStats.orders / 1000000 * easeProgress * 100) / 100,
          satisfaction: Math.round(targetStats.satisfaction * easeProgress * 10) / 10,
          countries: Math.round(targetStats.countries * easeProgress),
          growth: Math.round(targetStats.growth * easeProgress),
          reviews: Math.round(targetStats.reviews / 1000 * easeProgress),
          products: Math.round(targetStats.products / 1000 * easeProgress),
          awards: Math.round(targetStats.awards * easeProgress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const formatValue = (value: number, id: string) => {
    switch (id) {
      case 'customers':
      case 'orders':
        return value.toFixed(1);
      case 'satisfaction':
        return value.toFixed(1);
      case 'reviews':
      case 'products':
        return Math.round(value);
      default:
        return Math.round(value);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by millions worldwide, we're continuously growing and making a difference in the e-commerce space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.id}
                className={`group cursor-pointer transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 ${stat.bgColor} border-0 shadow-lg relative overflow-hidden ${
                isVisible ? 'animate-count-up' : 'opacity-0'}`
                }
                style={{ animationDelay: `${index * 0.2}s` }}>

                <CardContent className="p-8 text-center relative z-10">
                  {/* Background Video */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover">

                      <source src={stat.video} type="video/mp4" />
                    </video>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative z-10`}>
                    <IconComponent className="h-10 w-10 text-white" />
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-150`} />
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {formatValue(stat.value, stat.id)}
                    <span className="text-3xl">{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-lg group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {stat.label}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }} />

                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className={`w-3 h-3 bg-gradient-to-r ${stat.color} rounded-full animate-pulse`} />
                  </div>

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className={`w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full animate-bounce`} />
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) =>
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
                      }} />

                    )}
                  </div>
                </CardContent>
              </Card>);

          })}
        </div>

        {/* Achievement Timeline */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12">
            Our Journey of Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">2019</div>
              <div className="text-gray-600 dark:text-gray-400">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">2020</div>
              <div className="text-gray-600 dark:text-gray-400">1M Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">2022</div>
              <div className="text-gray-600 dark:text-gray-400">Global Expansion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">2024</div>
              <div className="text-gray-600 dark:text-gray-400">Market Leader</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) =>
        <div
          key={i}
          className="absolute animate-float opacity-5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}>

            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-count-up {
          animation: count-up 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>);

};

export default StatsSection;