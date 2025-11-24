
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Buttons';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;

interface NotFoundProps {
  onReturnHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden text-center p-6">
       
       <MotionDiv 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className="relative z-10"
       >
         <h2 className="font-sub text-black uppercase tracking-[0.5em] text-xs mb-4">Error Code</h2>
         <MotionH1 
           className="font-heading text-[10rem] md:text-[16rem] leading-[0.8] text-black tracking-tighter"
           animate={{ skewX: [0, -2, 2, 0] }}
           transition={{ repeat: Infinity, duration: 4, repeatDelay: 1 }}
         >
           404
         </MotionH1>
         <p className="font-heading uppercase text-black/50 text-2xl max-w-md mx-auto mt-8 mb-12 tracking-wide">
           The page you are looking for does not exist.
         </p>
         
         <div onClick={onReturnHome}>
            <Button variant="primary">Return Home</Button>
         </div>
       </MotionDiv>
    </div>
  );
};
