
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types';
import { Navbar } from '../layout/Navbar';
import { Contact } from '../sections/Contact';
import { Button } from '../ui/Buttons';

const MotionDiv = motion.div as any;

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (href: string) => void;
  onApply?: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate, onApply }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <div className="min-h-screen bg-white text-black font-body">
      <Navbar isHome={false} onNavigate={onNavigate} />
      
      {/* Header Section */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <button 
                  onClick={() => onNavigate('#blog')}
                  className="flex items-center gap-2 text-xs font-sub uppercase tracking-widest text-granite hover:text-black transition-colors mb-8"
                >
                    <ArrowLeft size={14} /> Back to Articles
                </button>
                
                <div className="flex items-center gap-3 mb-6 text-black text-xs font-bold uppercase tracking-[0.2em]">
                   <span>{post.category}</span>
                   <span className="w-8 h-[1px] bg-black" />
                </div>
                
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase text-black mb-8">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-8 border-t border-black/10 pt-8">
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center border border-black/5 overflow-hidden">
                            <User size={16} className="text-black/50" />
                         </div>
                         <div>
                            <p className="font-heading uppercase text-black text-sm">By {post.author}</p>
                            <p className="font-sub text-[9px] uppercase text-granite tracking-wider">{post.authorRole}</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-sub uppercase tracking-wider text-granite">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-sub uppercase tracking-wider text-granite">
                        <Clock size={14} />
                        <span>5 Min Read</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden mb-16 md:mb-24"
      >
         <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale contrast-125"
         />
      </motion.div>

      {/* Content */}
      <article className="container mx-auto px-6 mb-32">
         <div className="max-w-2xl mx-auto space-y-8">
            {/* Standard first paragraph without drop cap to keep it modern/industrial */}
            {post.content && post.content.length > 0 && (
                <p className="font-heading text-3xl leading-tight text-black uppercase mb-8">
                    {post.content[0]}
                </p>
            )}
            
            {post.content && post.content.slice(1).map((paragraph, idx) => (
                <p key={idx} className="font-body text-lg leading-relaxed text-black/80">
                    {paragraph}
                </p>
            ))}

            <div className="pt-12 mt-16 border-t border-black/10">
                <h3 className="font-sub text-xs uppercase tracking-widest text-black mb-6">Share this article</h3>
                <div className="flex gap-4">
                     <Button variant="minimal" onClick={() => alert('Shared to Twitter')}>Twitter</Button>
                     <Button variant="minimal" onClick={() => alert('Shared to LinkedIn')}>LinkedIn</Button>
                     <Button variant="minimal" onClick={() => alert('Link Copied')}>Copy Link</Button>
                </div>
            </div>
         </div>
      </article>

      <Contact onApply={onApply} />
    </div>
  );
};
