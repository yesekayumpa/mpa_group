import React from 'react';
import { motion } from 'motion/react';

const images = [
  { url: "/hero-slide-1.png", title: "Récolte de Mangues", category: "Production" },
  { url: "/hero-slide-1.png", title: "Centre de Tri", category: "Processus" },
  { url: "/hero-slide-1.png", title: "Qualité Export", category: "Produits" },
  { url: "/hero-slide-1.png", title: "Melons du Sénégal", category: "Produits" },
  { url: "/hero-slide-1.png", title: "Logistique Maritime", category: "Logistique" },
  { url: "/hero-slide-1.png", title: "Papayes Fraîches", category: "Produits" },
  { url: "/hero-slide-1.png", title: "Champs de Citrons", category: "Production" },
  { url: "/hero-slide-1.png", title: "Noix de Coco", category: "Produits" },
  { url: "/hero-slide-1.png", title: "Équipe MPA", category: "Équipe" }
];

const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Notre <span className="text-emerald-600">Galerie</span>
          </motion.h1>
          <p className="text-lg text-gray-600">
            Immersion visuelle au cœur de nos activités, de la terre fertile du Sénégal jusqu'à l'expédition finale.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
                <h3 className="text-white text-xl font-bold">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
