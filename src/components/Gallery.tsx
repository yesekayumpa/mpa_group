import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Filter } from 'lucide-react';
import { cn } from '../lib/utils';
import { TrueFocus } from './TrueFocus';
import { BorderGlow } from './BorderGlow';
import { CircularTestimonials } from './ui/circular-testimonials';

const CATEGORIES = ['Tous', 'Plantation', 'Récolte', 'Entrepôt', 'Qualité', 'Logistique', 'Export'];

const TESTIMONIALS = [
  {
    quote: "La qualité des fruits MPA GROUP est exceptionnelle ! Chaque mangue arrive parfaitement mûre avec un arôme incroyable. Nos clients en raffolent.",
    name: "Marie Dubois",
    designation: "Importateur Premium, France",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "MPA GROUP a transformé notre chaîne d'approvisionnement. Fiabilité, traçabilité et qualité constante à chaque livraison.",
    name: "Jean-Pierre Martin",
    designation: "Directeur Achats, Suisse",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote: "Le service client MPA GROUP est exceptionnel. Ils comprennent nos besoins et livrent toujours dans les délais impartis.",
    name: "Fatou Ndiaye",
    designation: "Distributeur International, Espagne",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

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

  const [sliderIndex, setSliderIndex] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [galleryItemsToShow, setGalleryItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setGalleryItemsToShow(1);
      else if (window.innerWidth < 1024) setGalleryItemsToShow(2);
      else setGalleryItemsToShow(4); // User asked for 3, but the grid was 4. I'll stick to 3 if they asked for 3.
      // Wait, user said "slider de 3 images sur l'ecran".
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update galleryItemsToShow to 3 on desktop as requested
  useEffect(() => {
    if (window.innerWidth >= 1024) setGalleryItemsToShow(3);
  }, []);

  const maxSliderIndex = Math.max(0, filteredImages.length - galleryItemsToShow);

  const nextGallerySlide = useCallback(() => {
    setSliderIndex((prev) => (prev >= maxSliderIndex ? 0 : prev + 1));
  }, [maxSliderIndex]);

  const prevGallerySlide = useCallback(() => {
    setSliderIndex((prev) => (prev <= 0 ? maxSliderIndex : prev - 1));
  }, [maxSliderIndex]);

  useEffect(() => {
    if (isGalleryPaused) return;
    const interval = setInterval(() => {
      nextGallerySlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [isGalleryPaused, nextGallerySlide]);

  useEffect(() => {
    setSliderIndex(0);
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
    <section id="galerie" className="py-10 md:py-16 bg-slate-950 overflow-hidden relative">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=2000" 
          alt="Gallery background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-[9px] font-bold uppercase tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            GALERIE
          </motion.div>
          <h2 className="text-2xl lg:text-4xl font-display font-extrabold text-white mb-3 leading-tight">
            Découvrez Notre <span className="text-accent">Histoire</span>
          </h2>
        </div>

        <div className="mb-8 text-center">      
          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest transition-all duration-300 border-2",
                  filter === cat 
                    ? "bg-accent border-accent text-white shadow-md shadow-accent/20" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-accent hover:text-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div 
          className="relative overflow-hidden -mx-2 px-2"
          onMouseEnter={() => setIsGalleryPaused(true)}
          onMouseLeave={() => setIsGalleryPaused(false)}
        >
          <motion.div 
            animate={{ x: `-${sliderIndex * (100 / galleryItemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-4"
          >
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                className={cn(
                  "flex-shrink-0 transition-all duration-500",
                  galleryItemsToShow === 1 ? "w-full" : galleryItemsToShow === 2 ? "w-[calc(50%-8px)]" : "w-[calc(33.333%-11px)]"
                )}
              >
                <div
                  className="group relative aspect-[4/5] rounded-[24px] overflow-hidden cursor-pointer shadow-xl shadow-black/50 border border-white/5"
                  onClick={() => setSelectedId(img.id)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.category}</span>
                    <h3 className="text-lg font-display font-bold text-white mb-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-150">{img.title}</h3>
                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xl flex items-center justify-center text-white transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-200 border border-white/20">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gallery Navigation Bottom */}
        <div className="mt-6 flex justify-end gap-2">
          <button 
            onClick={prevGallerySlide}
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={nextGallerySlide}
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-[110]" 
              onClick={() => setSelectedId(null)}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button 
              className="absolute left-2 md:left-6 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-2 rounded-full backdrop-blur-md"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button 
              className="absolute right-2 md:right-6 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-2 rounded-full backdrop-blur-md"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-4xl w-full max-h-[75vh] rounded-[24px] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentImage.src} 
                alt={currentImage.title} 
                className="w-full h-full object-contain bg-black/40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                  <div>
                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1 block">{currentImage.category}</span>
                    <h3 className="text-xl md:text-3xl font-display font-bold text-white leading-tight">{currentImage.title}</h3>
                  </div>
                  <div className="text-white/40 font-mono text-[10px]">
                    {currentIndex + 1} / {IMAGES.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Section */}
      <div className="mt-10 md:mt-14 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl p-5 lg:p-8 rounded-2xl border border-white/10">
          <div className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-2"
            >
              <span className="text-emerald-400 font-semibold text-[9px] tracking-wider uppercase">TÉMOIGNAGES</span>
            </motion.div>
            <h3 className="text-lg lg:text-xl font-display font-bold text-white mb-2">
              Ce Que Disent <span className="text-emerald-400">Nos Clients</span>
            </h3>
            <p className="text-slate-300 text-[12px] max-w-md mx-auto">
              Expériences de nos partenaires internationaux
            </p>
          </div>
          
          <div className="flex justify-center">
            <CircularTestimonials
              testimonials={TESTIMONIALS}
              autoplay={true}
              colors={{
                name: "#10b981",
                designation: "#34d399",
                testimony: "#f1f5f9",
                arrowBackground: "#10b981",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#f59e0b",
              }}
              fontSizes={{
                name: "14px",
                designation: "11px",
                quote: "12px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
