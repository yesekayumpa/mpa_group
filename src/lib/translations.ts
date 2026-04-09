/**
 * Configuration des traductions pour l'application multilingue
 * Contient toutes les chaînes de traduction en français et anglais
 */
export const translations = {
  fr: {
    // Navigation
    nav: {
      about: "À propos",
      products: "Produits", 
      services: "Services",
      process: "Processus",
      market: "Marché",
      gallery: "Galerie",
      contact: "Contact",
      quote: "Demander un devis"
    },
    
    // Hero Section
    hero: {
      title: "Votre Partenaire de Confiance",
      subtitle: "pour l'Exportation de Fruits Tropicaux",
      description: "Excellence, Qualité, et Fiabilité depuis plus d'une décennie",
      cta1: "Nos Produits",
      cta2: "Voir la Vidéo"
    },
    
    // About Section
    about: {
      badge: "À PROPOS",
      title: "Découvrez",
      subtitle: "Notre Histoire",
      description: "Plus qu'une entreprise, un engagement pour l'excellence sénégalaise",
      missionBadge: "NOTRE MISSION",
      missionTitle: "Inspirer le monde avec",
      missionSubtitle: "le meilleur du Sénégal.",
      missionDescription: "MPA GROUP est une entreprise sénégalaise spécialisée dans la commercialisation et l'exportation des fruits vers le marché international. Nous nous positionnons comme un levier stratégique pour la mise en lumière des produits du terroir sénégalais.",
      values: [
        { title: 'Agriculture Durable', desc: 'Méthodes respectueuses de l\'environnement.' },
        { title: 'Impact Social', desc: 'Soutien aux communautés rurales locales.' },
        { title: 'Innovation Logistique', desc: 'Technologies de pointe pour une fraîcheur maximale.' },
      ],
      ctaButton: "NOTRE VISION"
    },
    
    // Process Section
    process: {
      step1Title: "Commande & Devis",
      step1Desc: "Réception de votre demande, étude de faisabilité et émission d'un devis détaillé sous 24h.",
      step2Title: "Conditionnement",
      step2Desc: "Sélection rigoureuse des fruits et emballage aux normes internationales (GlobalGAP).",
      step3Title: "Logistique & Fret",
      step3Desc: "Transport sécurisé via chaîne de froid maîtrisée (Air ou Mer) vers votre destination.",
      step4Title: "Livraison & Qualité",
      step4Desc: "Remise des documents douaniers et livraison finale avec contrôle qualité à l'arrivée.",
      ctaButton: "DÉTAILS DU PROCESSUS"
    },
    
    // Markets Section
    markets: {
      badge: "MARCHÉ",
      title: "Nos",
      subtitle: "Marchés",
      description: "Un réseau mondial pour les fruits tropicaux d'exception du Sénégal"
    },
    
    // Loading Screen
    loading: {
      welcome: "Bienvenue sur MPA-GROUP",
      charging: "CHARGEMENT..."
    },
    
    // Contact Form
    contact: {
      badge: "CONTACT",
      title: "Contactez",
      subtitle: "Nous",
      description: "Prêt à découvrir les fruits tropicaux d'exception du Sénégal ? Contactez-nous pour une consultation personnalisée."
    }
  },
  
  en: {
    // Navigation
    nav: {
      about: "About",
      products: "Products",
      services: "Services", 
      process: "Process",
      market: "Market",
      gallery: "Gallery",
      contact: "Contact",
      quote: "Request Quote"
    },
    
    // Hero Section
    hero: {
      title: "Your Trusted Partner",
      subtitle: "for Tropical Fruit Export",
      description: "Excellence, Quality, and Reliability for Over a Decade",
      cta1: "Our Products",
      cta2: "Watch Video"
    },
    
    // About Section
    about: {
      badge: "ABOUT",
      title: "Discover",
      subtitle: "Our Story",
      description: "More than a company, a commitment to Senegalese excellence",
      missionBadge: "OUR MISSION",
      missionTitle: "Inspire the world with",
      missionSubtitle: "the best of Senegal.",
      missionDescription: "MPA GROUP is a Senegalese company specializing in the marketing and export of fruits to the international market. We position ourselves as a strategic lever for highlighting Senegalese terroir products.",
      values: [
        { title: 'Sustainable Agriculture', desc: 'Environmentally friendly methods.' },
        { title: 'Social Impact', desc: 'Support for local rural communities.' },
        { title: 'Logistics Innovation', desc: 'Cutting-edge technology for maximum freshness.' },
      ],
      ctaButton: "OUR VISION"
    },
    
    // Process Section
    process: {
      step1Title: "Order & Quote",
      step1Desc: "Receipt of your request, feasibility study and issuance of a detailed quote within 24h.",
      step2Title: "Packaging",
      step2Desc: "Rigorous selection of fruits and packaging to international standards (GlobalGAP).",
      step3Title: "Logistics & Freight",
      step3Desc: "Secure transport via controlled cold chain (Air or Sea) to your destination.",
      step4Title: "Delivery & Quality",
      step4Desc: "Handover of customs documents and final delivery with quality control on arrival.",
      ctaButton: "PROCESS DETAILS"
    },
    
    // Markets Section
    markets: {
      badge: "MARKET",
      title: "Our",
      subtitle: "Markets",
      description: "A global network for exceptional tropical fruits from Senegal"
    },
    
    // Loading Screen
    loading: {
      welcome: "Welcome to MPA-GROUP",
      charging: "LOADING..."
    },
    
    // Contact Form
    contact: {
      badge: "CONTACT",
      title: "Contact",
      subtitle: "Us",
      description: "Ready to discover exceptional tropical fruits from Senegal? Contact us for a personalized consultation."
    }
  }
};

export type Language = 'fr' | 'en';
