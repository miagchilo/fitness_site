import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Buttons';

const MotionDiv = motion.div as any;

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 150]);

  // IMAGE CONFIGURATION
  // 1. Google Drive CDN Link (Primary)
  const DRIVE_IMAGE = "https://lh3.googleusercontent.com/d/1aWH_tuqdZnorB-LsIdnUFED1xV8cSEo5";
  // 2. Unsplash Fallback (Secondary)
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2000&auto=format&fit=crop";

  const [activeImage, setActiveImage] = useState(DRIVE_IMAGE);

  const handleError = () => {
    if (activeImage !== FALLBACK_IMAGE) {
        console.warn("Primary image failed. Switching to fallback.");
        setActiveImage(FALLBACK_IMAGE);
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-white pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      
      {/* Decorative Volt Circle */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-volt rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
                <div className="overflow-hidden relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-2 bg-cobalt" />
                    <motion.h1 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="font-heading text-[15vw] lg:text-[11vw] leading-[0.95] text-black uppercase tracking-tighter mb-8 pl-6"
                    >
                        Beyond<br/>Human
                    </motion.h1>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-8 pl-8"
                >
                    <p className="font-heading text-xl md:text-2xl text-black max-w-md leading-tight uppercase">
                        "The body is the only outfit you cannot change. <span className="text-cobalt">Tailor it to perfection.</span>"
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <Button href="#programs" variant="volt">Start Protocol</Button>
                        <Button href="#results" variant="outline">Real Results</Button>
                    </div>
                </motion.div>
            </div>

            <div className="lg:col-span-5 relative lg:h-[80vh] min-h-[50vh]">
                 <MotionDiv
                   style={{ y: yImage }}
                   className="w-full h-full relative"
                 >
                    <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-black hidden lg:block" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-volt hidden lg:block" />

                    <div className="w-full h-full bg-white relative overflow-hidden border-2 border-black shadow-2xl">
                        <motion.img 
                          key={activeImage}
                          src={activeImage}
                          alt="Stanislav Portrait"
                          onError={handleError}
                          referrerPolicy="no-referrer"
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="w-full h-full object-cover"
                        />
                        
                        <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/40 to-transparent text-white z-20">
                           <div className="flex justify-between items-start">
                               <p className="font-sub text-[10px] uppercase tracking-[0.3em] font-bold text-volt drop-shadow-md">Elite Protocol</p>
                               <span className="font-heading text-xl drop-shadow-md">01</span>
                           </div>
                        </div>
                    </div>
                 </MotionDiv>
            </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none select-none">
          <span className="font-heading text-[20vw] leading-none uppercase text-cobalt">Est.2024</span>
      </div>

    </section>
  );
};