import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

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
          className="fixed inset-0 z-[100] bg-gradient-to-br from-primary via-primary/95 to-secondary flex flex-col items-center justify-center overflow-hidden"
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
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-orange-400/30 rounded-full blur-sm"
              />
            ))}
          </div>

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
            <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-2xl scale-150 animate-pulse" />
            
            {/* Main logo container */}
            <div className="relative w-96 h-96 flex items-center justify-center">
              <motion.img
                src="/Logo MPA Blanc-04.png"
                alt="MPA GROUP Logo"
                className="w-full h-full object-contain"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  times: [0, 0.5, 1]
                }}
              />
            </div>
            
            {/* Animated dots around logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0"
            >
              {[0, 120, 240].map((rotation, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-80px)`
                  }}
                />
              ))}
            </motion.div>
            
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
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />
                <div className="absolute inset-0 bg-white/30 blur-sm" />
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
