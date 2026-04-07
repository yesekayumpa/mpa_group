import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react';

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=1000', title: 'Récolte des Mangues', category: 'Plantations' },
  { url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000', title: 'Papayes Solo', category: 'Produits' },
  { url: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000', title: 'Melons Charentais', category: 'Produits' },
  { url: 'https://images.unsplash.com/photo-1580913209249-6abd4f5a69df?auto=format&fit=crop&q=80&w=1000', title: 'Station de Tri', category: 'Logistique' },
  { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000', title: 'Entrepôt Froid', category: 'Logistique' },
  { url: 'https://images.unsplash.com/photo-1494412574743-019485676a38?auto=format&fit=crop&q=80&w=1000', title: 'Chargement Maritime', category: 'Logistique' },
  { url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000', title: 'Nos Plantations', category: 'Plantations' },
  { url: 'https://images.unsplash.com/photo-1591354839917-2c5279468b5e?auto=format&fit=crop&q=80&w=1000', title: 'Citrons Verts', category: 'Produits' },
  { url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1000', title: 'Pastèques', category: 'Produits' },
];

const CATEGORIES = ['Tous', 'Plantations', 'Produits', 'Logistique'];

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredImages = activeCategory === 'Tous' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  const next = () => setSelectedIdx(i => (i! + 1) % filteredImages.length);
  const prev = () => setSelectedIdx(i => (i! - 1 + filteredImages.length) % filteredImages.length);

  return (
    <div className="pt-32 pb-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          GALERIE
        </motion.div>
        <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          Notre <span className="text-gradient">Galerie</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
          Une immersion visuelle dans nos plantations, processus et installations d'exception
        </p>
      </div>

      {/* Header */}
      <section className="section-padding !py-0 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">GALERIE PHOTOS</span>
          <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
            L'Univers <span className="text-gradient">MPA GROUP</span> en Images.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Découvrez nos installations, nos plantations et la qualité exceptionnelle de nos produits à travers notre galerie.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 px-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
              activeCategory === cat 
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                : "border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="section-padding !py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, idx) => (
            <motion.div
              layout
              key={img.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative aspect-square rounded-[40px] overflow-hidden group cursor-pointer shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800"
              onClick={() => setSelectedIdx(idx)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <Maximize2 className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-display font-bold text-center">{img.title}</h3>
                <span className="text-xs uppercase tracking-widest mt-2">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-900/95 backdrop-blur-md">
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-10 right-10 z-50 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={prev}
              className="absolute left-10 z-50 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={next}
              className="absolute right-10 z-50 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] px-6"
            >
              <img 
                src={filteredImages[selectedIdx].url} 
                alt={filteredImages[selectedIdx].title} 
                className="w-full h-full object-contain rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-20 left-0 right-0 text-center text-white">
                <h3 className="text-2xl font-display font-bold">{filteredImages[selectedIdx].title}</h3>
                <p className="text-white/60 uppercase tracking-widest text-sm mt-2">{filteredImages[selectedIdx].category}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
