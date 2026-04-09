import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Shield, Globe, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const SLIDES = [
  {
    title: "Cultiver l'Excellence,",
    highlight: "Exporter la Fraîcheur.",
    desc: "Nous connectons les meilleurs terroirs du Sénégal aux marchés mondiaux. Une qualité premium, une logistique maîtrisée.",
    image: "/hero-slide-1.png"
  },
  {
    title: "Le Goût Authentique,",
    highlight: "Du Sénégal au Monde.",
    desc: "Mangues Kent, Papayes Solo et Melons Charentais sélectionnés avec soin pour les palais les plus exigeants.",
    image: "/hero-slide-2.png"
  },
  {
    title: "Logistique de Pointe,",
    highlight: "Fraîcheur Garantie.",
    desc: "Une chaîne de froid ininterrompue et une expertise douanière pour une livraison rapide sur trois continents.",
    image: "/hero-slide-3.png"
  }
];

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
              className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-md p-5 rounded-3xl max-w-[200px] hidden md:block shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Shield className="text-white w-4 h-4" />
                </div>
                <span className="font-display font-bold text-slate-900 text-xs">100% Certifié</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Nos produits respectent les normes GlobalGAP et les standards de qualité internationaux.
              </p>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-30">
            {[
              { icon: <Globe />, title: 'Export Mondial', desc: 'Présence sur 3 continents.', color: 'bg-emerald-600' },
              { icon: <Truck />, title: 'Logistique Rapide', desc: 'Chaîne de froid optimale.', color: 'bg-orange-600' },
              { icon: <Shield />, title: 'Qualité Premium', desc: 'Sélection rigoureuse.', color: 'bg-amber-600' },
              { icon: <CheckCircle2 />, title: 'Prix Équitable', desc: 'Soutien aux producteurs.', color: 'bg-blue-600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-50 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={cn("w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-white mb-3 md:mb-4 shadow-md", item.color)}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-4 h-4 md:w-5 md:h-5" })}
                </div>
                <h3 className="text-xs md:text-sm font-display font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
