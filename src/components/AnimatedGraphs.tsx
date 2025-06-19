import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

const AnimatedGraphs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    sales: 0,
    users: 0,
    orders: 0,
    revenue: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const targetValues = {
    sales: 85,
    users: 92,
    orders: 78,
    revenue: 89
  };

  const monthlyData = [
    { month: 'Jan', sales: 65, users: 45, orders: 38, revenue: 52 },
    { month: 'Feb', sales: 72, users: 52, orders: 45, revenue: 61 },
    { month: 'Mar', sales: 68, users: 58, orders: 52, revenue: 58 },
    { month: 'Apr', sales: 78, users: 65, orders: 61, revenue: 72 },
    { month: 'May', sales: 82, users: 72, orders: 68, revenue: 78 },
    { month: 'Jun', sales: 85, users: 78, orders: 72, revenue: 82 },
    { month: 'Jul', sales: 88, users: 85, orders: 78, revenue: 86 },
    { month: 'Aug', sales: 85, users: 92, orders: 78, revenue: 89 }
  ];

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
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

        setAnimatedValues({
          sales: Math.round(targetValues.sales * easeProgress),
          users: Math.round(targetValues.users * easeProgress),
          orders: Math.round(targetValues.orders * easeProgress),
          revenue: Math.round(targetValues.revenue * easeProgress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const CircularProgress: React.FC<{ value: number; color: string; size?: number }> = ({ 
    value, 
    color, 
    size = 120 
  }) => {
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200 dark:text-gray-700"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {value}%
          </span>
        </div>
      </div>
    );
  };

  const BarChart: React.FC = () => {
    const maxValue = Math.max(...monthlyData.map(d => Math.max(d.sales, d.users, d.orders, d.revenue)));
    
    return (
      <div className="h-64 flex items-end justify-between space-x-2 p-4">
        {monthlyData.map((data, index) => (
          <div key={data.month} className="flex-1 flex flex-col items-center space-y-2">
            <div className="flex space-x-1 items-end h-48">
              <div
                className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t transition-all duration-1000 ease-out"
                style={{ 
                  height: isVisible ? `${(data.sales / maxValue) * 100}%` : '0%',
                  width: '8px',
                  animationDelay: `${index * 0.1}s`
                }}
              />
              <div
                className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-1000 ease-out"
                style={{ 
                  height: isVisible ? `${(data.users / maxValue) * 100}%` : '0%',
                  width: '8px',
                  animationDelay: `${index * 0.1 + 0.1}s`
                }}
              />
              <div
                className="bg-gradient-to-t from-green-600 to-green-400 rounded-t transition-all duration-1000 ease-out"
                style={{ 
                  height: isVisible ? `${(data.orders / maxValue) * 100}%` : '0%',
                  width: '8px',
                  animationDelay: `${index * 0.1 + 0.2}s`
                }}
              />
              <div
                className="bg-gradient-to-t from-orange-600 to-orange-400 rounded-t transition-all duration-1000 ease-out"
                style={{ 
                  height: isVisible ? `${(data.revenue / maxValue) * 100}%` : '0%',
                  width: '8px',
                  animationDelay: `${index * 0.1 + 0.3}s`
                }}
              />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              {data.month}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Performance Analytics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time insights into our growth metrics and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Circular Progress Charts */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
                Key Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <CircularProgress value={animatedValues.sales} color="#8B5CF6" />
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 text-purple-600">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">Sales Growth</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Year over year
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <CircularProgress value={animatedValues.users} color="#3B82F6" />
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 text-blue-600">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">User Growth</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Active users
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <CircularProgress value={animatedValues.orders} color="#10B981" />
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="font-semibold">Order Rate</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Conversion rate
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <CircularProgress value={animatedValues.revenue} color="#F59E0B" />
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 text-orange-600">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-semibold">Revenue</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Monthly growth
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
                Monthly Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart />
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-green-400 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-600 to-orange-400 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AnimatedGraphs;