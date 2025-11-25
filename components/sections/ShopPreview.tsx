import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, SubTitle } from '../ui/Typography';
import { staggerContainer, fadeInUp } from '../../constants';
import { Button } from '../ui/Buttons';
import { ShopItem } from '../../types';

const MotionDiv = motion.div as any;

interface ShopPreviewProps {
  items: ShopItem[];
  onViewProduct?: (item: ShopItem) => void;
}

export const ShopPreview: React.FC<ShopPreviewProps> = ({ items, onViewProduct }) => {
  return (
    <section id="shop" className="py-32 bg-ink text-white relative">
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <SubTitle className="!text-volt">Premium Gear</SubTitle>
              <SectionTitle className="!text-white">Equip for <br />War</SectionTitle>
            </div>
            <div className="mb-4">
                <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-black" onClick={() => alert("Full online store functionality launching in Q4 2024. Join the newsletter to be notified.")}>Visit Full Store</Button>
            </div>
         </div>

         <MotionDiv
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
         >
            {items.map((item) => (
              <MotionDiv
                key={item.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => onViewProduct ? onViewProduct(item) : alert("Product details coming soon.")}
              >
                <div className="aspect-square overflow-hidden relative bg-zinc-800 mb-6 p-8 flex items-center justify-center border border-white/5">
                   <img
                     src={item.image}
                     alt={item.title}
                     className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" // Removed mix-blend for full color
                   />
                   <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-volt opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex justify-between items-start">
                    <div>
                        <span className="font-sub text-[10px] text-zinc-400 tracking-[0.2em] uppercase block mb-1">{item.category}</span>
                        <h3 className="font-heading text-xl text-white uppercase group-hover:text-volt transition-colors">{item.title}</h3>
                    </div>
                    <p className="font-sub text-volt font-bold text-sm">{item.price}</p>
                </div>
              </MotionDiv>
            ))}
         </MotionDiv>
       </div>
    </section>
  );
};