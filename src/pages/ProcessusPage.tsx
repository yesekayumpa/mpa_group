import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, PackageCheck, Truck, CheckCircle2, ArrowRight, ShieldCheck, Globe, Clock } from 'lucide-react';

export const ProcessusPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
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

      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">NOTRE MÉTHODOLOGIE</span>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
            Un Parcours <span className="text-gradient">Maîtrisé</span> de la Récolte à l'Assiette.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Découvrez les étapes clés qui garantissent la qualité exceptionnelle de nos fruits exportés.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 -translate-x-1/2 hidden lg:block" />

        <div className="space-y-24">
          {[
            {
              step: "01",
              title: "Sélection & Récolte",
              desc: "Nos agronomes sélectionnent les meilleures parcelles. La récolte se fait manuellement au stade optimal de maturité pour garantir le meilleur goût et une conservation longue durée.",
              icon: <ClipboardList />,
              color: "bg-emerald-500",
              image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000",
              reverse: false
            },
            {
              step: "02",
              title: "Tri & Conditionnement",
              desc: "Dans nos stations certifiées, les fruits sont lavés, triés par calibre et emballés selon les exigences spécifiques de chaque client et marché de destination.",
              icon: <PackageCheck />,
              color: "bg-orange-500",
              image: "https://images.unsplash.com/photo-1580913209249-6abd4f5a69df?auto=format&fit=crop&q=80&w=1000",
              reverse: true
            },
            {
              step: "03",
              title: "Contrôle Qualité & Froid",
              desc: "Chaque lot subit un contrôle phytosanitaire rigoureux. Les fruits sont ensuite pré-réfrigérés pour stabiliser leur température avant le chargement.",
              icon: <ShieldCheck />,
              color: "bg-amber-500",
              image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
              reverse: false
            },
            {
              step: "04",
              title: "Expédition & Suivi",
              desc: "Le transport s'effectue en conteneurs Reefer (maritime) ou par avion. Nous assurons un suivi en temps réel jusqu'à la livraison finale chez nos partenaires.",
              icon: <Truck />,
              color: "bg-blue-500",
              image: "https://images.unsplash.com/photo-1494412574743-019485676a38?auto=format&fit=crop&q=80&w=1000",
              reverse: true
            }
          ].map((item, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center relative ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Step Circle */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-900 border-4 border-primary rounded-full z-10 hidden lg:flex items-center justify-center font-bold text-primary">
                {item.step}
              </div>

              <div className={item.reverse ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">{item.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Rapidité</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Sécurité</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>Traçabilité</span>
                  </div>
                </div>
              </div>

              <div className={`relative h-[400px] rounded-[50px] overflow-hidden shadow-2xl ${item.reverse ? 'lg:order-1' : ''}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-primary rounded-[60px] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-8 relative z-10">
            Prêt à <span className="text-accent">Commander</span> ?
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Notre processus rigoureux garantit que vous recevrez les meilleurs fruits du Sénégal, peu importe votre destination.
          </p>
          <button className="btn-elegant-secondary relative z-10 mx-auto">
            DEMANDER UN DEVIS <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
