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
          <Link to="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
              <Leaf className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-display font-extrabold text-primary tracking-tighter group-hover:text-primary/80 transition-colors">MPA GROUP</span>
              <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">Export Excellence</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {getSections(t).map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-[12px] font-bold transition-colors relative group uppercase tracking-wider",
                    isActive 
                      ? "text-primary" 
                      : "text-slate-600 hover:text-primary"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              );
            })}
            
            <div className="flex items-center gap-3 ml-4">
              <div className="relative">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangMenuOpen(!isLangMenuOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-[11px] font-bold uppercase tracking-widest border-slate-200 text-secondary hover:bg-slate-50"
                >
                  <Globe className="w-3 h-3" />
                  {language === 'fr' ? 'fr' : 'en'}
                </button>
                
                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden min-w-[120px]"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage('fr');
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-50 ${
                          language === 'fr' ? 'bg-primary/10 text-primary' : 'text-slate-700'
                        }`}
                      >
                        <span className="text-base">fr</span>
                        <span>Français</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage('en');
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-50 ${
                          language === 'en' ? 'bg-primary/10 text-primary' : 'text-slate-700'
                        }`}
                      >
                        <span className="text-base">en</span>
                        <span>English</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {getSections(t).map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-sm font-bold transition-colors uppercase tracking-widest",
                      isActive 
                        ? "text-primary" 
                        : "text-slate-600 hover:text-primary"
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
