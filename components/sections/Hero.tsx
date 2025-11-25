
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Buttons';

const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen w-full bg-white pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content - Typography & Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="font-heading text-[15vw] lg:text-[11vw] leading-[0.95] text-black uppercase tracking-tighter mb-8"
                    >
                        Beyond<br/>Human
                    </motion.h1>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-8 pl-2 md:pl-4 border-l-4 border-black"
                >
                    <p className="font-heading text-xl md:text-2xl text-black max-w-md leading-tight uppercase">
                        "The body is the only outfit you cannot change. Tailor it to perfection."
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <Button href="#programs" variant="primary">Start Protocol</Button>
                        <Button href="#results" variant="outline">Real Results</Button>
                    </div>
                </motion.div>
            </div>

            {/* Right Content - Visual */}
            <div className="lg:col-span-5 relative lg:h-[80vh] min-h-[50vh]">
                 <MotionDiv
                   style={{ y: yImage }}
                   className="w-full h-full relative"
                 >
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-black hidden lg:block" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-black hidden lg:block" />

                    <div className="w-full h-full bg-white relative overflow-hidden border-2 border-black shadow-2xl">
                        <MotionImg 
                          src="/hero.jpg"
                          alt="Stanislav Portrait"
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="w-full h-full object-cover contrast-110"
                        />
                        
                        {/* Overlay Text */}
                        <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/40 to-transparent text-white">
                           <div className="flex justify-between items-start">
                               <p className="font-sub text-[10px] uppercase tracking-[0.3em] font-bold text-cobalt drop-shadow-md">Elite Protocol</p>
                               <span className="font-heading text-xl drop-shadow-md">01</span>
                           </div>
                        </div>
                    </div>
                 </MotionDiv>
            </div>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none select-none">
          <span className="font-heading text-[20vw] leading-none uppercase text-black">Est.2024</span>
      </div>

    </section>
  );
};
