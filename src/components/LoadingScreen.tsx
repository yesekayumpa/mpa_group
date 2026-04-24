import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Écran de chargement animé avec logos alternés et particules
 * @param onComplete - Fonction callback appelée à la fin du chargement (optionnel)
 * @returns Écran de chargement plein écran avec animations complexes
 */
export const LoadingScreen = ({ onComplete }: { onComplete?: () => void }) => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 2500); // Reduced from 6s to 2.5s
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#1c9a3a]"
        >
          {/* Background Particles - snappier */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  scale: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut"
            }}
            className="relative z-10"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150 animate-pulse" />
            
            {/* Logo container */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/Logo MPA Blanc-04.png"
                  alt="MPA GROUP Logo Blanc"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 mt-8 flex flex-col items-center"
          >
            <motion.span
              animate={{ 
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
            >
              MPA GROUP
            </motion.span>
            
            {/* Progress bar */}
            <div className="relative w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ 
                  duration: 2.2,
                  ease: "linear"
                }}
                className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            </div>
            
            <div className="mt-3 text-white/40 text-[9px] font-medium tracking-wide">
              {t.loading.charging}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
