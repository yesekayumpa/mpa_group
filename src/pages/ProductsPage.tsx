import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, ArrowRight, Info, CheckCircle2, Package, Truck, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const PRODUCTS = [
  {
    id: 1,
    name: 'Mangue Kent',
    category: 'Fruits Exotiques',
    desc: 'La reine des mangues, charnue et sans fibres. Idéale pour l\'exportation haut de gamme.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1000',
    season: 'Avril - Juillet',
    origin: 'Casamance & Niayes',
    specs: ['Calibres: 6, 7, 8, 9, 10, 12', 'Conditionnement: Carton 4kg', 'Certification: GlobalGAP']
  },
  {
    id: 2,
    name: 'Papaye Solo',
    category: 'Fruits Exotiques',
    desc: 'Une saveur douce et une texture fondante. Riche en vitamines et très prisée en Europe.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000',
    season: 'Toute l\'année',
    origin: 'Niayes',
    specs: ['Calibres: 350g - 600g', 'Conditionnement: Carton 4.5kg', 'Certification: Bio-Sénégal']
  },
  {
    id: 3,
    name: 'Melon Charentais',
    category: 'Melons & Pastèques',
    desc: 'Un parfum intense et une chair sucrée. Cultivé avec soin dans les zones sablonneuses.',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000',
    season: 'Janvier - Mai',
    origin: 'Zone des Niayes',
    specs: ['Calibres: 12, 15, 18', 'Conditionnement: Caisse bois/carton', 'Certification: GlobalGAP']
  },
  {
    id: 4,
    name: 'Pastèque',
    category: 'Melons & Pastèques',
    desc: 'Rafraîchissante et juteuse, nos pastèques sont sélectionnées pour leur taux de sucre élevé.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1000',
    season: 'Février - Juin',
    origin: 'Vallée du Fleuve Sénégal',
    specs: ['Poids: 4kg - 12kg', 'Conditionnement: Vrac ou Palox', 'Certification: Qualité Premium']
  },
  {
    id: 5,
    name: 'Citron Vert',
    category: 'Agrumes',
    desc: 'Acide et parfumé, parfait pour la gastronomie et les boissons.',
    image: 'https://images.unsplash.com/photo-1591354839917-2c5279468b5e?auto=format&fit=crop&q=80&w=1000',
    season: 'Toute l\'année',
    origin: 'Thiès & Casamance',
    specs: ['Calibres: 48, 54, 60', 'Conditionnement: Carton 4kg', 'Certification: GlobalGAP']
  }
];

const CATEGORIES = ['Tous', 'Fruits Exotiques', 'Melons & Pastèques', 'Agrumes'];

export const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  const filteredProducts = activeCategory === 'Tous' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

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
          PRODUITS
        </motion.div>
        <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-black mb-6 leading-tight">
          Notre <span className="text-gradient">Catalogue</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
          Des fruits tropicaux d'exception, cultivés avec passion et exportés avec soin
        </p>
      </div>

      {/* Header */}
      <section className="relative overflow-hidden py-32 mb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2070&auto=format&fit=crop"
            alt="Fruits tropicaux"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
            <span className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">NOTRE CATALOGUE</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
            Des Fruits <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">D'Exception</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            Découvrez notre sélection rigoureuse de fruits tropicaux, cultivés avec passion et exportés avec soin selon les standards internationaux les plus exigeants.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-20 px-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 text-sm",
              activeCategory === cat 
                ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-105" 
                : "border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="section-padding !py-0 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-6 left-6">
                  <div className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-xs font-bold text-emerald-700 shadow-lg border border-emerald-100">
                    {product.category}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-xs font-semibold text-slate-700 shadow-lg border border-slate-200">
                    {product.season}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{product.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="font-medium">{product.origin}</span>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors flex items-center gap-2"
                    >
                      DÉTAILS
                    </button>
                    <button className="w-10 h-10 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Additional Sections with Images */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">Découvrez Nos Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Des solutions complètes et professionnelles pour l'exportation de fruits tropicaux de qualité supérieure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Services",
                image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1974&auto=format&fit=crop",
                link: "/services",
                description: "Solutions logistiques complètes et personnalisées"
              },
              {
                title: "Processus",
                image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1974&auto=format&fit=crop",
                link: "/processus", 
                description: "De la récolte à la livraison, un contrôle rigoureux"
              },
              {
                title: "Marché",
                image: "https://images.unsplash.com/photo-1526304640581-d1e0f8945835?q=80&w=1974&auto=format&fit=crop",
                link: "/market",
                description: "Présence internationale et réseaux mondiaux"
              },
              {
                title: "Galerie",
                image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1974&auto=format&fit=crop",
                link: "/gallery",
                description: "Nos réalisations et projets d'excellence"
              },
              {
                title: "Contact",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1974&auto=format&fit=crop",
                link: "/contact",
                description: "Contactez nos experts pour un devis personnalisé"
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <a href={section.link} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{section.description}</p>
                      <div className="mt-4 flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors">
                        En savoir plus
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-96 lg:h-full">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-10 lg:p-16">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-semibold mb-4">
                      {selectedProduct.category}
                    </div>
                    <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">{selectedProduct.name}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {selectedProduct.desc}
                    </p>
                  </div>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                        <Package className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Origine</h4>
                        <p className="font-bold text-slate-900">{selectedProduct.origin}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Spécifications</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {selectedProduct.specs.map((spec, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Saison</h4>
                        <p className="font-bold text-slate-900">{selectedProduct.season}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                      DEMANDER UN DEVIS
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-300 hover:text-emerald-600 transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
