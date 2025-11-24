
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { ShopItem } from '../../types';
import { Navbar } from '../layout/Navbar';
import { Button } from '../ui/Buttons';

interface ProductPageProps {
  product: ShopItem;
  onNavigate: (href: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onNavigate }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-body">
      <Navbar isHome={false} onNavigate={onNavigate} />
      
      <main className="pt-32 pb-16 md:pt-40 container mx-auto px-6">
        <button 
          onClick={() => onNavigate('#shop')}
          className="flex items-center gap-2 text-xs font-sub uppercase tracking-widest text-granite hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Gallery */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
            >
                <div className="aspect-square bg-mist relative overflow-hidden mb-4">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-contain p-12 mix-blend-multiply" 
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div className="aspect-square bg-mist" />
                     <div className="aspect-square bg-mist" />
                </div>
            </motion.div>

            {/* Product Details */}
            <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="lg:col-span-5 sticky top-32 h-fit"
            >
                 <div className="mb-8 pb-8 border-b border-black/10">
                    <span className="font-sub text-[10px] uppercase tracking-[0.2em] text-granite block mb-2">{product.category}</span>
                    <h1 className="font-heading text-5xl uppercase text-black mb-4">{product.title}</h1>
                    <p className="font-sub text-2xl font-bold text-cobalt">{product.price}</p>
                 </div>

                 <p className="font-body text-black/80 leading-relaxed mb-8">
                    {product.description || "Premium athletic gear designed for elite performance."}
                 </p>

                 {product.sizes && (
                    <div className="mb-8">
                        <span className="font-sub text-[10px] uppercase tracking-widest text-black block mb-4">Select Size</span>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 border flex items-center justify-center font-sub text-xs transition-all ${
                                        selectedSize === size 
                                        ? 'border-black bg-black text-white' 
                                        : 'border-black/20 text-black hover:border-black'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                 )}

                 <div className="mb-12">
                     <Button 
                        variant="primary" 
                        className="w-full justify-center" 
                        onClick={handleAddToCart}
                        icon={!added}
                     >
                        {added ? (
                            <span className="flex items-center gap-2"><Check size={16} /> Added to Cart</span>
                        ) : (
                            <span className="flex items-center gap-2">Add to Cart - {product.price}</span>
                        )}
                     </Button>
                 </div>

                 <div className="bg-mist p-6 border border-black/5">
                    <h3 className="font-heading text-xl uppercase mb-4">Product Details</h3>
                    <ul className="space-y-2">
                        {product.details ? product.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="w-1 h-1 bg-black rounded-full mt-2" />
                                <span className="font-sub font-bold text-sm text-black/70">{detail}</span>
                            </li>
                        )) : (
                            <li className="font-sub font-bold text-sm text-black/70">High quality materials.</li>
                        )}
                    </ul>
                 </div>
            </motion.div>
        </div>
      </main>
    </div>
  );
};
