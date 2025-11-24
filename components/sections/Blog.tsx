
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, SubTitle, Paragraph } from '../ui/Typography';
import { staggerContainer, fadeInUp } from '../../constants';
import { ArrowUpRight, User } from 'lucide-react';
import { BlogPost } from '../../types';

const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;

interface BlogProps {
  posts: BlogPost[];
  onViewPost?: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ posts, onViewPost }) => {
  if (!posts || posts.length === 0) return null;

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const handlePostClick = (post: BlogPost) => {
    if (onViewPost) {
      onViewPost(post);
    } else {
      alert(`Reading article: ${post.title}`);
    }
  };

  return (
    <section id="blog" className="py-32 bg-white border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
          <div>
            <SubTitle>Intelligence</SubTitle>
            <SectionTitle className="mb-0">Knowledge <br />Base</SectionTitle>
          </div>
          <div className="mt-8 md:mt-0">
             <Paragraph className="text-right">Insights on training, nutrition,<br/> and the psychology of performance.</Paragraph>
          </div>
        </div>

        {/* Featured Post */}
        <MotionDiv 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 group cursor-pointer"
          onClick={() => handlePostClick(featuredPost)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative overflow-hidden aspect-video bg-mist">
               <MotionImg 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
            </div>
            <div className="lg:col-span-5">
               <div className="flex items-center gap-3 mb-4 text-granite text-[10px] font-sub uppercase tracking-widest">
                  <span>{featuredPost.date}</span>
                  <span className="w-1 h-1 bg-black rounded-full" />
                  <span>{featuredPost.category}</span>
                </div>
                <h3 className="font-heading text-4xl lg:text-5xl text-black uppercase mb-6 leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {featuredPost.title}
                </h3>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6 border-b border-black/10 pb-6">
                   <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center border border-black/5">
                      <User size={16} className="text-black/50" />
                   </div>
                   <div>
                      <p className="font-body font-bold text-black">{featuredPost.author}</p>
                      <p className="font-sub text-[9px] uppercase text-granite tracking-wider">{featuredPost.authorRole}</p>
                   </div>
                </div>

                <p className="font-body text-black/80 text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-widest">
                  Read Article <ArrowUpRight size={14} />
                </div>
            </div>
          </div>
        </MotionDiv>

        {/* Other Posts Grid */}
        <MotionDiv 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {otherPosts.map((post) => (
            <MotionDiv
              key={post.id}
              variants={fadeInUp}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => handlePostClick(post)}
            >
              <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-mist w-full">
                <MotionImg 
                  src={post.image} 
                  alt={post.title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3 text-granite text-[10px] font-sub uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-black rounded-full" />
                  <span>{post.category}</span>
                </div>

                <h3 className="font-heading text-2xl text-black uppercase mb-3 leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {post.title}
                </h3>
                
                {/* Author Info */}
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 rounded-full bg-mist flex items-center justify-center border border-black/5">
                      <User size={14} className="text-black/50" />
                   </div>
                   <div>
                      <p className="font-body font-bold text-black text-sm">{post.author}</p>
                      <p className="font-sub text-[9px] uppercase text-granite tracking-wider">{post.authorRole}</p>
                   </div>
                </div>

                <p className="font-body text-black/70 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-black text-xs font-bold uppercase tracking-widest">
                  Read Article <ArrowUpRight size={14} />
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};
