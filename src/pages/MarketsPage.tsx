import React from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin, Ship, Plane, CheckCircle2, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export const MarketsPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-display font-black text-slate-900 dark:text-white mb-4 leading-tight">
          Nos <span className="text-gradient">Marchés</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
          Un réseau mondial pour les fruits tropicaux d'exception du Sénégal
        </p>
      </div>

      {/* Header */}
      <section className="section-padding !py-0 mb-16">
        <div className="relative h-[350px] rounded-[40px] overflow-hidden bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1920" 
              alt="Marché mondial MPA GROUP" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-display font-black text-slate-900 dark:text-white leading-tight mb-6">
                Une Présence <span className="text-gradient">Mondiale</span> pour vos besoins.
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
                MPA GROUP exporte les meilleurs fruits du Sénégal vers les marchés les plus exigeants sur trois continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="section-padding grid lg:grid-cols-3 gap-12">
        {[
          {
            region: "Europe",
            desc: "Notre principal marché d'exportation, avec des exigences de qualité et de traçabilité très élevées.",
            destinations: ["France", "Espagne", "Italie", "Allemagne", "Pays-Bas"],
            icon: <Globe />,
            color: "bg-blue-500",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800"
          },
          {
            region: "Asie",
            desc: "Un marché en pleine croissance pour nos fruits exotiques de qualité premium.",
            destinations: ["Chine", "Japon", "Singapour", "Corée du Sud"],
            icon: <Globe />,
            color: "bg-red-500",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
          },
          {
            region: "Afrique & Moyen-Orient",
            desc: "Expansion régionale et vers les pays du Golfe pour nos produits de saison.",
            destinations: ["Maroc", "Côte d'Ivoire", "Émirats Arabes Unis", "Arabie Saoudite"],
            icon: <Globe />,
            color: "bg-emerald-500",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
          }
        ].map((market, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-[50px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 group hover:bg-primary transition-all duration-500 overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src={market.image} 
                alt={market.region} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <div className={`w-12 h-12 ${market.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-colors`}>
                {React.cloneElement(market.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-white transition-colors">{market.region}</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed group-hover:text-white/80 transition-colors">
                {market.desc}
              </p>
              <div className="space-y-3 mt-auto">
                {market.destinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center gap-3 group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4 text-primary group-hover:text-accent shrink-0" />
                    <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-white text-sm">{dest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Logistics Partners */}
      <section className="bg-white dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-6">Partenaires Logistiques</h2>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Nous collaborons avec les leaders mondiaux du transport pour assurer une livraison rapide et sécurisée de nos produits.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Ship className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">Fret Maritime</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Plane className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">Fret Aérien</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck />, title: "Sécurité", desc: "Suivi en temps réel." },
                { icon: <Users />, title: "Réseau", desc: "Partenaires locaux." }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
