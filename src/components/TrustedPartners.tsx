import React, { useEffect, useState } from 'react';

const TrustedPartners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSet, setCurrentSet] = useState(0);

  const partnerSets = [
    [
      {
        name: 'Apple',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg',
        description: 'Premium Technology'
      },
      {
        name: 'Samsung',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/samsung.svg',
        description: 'Innovation Leader'
      },
      {
        name: 'Nike',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nike.svg',
        description: 'Athletic Excellence'
      },
      {
        name: 'Adidas',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adidas.svg',
        description: 'Sports Innovation'
      },
      {
        name: 'Sony',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sony.svg',
        description: 'Entertainment Tech'
      },
      {
        name: 'Microsoft',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg',
        description: 'Technology Solutions'
      }
    ],
    [
      {
        name: 'Amazon',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg',
        description: 'E-commerce Giant'
      },
      {
        name: 'Google',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg',
        description: 'Search & Cloud'
      },
      {
        name: 'Tesla',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg',
        description: 'Electric Innovation'
      },
      {
        name: 'Netflix',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg',
        description: 'Streaming Leader'
      },
      {
        name: 'Spotify',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg',
        description: 'Music Streaming'
      },
      {
        name: 'Adobe',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg',
        description: 'Creative Software'
      }
    ]
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

    const element = document.getElementById('partners');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % partnerSets.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, partnerSets.length]);

  return (
    <section id="partners" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Trusted By Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We partner with the world's most innovative brands to bring you the best products and services
          </p>
        </div>

        {/* Partners Grid */}
        <div className="relative h-96 overflow-hidden">
          {partnerSets.map((partners, setIndex) => (
            <div
              key={setIndex}
              className={`absolute inset-0 transition-all duration-1000 ${
                setIndex === currentSet ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 h-full items-center">
                {partners.map((partner, index) => (
                  <div
                    key={partner.name}
                    className={`group text-center transition-all duration-700 hover:scale-110 hover:-translate-y-2 ${
                      isVisible ? 'animate-float-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-8 h-8 object-contain filter dark:invert group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-600 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                        {partner.description}
                      </p>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {partnerSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSet(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSet ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-random opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">200+</div>
            <div className="text-gray-600 dark:text-gray-400">Global Partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">99.9%</div>
            <div className="text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-orange-600">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float-random {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
          }
        }
        
        .animate-float-in {
          animation: float-in 0.8s ease-out forwards;
        }
        
        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedPartners;