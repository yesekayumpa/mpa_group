import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ShoppingCart, ArrowRight, Info, CheckCircle2, Package, Truck, ShieldCheck, Calendar, MapPin, Tag, ChevronDown, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const PRODUCTS = [
  {
    id: 1,
    name: 'Mangue Kent',
    category: 'Fruits Exotiques',
    desc: 'La reine des mangues, charnue et sans fibres. Idéale pour l\'exportation haut de gamme.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1200',
    season: 'Avril - Juillet',
    origin: 'Casamance & Niayes',
    specs: ['Calibres: 6, 7, 8, 9, 10, 12', 'Conditionnement: Carton 4kg', 'Certification: GlobalGAP'],
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 2,
    name: 'Papaye Solo',
    category: 'Fruits Exotiques',
    desc: 'Une saveur douce et une texture fondante. Riche en vitamines et très prisée en Europe.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200',
    season: 'Toute l\'année',
    origin: 'Niayes',
    specs: ['Calibres: 350g - 600g', 'Conditionnement: Carton 4.5kg', 'Certification: Bio-Sénégal'],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 3,
    name: 'Melon Charentais',
    category: 'Melons & Pastèques',
    desc: 'Un parfum intense et une chair sucrée. Cultivé avec soin dans les zones sablonneuses.',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1200',
    season: 'Janvier - Mai',
    origin: 'Zone des Niayes',
    specs: ['Calibres: 12, 15, 18', 'Conditionnement: Caisse bois/carton', 'Certification: GlobalGAP'],
    color: 'from-green-400 to-yellow-500'
  },
  {
    id: 4,
    name: 'Pastèque',
    category: 'Melons & Pastèques',
    desc: 'Rafraîchissante et juteuse, nos pastèques sont sélectionnées pour leur taux de sucre élevé.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1200',
    season: 'Février - Juin',
    origin: 'Vallée du Fleuve Sénégal',
    specs: ['Poids: 4kg - 12kg', 'Conditionnement: Vrac ou Palox', 'Certification: Qualité Premium'],
    color: 'from-red-500 to-green-600'
  },
  {
    id: 5,
    name: 'Citron Vert',
    category: 'Agrumes',
    desc: 'Acide et parfumé, parfait pour la gastronomie et les boissons.',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=1200',
    season: 'Toute l\'année',
    origin: 'Thiès & Casamance',
    specs: ['Calibres: 48, 54, 60', 'Conditionnement: Carton 4kg', 'Certification: GlobalGAP'],
    color: 'from-lime-400 to-emerald-600'
  },
  {
    id: 6,
    name: 'Ananas Pain de Sucre',
    category: 'Fruits Exotiques',
    desc: 'Une douceur exceptionnelle et une chair blanche très sucrée. Le joyau des Niayes.',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=1200',
    season: 'Toute l\'année',
    origin: 'Niayes',
    specs: ['Calibres: 1kg - 2.5kg', 'Conditionnement: Carton 10kg', 'Certification: Bio-Sénégal'],
    color: 'from-yellow-300 to-yellow-600'
  },
  {
    id: 7,
    name: 'Avocat Hass',
    category: 'Fruits Exotiques',
    desc: 'Chair onctueuse et goût de noisette. Sélectionné pour sa maturité optimale.',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=1200',
    season: 'Novembre - Mars',
    origin: 'Casamance',
    specs: ['Calibres: 12, 14, 16', 'Conditionnement: Carton 4kg', 'Certification: GlobalGAP'],
    color: 'from-emerald-500 to-green-700'
  },
  {
    id: 8,
    name: 'Pamplemousse Star Ruby',
    category: 'Agrumes',
    desc: 'Chair rouge intense, juteuse et parfumée. Équilibre parfait acidité-sucre.',
    image: 'https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80&w=1200',
    season: 'Octobre - Février',
    origin: 'Thiès',
    specs: ['Calibres: 35, 40, 45', 'Conditionnement: Télescopique 15kg', 'Certification: GlobalGAP'],
    color: 'from-pink-400 to-red-500'
  },
  {
    id: 9,
    name: 'Orange Valencia',
    category: 'Agrumes',
    desc: 'L\'orange idéale pour le jus, très juteuse avec peu de pépins.',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=1200',
    season: 'Mars - Juin',
    origin: 'Zone des Niayes',
    specs: ['Calibres: 64, 72, 80', 'Conditionnement: Filet ou Carton', 'Certification: Qualité Premium'],
    color: 'from-orange-300 to-orange-600'
  },
  {
    id: 10,
    name: 'Banane Cavendish',
    category: 'Fruits Exotiques',
    desc: 'Texture ferme et goût sucré. Cultivée selon des méthodes durables.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=1200',
    season: 'Toute l\'année',
    origin: 'Vallée du Fleuve',
    specs: ['Calibres: Extra-Large', 'Conditionnement: Carton 18kg', 'Certification: GlobalGAP'],
    color: 'from-yellow-400 to-yellow-200'
  }
];

const CATEGORIES = ['Tous', 'Fruits Exotiques', 'Melons & Pastèques', 'Agrumes'];

export const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const filteredProducts = activeCategory === 'Tous' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <section ref={heroRef} className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2070&auto=format&fit=crop"
            alt="Fruits tropicaux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-tight tracking-tight"
          >
            NOTRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">CATALOGUE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base text-white/80 max-w-lg mx-auto font-light leading-relaxed mb-4"
          >
            L'excellence de la terre sénégalaise, sélectionnée pour les marchés internationaux.
          </motion.p>
        </motion.div>
      </section>

      <section className="sticky top-16 md:top-20 z-40 bg-white/90 backdrop-blur-xl border-y border-slate-100 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <Filter className="w-3.5 h-3.5" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Catégories</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-bold transition-all duration-300 uppercase tracking-wider border",
                  activeCategory === cat 
                    ? "bg-primary border-primary text-white shadow-sm" 
                    : "bg-white border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden lg:block text-slate-400 text-[9px] font-medium">
            {filteredProducts.length} produits disponibles
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100 hover:shadow-xl transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute top-3 left-3">
                      <div className="px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-lg text-[8px] font-bold text-primary uppercase tracking-widest shadow-sm">
                        {product.category}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="w-[85%] py-2.5 bg-white text-slate-900 rounded-xl font-bold text-[9px] uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Détails du produit
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-900 leading-tight mb-1">{product.name}</h3>
                        <div className="flex items-center gap-1.5 text-slate-400 text-[8px] font-bold uppercase tracking-widest">
                          <MapPin className="w-3 h-3 text-primary" />
                          {product.origin}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-slate-50 rounded-lg text-[9px] font-semibold text-slate-500">
                        <Calendar className="w-3 h-3 text-primary" />
                        {product.season}
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mt-3">
                      {product.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section - Plus Équilibrée */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden bg-slate-900 p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6">
                Solutions <span className="text-primary">Export</span> Sur Mesure
              </h2>
              <p className="text-base text-white/60 mb-10 font-light">
                Nous accompagnons les importateurs mondiaux avec des solutions logistiques garanties.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                >
                  Demander un devis
                </Link>
                <Link 
                  to="/processus" 
                  className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Notre processus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Détails - Plus Sobre & Pro */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white md:text-slate-500 hover:bg-primary hover:text-white transition-all z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                <div className="absolute bottom-6 left-6 text-white md:hidden">
                  <h2 className="text-3xl font-display font-black">{selectedProduct.name}</h2>
                </div>
              </div>

              <div className="md:w-7/12 p-8 md:p-12 overflow-y-auto bg-white">
                <div className="hidden md:block mb-8">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">{selectedProduct.category}</span>
                  <h2 className="text-4xl font-display font-black text-slate-900 leading-none">{selectedProduct.name}</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Description</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedProduct.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <MapPin className="w-4 h-4 text-primary mb-2" />
                      <h4 className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Origine</h4>
                      <p className="text-xs font-bold text-slate-900">{selectedProduct.origin}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <Calendar className="w-4 h-4 text-primary mb-2" />
                      <h4 className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Saison</h4>
                      <p className="text-xs font-bold text-slate-900">{selectedProduct.season}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Standards</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProduct.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Link 
                      to="/contact" 
                      className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary-dark transition-all text-center"
                    >
                      Demander une cotation
                    </Link>
                    <button className="w-12 h-12 rounded-xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all">
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
