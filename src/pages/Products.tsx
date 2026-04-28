import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Info } from 'lucide-react';

const products = [
  {
    name: "Mangue Kent",
    category: "Fruits Frais",
    desc: "La reine des mangues sénégalaises, charnue et sans fibres.",
    image: "/delicious-papaya-still-life.jpg",
    season: "Avril - Août"
  },
  {
    name: "Melon Charentais",
    category: "Fruits Frais",
    desc: "Sucre intense et parfum envoûtant, cultivé sous le soleil du Sénégal.",
    image: "/assorted-mixed-fruits.jpg",
    season: "Décembre - Mai"
  },
  {
    name: "Pastèque",
    category: "Fruits Frais",
    desc: "Rafraîchissante et gorgée de soleil, idéale pour l'exportation.",
    image: "/top-view-vegetable-composition-with-fresh-fruits-blue-table.jpg",
    season: "Toute l'année"
  },
  {
    name: "Papaye Solo",
    category: "Fruits Exotiques",
    desc: "Une chair orangée délicieuse et riche en vitamines.",
    image: "/red-fresh-tomatoes-gathered-into-cardboaard-boxes-purchasing.jpg",
    season: "Toute l'année"
  },
  {
    name: "Citron Vert",
    category: "Agrumes",
    desc: "Acidité parfaite et arôme puissant pour la gastronomie.",
    image: "/smiling-african-american-farm-worker-with-crate-full-ripening-fresh-leafy-greens-nutritious-vegan-food-from-sustainable-crop-harvest-entrepreneurial-bio-permaculture-greenhouse-farm.jpg",
    season: "Juin - Octobre"
  },
  {
    name: "Noix de Coco",
    category: "Fruits Exotiques",
    desc: "Fraîcheur tropicale directement depuis les côtes sénégalaises.",
    image: "/front-view-man-delivering-groceries.jpg",
    season: "Toute l'année"
  }
];

const Products: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nos <span className="text-emerald-600">Produits</span>
          </motion.h1>
          <p className="text-lg text-gray-600">
            Une sélection rigoureuse des meilleurs fruits du Sénégal, récoltés à maturité optimale pour garantir une expérience gustative unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-emerald-600 text-sm font-medium">{product.season}</span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.desc}
                </p>
                <div className="flex gap-3">
                  <button className="flex-grow py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Commander
                  </button>
                  <button className="p-3 border border-gray-200 text-gray-400 rounded-xl hover:text-emerald-600 hover:border-emerald-600 transition-all">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
