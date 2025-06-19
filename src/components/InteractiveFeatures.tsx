import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Truck, 
  Tag, 
  Star, 
  CheckCircle,
  Clock,
  Shield,
  Gift
} from 'lucide-react';

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Cpu,
      title: "Tech Specifications",
      subtitle: "Advanced Technology",
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Cutting-Edge Technology",
        description: "Experience the latest in technological innovation with our premium product lineup.",
        specs: [
          { label: "Processor", value: "Latest Gen Chipset" },
          { label: "Memory", value: "16GB Ultra-Fast RAM" },
          { label: "Storage", value: "1TB SSD Storage" },
          { label: "Display", value: "4K OLED Display" },
          { label: "Battery", value: "All-Day Battery Life" },
          { label: "Connectivity", value: "5G & WiFi 6E Ready" }
        ]
      }
    },
    {
      icon: Truck,
      title: "Delivery Information",
      subtitle: "Fast & Reliable",
      color: "from-green-500 to-emerald-500",
      content: {
        title: "Lightning-Fast Delivery",
        description: "Get your products delivered quickly and safely with our premium delivery service.",
        specs: [
          { label: "Standard Delivery", value: "3-5 Business Days" },
          { label: "Express Delivery", value: "1-2 Business Days" },
          { label: "Same Day Delivery", value: "Available in Select Cities" },
          { label: "Free Shipping", value: "Orders Over $50" },
          { label: "Tracking", value: "Real-Time Package Tracking" },
          { label: "Insurance", value: "Full Package Protection" }
        ]
      }
    },
    {
      icon: Tag,
      title: "Special Offers",
      subtitle: "Exclusive Deals",
      color: "from-purple-500 to-pink-500",
      content: {
        title: "Unbeatable Offers",
        description: "Save big with our exclusive deals and limited-time offers.",
        specs: [
          { label: "New Customer", value: "20% Off First Order" },
          { label: "Bulk Orders", value: "Up to 30% Discount" },
          { label: "Seasonal Sale", value: "50% Off Selected Items" },
          { label: "Loyalty Program", value: "Earn Points & Rewards" },
          { label: "Student Discount", value: "15% Off with Valid ID" },
          { label: "Corporate Deals", value: "Custom Pricing Available" }
        ]
      }
    },
    {
      icon: Star,
      title: "Premium Quality",
      subtitle: "Excellence Guaranteed",
      color: "from-yellow-500 to-orange-500",
      content: {
        title: "Premium Quality Assurance",
        description: "Every product meets our highest standards of quality and excellence.",
        specs: [
          { label: "Quality Control", value: "100% Product Testing" },
          { label: "Materials", value: "Premium Grade Components" },
          { label: "Warranty", value: "2-Year Comprehensive Coverage" },
          { label: "Certification", value: "ISO 9001 Certified" },
          { label: "Testing", value: "Rigorous Quality Testing" },
          { label: "Standards", value: "International Quality Standards" }
        ]
      }
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interactive Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive features designed to enhance your shopping experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activeFeature === index
                      ? 'ring-2 ring-purple-500 shadow-lg bg-white dark:bg-gray-800'
                      : 'hover:shadow-md bg-white/70 dark:bg-gray-800/70'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.subtitle}
                      </p>
                    </div>
                    {activeFeature === index && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Content Panel */}
          <Card className="bg-white dark:bg-gray-800 shadow-xl border-0">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = features[activeFeature].icon;
                      return <IconComponent className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`bg-gradient-to-r ${features[activeFeature].color} text-white border-0`}
                  >
                    Featured
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {features[activeFeature].content.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {features[activeFeature].content.description}
                </p>
              </div>

              <div className="space-y-4">
                {features[activeFeature].content.specs.map((spec, specIndex) => (
                  <div 
                    key={specIndex}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    style={{
                      animationDelay: `${specIndex * 100}ms`
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[activeFeature].color}`} />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {spec.label}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;