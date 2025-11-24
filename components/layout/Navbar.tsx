import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';
import { Button } from '../ui/Buttons';

const MotionNav = motion.nav as any;
const MotionDiv = motion.div as any;
const MotionA = motion.a as any;

interface NavbarProps {
  isHome?: boolean;
  onNavigate?: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isHome = true, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (onNavigate) {
      onNavigate(href);
      return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <MotionNav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/80 border-black/10 py-4 backdrop-blur-md' : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-heading text-3xl text-black tracking-tighter uppercase relative group z-50 mix-blend-difference"
          >
            STANISLAV<span className="text-black">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sub text-[10px] uppercase tracking-[0.25em] text-black font-bold hover:opacity-50 transition-opacity cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="primary" 
              className="!py-2 !px-6 !text-xs !border" 
              href="#contact"
              onClick={(e) => handleNavClick(e!, '#contact')}
              icon={false}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-black z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </MotionNav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item, i) => (
                <MotionA
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e: React.MouseEvent) => handleNavClick(e, item.href)}
                  className="font-heading text-6xl text-black uppercase tracking-tight hover:text-outline transition-colors cursor-pointer"
                >
                  {item.label}
                </MotionA>
              ))}
              <div className="mt-8">
                 <Button href="#contact" onClick={(e) => handleNavClick(e!, '#contact')}>Start Training</Button>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};