import { useEffect, useRef } from 'react';

const PartnerLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
  { name: "TechCorp", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/6366f1/ffffff?text=TechCorp" },
  { name: "InnovateLab", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/8b5cf6/ffffff?text=InnovateLab" },
  { name: "DigitalForce", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/ec4899/ffffff?text=DigitalForce" },
  { name: "CloudTech", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/06b6d4/ffffff?text=CloudTech" },
  { name: "DataFlow", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/10b981/ffffff?text=DataFlow" },
  { name: "NextGen", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/f59e0b/ffffff?text=NextGen" },
  { name: "SmartSys", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/ef4444/ffffff?text=SmartSys" },
  { name: "FutureTech", logo: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/150x60/8b5cf6/ffffff?text=FutureTech" }];


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const animationDuration = 30000; // 30 seconds for full scroll

    scrollContainer.style.animation = `scroll-horizontal ${animationDuration}ms linear infinite`;

    // Add CSS for the animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-horizontal {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Working with industry leaders to bring you the best products and services
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10" />
          
          {/* Scrolling container */}
          <div className="flex space-x-12" ref={scrollRef}>
            {/* First set of logos */}
            {partners.concat(partners).map((partner, index) =>
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group cursor-pointer"
              style={{
                minWidth: '200px',
                height: '100px'
              }}>

                <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />

              </div>
            )}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
          { number: "50+", label: "Partner Brands" },
          { number: "99%", label: "Uptime" },
          { number: "24/7", label: "Support" },
          { number: "100K+", label: "Happy Customers" }].
          map((stat, index) =>
          <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default PartnerLogos;