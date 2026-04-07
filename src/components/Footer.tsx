import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 rounded-t-5xl lg:rounded-t-[80px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/10">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-extrabold text-white tracking-tighter">MPA GROUP</span>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-xs">
              Leader sénégalais dans l'exportation de fruits tropicaux d'exception. Qualité premium, logistique mondiale et engagement durable.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Navigation</h4>
            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-[11px]">
              {[
                { name: 'Accueil', href: '#accueil' },
                { name: 'À propos', href: '#apropos' },
                { name: 'Produits', href: '#produits' },
                { name: 'Services', href: '#services' },
                { name: 'Processus', href: '#processus' },
                { name: 'Marché', href: '#marche' },
                { name: 'Galerie', href: '#galerie' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Nos Produits</h4>
            <ul className="space-y-3 text-slate-400 text-[11px]">
              {['Mangue Kent', 'Papaye Solo', 'Melon Charentais', 'Pastèque sans pépins', 'Citron Vert'].map((item) => (
                <li key={item}>
                  <a href="#produits" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-6 uppercase tracking-widest text-slate-200">Newsletter</h4>
            <p className="text-slate-400 text-[11px] mb-4">Recevez nos actualités sur les récoltes et les marchés mondiaux.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Votre email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[11px] outline-none focus:border-primary w-full" />
              <button className="bg-primary p-2.5 rounded-xl hover:bg-primary/80 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Médina rue 37x24, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>contact@mpa-group.sn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+221 33 829 58 06</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/60">Suivez-nous:</span>
              <div className="flex gap-3">
                <Facebook className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                <Twitter className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
                <Linkedin className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-[10px] font-medium tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} MPA GROUP. Tous droits réservés. Réalisé par DIGITAL MIND + GROUP.</p>
        </div>
      </div>
    </footer>
  );
};
