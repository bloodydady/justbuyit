import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductGallery = () => {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: 129.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 324,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
      category: "Electronics",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Watch Ultra",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      category: "Electronics",
      badge: "New"
    },
    {
      id: 3,
      name: "Premium Leather Jacket",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      category: "Fashion",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Minimalist Desk Lamp",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      category: "Home",
      badge: null
    },
    {
      id: 5,
      name: "Gaming Mechanical Keyboard",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      category: "Electronics",
      badge: "Hot"
    },
    {
      id: 6,
      name: "Cozy Knit Sweater",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.5,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      category: "Fashion",
      badge: null
    }
  ];

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products that combine quality, style, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {product.badge && (
                    <Badge 
                      variant={product.badge === 'Sale' ? 'destructive' : 'default'}
                      className={`${
                        product.badge === 'New' ? 'bg-green-500' : 
                        product.badge === 'Hot' ? 'bg-red-500' : 
                        product.badge === 'Best Seller' ? 'bg-purple-500' : ''
                      } text-white font-semibold`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(product.id);
                    }}
                    className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-200 ${
                        likedProducts.includes(product.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;