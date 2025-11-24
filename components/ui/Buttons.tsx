import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'minimal';
  onClick?: (e?: React.MouseEvent) => void;
  href?: string;
  className?: string;
  icon?: boolean;
}

const MotionButton = motion.button as any;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href,
  className = '',
  icon = true
}) => {
  const baseClasses = "relative px-8 py-4 font-heading text-lg uppercase tracking-wider transition-all duration-300 group overflow-hidden flex items-center justify-center gap-3 inline-flex cursor-pointer border-2";
  
  const variants = {
    primary: "bg-black border-black text-white hover:bg-transparent hover:text-black",
    outline: "border-black text-black bg-transparent hover:bg-black hover:text-white",
    minimal: "bg-transparent text-black border-b-2 !border-t-0 !border-x-0 !border-black !px-0 !py-2 hover:opacity-60"
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && variant !== 'minimal' && <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
      {icon && variant === 'minimal' && <ArrowUpRight className="w-4 h-4" />}
    </span>
  );

  const handleInteraction = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onClick={handleInteraction}
      >
        {content}
      </a>
    );
  }

  return (
    <MotionButton
      whileTap={{ scale: 0.98 }}
      onClick={handleInteraction}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </MotionButton>
  );
};