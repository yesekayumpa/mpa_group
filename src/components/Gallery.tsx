import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

const CATEGORIES = ['Tous', 'Plantation', 'Récolte', 'Entrepôt', 'Qualité', 'Logistique', 'Export'];

const IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200', title: 'Plantations de Mangues', category: 'Plantation' },
  { id: 2, src: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1200', title: 'Conditionnement Moderne', category: 'Entrepôt' },
  { id: 3, src: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1200', title: 'Récolte de Saison', category: 'Récolte' },
  { id: 4, src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1200', title: 'Contrôle Qualité', category: 'Qualité' },
  { id: 5, src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200', title: 'Logistique Fret', category: 'Logistique' },
  { id: 6, src: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=1200', title: 'Exportation Mondiale', category: 'Export' },
  { id: 7, src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200', title: 'Serres de Précision', category: 'Plantation' },
  { id: 8, src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1200', title: 'Tri Automatisé', category: 'Entrepôt' },
  { id: 9, src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1200', title: 'Agriculture Durable', category: 'Plantation' },
];

export const Gallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState('Tous');

  const filteredImages = useMemo(() => {
    if (filter === 'Tous') return IMAGES;
    return IMAGES.filter(img => img.category === filter);
  }, [filter]);

  const currentIndex = IMAGES.findIndex(img => img.id === selectedId);
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    setSelectedId(IMAGES[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setSelectedId(IMAGES[prevIndex].id);
  };

  const currentImage = IMAGES.find(img => img.id === selectedId);

  return (
    <section id="galerie" className="section-padding bg-slate-950 overflow-hidden relative">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=2000" 
          alt="Gallery background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            GALERIE
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            Notre <span className="text-accent">Galerie</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Une immersion visuelle dans nos plantations, processus et installations d'exception
          </p>
        </div>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Camera className="w-4 h-4" />
            NOTRE UNIVERS EN IMAGES
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-8 leading-tight"
          >
            Immersion dans <br />
            <span className="text-accent">nos coulisses d'exception.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg mb-12"
          >
            Découvrez notre savoir-faire unique, de la terre fertile du Sénégal jusqu'aux marchés internationaux les plus exigeants.
          </motion.p>

          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2",
                  filter === cat 
                    ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-accent hover:text-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl shadow-black/50 border border-white/5"
                onClick={() => setSelectedId(img.id)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.category}</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{img.title}</h3>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 border border-white/20">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]" 
              onClick={() => setSelectedId(null)}
            >
              <X className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-4 rounded-full backdrop-blur-md"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button 
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-4 rounded-full backdrop-blur-md"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-6xl w-full max-h-[85vh] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentImage.src} 
                alt={currentImage.title} 
                className="w-full h-full object-contain bg-black/40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">{currentImage.category}</span>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">{currentImage.title}</h3>
                  </div>
                  <div className="text-white/40 font-mono text-sm">
                    {currentIndex + 1} / {IMAGES.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
