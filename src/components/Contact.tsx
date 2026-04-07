import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, ChevronRight, ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export const Contact = () => {
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
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000" 
          alt="Contact background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
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
            CONTACT
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Contactez <span className="text-gradient">Nous</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Prêt à collaborer ? Notre équipe est à votre disposition pour vos projets d'exportation
          </p>
        </div>

        <div className="text-center mb-16">
        </div>

        <div className="bg-white rounded-[60px] lg:rounded-[100px] overflow-hidden relative border border-slate-100 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 p-10 lg:p-20 relative z-10">
            <div>
              <div className="space-y-8 mb-12">
                {[
                  { icon: <MapPin />, title: 'Adresse', desc: 'Médina rue 37x24, Dakar, Sénégal' },
                  { icon: <Phone />, title: 'Téléphone', desc: '+221 33 829 58 06' },
                  { icon: <Mail />, title: 'Email', desc: 'contact@mpa-group.sn' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-elegant-primary inline-flex items-center gap-2">
                PAGE DE CONTACT DÉTAILLÉE <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 lg:p-12 rounded-[40px] shadow-xl border border-slate-100"
          >
            {/* Progress Bar */}
            <div className="flex gap-2 mb-10">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-slate-100'}`} 
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
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Informations Générales</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nom Complet</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Entreprise</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900" placeholder="Nom de votre société" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Professionnel</label>
                      <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900" placeholder="votre@email.com" />
                    </div>
                  </div>
                  <button onClick={nextStep} className="btn-elegant-primary w-full py-5 text-lg mt-8">
                    ÉTAPE SUIVANTE <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Détails de la Commande</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Produit Souhaité</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 appearance-none">
                        <option>Mangue Kent</option>
                        <option>Papaye Solo</option>
                        <option>Melon Charentais</option>
                        <option>Pastèque</option>
                        <option>Citron Vert</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quantité (Tonnes)</label>
                      <input type="number" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900" placeholder="Ex: 20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Destination</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900" placeholder="Pays / Ville" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={prevStep} className="p-5 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextStep} className="btn-elegant-primary flex-1 py-5 text-lg">
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
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Message & Envoi</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Précisions Supplémentaires</label>
                      <textarea rows={6} className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900" placeholder="Détails logistiques, calibres souhaités..."></textarea>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={prevStep} className="p-5 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => setStep(4)} className="btn-elegant-secondary flex-1 py-5 text-lg">
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
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Demande Envoyée !</h3>
                  <p className="text-slate-500 mb-8">
                    Merci pour votre confiance. Un conseiller MPA GROUP vous contactera sous peu pour finaliser votre devis.
                  </p>
                  <button onClick={() => setStep(1)} className="text-primary font-bold hover:underline">
                    Envoyer une autre demande
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};
