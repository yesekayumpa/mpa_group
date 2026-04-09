import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  children?: React.ReactNode;
}

export const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence,
  manualMode = false,
  blurAmount = 5,
  borderColor = '#5227FF',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  children
}) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Split sentence into words
  const words = sentence.split(' ');

  useEffect(() => {
    if (manualMode || isHovered) return;

    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [manualMode, isHovered, words.length, animationDuration, pauseBetweenAnimations]);

  const handleWordClick = (index: number) => {
    if (manualMode) {
      setFocusedIndex(index);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      className="inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          onClick={() => handleWordClick(index)}
          className={`inline-block cursor-default px-1 transition-all duration-300 ${
            index === focusedIndex ? 'text-white scale-110' : 'text-gray-500'
          }`}
          style={{
            filter: index === focusedIndex ? 'none' : `blur(${blurAmount}px)`,
            textShadow: index === focusedIndex ? `0 0 30px ${borderColor}, 0 0 60px ${borderColor}` : 'none',
          }}
          whileHover={{
            filter: 'none',
            color: 'white',
            scale: 1.1,
            textShadow: `0 0 30px ${borderColor}, 0 0 60px ${borderColor}`,
          }}
          transition={{ 
            duration: animationDuration,
            ease: "easeInOut"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          custom={index}
        >
          {word}
          {index < words.length - 1 && ' '}
        </motion.span>
      ))}
      {children}
    </div>
  );
};
