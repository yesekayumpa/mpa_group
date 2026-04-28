import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, ChevronRight, ChevronLeft, CheckCircle2, Clock, Globe, ShieldCheck } from 'lucide-react';

export const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: 'Mangue Kent',
    quantity: '',
    destination: '',
    message: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="pt-32 pb-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-display font-black text-slate-900 dark:text-white mb-4 leading-tight">
          Contactez <span className="text-gradient">Nous</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto font-light">
          Prêt à collaborer ? Notre équipe est à votre disposition pour vos projets d'exportation.
        </p>
      </div>

      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
            Démarrons une <span className="text-gradient">Collaboration</span>.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Notre équipe commerciale est à votre disposition pour répondre à toutes vos demandes de devis et de partenariat.
          </p>
        </div>
      </section>

      <section className="section-padding !py-0 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6">Nos Coordonnées</h3>
            <div className="space-y-6">
              {[
                { icon: <MapPin />, title: 'Adresse', desc: 'Médina rue 37x24, Dakar, Sénégal' },
                { icon: <Phone />, title: 'Téléphone', desc: '+221 33 829 58 06' },
                { icon: <Mail />, title: 'Email', desc: 'contact@mpa-group.sn' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-10 rounded-[50px] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-display font-bold mb-6">Horaires d'Ouverture</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/60">Lundi - Vendredi</span>
                <span className="font-bold">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/60">Samedi</span>
                <span className="font-bold">09:00 - 13:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Dimanche</span>
                <span className="font-bold text-accent">Fermé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-step Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800"
          >
            {/* Progress Bar */}
            <div className="flex gap-2 mb-12">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`} 
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Informations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nom Complet</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none transition-all dark:text-white text-sm" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Entreprise</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none transition-all dark:text-white text-sm" placeholder="Société" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Professionnel</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none transition-all dark:text-white text-sm" placeholder="votre@email.com" />
                  </div>
                  <button onClick={nextStep} className="w-full py-4 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                    ÉTAPE SUIVANTE <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Détails de la Demande</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Produit Souhaité</label>
                      <select className="w-full px-8 py-5 rounded-[24px] bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white appearance-none">
                        <option>Mangue Kent</option>
                        <option>Papaye Solo</option>
                        <option>Melon Charentais</option>
                        <option>Pastèque</option>
                        <option>Citron Vert</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quantité (Tonnes)</label>
                      <input type="number" className="w-full px-8 py-5 rounded-[24px] bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Ex: 20" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Destination</label>
                    <input type="text" className="w-full px-8 py-5 rounded-[24px] bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Pays / Ville" />
                  </div>
                  <div className="flex gap-6 mt-10">
                    <button onClick={prevStep} className="p-6 rounded-[24px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextStep} className="btn-elegant-primary flex-1 py-6 text-lg">
                      ÉTAPE SUIVANTE <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Message & Envoi</h3>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Précisions Supplémentaires</label>
                    <textarea rows={8} className="w-full px-8 py-5 rounded-[24px] bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="Détails logistiques, calibres souhaités..."></textarea>
                  </div>
                  <div className="flex gap-6 mt-10">
                    <button onClick={prevStep} className="p-6 rounded-[24px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => setStep(4)} className="btn-elegant-secondary flex-1 py-6 text-lg">
                      ENVOYER LE DEVIS <Send className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Demande Envoyée !</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-md mx-auto">
                    Merci pour votre confiance. Un conseiller MPA GROUP vous contactera sous peu pour finaliser votre devis.
                  </p>
                  <button onClick={() => setStep(1)} className="text-primary font-bold hover:underline text-lg">
                    Envoyer une autre demande
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding">
        <div className="h-[500px] bg-slate-100 dark:bg-slate-900 rounded-[60px] overflow-hidden relative border border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary/20 mx-auto mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-widest">Carte Interactive en cours de chargement...</p>
            </div>
          </div>
          {/* In a real app, you would embed a Google Map or Mapbox here */}
          <img 
            src="/monde.png" 
            alt="Map" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
};
