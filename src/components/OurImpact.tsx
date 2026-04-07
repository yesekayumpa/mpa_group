import React from 'react';
import { motion } from 'motion/react';
import { Users, Sprout, Heart, Droplets, TrendingUp, Award } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

const STATS = [
  { 
    label: 'Producteurs Locaux', 
    value: 120, 
    suffix: '+',
    icon: <Users />, 
    desc: 'Partenariats directs et équitables.',
    infographic: (
      <div className="flex items-end gap-1 h-8 mt-4">
        {[40, 60, 45, 80, 55, 90].map((h, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            className="w-2 bg-primary/30 rounded-t-sm"
          />
        ))}
      </div>
    )
  },
  { 
    label: 'Agriculture Bio', 
    value: 65, 
    suffix: '%',
    icon: <Sprout />, 
    desc: 'De nos terres sont certifiées bio.',
    infographic: (
      <div className="relative w-12 h-12 mt-2">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path className="text-slate-200" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
          <motion.path 
            initial={{ strokeDasharray: "0, 100" }}
            whileInView={{ strokeDasharray: "65, 100" }}
            className="text-primary" 
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    )
  },
  { 
    label: 'Emplois Créés', 
    value: 450, 
    icon: <Heart />, 
    desc: 'Soutien aux familles rurales.',
    infographic: (
      <div className="flex -space-x-2 mt-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
            <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-[10px] font-bold text-white flex items-center justify-center">
          +446
        </div>
      </div>
    )
  },
  { 
    label: 'Eau Économisée', 
    value: 30, 
    suffix: '%',
    icon: <Droplets />, 
    desc: 'Grâce à l\'irrigation intelligente.',
    infographic: (
      <div className="w-full bg-slate-200 h-2 rounded-full mt-6 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '30%' }}
          className="h-full bg-primary"
        />
      </div>
    )
  },
];

export const OurImpact = () => {
  return (
    <section id="impact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block"
          >
            NOTRE IMPACT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6"
          >
            Plus qu'une Entreprise, <br />
            <span className="text-gradient">Un Engagement Durable.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Chez MPA GROUP, nous croyons que le succès de l'exportation doit profiter à la terre qui nous nourrit et aux communautés qui la cultivent.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000" 
                alt="Impact Social" 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-10">
                <div className="text-white">
                  <Award className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-2">Responsabilité Sociale</h3>
                  <p className="text-white/80 text-sm">Nous investissons 5% de nos bénéfices dans des projets d'éducation et de santé locaux.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -top-10 -right-10 glass-card p-8 rounded-3xl hidden md:block max-w-[200px] animate-float">
              <TrendingUp className="text-secondary w-8 h-8 mb-3" />
              <p className="text-2xl font-display font-extrabold text-slate-900">+25%</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Revenu moyen des producteurs</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[32px] bg-white border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {React.cloneElement(stat.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h4 className="text-3xl font-display font-extrabold text-slate-900 mb-1">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix || ''} 
                      className="text-gradient"
                    />
                  </h4>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">{stat.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{stat.desc}</p>
                </div>
                
                {/* Mini Infographic */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  {stat.infographic}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for Impact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-[40px] p-10 lg:p-16 text-center relative overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-5 dark:opacity-10" />
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6 relative z-10">
            Ensemble, cultivons un avenir <span className="text-gradient">plus vert.</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
            Nous sommes fiers de nos racines et de notre impact. Rejoignez-nous dans cette aventure humaine et écologique.
          </p>
          <button className="btn-elegant-primary relative z-10 mx-auto">
            LIRE NOTRE RAPPORT RSE 2025
          </button>
        </motion.div>
      </div>
    </section>
  );
};
