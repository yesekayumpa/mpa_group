import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "Mangue Kent",
    quantity: "",
    destination: "",
    message: "",
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-white"
    >
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
            {t.contact.badge}
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            {t.contact.title}{" "}
            <span className="text-gradient">{t.contact.subtitle}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="text-center mb-16"></div>

        <div className="bg-white rounded-[60px] lg:rounded-[100px] overflow-hidden relative border border-slate-100 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-16 p-10 lg:p-20 relative z-10 items-center">
            <div>
              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: <MapPin />,
                    title: "Adresse",
                    desc: "Médina rue 37x24, Dakar, Sénégal",
                  },
                  {
                    icon: <Phone />,
                    title: "Téléphone",
                    desc: "+221 33 829 58 06",
                  },
                  {
                    icon: <Mail />,
                    title: "Email",
                    desc: "contact@mpa-group.sn",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      {React.cloneElement(item.icon as React.ReactElement, {
                        className: "w-6 h-6",
                      })}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-elegant-primary inline-flex items-center gap-2"
              >
                PAGE DE CONTACT DÉTAILLÉE <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-slate-50 via-white to-primary/5 p-8 lg:p-12 rounded-[40px] shadow-2xl border border-primary/10 overflow-hidden"
              whileHover={{ rotateY: 1, rotateX: -1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Pattern - Enhanced Premium Look */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Main Glow Orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 90, 0],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
                />
                <motion.div
                  animate={{
                    scale: [1.3, 1, 1.3],
                    rotate: [90, 0, 90],
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.6, 1],
                    x: [20, -20, 20],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-[60px]"
                />

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(28,154,58,0.03)_1px,_transparent_1px)] [background-size:24px_24px]" />

                {/* Refined Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -120, 0],
                      x: [0, Math.sin(i) * 40, 0],
                      opacity: [0, 0.4, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    className={`absolute w-1.5 h-1.5 rounded-full ${
                      i % 3 === 0
                        ? "bg-primary/30"
                        : i % 3 === 1
                          ? "bg-secondary/30"
                          : "bg-accent/30"
                    }`}
                    style={{
                      top: `${20 + (i * 10)}%`,
                      left: `${15 + (i * 10)}%`,
                      boxShadow: '0 0 10px currentColor',
                    }}
                  />
                ))}
                
                {/* Decorative Lines */}
                <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-white/10 rounded-[40px] pointer-events-none" />
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
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-2xl font-display font-bold text-slate-900 mb-6 relative"
                    >
                      Informations Générales
                      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </motion.h3>
                    <div className="space-y-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-2 relative group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.label
                          className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2"
                          animate={{ x: [0, 2, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.span
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              boxShadow: [
                                "0 0 0 rgba(28, 154, 58, 0)",
                                "0 0 20px rgba(28, 154, 58, 0.6)",
                                "0 0 0 rgba(28, 154, 58, 0)",
                              ],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          Nom Complet
                        </motion.label>
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"
                            animate={{
                              rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                              background:
                                "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                              backgroundSize: "200% 200%",
                            }}
                            animate={{
                              backgroundPosition: ["200% 200%", "0% 0%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <motion.input
                            type="text"
                            className="relative w-full px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-md border border-primary/20 focus:border-primary/40 focus:ring-4 focus:ring-primary/20 outline-none transition-all text-gray-900 placeholder-gray-400 shadow-lg hover:shadow-xl z-10"
                            placeholder="Votre nom"
                            whileFocus={{
                              scale: 1.02,
                              boxShadow: "0 0 30px rgba(28, 154, 58, 0.2)",
                            }}
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-2 relative group"
                      >
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                          Entreprise
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-blue/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                          <input
                            type="text"
                            className="relative w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-secondary/10 focus:border-secondary/30 focus:ring-4 focus:ring-secondary/10 outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="Nom de votre société"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="space-y-2 relative group"
                      >
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          Email Professionnel
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                          <input
                            type="email"
                            className="relative w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-accent/10 focus:border-accent/30 focus:ring-4 focus:ring-accent/10 outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      onClick={nextStep}
                      whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: -5,
                        boxShadow: "0 20px 40px rgba(28, 154, 58, 0.4)",
                      }}
                      whileTap={{
                        scale: 0.95,
                        rotateY: -5,
                        rotateX: 5,
                      }}
                      className="relative w-full py-6 text-lg mt-8 bg-gradient-to-r from-primary via-secondary to-accent bg-[length:300%_300%] animate-gradient-shift text-white font-bold rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 overflow-hidden group"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      {/* Animated background layers */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-transparent"
                        animate={{
                          y: ["100%", "-100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Pulsing glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl"
                        animate={{
                          boxShadow: [
                            "inset 0 0 20px rgba(28, 154, 58, 0.3)",
                            "inset 0 0 40px rgba(28, 154, 58, 0.6)",
                            "inset 0 0 20px rgba(28, 154, 58, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Content */}
                      <div className="relative z-20 flex items-center justify-center gap-3">
                        <motion.span
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(255,255,255,0.5)",
                              "0 0 20px rgba(255,255,255,0.8)",
                              "0 0 10px rgba(255,255,255,0.5)",
                            ],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          ÉTAPE SUIVANTE
                        </motion.span>
                        <motion.div
                          animate={{
                            x: [0, 8, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </motion.div>
                      </div>

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
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
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-2xl font-display font-bold text-slate-900 mb-6 relative"
                    >
                      Détails de la Commande
                      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </motion.h3>
                    <div className="space-y-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-2 relative group"
                      >
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          Produit Souhaité
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                          <select className="relative w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/10 focus:border-primary/30 focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900 shadow-sm hover:shadow-md appearance-none cursor-pointer">
                            <option>Mangue Kent</option>
                            <option>Papaye Solo</option>
                            <option>Melon Charentais</option>
                            <option>Pastèque</option>
                            <option>Citron Vert</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronRight className="w-5 h-5 text-primary rotate-90" />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-2 relative group"
                      >
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                          Quantité (Tonnes)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-blue/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                          <input
                            type="number"
                            className="relative w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-secondary/10 focus:border-secondary/30 focus:ring-4 focus:ring-secondary/10 outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="Ex: 20"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="space-y-2 relative group"
                      >
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          Destination
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                          <input
                            type="text"
                            className="relative w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-accent/10 focus:border-accent/30 focus:ring-4 focus:ring-accent/10 outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="Pays / Ville"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        onClick={prevStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative p-5 rounded-2xl bg-slate-100/80 backdrop-blur-sm text-slate-600 hover:bg-slate-200/80 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-200/50 group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-200/20 to-slate-300/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                        <ChevronLeft className="w-6 h-6 relative z-10" />
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        onClick={nextStep}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative flex-1 py-5 text-lg bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-shift text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        <div className="relative z-10 flex items-center justify-center gap-3">
                          <span>ÉTAPE SUIVANTE</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </motion.button>
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
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-2xl font-display font-bold text-slate-900 mb-6 relative"
                    >
                      Message & Envoi
                      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </motion.h3>
                    <div className="space-y-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-2 relative group"
                      >
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          Précisions Supplémentaires
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                          <textarea
                            rows={6}
                            className="relative w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/10 focus:border-primary/30 focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md resize-none"
                            placeholder="Détails logistiques, calibres souhaités..."
                          ></textarea>
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        onClick={prevStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative p-5 rounded-2xl bg-slate-100/80 backdrop-blur-sm text-slate-600 hover:bg-slate-200/80 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-200/50 group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-200/20 to-slate-300/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                        <ChevronLeft className="w-6 h-6 relative z-10" />
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        onClick={() => setStep(4)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative flex-1 py-5 text-lg bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_100%] animate-gradient-shift text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        <div className="relative z-10 flex items-center justify-center gap-3">
                          <span>ENVOYER LE DEVIS</span>
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </motion.button>
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
                    <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
                      Demande Envoyée !
                    </h3>
                    <p className="text-slate-500 mb-8">
                      Merci pour votre confiance. Un conseiller MPA GROUP vous
                      contactera sous peu pour finaliser votre devis.
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="text-primary font-bold hover:underline"
                    >
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
