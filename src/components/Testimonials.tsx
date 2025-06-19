import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Designer",
      company: "StyleCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "JUSTBUYIT has completely transformed my shopping experience. The quality of products is exceptional, and the customer service is outstanding. I've been a loyal customer for over two years now!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The tech products available on JUSTBUYIT are cutting-edge and reasonably priced. Fast shipping and excellent packaging. This platform has become my go-to for all tech purchases."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      company: "Home & Space",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I love the home decor section! The variety and quality are amazing. Every item I've purchased has exceeded my expectations. JUSTBUYIT makes it easy to find unique pieces for my projects."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Director",
      company: "BrandForward",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional service and premium products. The user experience is seamless, and I appreciate the attention to detail in every aspect of the shopping process. Highly recommended!"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Fitness Coach",
      company: "FitLife Studio",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The fitness and wellness products are top-notch. Great prices, fast delivery, and excellent customer support. JUSTBUYIT has everything I need to maintain my active lifestyle."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Customers Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real experiences from real customers who love shopping with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Customer Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-white/70">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Customer thumbnails */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'border-white scale-110'
                    : 'border-white/40 hover:border-white/70 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;