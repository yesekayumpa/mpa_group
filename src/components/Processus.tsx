import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ClipboardCheck, Package, Ship, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: <ClipboardCheck />,
    title: "Commande & Devis",
    desc: "Réception de votre demande, étude de faisabilité et émission d'un devis détaillé sous 24h.",
    color: "bg-indigo-600"
  },
  {
    icon: <Package />,
    title: "Conditionnement",
    desc: "Sélection rigoureuse des fruits et emballage aux normes internationales (GlobalGAP).",
    color: "bg-emerald-600"
  },
  {
    icon: <Ship />,
    title: "Logistique & Fret",
    desc: "Transport sécurisé via chaîne de froid maîtrisée (Air ou Mer) vers votre destination.",
    color: "bg-sky-600"
  },
  {
    icon: <CheckCircle2 />,
    title: "Livraison & Qualité",
    desc: "Remise des documents douaniers et livraison finale avec contrôle qualité à l'arrivée.",
    color: "bg-amber-600"
  }
];

export const Processus = () => {
  return (
    <section id="processus" className="section-padding bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
        <img 
          src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=2000" 
          alt="Field background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            PROCESSUS
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-black dark:text-white mb-6 leading-tight">
            Notre <span className="text-gradient">Processus</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Une méthode rigoureuse pour garantir l'excellence de nos exportations
          </p>
        </div>

        <div className="text-center mb-16">
        </div>

        <div className="relative">
          {/* Connection Line - Subtle and Elegant */}
          <div className="absolute top-[40px] left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-slate-900/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden">
                  {/* Background Step Number */}
                  <span className="absolute -right-1 -top-1 text-5xl font-black text-slate-100 dark:text-slate-800/50 select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
                    {i + 1}
                  </span>

                  <div className={`w-10 h-10 rounded-lg ${step.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-5 h-5" })}
                  </div>
                  
                  <div className="mb-2 relative z-10">
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Étape 0{i + 1}</span>
                    <h3 className="text-base font-display font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">{step.title}</h3>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                    {step.desc}
                  </p>
                </div>

                {i < STEPS.length - 1 && (
                  <div className="mt-6 lg:hidden flex justify-center">
                    <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-700 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/processus" className="btn-elegant-primary !px-8 !py-3 text-xs tracking-widest uppercase">
            DÉTAILS DU PROCESSUS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
