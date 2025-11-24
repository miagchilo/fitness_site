
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BarChart2, CheckCircle } from 'lucide-react';
import { Program } from '../../types';
import { Navbar } from '../layout/Navbar';
import { Button } from '../ui/Buttons';
import { Contact } from '../sections/Contact';

interface ProtocolPageProps {
  program: Program;
  onNavigate: (href: string) => void;
  onStartForm: (programId: string) => void;
}

export const ProtocolPage: React.FC<ProtocolPageProps> = ({ program, onNavigate, onStartForm }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [program]);

  return (
    <div className="min-h-screen bg-white text-black font-body">
      <Navbar isHome={false} onNavigate={onNavigate} />
      
      <main className="pt-32 pb-16 md:pt-40 container mx-auto px-6">
        <button 
          onClick={() => onNavigate('#programs')}
          className="flex items-center gap-2 text-xs font-sub uppercase tracking-widest text-granite hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Programs
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sub text-xs uppercase tracking-[0.3em] text-granite block mb-4">
              Protocol // {program.id.toUpperCase()}
            </span>
            <h1 className="font-heading text-6xl md:text-8xl leading-[0.9] text-black mb-8 uppercase">
              {program.title}
            </h1>
            <h2 className="font-sub text-2xl text-cobalt mb-8 font-bold uppercase tracking-wide">
              {program.subtitle}
            </h2>
            
            <p className="font-body text-lg leading-relaxed text-black/80 mb-12">
              {program.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-black/10 py-8">
               <div>
                  <div className="flex items-center gap-2 mb-2 text-granite">
                    <Clock size={16} />
                    <span className="font-sub text-[10px] uppercase tracking-widest">Duration</span>
                  </div>
                  <p className="font-heading text-2xl">{program.duration}</p>
               </div>
               <div>
                  <div className="flex items-center gap-2 mb-2 text-granite">
                    <BarChart2 size={16} />
                    <span className="font-sub text-[10px] uppercase tracking-widest">Difficulty</span>
                  </div>
                  <p className="font-heading text-2xl">{program.difficulty}</p>
               </div>
            </div>

            <div className="mb-12">
               <h3 className="font-sub text-xs uppercase tracking-widest text-black mb-6">Curriculum Breakdown</h3>
               <ul className="space-y-4">
                  {program.curriculum.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <CheckCircle size={16} className="text-cobalt" />
                      <span className="font-body font-bold text-lg text-black">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="flex items-center gap-8">
               <Button onClick={() => onStartForm(program.id)} variant="primary">
                  Start Application
               </Button>
               <span className="font-heading text-3xl text-black">{program.price}</span>
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative h-[60vh] lg:h-auto bg-mist overflow-hidden"
          >
             <div className="absolute inset-0 border border-black/5 z-10" />
             <img 
               src={program.image} 
               alt={program.title} 
               className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-1000"
             />
             
             <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur p-6 border border-black/10">
                <p className="font-sub text-[10px] uppercase tracking-widest text-granite mb-2">Results Guarantee</p>
                <p className="font-body font-bold text-black">
                  "This program is designed to break plateaus. If you do the work, the results are inevitable."
                </p>
             </div>
          </motion.div>

        </div>
      </main>
      
      <Contact onApply={() => onStartForm(program.id)} />
    </div>
  );
};
