import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Package, Ship, FileText, ShieldCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  { title: 'Conditionnement', desc: 'Stations de tri et d\'emballage modernes respectant les normes internationales.', icon: <Package /> },
  { title: 'Logistique & Fret', desc: 'Gestion complète de la chaîne de froid par voie maritime et aérienne.', icon: <Ship /> },
  { title: 'Documents Douaniers', desc: 'Accompagnement administratif pour l\'exportation vers l\'Europe et l\'Asie.', icon: <FileText /> },
  { title: 'Contrôle Qualité', desc: 'Certifications GlobalGAP et traçabilité rigoureuse de chaque lot.', icon: <ShieldCheck /> },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Logistics background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            SERVICES
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-black mb-6 leading-tight">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Une chaîne de valeur complète pour garantir l'excellence de nos produits
          </p>
        </div>

        <div className="text-center mb-16">
          <Link to="/services" className="btn-elegant-primary !px-8 !py-3 text-xs tracking-widest uppercase">
            EN SAVOIR PLUS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-4xl shadow-lg shadow-slate-200/40 dark:shadow-none border border-slate-50 dark:border-slate-800 group hover:bg-primary transition-colors duration-500 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-white/80 transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
