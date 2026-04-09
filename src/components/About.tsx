import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id="apropos" className="section-padding overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          {t.about.badge}
        </motion.div>
        <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-black mb-6 leading-tight">
          {t.about.title} <span className="text-gradient">{t.about.subtitle}</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
          {t.about.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <img 
                src="/team-mpa.png" 
                alt="Team MPA" 
                className="rounded-2xl md:rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
              />
              <div className="bg-secondary p-4 md:p-6 rounded-2xl md:rounded-3xl text-white text-center">
                <p className="text-2xl md:text-3xl font-display font-extrabold mb-1">15+</p>
                <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-80">Années d'Expérience</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 pt-10"
            >
              <div className="bg-primary p-4 md:p-6 rounded-2xl md:rounded-3xl text-white text-center">
                <p className="text-2xl md:text-3xl font-display font-extrabold mb-1">500+</p>
                <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-80">Partenaires</p>
              </div>
              <img 
                src="/mission-values.png" 
                alt="Mission Values" 
                className="rounded-2xl md:rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
              />
            </motion.div>
          </div>
          
          {/* Decorative Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-50 hidden md:flex">
            <div className="text-center">
              <Star className="w-4 h-4 text-accent mx-auto mb-1 fill-current" />
              <span className="text-[8px] font-bold text-slate-900 leading-tight block uppercase tracking-tighter">QUALITÉ<br/>SUPÉRIEURE</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">{t.about.missionBadge}</span>
          <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            {t.about.missionTitle} <br />
            <span className="text-gradient">{t.about.missionSubtitle}</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            {t.about.missionDescription}
          </p>
          
          <div className="space-y-4 mb-8">
            {t.about.values.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-elegant-primary !px-8 !py-3 text-xs tracking-widest uppercase">
            {t.about.ctaButton} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
