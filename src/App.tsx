/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OurImpact } from './components/OurImpact';
import { ProductGrid } from './components/ProductGrid';
import { Services } from './components/Services';
import { Processus } from './components/Processus';
import { Markets } from './components/Markets';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { MessageCircle } from 'lucide-react';

// Import Pages
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessusPage } from './pages/ProcessusPage';
import { MarketsPage } from './pages/MarketsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <OurImpact />
    <ProductGrid />
    <Services />
    <Processus />
    <Markets />
    <Gallery />
    <Contact />
  </main>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Vérifier si c'est le premier chargement du site
  useEffect(() => {
    const hasVisited = localStorage.getItem('mpa-group-visited');
    if (!hasVisited) {
      setShowLoading(true);
      // Pour le développement, on peut commenter cette ligne pour tester
      localStorage.setItem('mpa-group-visited', 'true');
    }
    // Forcer l'affichage pour le test
    setShowLoading(true);
  }, []);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-white">
        {/* Loading Screen */}
        {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
        
        {/* Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1.5 bg-secondary z-[60] origin-left" 
          style={{ scaleX }} 
        />

        <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/processus" element={<ProcessusPage />} />
        <Route path="/market" element={<MarketsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      {/* WhatsApp Widget */}
      <a 
        href="https://wa.me/221338295806" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Besoin d'aide ? Discutons !
        </div>
      </a>
      </div>
    </LanguageProvider>
  );
}
