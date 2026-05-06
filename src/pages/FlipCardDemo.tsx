'use client';

import { FlipCardDemo } from '@/components/FlipCard';

export default function FlipCardDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
              Nos Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez nos services complets pour l'exportation de produits agricoles
            </p>
          </div>
          
          <FlipCardDemo />
        </div>
      </div>
    </div>
  );
}
