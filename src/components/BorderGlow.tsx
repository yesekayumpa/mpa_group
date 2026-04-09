import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface BorderGlowProps {
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  children: React.ReactNode;
}

export const BorderGlow: React.FC<BorderGlowProps> = ({
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#060010',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  children
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    if (!animated) return;

    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [animated, colors.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const calculateGlowPosition = () => {
    if (!containerRef.current) return { x: '50%', y: '50%' };

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate distance from edges
    const distanceFromLeft = mousePosition.x;
    const distanceFromRight = width - mousePosition.x;
    const distanceFromTop = mousePosition.y;
    const distanceFromBottom = height - mousePosition.y;

    // Find closest edge
    const minDistance = Math.min(distanceFromLeft, distanceFromRight, distanceFromTop, distanceFromBottom);

    // If mouse is near an edge
    if (minDistance < edgeSensitivity) {
      let x = mousePosition.x;
      let y = mousePosition.y;

      // Constrain to edges
      if (distanceFromLeft < edgeSensitivity) x = 0;
      if (distanceFromRight < edgeSensitivity) x = width;
      if (distanceFromTop < edgeSensitivity) y = 0;
      if (distanceFromBottom < edgeSensitivity) y = height;

      return { x: `${x}px`, y: `${y}px` };
    }

    return { x: '50%', y: '50%' };
  };

  const glowPosition = calculateGlowPosition();
  const currentColor = animated ? colors[currentColorIndex] : colors[0];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor,
        borderRadius: `${borderRadius}px`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Border glow only */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: `${borderRadius}px`,
          border: `2px solid transparent`,
          background: animated
            ? `linear-gradient(45deg, ${currentColor}, transparent, ${currentColor}) border-box`
            : isHovered 
            ? `linear-gradient(45deg, ${currentColor}, transparent, ${currentColor}) border-box`
            : 'none',
          WebkitMask: animated || isHovered
            ? `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`
            : 'none',
          WebkitMaskComposite: animated || isHovered ? 'xor' : 'none',
          maskComposite: animated || isHovered ? 'exclude' : 'none',
          opacity: glowIntensity,
          boxShadow: animated || isHovered 
            ? `0 0 20px ${currentColor}, 0 0 40px ${currentColor}, inset 0 0 20px ${currentColor}`
            : 'none',
        }}
        animate={animated ? {
          background: [
            `linear-gradient(45deg, ${colors[0]}, transparent, ${colors[0]}) border-box`,
            `linear-gradient(45deg, ${colors[1]}, transparent, ${colors[1]}) border-box`,
            `linear-gradient(45deg, ${colors[2]}, transparent, ${colors[2]}) border-box`,
          ],
          boxShadow: [
            `0 0 20px ${colors[0]}, 0 0 40px ${colors[0]}, inset 0 0 20px ${colors[0]}`,
            `0 0 20px ${colors[1]}, 0 0 40px ${colors[1]}, inset 0 0 20px ${colors[1]}`,
            `0 0 20px ${colors[2]}, 0 0 40px ${colors[2]}, inset 0 0 20px ${colors[2]}`,
          ]
        } : {}}
        transition={animated ? { duration: 2, repeat: Infinity } : {}}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
