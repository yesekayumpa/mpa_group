import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Composant d'animation de compteur qui compte de 0 à une valeur cible
 * @param end - Valeur finale à atteindre
 * @param suffix - Texte à afficher après le nombre (optionnel)
 * @param prefix - Texte à afficher avant le nombre (optionnel)
 * @param duration - Durée de l'animation en millisecondes (défaut: 2000)
 * @param className - Classes CSS additionnelles (optionnel)
 * @returns Composant React animé
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  duration = 2000, 
  className = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

interface StatsSectionProps {
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    icon?: React.ReactNode;
  }>;
}

/**
 * Section affichant une grille de statistiques avec compteurs animés
 * @param stats - Tableau d'objets statistiques contenant valeur, libellé, et options de formatage
 * @returns Grille de composants statistiques animés
 */
export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          {stat.icon && (
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              {stat.icon}
            </div>
          )}
          <h3 className="text-4xl font-display font-bold mb-2 text-slate-900 dark:text-white">
            <AnimatedCounter 
              end={stat.value} 
              suffix={stat.suffix} 
              prefix={stat.prefix}
              className="text-gradient"
            />
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};
