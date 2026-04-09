import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Globe, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  return (
    <footer className="bg-slate-950 text-white pt-12 md:pt-16 pb-6 md:pb-8 rounded-t-3xl lg:rounded-t-[80px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <img 
                  src="/Logo MPA Group fond blanc-07.png" 
                  alt="MPA GROUP Logo" 
                  className="w-16 h-16 md:w-24 md:h-24 object-contain relative z-10 drop-shadow-lg"
                />
              </div>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-[10px] md:text-[11px] leading-relaxed max-w-xs"
            >
              Leader sénégalais dans l'exportation de fruits tropicaux d'exception. Qualité premium, logistique mondiale et engagement durable.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block"
          >
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200 relative"
            >
              Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </motion.h4>
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
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <motion.a 
                    href={item.href} 
                    className="hover:text-primary transition-colors inline-block relative group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200 relative"
            >
              Nos Produits
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </motion.h4>
            <ul className="space-y-3 text-slate-400 text-[11px]">
              {['Mangue Kent', 'Papaye Solo', 'Melon Charentais', 'Pastèque sans pépins', 'Citron Vert'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <motion.a 
                    href="#produits" 
                    className="hover:text-primary transition-colors inline-block relative group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200 relative"
            >
              Newsletter
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-[11px] mb-4"
            >
              Recevez nos actualités sur les récoltes et les marchés mondiaux.
            </motion.p>
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
              <input 
                type="email" 
                placeholder="Votre email" 
                className="relative bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[11px] outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 w-full backdrop-blur-sm"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-primary to-secondary text-white px-3 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 flex items-center justify-center group"
              >
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-white/5"
        >
          <div className="max-w-7xl md:mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-medium gap-4 md:gap-0 px-4 md:px-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6"
            >
              <motion.div 
                className="flex items-center gap-2 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                </motion.div>
                <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white transition-colors duration-300">Médina rue 37x24, Dakar, Sénégal</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="p-1.5 rounded-lg bg-blue/10 group-hover:bg-blue/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-3.5 h-3.5 text-blue flex-shrink-0" />
                </motion.div>
                <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white transition-colors duration-300">contact@mpa-group.sn</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                </motion.div>
                <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white transition-colors duration-300">+221 33 829 58 06</span>
              </motion.div>
            </motion.div>
            
                        
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
            >
              {/* Language Selector */}
              <div className="relative hidden md:block">
                <motion.button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangMenuOpen(!isLangMenuOpen);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all text-[11px] font-medium backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-3 h-3" />
                  {language === 'fr' ? 'fr' : 'en'}
                </motion.button>
                
                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-0 mb-2 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-[120px] z-50"
                    >
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage('fr');
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/10 ${
                          language === 'fr' ? 'bg-primary/20 text-primary' : 'text-white/80'
                        }`}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>fr</span>
                        <span>Français</span>
                      </motion.button>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage('en');
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/10 ${
                          language === 'en' ? 'bg-primary/20 text-primary' : 'text-white/80'
                        }`}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>en</span>
                        <span>English</span>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-center gap-4"
              >
                <span className="text-white/60 text-[10px] md:text-xs">Suivez-nous:</span>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, delay: 0 },
                    { icon: Twitter, delay: 0.1 },
                    { icon: Instagram, delay: 0.2 },
                    { icon: Linkedin, delay: 0.3 }
                  ].map(({ icon: Icon, delay }, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.1 + delay }}
                      whileHover={{ y: -3, scale: 1.2 }}
                      className="cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 hover:text-secondary transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-8 border-t border-white/5 text-center text-slate-500 text-[10px] font-medium tracking-wider uppercase"
        >
          <motion.p 
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            &copy; {new Date().getFullYear()} MPA GROUP. Tous droits réservés. Réalisé par 
            <motion.span 
              className="text-primary font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {' '}DIGITAL MIND + GROUP
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
