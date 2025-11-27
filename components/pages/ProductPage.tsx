
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Check, Loader2 } from 'lucide-react';
import { ShopItem } from '../../types';
import { Navbar } from '../layout/Navbar';
import { Button } from '../ui/Buttons';

interface ProductPageProps {
  product: ShopItem;
  onNavigate: (href: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onNavigate }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleJoinClick = () => {
    setShowEmailInput(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to save email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowEmailInput(false);
    }, 1500);
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
                <div className="aspect-square bg-mist relative overflow-hidden mb-4 border border-black/5">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-contain p-12 mix-blend-multiply" 
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div className="aspect-square bg-mist border border-black/5" />
                     <div className="aspect-square bg-mist border border-black/5" />
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
                     <AnimatePresence mode="wait">
                        {!showEmailInput && !isSuccess ? (
                             <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                             >
                                 <Button 
                                    variant="volt" 
                                    className="w-full justify-center !py-5" 
                                    onClick={handleJoinClick}
                                    icon={true}
                                 >
                                    Join Waiting List
                                 </Button>
                                 <p className="text-center mt-3 text-xs text-granite">
                                    Limited stock releasing Q4 2024. Get notified.
                                 </p>
                             </motion.div>
                        ) : isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-volt/10 border border-volt p-6 text-center"
                            >
                                <div className="w-12 h-12 bg-volt text-black rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Check size={20} />
                                </div>
                                <h4 className="font-heading uppercase text-xl mb-1">You're on the list</h4>
                                <p className="text-sm text-black/70">We will text you when the drop goes live.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-granite w-5 h-5" />
                                    <input 
                                        type="email" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="ENTER YOUR EMAIL" 
                                        className="w-full bg-mist border border-black/10 p-4 pl-12 text-black focus:border-black focus:outline-none placeholder:text-granite font-body text-sm uppercase tracking-wider"
                                    />
                                </div>
                                <Button 
                                    variant="primary" 
                                    className="w-full justify-center" 
                                    onClick={() => {}} // Handled by form submit
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : 'Join List'}
                                </Button>
                                <button 
                                    type="button" 
                                    onClick={() => setShowEmailInput(false)} 
                                    className="w-full text-center text-xs uppercase tracking-widest text-granite hover:text-black py-2"
                                >
                                    Cancel
                                </button>
                            </motion.form>
                        )}
                     </AnimatePresence>
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
