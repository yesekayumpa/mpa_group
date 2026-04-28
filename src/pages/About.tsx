import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

/**
 * Page À propos présentant l'histoire et les valeurs de MPA GROUP
 * @returns Page complète avec histoire, valeurs et statistiques de l'entreprise
 */
const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            À Propos de <span className="text-emerald-600">MPA GROUP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Depuis plus de 15 ans, nous sommes le pont entre la richesse agricole du Sénégal et les tables du monde entier.
          </motion.p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                MPA GROUP est né d'une passion pour la terre sénégalaise et d'une vision : valoriser nos produits locaux sur la scène internationale. Fondée à Dakar, notre entreprise a su évoluer pour devenir un acteur incontournable de l'exportation agroalimentaire.
              </p>
              <p>
                Nous travaillons main dans la main avec des producteurs locaux, en leur apportant un soutien technique et financier, tout en garantissant des prix justes. Cette relation de confiance est le socle de notre succès et de la qualité exceptionnelle de nos fruits.
              </p>
              <p>
                Aujourd'hui, MPA GROUP c'est une équipe de passionnés, des infrastructures de pointe et un réseau de distribution qui s'étend sur trois continents.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img
              src="/hero-slide-1.png"
              alt="MPA GROUP Operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-10 -left-10 bg-emerald-600 text-white p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-emerald-100">Années d'expérience</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Users />, title: "Engagement Social", desc: "Soutien aux communautés rurales et développement local." },
            { icon: <Target />, title: "Excellence", desc: "Une quête permanente de la perfection dans chaque colis." },
            { icon: <Award />, title: "Intégrité", desc: "Transparence totale avec nos partenaires et clients." },
            { icon: <TrendingUp />, title: "Innovation", desc: "Optimisation continue de nos processus logistiques." }
          ].map((value, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-emerald-200 transition-colors">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                {React.cloneElement(value.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
