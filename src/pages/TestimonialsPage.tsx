import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Award, Users, Globe } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

const STATS_DATA = [
  { icon: <Users />, label: "Clients Satisfaits", value: 500, suffix: "+" },
  { icon: <Globe />, label: "Pays Desservis", value: 25, suffix: "+" },
  { icon: <Award />, label: "Taux de Fidélité", value: 98, suffix: "%" },
  { icon: <CheckCircle2 />, label: "Certifications", value: 100, suffix: "%" }
];

const TESTIMONIALS = [
  {
    name: "Jean-Pierre Durand",
    role: "Importateur, France",
    content: "La qualité des mangues Kent de MPA GROUP est tout simplement exceptionnelle. La régularité des calibres et le respect de la chaîne du froid en font notre partenaire privilégié au Sénégal.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=jp"
  },
  {
    name: "Elena Rodriguez",
    role: "Responsable Achats, Espagne",
    content: "Nous travaillons avec MPA GROUP depuis 3 ans pour nos approvisionnements en papayes Solo. Leur professionnalisme et leur réactivité logistique sont des atouts majeurs pour notre distribution.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marco Rossi",
    role: "Grossiste, Italie",
    content: "Le melon Charentais du Sénégal a une saveur unique. Grâce à MPA GROUP, nous recevons des produits d'une fraîcheur irréprochable, comme s'ils venaient d'être cueillis.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marco"
  },
  {
    name: "Sarah Williams",
    role: "Distributeur, Royaume-Uni",
    content: "MPA GROUP se distingue par sa transparence et son engagement éthique. C'est rassurant de savoir que nos fruits proviennent de sources responsables et certifiées.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Ahmed Al-Fayed",
    role: "Importateur, Dubaï",
    content: "Une logistique aérienne performante qui nous permet de proposer des fruits tropicaux sénégalais de première qualité sur le marché du Moyen-Orient.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    name: "Sophie Lefebvre",
    role: "Centrale d'Achat, Belgique",
    content: "Le service client est impeccable. MPA GROUP comprend les exigences du marché européen et s'adapte parfaitement à nos besoins spécifiques de conditionnement.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sophie"
  }
];

export const TestimonialsPage = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="section-padding !py-0 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">TÉMOIGNAGES CLIENTS</span>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
            Ils nous font <span className="text-gradient">Confiance</span>.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Découvrez les retours d'expérience de nos partenaires internationaux sur la qualité de nos produits et services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding !py-0 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-10 rounded-[50px] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 relative group"
          >
            <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed italic relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4 relative z-10">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-2xl object-cover border-2 border-white dark:border-slate-800 shadow-md"
              />
              <div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Trust Stats */}
      <section className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-12 text-center">
          {STATS_DATA.map((stat, i) => (
            <div key={i}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-4xl font-display font-bold mb-2 text-slate-900 dark:text-white">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  className="text-gradient"
                />
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
