import React from 'react';
import { Button } from '../ui/Buttons';
import { Instagram, Twitter, Youtube } from 'lucide-react';

interface ContactProps {
  onApply?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onApply }) => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing. You have been added to the elite list.');
  };

  const handleLinkClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    alert(`${type} link clicked - This would open in a new tab.`);
  };

  const handleSitemapClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyClick = (e?: React.MouseEvent) => {
    if (onApply) {
      onApply();
    } else {
      // Fallback if no handler provided
      window.open('mailto:contact@example.com?subject=Coaching Application', '_blank');
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-black/10">
      
      {/* Big CTA */}
      <div className="bg-black text-white py-32">
         <div className="container mx-auto px-6 flex flex-col items-center text-center">
             <h2 className="font-heading text-6xl md:text-8xl mb-6 uppercase">Ready to Ascend?</h2>
             <p className="font-body text-zinc-400 max-w-lg mb-10 text-lg">
                Strictly for those committed to elite performance. Apply for 1:1 coaching or join the waiting list.
             </p>
             <Button 
                variant="primary" 
                className="!bg-white !text-black !border-white hover:!bg-zinc-200" 
                onClick={handleApplyClick}
             >
               Apply for Coaching
             </Button>
         </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-4xl text-black mb-6">STANISLAV.</h3>
            <p className="text-granite font-body max-w-sm mb-8">
              Redefining the modern male aesthetic through relentless discipline and heavy iron.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  onClick={(e) => handleLinkClick(e, social.label)}
                  className="w-10 h-10 border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all rounded-full"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-sub text-black uppercase tracking-widest text-xs font-bold mb-8">Sitemap</h4>
            <ul className="space-y-4">
              {['Home', 'Programs', 'Results', 'Shop', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                    onClick={(e) => handleSitemapClick(e, item === 'Home' ? '#home' : `#${item.toLowerCase()}`)}
                    className="text-granite hover:text-black transition-colors font-body text-sm uppercase tracking-wide cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sub text-black uppercase tracking-widest text-xs font-bold mb-8">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                required
                className="bg-mist border-b border-black/20 p-4 text-black focus:border-black focus:outline-none placeholder:text-granite font-body text-xs uppercase tracking-wider transition-all"
              />
              <button type="submit" className="text-left font-bold uppercase tracking-widest text-xs hover:underline">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-granite text-[10px] font-sub uppercase tracking-widest">
          <p>&copy; 2024 Stanislav Miagchilo.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" onClick={(e) => handleLinkClick(e, 'Privacy')} className="hover:text-black">Privacy Policy</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'Terms')} className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};