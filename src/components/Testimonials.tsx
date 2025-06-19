import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Blogger',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
      rating: 5,
      review: "JUSTBUYIT has completely transformed my online shopping experience. The quality of products is exceptional, and the customer service is outstanding. I've recommended it to all my friends!",
      longReview: "I've been shopping with JUSTBUYIT for over two years now, and I can honestly say it's the best e-commerce platform I've ever used. The attention to detail in packaging, the speed of delivery, and the quality of products consistently exceed my expectations.",
      category: 'Fashion & Lifestyle',
      verified: true,
      purchaseCount: 47
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Tech Entrepreneur',
      location: 'San Francisco, USA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4',
      rating: 5,
      review: "As someone who values cutting-edge technology, I appreciate how JUSTBUYIT stays ahead of the curve. Their tech products are always the latest and greatest, and the prices are unbeatable.",
      longReview: "The tech selection at JUSTBUYIT is incredible. From the latest smartphones to innovative gadgets, they have everything a tech enthusiast could want. The detailed specifications and expert reviews help make informed decisions.",
      category: 'Technology',
      verified: true,
      purchaseCount: 23
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      location: 'Los Angeles, USA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4',
      rating: 5,
      review: "The home decor section is a treasure trove of beautiful, high-quality pieces. I've furnished multiple client projects with items from JUSTBUYIT, and they never disappoint.",
      longReview: "What sets JUSTBUYIT apart is their curated selection of home decor items. Each piece is carefully chosen for quality and style. The detailed product descriptions and multiple angle photos make online shopping feel like browsing in a premium showroom.",
      category: 'Home & Decor',
      verified: true,
      purchaseCount: 31
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Fitness Coach',
      location: 'Miami, USA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
      rating: 5,
      review: "JUSTBUYIT's sports and fitness equipment section is phenomenal. The quality is gym-grade, and the delivery is lightning fast. Perfect for both personal use and my training studio.",
      longReview: "I've equipped my entire fitness studio with products from JUSTBUYIT. The quality rivals professional gym equipment, but at a fraction of the cost. Their customer support team is also incredibly knowledgeable about fitness products.",
      category: 'Sports & Fitness',
      verified: true,
      purchaseCount: 19
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Beauty Influencer',
      location: 'Toronto, Canada',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4',
      rating: 5,
      review: "The beauty and skincare products are authentic and fresh. I love how they partner with premium brands to bring exclusive items. My followers always ask where I get my products!",
      longReview: "As a beauty influencer, authenticity is crucial. JUSTBUYIT only stocks genuine products with proper batch codes and expiration dates. Their beauty section features both popular and niche brands that my audience loves to discover.",
      category: 'Beauty & Skincare',
      verified: true,
      purchaseCount: 56
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Business Executive',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4',
      rating: 5,
      review: "Exceptional service and premium quality products. The international shipping is reliable, and the customer support team is always helpful. JUSTBUYIT sets the standard for e-commerce excellence.",
      longReview: "Managing a busy schedule means I need reliable online shopping. JUSTBUYIT delivers consistently - from business attire to tech gadgets. The premium membership benefits and priority customer service make it worth every penny.",
      category: 'Business & Professional',
      verified: true,
      purchaseCount: 34
    }
  ];

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Customer Love Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied customers who've experienced the JUSTBUYIT difference
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                <div className="relative rounded-xl overflow-hidden bg-black">
                  <video
                    key={activeTestimonial}
                    autoPlay={isPlaying}
                    muted
                    loop
                    className="w-full h-96 object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={currentTestimonial.video} type="video/mp4" />
                  </video>
                  
                  {/* Play Button Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <Play className="h-12 w-12 text-purple-600 ml-1" />
                      </button>
                    </div>
                  )}
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                      <div className="flex items-center gap-3">
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-white"
                        />
                        <div>
                          <div className="font-semibold">{currentTestimonial.name}</div>
                          <div className="text-sm opacity-80">{currentTestimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      Verified Purchase
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                    "{currentTestimonial.review}"
                  </blockquote>

                  {/* Extended Review */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {currentTestimonial.longReview}
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-purple-200 dark:border-purple-700"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {currentTestimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full text-sm font-medium text-purple-800 dark:text-purple-200">
                        {currentTestimonial.category}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {currentTestimonial.purchaseCount} purchases
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setAutoPlay(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-purple-600 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-200 hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">50K+</div>
            <div className="text-gray-600 dark:text-gray-400">Reviews</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">98%</div>
            <div className="text-gray-600 dark:text-gray-400">Recommend Us</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-orange-600">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;