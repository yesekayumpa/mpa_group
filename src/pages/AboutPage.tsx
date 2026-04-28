import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, Users, Globe } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="section-padding !py-0 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[350px] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="/african-people-harvesting-vegetables.jpg" 
              alt="Champs de mangues" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-6">Notre Histoire & Vision</h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              MPA GROUP est né d'une passion pour le terroir sénégalais et d'une volonté de valoriser le savoir-faire de nos agriculteurs sur la scène internationale.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Nous avons bâti un réseau logistique robuste et des processus de contrôle qualité rigoureux pour garantir que chaque fruit exporté conserve toute sa fraîcheur et sa saveur authentique.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Années d'Expérience", value: "10+" },
                { label: "Producteurs Partenaires", value: "150+" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="text-2xl font-display font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Notre Mission</h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            MPA GROUP est une entreprise sénégalaise spécialisée dans la commercialisation et l’exportation des fruits vers le marché international. Notre mission est de valoriser le potentiel agricole du Sénégal en offrant des produits d'une qualité irréprochable aux consommateurs du monde entier.
          </p>
          <div className="space-y-4">
            {[
              "Valorisation des terroirs locaux",
              "Soutien aux petits producteurs",
              "Innovation dans la chaîne logistique",
              "Respect des normes environnementales"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
            <Target className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">Objectif</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Devenir le leader de l'exportation de fruits tropicaux en Afrique de l'Ouest.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg">
            <Eye className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">Vision</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Une agriculture durable et connectée aux marchés mondiaux les plus exigeants.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">Nos Valeurs</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Ces principes guident chacune de nos actions et décisions au quotidien.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Award />, title: "Qualité", desc: "Aucun compromis sur la fraîcheur." },
              { icon: <Users />, title: "Intégrité", desc: "Relations transparentes avec nos partenaires." },
              { icon: <Globe />, title: "Responsabilité", desc: "Engagement pour le développement durable." }
            ].map((value, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-5">
                  {React.cloneElement(value.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-display font-black text-slate-900 dark:text-white mb-4 leading-tight">
              L'Excellence <span className="text-gradient">Sénégalaise</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
              Depuis Dakar, MPA GROUP connecte les meilleurs producteurs du Sénégal aux marchés mondiaux.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Amadou Diallo", role: "Directeur Général", image: "/african-man-harvesting-vegetables (1).jpg" },
              { name: "Fatou Sow", role: "Responsable Qualité", image: "/african-woman-harvesting-vegetables (1).jpg" },
              { name: "Moussa Sarr", role: "Directeur Logistique", image: "/african-man-harvesting-vegetables (2).jpg" },
              { name: "Aissatou Fall", role: "Relations Internationales", image: "/african-people-harvesting-vegetables (1).jpg" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative h-80 rounded-[40px] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-lg">{member.name}</p>
                      <p className="text-xs text-white/70 uppercase tracking-widest">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center group-hover:hidden transition-all duration-500">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
