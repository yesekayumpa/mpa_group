import React from "react";
import { motion } from "motion/react";

const TIERS = [
  {
    id: "market",
    name: "Marché Financier",
    price: "50 000",
    currency: "FCFA",
    period: "/ mois",
    description:
      "Idéal pour les investisseurs individuels souhaitant dynamiser leur portefeuille.",
    features: [
      "Commission AUM : 1% / an",
      "Frais de courtage : 1% / transaction",
      "Reporting trimestriel détaillé",
      "Accès plateforme standard",
      "Support par email",
    ],
    highlight: false,
    infographic: (
      <div className="flex items-end gap-1 h-6 mt-6 opacity-40">
        {[30, 50, 40, 70, 60].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            className="flex-1 bg-primary rounded-t-[2px]"
          />
        ))}
      </div>
    ),
  },
  {
    id: "prestige",
    name: "Prestige",
    price: "100 000",
    currency: "FCFA",
    period: "/ mois",
    description:
      "Une gestion sur-mesure pour les patrimoines exigeants en quête d'excellence.",
    features: [
      "Commission AUM : 0.5% / an",
      "Frais de courtage : 0.75% / transaction",
      "Gestionnaire de compte dédié",
      "Reporting mensuel personnalisé",
      "Accès VIP aux événements",
      "Support prioritaire 24/7",
    ],
    highlight: true,
    infographic: (
      <div className="relative w-full h-1 mt-8 mb-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-accent shadow-[0_0_15px_rgba(247,165,18,0.5)]"
        />
      </div>
    ),
  },
  {
    id: "corporate",
    name: "Corporate",
    price: "Sur Devis",
    currency: "",
    period: "",
    description:
      "Solutions institutionnelles adaptées aux structures complexes et grands comptes.",
    features: [
      "Commission AUM : 0.25% / an",
      "Frais de courtage : 0.5% / transaction",
      "Interface API dédiée",
      "Audit de conformité inclus",
      "Comité d'investissement dédié",
      "Ingénierie financière avancée",
    ],
    highlight: false,
    infographic: (
      <div className="flex gap-1.5 mt-6 h-6 items-center">
        {[1, 1, 1, 1, 0.4].map((op, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-2 h-2 rounded-full bg-slate-200"
            style={{ opacity: op }}
          />
        ))}
      </div>
    ),
  },
];

export const MembershipConditions = () => {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background patterns similar to OurImpact */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none -z-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 C 50 100 80 100 100 0 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block"
          >
            NOS OFFRES & TARIFS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-black text-slate-900 mb-6"
          >
            Choisissez l'excellence <br />
            <span className="text-gradient">pour vos investissements.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Des structures tarifaires transparentes et dégressives, conçues pour
            aligner nos intérêts avec votre réussite financière.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[40px] transition-all duration-500 flex flex-col ${
                tier.highlight
                  ? "bg-slate-900 text-white shadow-2xl scale-105 z-10 border-t-4 border-accent"
                  : "bg-white border border-slate-100 hover:shadow-xl"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  RECOMMANDÉ
                </div>
              )}

              <div className="mb-10">
                <h3
                  className={`text-sm font-bold uppercase tracking-[0.2em] mb-6 ${tier.highlight ? "text-accent" : "text-primary"}`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className={`text-5xl font-display font-black ${tier.highlight ? "text-white" : "text-slate-900"}`}
                  >
                    {tier.price}
                  </span>
                  {tier.currency && (
                    <span
                      className={`text-xl font-bold ${tier.highlight ? "text-white/60" : "text-slate-400"}`}
                    >
                      {tier.currency}
                    </span>
                  )}
                  <span
                    className={`text-sm font-medium ${tier.highlight ? "text-white/40" : "text-slate-400"}`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${tier.highlight ? "text-white/60" : "text-slate-500"}`}
                >
                  {tier.description}
                </p>
                {tier.infographic}
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${tier.highlight ? "bg-accent" : "bg-primary"}`}
                    />
                    <span
                      className={`text-sm font-medium ${tier.highlight ? "text-white/80" : "text-slate-600"}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  tier.highlight
                    ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                S'INSCRIRE MAINTENANT
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 text-xs italic max-w-2xl mx-auto">
            * Les tarifs affichés sont hors taxes. Les commissions de gestion
            (AUM) sont prélevées mensuellement sur la base de la valeur moyenne
            du portefeuille. Pour plus de détails, consultez nos conditions
            générales de vente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
