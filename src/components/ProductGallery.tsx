import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Eye, Star, Play } from 'lucide-react';
import ProductModal3D from '@/components/3DProductModal';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  video: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
}

const ProductGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'tech', name: 'Tech & Gadgets', count: 8 },
    { id: 'fashion', name: 'Fashion', count: 10 },
    { id: 'home', name: 'Home & Living', count: 6 }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless AirPods Pro',
      category: 'tech',
      price: 249,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
      rating: 4.8,
      reviews: 2847,
      badge: 'Best Seller',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Designer Leather Jacket',
      category: 'fashion',
      price: 189,
      originalPrice: 250,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4',
      rating: 4.6,
      reviews: 1523,
      badge: 'Limited Edition',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Smart Watch Series 8',
      category: 'tech',
      price: 399,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4',
      rating: 4.9,
      reviews: 3421,
      badge: 'New Arrival',
      badgeColor: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Modern Floor Lamp',
      category: 'home',
      price: 129,
      originalPrice: 169,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
      rating: 4.4,
      reviews: 891,
      badge: 'Sale',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 5,
      name: 'Premium Sneakers',
      category: 'fashion',
      price: 159,
      originalPrice: 199,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4',
      rating: 4.7,
      reviews: 2156,
      badge: 'Popular',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 6,
      name: 'Gaming Mechanical Keyboard',
      category: 'tech',
      price: 189,
      originalPrice: 229,
      image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4',
      rating: 4.8,
      reviews: 1847,
      badge: 'Gaming',
      badgeColor: 'bg-red-500'
    },
    {
      id: 7,
      name: 'Cozy Throw Blanket',
      category: 'home',
      price: 79,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
      rating: 4.5,
      reviews: 672,
      badge: 'Comfort',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 8,
      name: 'Vintage Sunglasses',
      category: 'fashion',
      price: 89,
      originalPrice: 119,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: 'https://videos.pexels.com/video-files/3212450/3212450-uhd_2560_1440_30fps.mp4',
      rating: 4.3,
      reviews: 1234,
      badge: 'Retro',
      badgeColor: 'bg-yellow-500'
    }
  ];

  const filteredProducts = selectedCategory === 'all' ?
    products :
    products.filter((product) => product.category === selectedCategory);

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

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked collection of premium products that blend style, quality, and innovation
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product)}
            >
              <CardContent className="p-0 relative overflow-hidden">
                {/* Product Image/Video */}
                <div className="relative aspect-square overflow-hidden">
                  {hoveredProduct === product.id ? (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    >
                      <source src={product.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-10 group-hover:translate-x-0">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  
                  {/* Quick Add to Cart */}
                  <button
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-10 group-hover:translate-y-0 hover:bg-purple-700 ripple-container"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRippleEffect(e);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 inline" />
                    Add to Cart
                  </button>
                  
                  {/* 3D View Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-4 shadow-lg">
                      <div className="text-center">
                        <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Click for 3D View</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play Icon for Video */}
                  {hoveredProduct !== product.id && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3 hover:bg-white transition-colors">
                        <Play className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-600">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                      {Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% OFF
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 ripple-container"
            onClick={handleRippleEffect}
          >
            Load More Products
          </button>
        </div>
      </div>

      {/* 3D Product Modal */}
      <ProductModal3D
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .ripple-container {
          position: relative;
          overflow: hidden;
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
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
    </section>
  );
};

export default ProductGallery;