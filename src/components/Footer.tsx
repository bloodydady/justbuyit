import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Truck,
  Shield,
  Award,
  CreditCard } from
'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Products', href: '#products' },
  { name: 'Features', href: '#features' },
  { name: 'Partners', href: '#partners' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'About Us', href: '#about' }];


  const categories = [
  'Electronics & Tech',
  'Fashion & Apparel',
  'Home & Garden',
  'Sports & Outdoors',
  'Beauty & Health',
  'Books & Media'];


  const customerService = [
  'Contact Support',
  'Shipping Info',
  'Returns & Exchanges',
  'Size Guide',
  'Track Your Order',
  'FAQ'];


  const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' }];


  const trustBadges = [
  { icon: Truck, text: 'Free Shipping', color: 'text-blue-600' },
  { icon: Shield, text: 'Secure Payment', color: 'text-green-600' },
  { icon: Award, text: 'Quality Guarantee', color: 'text-purple-600' },
  { icon: CreditCard, text: 'Easy Returns', color: 'text-orange-600' }];


  return (
    <footer id="footer" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 opacity-10">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover">

          <source src="https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-gray-900/90 to-blue-900/80" />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-2xl">
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Stay Connected with JUSTBUYIT
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Subscribe to get exclusive deals, early access to sales, and the latest updates
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/20 border-white/30 placeholder:text-white/70 text-white" />

                  <Button
                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 ripple-container"
                    onClick={handleRippleEffect}>

                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  JUSTBUYIT
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted partner for premium online shopping. We bring you the best products 
                  from around the world with unmatched quality and service.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <a href="mailto:support@justbuyit.com" className="text-gray-400 hover:text-white transition-colors">
                    support@justbuyit.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a href="tel:+1-800-123-4567" className="text-gray-400 hover:text-white transition-colors">
                    +1 (800) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-gray-400">
                    123 Commerce St, New York, NY 10013
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}>

                      <IconComponent className="h-5 w-5" />
                    </a>);

                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) =>
                <li key={link.name}>
                    <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center gap-2 group">

                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Shop Categories</h4>
              <ul className="space-y-3">
                {categories.map((category) =>
                <li key={category}>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center gap-2 group">

                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {category}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Customer Service</h4>
              <ul className="space-y-3">
                {customerService.map((service) =>
                <li key={service}>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center gap-2 group">

                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <div key={badge.text} className="flex items-center gap-3 justify-center">
                    <IconComponent className={`h-6 w-6 ${badge.color}`} />
                    <span className="text-gray-400 font-medium">{badge.text}</span>
                  </div>);

              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>&copy; 2024 JUSTBUYIT. All rights reserved.</span>
                <Heart className="h-4 w-4 text-red-500" />
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) =>
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}>

            <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
          </div>
        )}
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
        
        .ripple-container {
          position: relative;
          overflow: hidden;
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
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
    </footer>);

};

export default Footer;