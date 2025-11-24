import React from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const MotionH2 = motion.h2 as any;
const MotionDiv = motion.div as any;
const MotionP = motion.p as any;

export const SectionTitle: React.FC<HeadingProps> = ({ children, className = '' }) => (
  <MotionH2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "circOut" }}
    className={`font-heading uppercase text-6xl md:text-7xl lg:text-8xl text-black leading-[0.9] tracking-tight mb-8 ${className}`}
  >
    {children}
  </MotionH2>
);

export const SubTitle: React.FC<HeadingProps> = ({ children, className = '' }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className={`font-sub text-cobalt uppercase tracking-[0.2em] text-xs font-bold mb-6 flex items-center gap-4 ${className}`}
  >
    <span className="w-6 h-[2px] bg-cobalt inline-block" />
    {children}
  </MotionDiv>
);

export const Paragraph: React.FC<HeadingProps> = ({ children, className = '' }) => (
  <MotionP 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className={`font-body text-black text-base md:text-lg leading-relaxed max-w-xl ${className}`}
  >
    {children}
  </MotionP>
);