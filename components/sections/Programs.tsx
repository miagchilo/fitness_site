
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle, SubTitle, Paragraph } from '../ui/Typography';
import { Button } from '../ui/Buttons';
import { Program } from '../../types';
import { ArrowUpRight } from 'lucide-react';

const MotionDiv = motion.div as any;

interface ProgramsProps {
  programs: Program[];
  onViewProtocol?: (program: Program) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ programs, onViewProtocol }) => {
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(programs.length > 0 ? programs[0].id : null);

  return (
    <section id="programs" className="py-32 bg-mist text-black relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <SubTitle>Training Protocols</SubTitle>
            <SectionTitle>Forge Your<br />Legacy</SectionTitle>
          </div>
          <Paragraph className="mb-4 text-right">
            Select a protocol to view details.<br/>Designed for the 1%.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* List View */}
            <div className="lg:col-span-7 flex flex-col">
                {programs.map((program, index) => (
                    <div 
                        key={program.id}
                        className="group relative border-t border-black/20 py-12 cursor-pointer transition-colors hover:bg-white"
                        onMouseEnter={() => setHoveredProgram(program.id)}
                        onClick={() => onViewProtocol ? onViewProtocol(program) : null}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 px-4">
                            <div className="flex items-baseline gap-6">
                                <span className="font-heading text-4xl text-black/20 group-hover:text-black transition-colors">0{index + 1}</span>
                                <div>
                                    <h3 className="font-heading text-4xl md:text-6xl uppercase text-black mb-2 transition-transform group-hover:translate-x-4 duration-300">
                                        {program.title}
                                    </h3>
                                    <p className="font-sub text-[10px] uppercase tracking-[0.2em] text-black font-bold">{program.subtitle}</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="font-bold font-sub text-lg text-cobalt">{program.price}</span>
                                <div className="w-12 h-12 rounded-full border border-cobalt flex items-center justify-center bg-cobalt text-white">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="border-t border-black/20" />
            </div>

            {/* Dynamic Image Preview (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 relative h-[600px]">
                <div className="sticky top-32 w-full h-full">
                    <div className="w-full h-full border-2 border-black relative overflow-hidden bg-white">
                        <AnimatePresence mode="wait">
                            {programs.map((program) => (
                                hoveredProgram === program.id && (
                                    <MotionDiv
                                        key={program.id}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <img 
                                            src={program.image} 
                                            alt={program.title} 
                                            className="w-full h-full object-cover grayscale contrast-125"
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                        
                                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                            <div className="flex flex-wrap gap-2">
                                                {program.features.map((feature, i) => (
                                                    <span key={i} className="px-3 py-1 border border-white/30 text-white text-[10px] uppercase tracking-wider font-sub backdrop-blur-sm">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </MotionDiv>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                    {/* Decorative box offset */}
                    <div className="absolute inset-0 border-2 border-black -z-10 translate-x-4 translate-y-4" />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
