import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Package, Ship, FileText, ShieldCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  { 
    title: 'Conditionnement', 
    desc: 'Stations de tri et d\'emballage modernes respectant les normes internationales.', 
    icon: <Package />,
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Logistique & Fret', 
    desc: 'Gestion complète de la chaîne de froid par voie maritime et aérienne.', 
    icon: <Ship />,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Expertise Douanière', 
    desc: 'Accompagnement administratif pour l\'exportation vers l\'Europe et l\'Asie.', 
    icon: <FileText />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Contrôle Qualité', 
    desc: 'Certifications GlobalGAP et traçabilité rigoureuse de chaque lot.', 
    icon: <ShieldCheck />,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800'
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-premium">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            NOS SERVICES
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-black text-slate-900 mb-6 leading-tight">
            Une expertise <span className="text-gradient">sans compromis</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto font-light">
            De la plantation à la destination finale, nous assurons une maîtrise totale de la chaîne de valeur.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-primary transition-colors duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h3>
                <p className="text-white/70 text-[11px] leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {service.desc}
                </p>
                <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            DÉCOUVRIR TOUS NOS SERVICES <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
