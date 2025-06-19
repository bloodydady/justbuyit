import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, RotateCcw, Maximize2, Heart, ShoppingCart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
  category: string;
}

interface ProductModal3DProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal3D: React.FC<ProductModal3DProps> = ({ product, isOpen, onClose }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current || !isOpen) return;

      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = ((e.clientY - centerY) / rect.height) * 30;
      const rotateY = ((e.clientX - centerX) / rect.width) * 30;
      
      setRotationX(-rotateX);
      setRotationY(rotateY);
    };

    const handleMouseLeave = () => {
      setRotationX(0);
      setRotationY(0);
    };

    if (isOpen && imageRef.current) {
      imageRef.current.addEventListener('mousemove', handleMouseMove);
      imageRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('mousemove', handleMouseMove);
        imageRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isOpen]);

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
    setScale(isZoomed ? 1 : 1.5);
  };

  const handleReset = () => {
    setRotationX(0);
    setRotationY(0);
    setScale(1);
    setIsZoomed(false);
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Badge className={`${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* 3D Product Viewer */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <div
                  ref={imageRef}
                  className="w-full h-full flex items-center justify-center p-8 cursor-none"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    className="relative w-full max-w-lg aspect-square"
                    animate={{
                      rotateX: rotationX,
                      rotateY: rotationY,
                      scale: scale
                    }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      willChange: 'transform'
                    }}
                  >
                    {/* Main Product Image */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        style={{
                          transform: 'translateZ(50px)',
                          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                        }}
                      />
                    </div>

                    {/* 3D Depth Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                      style={{
                        transform: 'translateZ(-50px)',
                        filter: 'blur(20px)'
                      }}
                    />

                    {/* Reflection Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                        transform: 'translateZ(51px)'
                      }}
                    />
                  </motion.div>
                </div>

                {/* 3D Controls */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleZoom}
                    className="bg-white/90 hover:bg-white"
                  >
                    {isZoomed ? <Maximize2 className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleReset}
                    className="bg-white/90 hover:bg-white"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                {/* Interaction Hint */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/70 text-center"
                  >
                    <div className="text-sm font-medium">Move mouse to rotate</div>
                    <div className="text-xs">Click zoom to magnify</div>
                  </motion.div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 overflow-y-auto">
                <div className="space-y-6">
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-purple-600">
                        ${product.price}
                      </span>
                      <span className="text-2xl text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% OFF
                      </Badge>
                      <span className="text-sm text-gray-600">Limited time offer</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                          }`}
                        >
                          ★
                        </div>
                      ))}
                    </div>
                    <span className="text-lg font-medium">{product.rating}</span>
                    <span className="text-gray-600">({product.reviews} reviews)</span>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Product Description</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Experience premium quality with this carefully crafted product. Designed with attention to detail and built to last, it combines functionality with style to deliver exceptional value.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Key Features</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        Premium materials and construction
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        Modern design with timeless appeal
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        Exceptional performance and durability
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        Satisfaction guarantee included
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4 pt-6">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart - ${product.price}
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1">
                        <Heart className="h-4 w-4 mr-2" />
                        Add to Wishlist
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal3D;