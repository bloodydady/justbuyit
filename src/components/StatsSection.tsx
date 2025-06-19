import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, ShoppingBag, Star } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ customers: 0, products: 0, orders: 0, rating: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    customers: 50000,
    products: 2500,
    orders: 75000,
    rating: 4.9
  };

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
    if (!isVisible) return;

    const animateCounter = (key: keyof typeof finalValues, duration: number) => {
      const start = performance.now();
      const end = finalValues[key];

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        let value;
        if (key === 'rating') {
          value = Math.min(progress * end, end);
        } else {
          value = Math.floor(progress * end);
        }

        setCounters(prev => ({ ...prev, [key]: value }));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    // Start animations with different durations
    animateCounter('customers', 2000);
    animateCounter('products', 1500);
    animateCounter('orders', 2500);
    animateCounter('rating', 1800);
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      label: "Happy Customers",
      value: counters.customers.toLocaleString(),
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: ShoppingBag,
      label: "Products Available",
      value: counters.products.toLocaleString(),
      suffix: "+",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: TrendingUp,
      label: "Orders Completed",
      value: counters.orders.toLocaleString(),
      suffix: "+",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Star,
      label: "Customer Rating",
      value: counters.rating.toFixed(1),
      suffix: "/5.0",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    }
  ];

  // Mock chart data
  const chartData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    value: Math.floor(Math.random() * 100) + 50
  }));

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how we're making a difference in the e-commerce world
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className={`${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group`}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-20" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Chart Visualization */}
        <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Sales Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monthly performance overview
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
              </div>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between h-64 space-x-2">
              {chartData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full flex items-end justify-center mb-2 h-48">
                    <div
                      className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-1000 ease-out hover:from-purple-600 hover:to-pink-600 cursor-pointer"
                      style={{
                        height: isVisible ? `${(item.value / 150) * 100}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatsSection;