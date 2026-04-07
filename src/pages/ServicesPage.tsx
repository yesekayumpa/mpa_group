import React from 'react';
import { motion } from 'motion/react';
import { Package, Ship, FileText, ShieldCheck, Truck, Plane, Warehouse, CheckCircle2 } from 'lucide-react';

export const ServicesPage = () => {
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
          SERVICES
        </motion.div>
        <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-black dark:text-white mb-6 leading-tight">
          Nos <span className="text-gradient">Services</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
          Une expertise complète pour garantir l'excellence de vos exportations de fruits tropicaux
        </p>
      </div>

      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="relative h-[450px] rounded-[60px] overflow-hidden bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
              alt="Logistique MPA GROUP" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-10">
            <div className="max-w-4xl">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">NOTRE EXPERTISE</span>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
                Une Logistique <span className="text-gradient">Sans Faille</span> pour vos Produits.
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                De la récolte à la livraison finale, nous maîtrisons chaque étape de la chaîne de valeur pour garantir une fraîcheur optimale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding grid gap-24">
        {[
          {
            title: "Conditionnement & Tri",
            desc: "Nos stations de conditionnement modernes sont équipées pour assurer un tri rigoureux par calibre, couleur et maturité. Nous utilisons des emballages certifiés qui protègent les fruits tout en valorisant leur présentation.",
            icon: <Package />,
            features: ["Tri optique haute précision", "Emballages personnalisables", "Respect des normes d'hygiène strictes"],
            image: "https://images.unsplash.com/photo-1580913209249-6abd4f5a69df?auto=format&fit=crop&q=80&w=1000",
            reverse: false
          },
          {
            title: "Logistique & Fret Multimodal",
            desc: "Nous gérons l'acheminement de vos marchandises par voie maritime (conteneurs frigorifiques) ou aérienne pour les produits les plus fragiles. Notre expertise garantit le respect strict de la chaîne du froid.",
            icon: <Ship />,
            features: ["Conteneurs Reefer de dernière génération", "Suivi GPS en temps réel", "Partenariats avec les plus grandes compagnies"],
            image: "https://images.unsplash.com/photo-1494412574743-019485676a38?auto=format&fit=crop&q=80&w=1000",
            reverse: true
          },
          {
            title: "Gestion Administrative & Douanière",
            desc: "L'exportation internationale requiert une documentation complexe. Nos experts s'occupent de toutes les formalités douanières et sanitaires pour assurer un passage fluide aux frontières.",
            icon: <FileText />,
            features: ["Certificats phytosanitaires", "Documents d'exportation (EUR1, etc.)", "Veille réglementaire internationale"],
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
            reverse: false
          }
        ].map((service, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className={service.reverse ? 'lg:order-2' : ''}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">{service.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl ${service.reverse ? 'lg:order-1' : ''}`}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Logistics Stats */}
      <section className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Truck />, label: "Transport Terrestre", value: "24/7" },
            { icon: <Ship />, label: "Fret Maritime", value: "15+ Ports" },
            { icon: <Plane />, label: "Fret Aérien", value: "48h Max" },
            { icon: <Warehouse />, label: "Stockage Froid", value: "5000m²" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-3xl font-display font-bold mb-2 text-slate-900 dark:text-white">{stat.value}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
