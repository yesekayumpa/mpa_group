import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Scissors, Thermometer, Truck, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <Sprout />,
    title: "Culture & Sélection",
    desc: "Nous sélectionnons les meilleures parcelles et accompagnons les agriculteurs dans des pratiques durables."
  },
  {
    icon: <Scissors />,
    title: "Récolte à la Main",
    desc: "Les fruits sont cueillis manuellement à maturité optimale pour éviter tout dommage et préserver la qualité."
  },
  {
    icon: <Thermometer />,
    title: "Traitement & Tri",
    desc: "Nettoyage, traitement phytosanitaire et tri rigoureux par calibre et qualité dans nos centres de conditionnement."
  },
  {
    icon: <CheckCircle2 />,
    title: "Emballage & Contrôle",
    desc: "Conditionnement spécifique selon la destination et contrôle final avant la mise sous froid."
  },
  {
    icon: <Truck />,
    title: "Expédition Rapide",
    desc: "Transport sous température contrôlée vers les ports et aéroports pour une livraison express."
  }
];

const Process: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Notre <span className="text-emerald-600">Processus</span>
          </motion.h1>
          <p className="text-lg text-gray-600">
            Une chaîne de valeur maîtrisée de A à Z pour garantir une fraîcheur irréprochable de nos fruits tropicaux.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-100 hidden lg:block -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}>
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">Étape 0{i + 1}</span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-600/20">
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-10 h-10" })}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
