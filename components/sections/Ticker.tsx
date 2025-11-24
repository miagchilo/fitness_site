
import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-8 overflow-hidden border-y-4 border-black">
      <MotionDiv 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex whitespace-nowrap items-center"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-heading text-6xl uppercase tracking-tighter">Discipline Over Motivation</span>
            <div className="w-4 h-4 bg-white rounded-full mx-8" />
            <span className="font-heading text-6xl uppercase tracking-tighter text-transparent text-outline">Heavy Iron</span>
            <div className="w-4 h-4 bg-white rounded-full mx-8" />
          </div>
        ))}
      </MotionDiv>
    </div>
  );
};
