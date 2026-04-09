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
    }, 6000);
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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background alternance - Logo 1 avec fond d'avant */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary"
            animate={{ 
              opacity: [1, 0.8, 0.2, 0, 0, 0.2, 0.8, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1]
            }}
          >
            {/* Background animated particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0
                  }}
                  animate={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Background alternance - Logo 2 avec fond orange */}
          <motion.div
            className="absolute inset-0 bg-[#f7a512]"
            animate={{ 
              opacity: [0, 0.2, 0.8, 1, 0.8, 0.2, 0, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1]
            }}
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="relative z-10"
          >
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-[#4a5d23]/20 rounded-3xl blur-2xl scale-150 animate-pulse" />
            
            {/* Main logos container */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Logo alternance - Premier logo visible */}
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  opacity: [1, 0.8, 0.2, 0, 0, 0.2, 0.8, 1],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1]
                }}
              >
                <img
                  src="/Logo MPA Blanc-04.png"
                  alt="MPA GROUP Logo Blanc"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Logo alternance - Deuxième logo visible */}
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  opacity: [0, 0, 0.2, 0.8, 1, 0.8, 0.2, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1]
                }}
              >
                <img
                  src="/logo MPA.png"
                  alt="MPA GROUP Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
            
                        
            {/* Bouncing dot */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
                times: [0, 0.5, 1]
              }}
              className="absolute -bottom-3 -right-3 w-10 h-10 bg-white rounded-full border-4 border-primary shadow-lg flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-[#b45309] rounded-full animate-ping" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 mt-12 flex flex-col items-center"
          >
            <motion.span
              animate={{ 
                letterSpacing: ["0.5em", "0.55em", "0.5em"],
                opacity: [0.85, 1, 0.85]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
                times: [0, 0.5, 1]
              }}
              className="text-white font-black tracking-[0.5em] uppercase text-sm mb-6 drop-shadow-lg"
            >
              MPA GROUP
            </motion.span>
            
            {/* Enhanced progress bar */}
            <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: [0.4, 0, 0.6, 1]
                }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white to-white/50 blur-sm" />
              </motion.div>
            </div>
            
            {/* Loading percentage */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
                times: [0, 0.5, 1]
              }}
              className="mt-4 text-white/60 text-xs font-medium"
            >
              {t.loading.charging}
            </motion.div>
          </motion.div>

                  </motion.div>
      )}
    </AnimatePresence>
  );
};
