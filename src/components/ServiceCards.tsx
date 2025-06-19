import { Card, CardContent } from '@/components/ui/card';
import { 
  Truck, 
  Headphones, 
  Shield, 
  RotateCcw, 
  CreditCard, 
  Award 
} from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders over $50",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment processing",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options available",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Premium quality assurance",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience exceptional service with every purchase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800 overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Check mark animation */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 transform skew-x-12" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;