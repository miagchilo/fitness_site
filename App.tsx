
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Ticker } from './components/sections/Ticker';
import { About } from './components/sections/About';
import { Programs } from './components/sections/Programs';
import { Transformations } from './components/sections/Transformations';
import { ShopPreview } from './components/sections/ShopPreview';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { NotFound } from './components/pages/NotFound';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { ProtocolPage } from './components/pages/ProtocolPage';
import { ProtocolFormPage } from './components/pages/ProtocolFormPage';
import { ProductPage } from './components/pages/ProductPage';
import { BlogPost, Program, ShopItem, Transformation } from './types';
import { PROGRAMS as MOCK_PROGRAMS, BLOG_POSTS as MOCK_POSTS, SHOP_ITEMS as MOCK_SHOP, TRANSFORMATIONS as MOCK_TRANSFORMATIONS } from './constants';
import { supabase } from './lib/supabase';

type ViewState = 'home' | 'post' | 'protocol' | 'protocol-form' | 'product' | 'not-found';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  
  // Data State
  const [programs, setPrograms] = useState<Program[]>(MOCK_PROGRAMS);
  const [posts, setPosts] = useState<BlogPost[]>(MOCK_POSTS);
  const [products, setProducts] = useState<ShopItem[]>(MOCK_SHOP);
  const [transformations, setTransformations] = useState<Transformation[]>(MOCK_TRANSFORMATIONS);
  
  // Active Item State
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);
  const [activeProduct, setActiveProduct] = useState<ShopItem | null>(null);

  // Validation Helper: Ensures we don't try to load broken local paths from DB
  const isValidUrl = (url: any) => typeof url === 'string' && (url.startsWith('http') || url.startsWith('https'));

  useEffect(() => {
    const fetchData = async () => {
      if (!supabase) return;

      try {
        // 1. PROGRAMS
        const { data: progData } = await supabase.from('programs').select('*');
        if (progData && progData.length > 0) {
            const mappedPrograms = progData.map((p: any) => ({
                ...p,
                longDescription: p.long_description || p.longDescription
            }));
            setPrograms(mappedPrograms);
        }

        // 2. BLOG
        const { data: blogData } = await supabase.from('blog_posts').select('*');
        if (blogData && blogData.length > 0) {
            const mappedPosts = blogData.map((b: any) => ({
                ...b,
                authorRole: b.author_role || b.authorRole
            }));
            setPosts(mappedPosts);
        }
        
        // 3. SHOP
        const { data: shopData } = await supabase.from('shop_items').select('*');
        if (shopData && shopData.length > 0) setProducts(shopData as any);

        // 4. TRANSFORMATIONS
        const { data: transData } = await supabase.from('transformations').select('*');
        if (transData && transData.length > 0) {
            const mappedTransformations = transData.map((t: any, index: number) => {
                // Determine fallback index safely
                const fallbackIndex = index % MOCK_TRANSFORMATIONS.length;
                
                return {
                    id: t.id,
                    name: t.name,
                    stats: t.stats,
                    timeframe: t.timeframe,
                    // Check DB field -> Check JS field -> Fallback to constant
                    imageBefore: isValidUrl(t.image_before) ? t.image_before : (isValidUrl(t.imageBefore) ? t.imageBefore : MOCK_TRANSFORMATIONS[fallbackIndex].imageBefore),
                    imageAfter: isValidUrl(t.image_after) ? t.image_after : (isValidUrl(t.imageAfter) ? t.imageAfter : MOCK_TRANSFORMATIONS[fallbackIndex].imageAfter)
                };
            });
            setTransformations(mappedTransformations);
        } else {
            // If DB is empty, explicitly set mocks
            setTransformations(MOCK_TRANSFORMATIONS);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
        // Fail silently to mocks
        setTransformations(MOCK_TRANSFORMATIONS);
      }
    };

    fetchData();
  }, []);

  const handleReturnHome = () => {
    setView('home');
    setActivePost(null);
    setActiveProgram(null);
    setActiveProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewPost = (post: BlogPost) => {
    setActivePost(post);
    setView('post');
  };

  const handleViewProtocol = (program: Program) => {
    setActiveProgram(program);
    setView('protocol');
  };

  const handleStartForm = (programId?: string) => {
    if (programId && !activeProgram) {
         const found = programs.find(p => p.id === programId);
         if (found) {
           setActiveProgram(found);
         }
    }
    setView('protocol-form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (item: ShopItem) => {
    setActiveProduct(item);
    setView('product');
  };

  const handleNavigate = (href: string) => {
    if (view !== 'home') {
      setView('home');
      setActivePost(null);
      setActiveProgram(null);
      setActiveProduct(null);
      
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const renderContent = () => {
    if (view === 'not-found') {
      return <NotFound onReturnHome={handleReturnHome} />;
    }

    if (view === 'post' && activePost) {
      return <BlogPostPage post={activePost} onNavigate={handleNavigate} onApply={() => handleStartForm()} />;
    }

    if (view === 'protocol' && activeProgram) {
      return <ProtocolPage program={activeProgram} onNavigate={handleNavigate} onStartForm={() => handleStartForm(activeProgram.id)} />;
    }

    if (view === 'protocol-form') {
      return <ProtocolFormPage program={activeProgram || undefined} onNavigate={handleNavigate} />;
    }

    if (view === 'product' && activeProduct) {
      return <ProductPage product={activeProduct} onNavigate={handleNavigate} />;
    }

    return (
      <>
        <Hero />
        <Ticker />
        <About />
        <Programs programs={programs} onViewProtocol={handleViewProtocol} />
        <Transformations items={transformations} />
        <ShopPreview items={products} onViewProduct={handleViewProduct} />
        <Blog posts={posts} onViewPost={handleViewPost} />
        <Contact onApply={() => handleStartForm()} />
      </>
    );
  };

  return (
    <main className="bg-white text-black min-h-screen selection:bg-cobalt selection:text-white relative">
      <Navbar onNavigate={handleNavigate} />
      {renderContent()}
    </main>
  );
};

export default App;
