import React from 'react';
import { motion } from 'motion/react';
import { 
  Package, 
  Ship, 
  FileText, 
  ShieldCheck, 
  Truck, 
  Plane, 
  Warehouse, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Users,
  Award,
  TrendingUp,
  BarChart3,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: "Logistique Internationale",
    desc: "Gestion complète du transport maritime et aérien avec des partenaires de confiance pour une livraison rapide.",
    icon: <Ship />,
    image: "/front-view-man-delivering-groceries.jpg",
    gradient: "from-blue-600/20 to-cyan-600/20",
    features: ["Suivi en temps réel", "Chaîne de froid garantie", "Optimisation des coûts"]
  },
  {
    title: "Conditionnement Premium",
    desc: "Emballages adaptés aux normes internationales pour préserver la fraîcheur et l'intégrité des fruits.",
    icon: <Package />,
    image: "/red-fresh-tomatoes-gathered-into-cardboaard-boxes-purchasing.jpg",
    gradient: "from-emerald-600/20 to-teal-600/20",
    features: ["Tri optique", "Packaging éco-responsable", "Protection anti-choc"]
  },
  {
    title: "Contrôle Qualité",
    desc: "Inspection rigoureuse à chaque étape, de la récolte à l'expédition, garantissant le respect des normes.",
    icon: <ShieldCheck />,
    image: "/smiling-african-american-farm-worker-with-crate-full-ripening-fresh-leafy-greens-nutritious-vegan-food-from-sustainable-crop-harvest-entrepreneurial-bio-permaculture-greenhouse-farm.jpg",
    gradient: "from-purple-600/20 to-pink-600/20",
    features: ["Certification GlobalGAP", "Traçabilité totale", "Analyses labo"]
  },
  {
    title: "Conseil Stratégique",
    desc: "Accompagnement de nos clients sur les tendances du marché et optimisation des calendriers.",
    icon: <BarChart3 />,
    image: "/top-view-vegetable-composition-with-fresh-fruits-blue-table.jpg",
    gradient: "from-orange-600/20 to-red-600/20",
    features: ["Analyse de marché", "Calendrier export", "Sourcing dédié"]
  }
];

const STATS = [
  { value: "5000", suffix: "T+", label: "Exportées / An", icon: <TrendingUp /> },
  { value: "25", suffix: "+", label: "Pays Desservis", icon: <Globe /> },
  { value: "150", suffix: "+", label: "Producteurs", icon: <Users /> },
  { value: "100", suffix: "%", label: "Satisfaction", icon: <Award /> }
];

export const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section Compact & Premium */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-slide-3.png" 
            className="w-full h-full object-cover"
            alt="Logistics expertise"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-black text-white mb-4 leading-tight">
              NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">SERVICES</span>
            </h1>
            <p className="text-base text-white/70 font-light leading-relaxed max-w-xl">
              Une chaîne de valeur optimisée pour garantir la fraîcheur et la qualité de vos exportations à travers le monde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {React.cloneElement(stat.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              <div className="text-2xl font-display font-black text-slate-900 mb-1 group-hover:text-white">
                {stat.value}<span className="text-primary text-lg group-hover:text-white/80">{stat.suffix}</span>
              </div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-black text-slate-900 mb-4">
            Une expertise <span className="text-primary">360°</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Nous maîtrisons chaque aspect de la chaîne d'exportation pour vous offrir une tranquillité d'esprit totale.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900">{service.title}</h3>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 py-2 px-3 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-[11px] font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 relative w-full aspect-[16/10]">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-[40px] transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'} scale-95 opacity-50`} />
                <div className="relative h-full rounded-[40px] overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[40px] bg-slate-900 overflow-hidden p-8 md:p-16 text-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/10 blur-[120px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6">
                Prêt à optimiser vos <span className="text-primary">importations</span> ?
              </h2>
              <p className="text-base text-white/60 mb-8 font-light">
                Nos experts logistiques sont à votre disposition pour étudier vos besoins spécifiques et vous proposer des solutions sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                >
                  Demander un devis
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Contacter un expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
