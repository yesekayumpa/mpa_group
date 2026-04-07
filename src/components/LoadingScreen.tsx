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
            <div className="relative w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center text-white font-black text-6xl shadow-2xl shadow-orange-500/50 backdrop-blur-sm border border-orange-400/20">
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                M
              </motion.span>
            </div>
            
            {/* Animated dots around logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                y: [0, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
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
                letterSpacing: ["0.5em", "0.6em", "0.5em"],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
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
                  duration: 2, 
                  ease: "easeInOut"
                }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />
                <div className="absolute inset-0 bg-white/30 blur-sm" />
              </motion.div>
            </div>
            
            {/* Loading percentage */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-white/60 text-xs font-medium"
            >
              {t.loading.charging}
            </motion.div>
          </motion.div>

          {/* Welcome message with iridescent effect */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-12 left-0 right-0 flex justify-center z-10"
          >
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative px-8 py-3 rounded-full"
              style={{
                background: "linear-gradient(90deg, #f97316, #fbbf24, #10b981, #3b82f6, #8b5cf6, #f97316)",
                backgroundSize: "200% 100%",
              }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-full backdrop-blur-sm" />
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(249, 115, 22, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.8)",
                    "0 0 15px rgba(16, 185, 129, 0.8)",
                    "0 0 25px rgba(59, 130, 246, 0.8)",
                    "0 0 18px rgba(139, 92, 246, 0.8)",
                    "0 0 10px rgba(249, 115, 22, 0.8)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative text-white font-bold text-sm tracking-widest uppercase"
              >
                {t.loading.welcome}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
