import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Page d'accueil principale avec hero, features et sections de services
 * @returns Page d'accueil complète avec toutes les sections marketing
 */
const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-slide-1.png"
            alt="Tropical Fruits"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-600/20 backdrop-blur-md border border-emerald-500/30 rounded-full mb-8">
              <span className="text-emerald-300 font-semibold text-sm tracking-wider uppercase">Leader de l'Exportation au Sénégal</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="text-white">L'Excellence des</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Fruits Tropicaux</span>
              <br />
              <span className="text-white">du Sénégal</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl font-medium">
              MPA GROUP connecte les vergers les plus fertiles du Sénégal aux marchés mondiaux, garantissant une fraîcheur inégalée et une qualité premium certifiée.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/products"
                className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center gap-3 group shadow-lg shadow-emerald-600/25"
              >
                Découvrir nos produits
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
              >
                Notre histoire
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Pourquoi choisir MPA GROUP ?</h2>
            <p className="text-xl text-slate-600 leading-relaxed">Nous combinons savoir-faire traditionnel et technologies modernes pour offrir le meilleur de l'agriculture sénégalaise aux marchés internationaux.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-emerald-600" />,
                title: "Présence Mondiale",
                desc: "Nous exportons vers l'Europe, l'Asie et l'Amérique du Nord avec une logistique optimisée et des délais de livraison garantis."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
                title: "Qualité Certifiée",
                desc: "Tous nos produits répondent aux normes internationales de sécurité alimentaire les plus strictes avec certifications GlobalGAP et Bio."
              },
              {
                icon: <Zap className="w-8 h-8 text-emerald-600" />,
                title: "Fraîcheur Garantie",
                desc: "Un processus de récolte et d'expédition rapide pour préserver les saveurs, nutriments et la qualité exceptionnelle de nos fruits."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 group"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections with Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Découvrez Nos Services</h2>
            <p className="text-xl text-slate-600 leading-relaxed">Des solutions complètes et professionnelles pour tous vos besoins en exportation de fruits tropicaux.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Produits",
                image: "/delicious-papaya-still-life.jpg",
                link: "/products",
                description: "Découvrez notre catalogue de fruits tropicaux premium"
              },
              {
                title: "Services", 
                image: "/front-view-man-delivering-groceries.jpg",
                link: "/services",
                description: "Solutions logistiques complètes et personnalisées"
              },
              {
                title: "Processus",
                image: "/red-fresh-tomatoes-gathered-into-cardboaard-boxes-purchasing.jpg",
                link: "/processus", 
                description: "De la récolte à l'exportation, excellence garantie"
              },
              {
                title: "Marché",
                image: "/monde.png",
                link: "/market",
                description: "Présence internationale et réseaux mondiaux"
              },
              {
                title: "Galerie",
                image: "/african-people-harvesting-vegetables.jpg",
                link: "/gallery",
                description: "Nos réalisations et projets d'excellence"
              },
              {
                title: "Contact",
                image: "/side-view-women-shaking-hands.jpg",
                link: "/contact",
                description: "Contactez nos experts pour un devis personnalisé"
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={section.link} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{section.description}</p>
                      <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors">
                        Explorer
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Catalogue Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              CATALOGUES
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Notre <span className="text-gradient">Catalogue</span></h2>
            <p className="text-xl text-slate-600 leading-relaxed">Téléchargez nos catalogues complets pour découvrir tous nos produits tropicaux d'exception.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Catalogue Fruits Tropicaux",
                description: "Notre sélection complète de mangues, papayes, melons et agrumes",
                size: "2.4 MB",
                format: "PDF",
                icon: "🥭",
                color: "from-orange-400 to-orange-600"
              },
              {
                title: "Catalogue Export 2024",
                description: "Conditions d'exportation, logistique et marchés desservis",
                size: "1.8 MB", 
                format: "PDF",
                icon: "🚢",
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Catalogue Qualité",
                description: "Certifications, standards et processus qualité",
                size: "3.2 MB",
                format: "PDF", 
                icon: "🏆",
                color: "from-emerald-400 to-emerald-600"
              }
            ].map((catalog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/20 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${catalog.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {catalog.icon}
                </div>
                
                <h3 className="text-xl font-display font-bold text-black mb-3 group-hover:text-primary transition-colors">
                  {catalog.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {catalog.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {catalog.format}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {catalog.size}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold py-3 px-6 rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Télécharger
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700 rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Prêt à importer l'excellence des fruits tropicaux du Sénégal ?
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contactez notre équipe commerciale pour discuter de vos besoins et obtenir un devis personnalisé. 
              Nous vous garantissons une qualité exceptionnelle et une livraison rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all inline-flex items-center justify-center gap-3 shadow-lg shadow-white/10"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="px-10 py-5 bg-emerald-700 text-white rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all inline-flex items-center justify-center gap-3 border border-emerald-600"
              >
                Voir nos produits
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
