import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, Users, Globe } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="section-padding !py-0 mb-20">
        <div className="relative h-[400px] rounded-[60px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920" 
            alt="MPA GROUP Plantation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-12 lg:p-20">
            <div className="max-w-3xl">
              <span className="text-accent font-bold text-sm uppercase tracking-[0.3em] mb-4 block">À PROPOS DE NOUS</span>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight">
                L'Excellence <span className="text-accent">Sénégalaise</span> à l'International.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">Notre Mission</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            MPA GROUP est une entreprise sénégalaise spécialisée dans la commercialisation et l’exportation des fruits vers le marché international. Notre mission est de valoriser le potentiel agricole du Sénégal en offrant des produits d'une qualité irréprochable aux consommateurs du monde entier.
          </p>
          <div className="space-y-4">
            {[
              "Valorisation des terroirs locaux",
              "Soutien aux petits producteurs",
              "Innovation dans la chaîne logistique",
              "Respect des normes environnementales"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Objectif</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Devenir le leader de l'exportation de fruits tropicaux en Afrique de l'Ouest.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl">
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Vision</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Une agriculture durable et connectée aux marchés mondiaux les plus exigeants.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Ces principes guident chacune de nos actions et décisions au quotidien.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award />, title: "Qualité", desc: "Nous ne faisons aucun compromis sur la fraîcheur et le goût de nos produits." },
              { icon: <Users />, title: "Intégrité", desc: "Des relations transparentes et durables avec nos partenaires et producteurs." },
              { icon: <Globe />, title: "Responsabilité", desc: "Un engagement fort pour le développement durable et social du Sénégal." }
            ].map((value, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {React.cloneElement(value.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
