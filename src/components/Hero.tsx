import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Shield, Globe, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { BorderGlow } from './BorderGlow';

const SLIDES = [
  {
    title: "Cultiver l'Excellence,",
    highlight: "Exporter la Fraîcheur.",
    desc: "Nous connectons les meilleurs terroirs du Sénégal aux marchés mondiaux. Une qualité premium, une logistique maîtrisée.",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Le Goût Authentique,",
    highlight: "Du Sénégal au Monde.",
    desc: "Mangues Kent, Papayes Solo et Melons Charentais sélectionnés avec soin pour les palais les plus exigeants.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Logistique de Pointe,",
    highlight: "Fraîcheur Garantie.",
    desc: "Une chaîne de froid ininterrompue et une expertise douanière pour une livraison rapide sur trois continents.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
  }
];

/**
 * Composant Hero avec carrousel animé présentant les messages principaux de l'entreprise
 * @returns Section hero avec diaporma automatique et contrôles interactifs
 */
export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative pt-24 lg:pt-32 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-900/50 -z-10 rounded-l-[80px] hidden lg:block" />
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 w-fit">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Bienvenue chez MPA GROUP
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                  {SLIDES[current].title} <br />
                  <span className="text-gradient">{SLIDES[current].highlight}</span>
                </h1>
                <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                  {SLIDES[current].desc}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="btn-elegant-primary !px-8 !py-3 text-xs tracking-widest uppercase">
                    NOS PRODUITS <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-3 font-bold text-orange-500 dark:text-orange-400 hover:text-orange-600 transition-colors group text-xs tracking-widest uppercase">
                    <div className="w-10 h-10 rounded-full border border-orange-300 dark:border-orange-700 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                      <Play className="w-3 h-3 fill-current" />
                    </div>
                    VOIR LA VIDÉO
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={current}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 z-10 rounded-4xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
                >
                  <img 
                    src={SLIDES[current].image} 
                    alt="Fruits tropicaux frais"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Floating Info Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-6 -left-6 z-20 hidden md:block"
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="28 154 58"
                backgroundColor="rgba(255, 255, 255, 0.9)"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={true}
                colors={['#1c9a3a', '#71b62b', '#f7a512']}
              >
                <div style={{ padding: '1.25rem' }} className="max-w-[200px] backdrop-blur-md shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                      <Shield className="text-white w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-slate-900 text-xs">100% Certifié</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    Nos produits respectent les normes GlobalGAP et les standards de qualité internationaux.
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          </motion.div>
        </div>

        {/* Slider Controls & Features */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex gap-1.5">
              {SLIDES.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    current === i ? "w-6 bg-primary" : "w-1.5 bg-slate-200 dark:bg-slate-800"
                  )}
                />
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-12 rounded-[50px] shadow-2xl shadow-slate-200/40 border border-slate-50 relative z-30"
          >
            <div className="grid grid-cols-2 gap-y-16 gap-x-8">
              {[
                { icon: <Globe />, title: 'Export Mondial', desc: 'Présence sur 3 continents', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
                { icon: <Truck />, title: 'Logistique', desc: 'Chaîne de froid garantie', color: 'text-orange-600', bgColor: 'bg-orange-50' },
                { icon: <Shield />, title: 'Qualité Premium', desc: 'Sélection rigoureuse', color: 'text-amber-600', bgColor: 'bg-amber-50' },
                { icon: <CheckCircle2 />, title: 'Prix Équitable', desc: 'Soutien aux producteurs locaux', color: 'text-blue-600', bgColor: 'bg-blue-50' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110", item.bgColor, item.color)}>
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-[12px] font-display font-black text-slate-900 uppercase tracking-[0.1em] mb-2">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed max-w-[180px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
