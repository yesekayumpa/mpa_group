import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Ship, Plane, MapPin } from 'lucide-react';

const markets = [
  { region: "Europe", countries: "France, Espagne, Allemagne, Pays-Bas", share: "45%" },
  { region: "Moyen-Orient", countries: "Dubaï, Arabie Saoudite, Qatar", share: "25%" },
  { region: "Asie", countries: "Chine, Japon, Singapour", share: "20%" },
  { region: "Amérique", countries: "USA, Canada", share: "10%" }
];

const Market: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Le <span className="text-emerald-600">Marché Mondial</span>
          </motion.h1>
          <p className="text-lg text-gray-600">
            MPA GROUP rayonne à l'international, exportant le meilleur du Sénégal vers les quatre coins du globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 rounded-[3rem] shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Globe2 className="w-64 h-64 text-emerald-900" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Rayonnement</h2>
            <div className="space-y-8">
              {markets.map((m, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900">{m.region}</span>
                    <span className="text-emerald-600 font-bold">{m.share}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: m.share }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-emerald-600 rounded-full"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {m.countries}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Ship className="text-emerald-600" /> Exportation Maritime
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Utilisation de conteneurs réfrigérés (Reefers) de dernière génération pour les longues distances, garantissant une atmosphère contrôlée durant tout le trajet.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Plane className="text-emerald-600" /> Fret Aérien Express
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pour les produits ultra-frais et les commandes urgentes, nous assurons une livraison en moins de 48h vers les principaux hubs aéroportuaires mondiaux.
              </p>
            </div>
          </div>
        </div>

        {/* World Map Placeholder */}
        <div className="relative h-[400px] bg-emerald-900 rounded-[3rem] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/hero-slide-1.png"
              alt="World Map"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <Globe2 className="w-20 h-20 mx-auto mb-6 text-emerald-400 animate-pulse" />
            <h3 className="text-3xl font-bold mb-4">Un Réseau Sans Frontières</h3>
            <p className="text-emerald-100 max-w-xl mx-auto">
              Nous continuons d'étendre notre présence pour faire découvrir les saveurs du Sénégal à de nouveaux marchés chaque année.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
