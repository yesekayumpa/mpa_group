import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const PRODUCTS = [
  { id: '1', name: 'Mangue Kent', category: 'Mangues', image: '/african-man-harvesting-vegetables.jpg', season: 'Mai - Août' },
  { id: '2', name: 'Papaye Solo', category: 'Exotiques', image: '/delicious-papaya-still-life.jpg', season: 'Toute l\'année' },
  { id: '3', name: 'Melon Charentais', category: 'Melons', image: '/assorted-mixed-fruits.jpg', season: 'Nov - Avril' },
  { id: '4', name: 'Pastèque sans pépins', category: 'Melons', image: '/top-view-vegetable-composition-with-fresh-fruits-blue-table.jpg', season: 'Déc - Mai' },
  { id: '5', name: 'Mangue Keitt', category: 'Mangues', image: '/african-woman-harvesting-vegetables.jpg', season: 'Juil - Sept' },
  { id: '6', name: 'Citron Vert', category: 'Agrumes', image: '/fresh-vegetables-are-being-sold-market.jpg', season: 'Toute l\'année' },
];
export const ProductGrid = () => {
  const [filter, setFilter] = useState('Tous');
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = ['Tous', ...new Set(PRODUCTS.map(p => p.category))];
  const filtered = filter === 'Tous' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  // Responsive items count
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filtered.length - itemsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setFilter(prev => {
        const nextIdx = (categories.indexOf(prev) + 1) % categories.length;
        return categories[nextIdx];
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, categories]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  return (
    <section 
      id="produits" 
      className="py-12 md:py-20 relative overflow-hidden bg-premium rounded-[40px] my-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 rounded-l-[60px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            NOS PRODUITS
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Catalogue <span className="text-gradient">Premium</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-5 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 border uppercase tracking-wider",
                filter === cat 
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20" 
                  : "bg-white border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Track */}
        <div className="relative overflow-hidden -mx-2 px-2">
          <motion.div
            animate={{ x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (24 / itemsToShow)}px)` }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex gap-6"
          >
            {filtered.map((product) => (
              <div 
                key={product.id} 
                className={cn(
                  "flex-shrink-0 transition-all duration-500",
                  itemsToShow === 1 ? "w-full" : itemsToShow === 2 ? "w-[calc(50%-8px)]" : "w-[calc(33.333%-11px)]"
                )}
              >
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-1.5 transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-lg text-[8px] font-bold text-primary uppercase tracking-widest shadow-sm">
                      {product.category}
                    </div>
                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{product.name}</h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg text-slate-400 text-[10px] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      Saison: {product.season}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation & Indicators Bottom Container */}
        <div className="mt-10 flex flex-col gap-6">
          {/* Navigation Buttons - Right Aligned */}
          <div className="flex justify-end gap-3">
            <button 
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators - Centered */}
          <div className="flex justify-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  currentIndex === i ? "w-8 bg-primary" : "w-1.5 bg-slate-200"
                )}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 group text-sm uppercase tracking-widest"
          >
            En savoir plus
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>



  );
};
