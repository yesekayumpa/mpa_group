'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Ship, FileText, ShieldCheck } from 'lucide-react';

interface ServiceData {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const SERVICES_DATA: ServiceData[] = [
  {
    title: 'Conditionnement',
    description: 'Stations de tri et d\'emballage modernes respectant les normes internationales.',
    image: '/red-fresh-tomatoes-gathered-into-cardboaard-boxes-purchasing.jpg',
    icon: <Package className="w-6 h-6" />
  },
  {
    title: 'Logistique & Fret',
    description: 'Gestion complète de la chaîne de froid par voie maritime et aérienne.',
    image: '/front-view-man-delivering-groceries.jpg',
    icon: <Ship className="w-6 h-6" />
  },
  {
    title: 'Expertise Douanière',
    description: 'Accompagnement administratif pour l\'exportation vers l\'Europe et l\'Asie.',
    image: '/portrait-man-practicing-his-profession-celebrate-international-labour-day.jpg',
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: 'Contrôle Qualité',
    description: 'Certifications GlobalGAP et traçabilité rigoureuse de chaque lot.',
    image: '/smiling-african-american-farm-worker-with-crate-full-ripening-fresh-leafy-greens-nutritious-vegan-food-from-sustainable-crop-harvest-entrepreneurial-bio-permaculture-greenhouse-farm.jpg',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

interface FlipCardProps {
  data: ServiceData;
}

const FlipCard: React.FC<FlipCardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[280px] sm:h-[320px] perspective-1000">
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            src={data.image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-primary transition-colors duration-500">
              {data.icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {data.title}
            </h3>
            <p className="text-white/70 text-[11px] leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              {data.description}
            </p>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-700" />
          </div>
        </motion.div>

        {/* Back Face */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-primary rotate-y-180 backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-white">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6">
              {data.icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4 text-center">
              {data.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed text-center mb-8">
              {data.description}
            </p>
            <button className="px-6 py-3 bg-white text-primary rounded-full text-sm font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">
              En savoir plus
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const FlipCardDemo = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {SERVICES_DATA.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <FlipCard data={service} />
        </motion.div>
      ))}
    </div>
  );
};

export default FlipCardDemo;
