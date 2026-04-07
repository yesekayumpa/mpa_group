import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ClipboardCheck, Package, Ship, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Processus = () => {
  const { t } = useLanguage();
  
  const STEPS = [
    {
      icon: <ClipboardCheck />,
      title: t.process.step1Title,
      desc: t.process.step1Desc,
      color: "bg-indigo-600"
    },
    {
      icon: <Package />,
      title: t.process.step2Title,
      desc: t.process.step2Desc,
      color: "bg-emerald-600"
    },
    {
      icon: <Ship />,
      title: t.process.step3Title,
      desc: t.process.step3Desc,
      color: "bg-sky-600"
    },
    {
      icon: <CheckCircle2 />,
      title: t.process.step4Title,
      desc: t.process.step4Desc,
      color: "bg-amber-600"
    }
  ];
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
                <div className="relative group">
                  {/* Card Container */}
                  <div className="bg-white dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 h-full flex flex-col items-center text-center overflow-hidden relative">
                    
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Decorative Corner Accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 ${step.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-700`} />
                    
                    
                    {/* Icon Container with Enhanced Effects */}
                    <div className="relative mb-6">
                      <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-500 relative z-10 transform group-hover:scale-110 group-hover:rotate-6`}>
                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-7 h-7" })}
                      </div>
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Rotating Ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-slate-200 dark:border-slate-700 group-hover:border-primary/30 transition-all duration-500" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="relative z-10 flex-1 flex flex-col">
                                            
                      {/* Title */}
                      <h3 className="text-lg font-display font-extrabold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors duration-500">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                        {step.desc}
                      </p>
                      
                      {/* Hover Indicator */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`w-full h-0.5 ${step.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-1/4 -left-4 w-2 h-2 bg-primary/20 rounded-full group-hover:animate-pulse" />
                    <div className="absolute bottom-1/4 -right-4 w-3 h-3 bg-primary/10 rounded-full group-hover:animate-pulse delay-75" />
                  </div>
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
            {t.process.ctaButton} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
