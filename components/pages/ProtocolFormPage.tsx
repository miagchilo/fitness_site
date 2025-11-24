import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, AlertCircle } from 'lucide-react';
import { Program } from '../../types';
import { Navbar } from '../layout/Navbar';
import { Button } from '../ui/Buttons';
import { supabase } from '../../lib/supabase';

interface ProtocolFormPageProps {
  program?: Program; // Optional, can apply generally
  onNavigate: (href: string) => void;
}

export const ProtocolFormPage: React.FC<ProtocolFormPageProps> = ({ program, onNavigate }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    age: '',
    experience: '',
    goal: 'Hypertrophy (Muscle Gain)',
    injuries: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // If supabase is not configured, simulate success (or show error in dev)
    if (!supabase) {
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3);
      }, 2000);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('applications')
        .insert([{
            ...formData,
            status: 'pending'
        }]);

      if (insertError) throw insertError;

      // Success
      setStep(3);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-body">
      <Navbar isHome={false} onNavigate={onNavigate} />
      
      <main className="pt-32 pb-16 md:pt-40 container mx-auto px-6 max-w-3xl">
        <button 
          onClick={() => onNavigate('#programs')}
          className="flex items-center gap-2 text-xs font-sub uppercase tracking-widest text-granite hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Cancel Application
        </button>

        {step < 3 && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <span className="font-sub text-xs uppercase tracking-[0.3em] text-granite block mb-4">
                    Step 0{step} / 02
                </span>
                <h1 className="font-heading text-5xl md:text-6xl uppercase leading-none mb-4">
                    {program ? `Apply for ${program.title}` : 'General Coaching Application'}
                </h1>
                <p className="font-sub text-xl text-black/60 font-bold">
                    Tell us about your current condition and goals.
                </p>
            </motion.div>
        )}

        {step === 1 && (
             <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
                onSubmit={(e) => { e.preventDefault(); setStep(2); }}
             >
                <div className="space-y-8">
                    <div className="group">
                        <label className="block font-sub text-[10px] uppercase tracking-widest text-granite mb-2 group-focus-within:text-black transition-colors">Full Name</label>
                        <input 
                          required 
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleInputChange}
                          type="text" 
                          className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-heading uppercase focus:outline-none focus:border-black transition-colors placeholder:text-black/10" 
                          placeholder="John Doe" 
                        />
                    </div>
                    <div className="group">
                        <label className="block font-sub text-[10px] uppercase tracking-widest text-granite mb-2 group-focus-within:text-black transition-colors">Email Address</label>
                        <input 
                          required 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          type="email" 
                          className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-heading uppercase focus:outline-none focus:border-black transition-colors placeholder:text-black/10" 
                          placeholder="john@example.com" 
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="group">
                            <label className="block font-sub text-[10px] uppercase tracking-widest text-granite mb-2 group-focus-within:text-black transition-colors">Age</label>
                            <input 
                              required 
                              name="age"
                              value={formData.age}
                              onChange={handleInputChange}
                              type="number" 
                              className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-heading uppercase focus:outline-none focus:border-black transition-colors placeholder:text-black/10" 
                              placeholder="25" 
                            />
                        </div>
                        <div className="group">
                            <label className="block font-sub text-[10px] uppercase tracking-widest text-granite mb-2 group-focus-within:text-black transition-colors">Experience (Years)</label>
                            <input 
                              required 
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              type="number" 
                              className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-heading uppercase focus:outline-none focus:border-black transition-colors placeholder:text-black/10" 
                              placeholder="3" 
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex justify-end">
                    <Button variant="primary" onClick={() => {}}>Next Step</Button>
                </div>
             </motion.form>
        )}

        {step === 2 && (
             <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
                onSubmit={handleSubmit}
             >
                <div className="space-y-8">
                    <div className="group">
                        <label className="block font-sub text-[10px] uppercase tracking-widest text-granite mb-2 group-focus-within:text-black transition-colors">Primary Goal</label>
                        <select 
                          name="goal"
                          value={formData.goal}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-heading uppercase focus:outline-none focus:border-black transition-colors appearance-none rounded-none"
                        >
                            <option>Hypertrophy (Muscle Gain)</option>
                            <option>Fat Loss (Cutting)</option>
                            <option>Strength (Powerlifting)</option>
                            <option>Athletic Performance</option>
                        </select>
                    </div>
                    <div className="group">
                        <label className="block font-sub text-[10px] uppercase tracking-widest text-granite mb-2 group-focus-within:text-black transition-colors">Current Injuries / Limitations</label>
                        <textarea 
                          name="injuries"
                          value={formData.injuries}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-body focus:outline-none focus:border-black transition-colors placeholder:text-black/10 resize-none h-32" 
                          placeholder="List any injuries..." 
                        />
                    </div>
                    <div className="group">
                        <label className="block font-sub text-[10px] uppercase tracking-widest text-granite mb-2 group-focus-within:text-black transition-colors">Why do you want to join?</label>
                        <textarea 
                          required 
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-body focus:outline-none focus:border-black transition-colors placeholder:text-black/10 resize-none h-32" 
                          placeholder="I am ready to commit..." 
                        />
                    </div>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 flex items-center gap-2 text-sm font-bold">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}

                <div className="pt-8 flex justify-between items-center">
                    <button type="button" onClick={() => setStep(1)} className="text-xs font-sub uppercase tracking-widest text-granite hover:text-black">Back</button>
                    <Button variant="primary" onClick={() => {}}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                </div>
             </motion.form>
        )}

        {step === 3 && (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 border border-black/10 bg-mist p-12"
            >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send size={24} />
                </div>
                <h2 className="font-heading text-4xl uppercase mb-4">Application Received</h2>
                <p className="font-body text-xl text-black/70 mb-8">
                    Your application is under review. If you are selected, a coach will reach out within 48 hours.
                </p>
                <div onClick={() => onNavigate('#home')}>
                    <Button variant="outline">Return Home</Button>
                </div>
            </motion.div>
        )}

      </main>
    </div>
  );
};
