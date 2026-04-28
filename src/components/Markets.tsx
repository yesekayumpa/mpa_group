import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, MapPin, CheckCircle2, Award, ArrowRight, X, Plane, Ship, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DESTINATIONS = [
  { 
    country: "France", 
    city: "Rungis, Paris", 
    market: "Marché de Gros",
    coords: { x: 48, y: 20 },
    transport: "plane",
    volume: "1500T/an",
    products: ["Mangues", "Melons"]
  },
  { 
    country: "Belgique", 
    city: "Anvers", 
    market: "Port International",
    coords: { x: 50, y: 18 },
    transport: "ship", 
    volume: "800T/an",
    products: ["Papayes", "Citrons"]
  },
  { 
    country: "Émirats Arabes Unis", 
    city: "Dubaï", 
    market: "Global Village",
    coords: { x: 65, y: 35 },
    transport: "plane",
    volume: "1200T/an", 
    products: ["Mangues", "Pastèques"]
  },
  { 
    country: "Espagne", 
    city: "Barcelone", 
    market: "Mercabarna",
    coords: { x: 45, y: 22 },
    transport: "truck",
    volume: "600T/an",
    products: ["Melons", "Citrons"]
  },
  { 
    country: "Pays-Bas", 
    city: "Rotterdam", 
    market: "Hub Logistique",
    coords: { x: 49, y: 17 },
    transport: "ship",
    volume: "900T/an",
    products: ["Tous produits"]
  },
  { 
    country: "Maroc", 
    city: "Casablanca", 
    market: "Distribution Locale",
    coords: { x: 42, y: 28 },
    transport: "truck",
    volume: "400T/an",
    products: ["Citrons", "Pastèques"]
  }
];

const getTransportIcon = (transport: string) => {
  switch(transport) {
    case 'plane': return <Plane className="w-4 h-4" />;
    case 'ship': return <Ship className="w-4 h-4" />;
    case 'truck': return <Truck className="w-4 h-4" />;
    default: return <Truck className="w-4 h-4" />;
  }
};

export const Markets = () => {
  const { t } = useLanguage();
  const [hoveredDestination, setHoveredDestination] = useState<typeof DESTINATIONS[0] | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<typeof DESTINATIONS[0] | null>(null);

  return (
    <section id="marche" className="section-padding bg-premium relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000" 
          alt="World background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t.markets.badge}
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            {t.markets.title} <span className="text-gradient">{t.markets.subtitle}</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            {t.markets.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 p-8 aspect-[4/3]">
              {/* SVG World Map Simplified */}
              <svg viewBox="0 0 100 60" className="w-full h-full">
                {/* Simple continent shapes */}
                <path d="M 20 25 Q 35 20, 50 25 T 65 30 Q 60 40, 45 38 T 25 35 Z" 
                      fill="url(#africaGradient)" stroke="#e2e8f0" strokeWidth="0.5"/>
                <path d="M 35 15 Q 45 12, 55 15 T 65 18 Q 60 22, 50 20 T 40 18 Z" 
                      fill="url(#europeGradient)" stroke="#e2e8f0" strokeWidth="0.5"/>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="africaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="europeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5"/>
                  </linearGradient>
                </defs>

                {/* Destination Points */}
                {DESTINATIONS.map((dest, i) => (
                  <g key={i}>
                    <circle
                      cx={dest.coords.x}
                      cy={dest.coords.y}
                      r="2"
                      className="fill-primary cursor-pointer"
                      onMouseEnter={() => setHoveredDestination(dest)}
                      onMouseLeave={() => setHoveredDestination(null)}
                      onClick={() => setSelectedDestination(dest)}
                    />
                    <circle
                      cx={dest.coords.x}
                      cy={dest.coords.y}
                      r="2"
                      className="fill-primary animate-ping"
                    />
                  </g>
                ))}

                {/* Connection Lines from Senegal */}
                {DESTINATIONS.map((dest, i) => (
                  <line
                    key={`line-${i}`}
                    x1="42"
                    y1="32"
                    x2={dest.coords.x}
                    y2={dest.coords.y}
                    stroke="#10b981"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                ))}
              </svg>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredDestination && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 left-4 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-slate-700 z-20 max-w-[200px]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {getTransportIcon(hoveredDestination.transport)}
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">{hoveredDestination.country}</h4>
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">{hoveredDestination.city}</p>
                    <p className="text-[9px] text-primary font-bold">{hoveredDestination.volume}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Senegal Origin Point */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-emerald-600 whitespace-nowrap">SÉNÉGAL</span>
              </div>
            </div>
          </motion.div>

          {/* Destination Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {selectedDestination ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-4xl shadow-2xl border border-slate-100 dark:border-slate-800"
                >
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {getTransportIcon(selectedDestination.transport)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{selectedDestination.country}</h3>
                      <p className="text-slate-500 dark:text-slate-400">{selectedDestination.city}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Marché</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{selectedDestination.market}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Volume</span>
                      <span className="text-sm font-bold text-primary">{selectedDestination.volume}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Transport</span>
                      <div className="flex items-center gap-2 text-primary">
                        {getTransportIcon(selectedDestination.transport)}
                        <span className="text-sm font-bold capitalize">{selectedDestination.transport}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-3">Produits Exportés</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDestination.products.map((product, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid sm:grid-cols-2 gap-3 mb-10">
                    {DESTINATIONS.map((dest, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedDestination(dest)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          {getTransportIcon(dest.transport)}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-slate-900 dark:text-white text-xs">{dest.country}</h4>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">{dest.city} - {dest.market}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-lg font-display font-bold text-slate-900">3 Continents</p>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Desservis</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-lg font-display font-bold text-slate-900">100% Fiable</p>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Logistique</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
