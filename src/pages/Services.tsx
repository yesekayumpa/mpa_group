import React from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  PackageCheck, 
  BarChart3, 
  ShieldCheck, 
  Headphones, 
  Zap,
  ArrowUpRight,
  Globe,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: <Truck />,
    title: "Logistique Internationale",
    desc: "Gestion complète du transport maritime et aérien avec des partenaires de confiance pour une livraison rapide.",
    gradient: "from-blue-500 to-cyan-500",
    color: "blue"
  },
  {
    icon: <PackageCheck />,
    title: "Conditionnement Premium",
    desc: "Emballages adaptés aux normes internationales pour préserver la fraîcheur et l'intégrité des fruits.",
    gradient: "from-emerald-500 to-teal-500",
    color: "emerald"
  },
  {
    icon: <ShieldCheck />,
    title: "Contrôle Qualité",
    desc: "Inspection rigoureuse à chaque étape, de la récolte à l'expédition, garantissant le respect des normes phytosanitaires.",
    gradient: "from-purple-500 to-pink-500",
    color: "purple"
  },
  {
    icon: <BarChart3 />,
    title: "Conseil en Marché",
    desc: "Accompagnement de nos clients sur les tendances du marché et optimisation des calendriers de commande.",
    gradient: "from-orange-500 to-red-500",
    color: "orange"
  },
  {
    icon: <Headphones />,
    title: "Support Client 24/7",
    desc: "Une équipe dédiée pour répondre à vos besoins et assurer le suivi en temps réel de vos expéditions.",
    gradient: "from-indigo-500 to-purple-500",
    color: "indigo"
  },
  {
    icon: <Zap />,
    title: "Sourcing Personnalisé",
    desc: "Recherche de variétés spécifiques ou de volumes importants selon vos exigences particulières.",
    gradient: "from-yellow-500 to-amber-500",
    color: "yellow"
  }
];

const stats = [
  { value: "5000+", label: "Tonnes Exportées / An", icon: <TrendingUp />, suffix: "T" },
  { value: "25+", label: "Pays Desservis", icon: <Globe />, suffix: "+" },
  { value: "150+", label: "Producteurs Partenaires", icon: <Users />, suffix: "+" },
  { value: "100%", label: "Satisfaction Client", icon: <Award />, suffix: "%" }
];

const Services: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
              Expertise & Excellence
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Nos{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-20 blur-2xl" />
              <span className="relative bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Services
              </span>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Plus qu'un simple exportateur, nous sommes votre partenaire stratégique pour 
            l'approvisionnement en fruits tropicaux de haute qualité.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg" />
              
              <div className="relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-transparent transition-all duration-300 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with animated gradient */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity" />
                  {React.cloneElement(service.icon as React.ReactElement, { 
                    className: "w-8 h-8 text-white relative z-10" 
                  })}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.desc}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-emerald-600 transition-colors"
                >
                  En savoir plus
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-[3rem] filter blur-2xl opacity-50" />
          
          <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-[3rem] p-12 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 opacity-10 rounded-full filter blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Notre Impact en Chiffres
                </h2>
                <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
                  Des résultats concrets qui témoignent de notre engagement et de notre expertise
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ y: -5 }}
                    className="text-center relative group"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                    
                    <div className="relative p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                        {React.cloneElement(stat.icon as React.ReactElement, { 
                          className: "w-8 h-8 text-emerald-300" 
                        })}
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      
                      <p className="text-emerald-200 font-medium text-sm uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold shadow-lg hover:bg-emerald-700 transition-all duration-300"
            >
              Demander un devis
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-600"
            >
              Contacter un expert
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;