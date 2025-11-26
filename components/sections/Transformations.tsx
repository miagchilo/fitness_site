
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, SubTitle } from '../ui/Typography';
import { Transformation } from '../../types';

const MotionDiv = motion.div as any;

interface TransformationsProps {
  items: Transformation[];
}

export const Transformations: React.FC<TransformationsProps> = ({ items }) => {
  
  // Specific fallback for "Before" images
  const handleBeforeError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop";
    e.currentTarget.onerror = null;
  };

  // Specific fallback for "After" images
  const handleAfterError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop";
    e.currentTarget.onerror = null;
  };

  return (
    <section id="results" className="py-32 bg-white relative border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
           <div>
              <SubTitle className="!text-cobalt">Evidence</SubTitle>
              <SectionTitle className="mb-0">Client<br />Results</SectionTitle>
           </div>
           <p className="text-right font-body text-black/70 mt-6 md:mt-0 max-w-sm">
             The only metric that matters is the outcome. These are real transformations from the Elite Protocol.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <MotionDiv
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Split Image Card */}
              <div className="flex h-[400px] border-2 border-black relative overflow-hidden mb-6 shadow-lg">
                 {/* Before */}
                 <div className="w-1/2 h-full relative border-r border-black">
                    <img 
                      src={item.imageBefore} 
                      alt={`${item.name} Before`} 
                      onError={handleBeforeError}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4 bg-black/90 text-white px-2 py-1 text-[10px] font-bold font-sub uppercase tracking-widest backdrop-blur-sm">
                       Before
                    </div>
                 </div>
                 {/* After */}
                 <div className="w-1/2 h-full relative">
                    <img 
                      src={item.imageAfter} 
                      alt={`${item.name} After`} 
                      onError={handleAfterError}
                      className="w-full h-full object-cover" 
                    />
                     <div className="absolute top-4 right-4 bg-volt text-black px-2 py-1 text-[10px] font-bold font-sub uppercase tracking-widest shadow-lg border border-black">
                       After
                    </div>
                 </div>

                 {/* Stats Overlay on Hover */}
                 <div className="absolute bottom-0 left-0 w-full bg-black border-t-2 border-volt p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     <p className="font-heading text-2xl uppercase text-white mb-1">{item.stats}</p>
                     <p className="font-sub text-[10px] uppercase tracking-widest text-volt">{item.timeframe}</p>
                 </div>
              </div>

              <div className="flex justify-between items-end px-2">
                 <h3 className="font-heading text-3xl uppercase text-black">{item.name}</h3>
                 <span className="font-sub text-[10px] uppercase tracking-widest text-black/50 underline decoration-cobalt decoration-2 underline-offset-4 group-hover:text-cobalt transition-colors">Read Case Study</span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
