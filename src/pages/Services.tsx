import React from 'react';
import { motion } from 'motion/react';
import { Truck, PackageCheck, BarChart3, ShieldCheck, Headphones, Zap } from 'lucide-react';

const services = [
  {
    icon: <Truck />,
    title: "Logistique Internationale",
    desc: "Gestion complète du transport maritime et aérien avec des partenaires de confiance pour une livraison rapide."
  },
  {
    icon: <PackageCheck />,
    title: "Conditionnement Premium",
    desc: "Emballages adaptés aux normes internationales pour préserver la fraîcheur et l'intégrité des fruits."
  },
  {
    icon: <ShieldCheck />,
    title: "Contrôle Qualité",
    desc: "Inspection rigoureuse à chaque étape, de la récolte à l'expédition, garantissant le respect des normes phytosanitaires."
  },
  {
    icon: <BarChart3 />,
    title: "Conseil en Marché",
    desc: "Accompagnement de nos clients sur les tendances du marché et optimisation des calendriers de commande."
  },
  {
    icon: <Headphones />,
    title: "Support Client 24/7",
    desc: "Une équipe dédiée pour répondre à vos besoins et assurer le suivi en temps réel de vos expéditions."
  },
  {
    icon: <Zap />,
    title: "Sourcing Personnalisé",
    desc: "Recherche de variétés spécifiques ou de volumes importants selon vos exigences particulières."
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nos <span className="text-emerald-600">Services</span>
          </motion.h1>
          <p className="text-lg text-gray-600">
            Plus qu'un simple exportateur, nous sommes votre partenaire stratégique pour l'approvisionnement en fruits tropicaux de haute qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:border-emerald-100 transition-all group"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">5000+</p>
              <p className="text-emerald-300 uppercase tracking-widest text-xs font-bold">Tonnes Exportées / An</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">25+</p>
              <p className="text-emerald-300 uppercase tracking-widest text-xs font-bold">Pays Desservis</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">150+</p>
              <p className="text-emerald-300 uppercase tracking-widest text-xs font-bold">Producteurs Partenaires</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-emerald-300 uppercase tracking-widest text-xs font-bold">Satisfaction Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
