import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const PRODUCTS = [
  { id: '1', name: 'Mangue Kent', category: 'Mangues', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800', season: 'Mai - Août' },
  { id: '2', name: 'Papaye Solo', category: 'Exotiques', image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=1200', season: 'Toute l\'année' },
  { id: '3', name: 'Melon Charentais', category: 'Melons', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&q=80&w=800', season: 'Nov - Avril' },
  { id: '4', name: 'Pastèque sans pépins', category: 'Melons', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800', season: 'Déc - Mai' },
  { id: '5', name: 'Mangue Keitt', category: 'Mangues', image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=800', season: 'Juil - Sept' },
  { id: '6', name: 'Citron Vert', category: 'Agrumes', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800', season: 'Toute l\'année' },
];

export const ProductGrid = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', ...new Set(PRODUCTS.map(p => p.category))];
  const filtered = filter === 'Tous' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="produits" className="section-padding relative overflow-hidden bg-slate-50 rounded-5xl my-16">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2000" 
          alt="Fruits background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            PRODUITS
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-black  mb-6 leading-tight">
            Notre <span className="text-gradient">Catalogue</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Des fruits tropicaux d'exception, cultivés avec passion et exportés avec soin
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[11px] font-bold transition-all duration-300 border",
                  filter === cat 
                    ? "bg-primary border-primary text-white shadow-md shadow-primary/10" 
                    : "bg-white border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative bg-white rounded-4xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold text-primary uppercase tracking-widest shadow-sm">
                    {product.category}
                  </div>
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-1.5">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-[11px] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    Saison: {product.season}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
