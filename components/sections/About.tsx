import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, SubTitle, Paragraph } from '../ui/Typography';

const MotionDiv = motion.div as any;

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-mist relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute right-0 top-1/4 w-1/3 h-full bg-white skew-x-12 -z-10" />

        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* Visual Side */}
                <MotionDiv 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="absolute -left-6 -top-6 w-full h-full bg-cobalt -z-10" />
                    <div className="aspect-[3/4] bg-white p-2 shadow-xl border-2 border-black">
                         <img 
                            src="https://picsum.photos/seed/man_fitness/800/1000" 
                            alt="Stanislav Portrait" 
                            className="w-full h-full object-cover" // Removed grayscale
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-black text-white p-8 max-w-xs hidden md:block border-2 border-white">
                        <p className="font-heading uppercase text-xl leading-tight">"The body is the only outfit you cannot change."</p>
                    </div>
                </MotionDiv>

                {/* Text Content */}
                <div className="lg:col-span-7 pt-12">
                    <SubTitle className="!text-cobalt">The Philosophy</SubTitle>
                    <SectionTitle className="mb-12">Uncompromising <br /><span className="text-cobalt">Standards</span></SectionTitle>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="space-y-6">
                            <p className="font-bold text-black text-lg uppercase tracking-wide border-l-4 border-volt pl-4">Mediocrity is a disease.</p>
                            <Paragraph>
                                My approach is not for the casual enthusiast; it is for the individual who demands absolute mastery over their physical form. We combine old-school heavy lifting with modern exercise science.
                            </Paragraph>
                        </div>
                        <div>
                             <Paragraph>
                                Sculpting physiques that are not just impressive to look at, but dangerous in performance. This is art in motion.
                            </Paragraph>
                        </div>
                    </div>

                    <div className="flex gap-16 border-t border-black/10 pt-8">
                        <div>
                            <span className="block font-heading text-6xl text-cobalt mb-2">10+</span>
                            <span className="text-black font-sub text-[10px] uppercase tracking-widest font-bold">Years Experience</span>
                        </div>
                         <div>
                            <span className="block font-heading text-6xl text-cobalt mb-2">500+</span>
                            <span className="text-black font-sub text-[10px] uppercase tracking-widest font-bold">Elite Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};