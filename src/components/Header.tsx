import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Search, Leaf, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const getSections = (t: any) => [
  { name: t.nav.about, href: '#apropos' },
  { name: t.nav.products, href: '#produits' },
  { name: t.nav.services, href: '#services' },
  { name: t.nav.process, href: '#processus' },
  { name: t.nav.market, href: '#marche' },
  { name: t.nav.gallery, href: '#galerie' },
  { name: t.nav.contact, href: '#contact' },
];

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('apropos');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Scroll-spy logic
      const sections = getSections(t).map(s => s.href.slice(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isLangMenuOpen) {
        setIsLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-2" : "bg-transparent py-0"
    )}>
      {/* Top Bar (Optional, only on desktop and when not scrolled for maximum elegance) */}
      {!scrolled && (
        <div className="hidden lg:block bg-primary text-white py-2 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Médina rue 37x24, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>contact@mpa-group.sn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+221 33 829 58 06</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/60">Suivez-nous:</span>
              <div className="flex gap-3">
                <Facebook className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                <Twitter className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                <Linkedin className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group hover:opacity-80 transition-opacity">
            <div className="relative -my-4 md:-my-6">
              <img 
                src="/Logo MPA Group fond blanc-06.png" 
                alt="MPA GROUP Logo" 
                className="w-16 h-16 md:w-24 md:h-24 object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 px-2 py-2">
              {getSections(t).map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full relative",
                      isActive 
                        ? "bg-gradient-to-r from-[#4a5d23] to-[#3a4a1a] text-white shadow-md" 
                        : "text-slate-700 hover:text-[#4a5d23] hover:bg-[#4a5d23]/5"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4a5d23]/20 to-[#3a4a1a]/20 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {getSections(t).map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl relative",
                      isActive 
                        ? "bg-gradient-to-r from-[#4a5d23] to-[#3a4a1a] text-white shadow-md" 
                        : "text-slate-700 hover:text-[#4a5d23] hover:bg-[#4a5d23]/5"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4a5d23]/20 to-[#3a4a1a]/20 animate-pulse" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
