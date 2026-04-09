import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  return (
    <footer className="bg-slate-950 text-white pt-12 md:pt-16 pb-6 md:pb-8 rounded-t-3xl lg:rounded-t-[80px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src="/Logo MPA Group fond blanc-07.png" 
                  alt="MPA GROUP Logo" 
                  className="w-16 h-16 md:w-24 md:h-24 object-contain"
                />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] md:text-[11px] leading-relaxed max-w-xs">
              Leader sénégalais dans l'exportation de fruits tropicaux d'exception. Qualité premium, logistique mondiale et engagement durable.
            </p>
          </div>

          <div className="hidden md:block">
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Navigation</h4>
            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-[11px]">
              {[
                { name: 'Accueil', href: '#accueil' },
                { name: 'À propos', href: '#apropos' },
                { name: 'Produits', href: '#produits' },
                { name: 'Services', href: '#services' },
                { name: 'Processus', href: '#processus' },
                { name: 'Marché', href: '#marche' },
                { name: 'Galerie', href: '#galerie' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Nos Produits</h4>
            <ul className="space-y-3 text-slate-400 text-[11px]">
              {['Mangue Kent', 'Papaye Solo', 'Melon Charentais', 'Pastèque sans pépins', 'Citron Vert'].map((item) => (
                <li key={item}>
                  <a href="#produits" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Newsletter</h4>
            <p className="text-slate-400 text-[11px] mb-4">Recevez nos actualités sur les récoltes et les marchés mondiaux.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Votre email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[11px] outline-none focus:border-primary w-full" />
              <button className="bg-primary p-2.5 rounded-xl hover:bg-primary/80 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5">
          <div className="max-w-7xl md:mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-medium gap-4 md:gap-0 px-4 md:px-0">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-[10px] md:text-xs">Médina rue 37x24, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-[10px] md:text-xs">contact@mpa-group.sn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-[10px] md:text-xs">+221 33 829 58 06</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {/* Language Selector */}
              <div className="relative hidden md:block">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangMenuOpen(!isLangMenuOpen);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all text-[11px] font-medium"
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
                      className="absolute bottom-full left-0 mb-2 bg-slate-900 border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-[100px] z-50"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage('fr');
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/10 ${
                          language === 'fr' ? 'bg-primary/20 text-primary' : 'text-white/80'
                        }`}
                      >
                        <span>fr</span>
                        <span>Français</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage('en');
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/10 ${
                          language === 'en' ? 'bg-primary/20 text-primary' : 'text-white/80'
                        }`}
                      >
                        <span>en</span>
                        <span>English</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-white/60 text-[10px] md:text-xs">Suivez-nous:</span>
                <div className="flex gap-3">
                  <Facebook className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                  <Twitter className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                  <Instagram className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                  <Linkedin className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-[10px] font-medium tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} MPA GROUP. Tous droits réservés. Réalisé par DIGITAL MIND + GROUP.</p>
        </div>
      </div>
    </footer>
  );
};
