import React from 'react';
import { BoltIcon, HeartIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

const Section4 = () => {
  return (
    <section className="bg-[#15803d] py-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-lg text-green-50 leading-relaxed">
            YouCanWin offre à vos clients plus qu'un produit : une expérience interactive <br className="hidden md:block" /> complète autour du football
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BoltIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Engagement immédiat</h3>
            <p className="text-green-50 leading-relaxed">
              Chaque produit devient une opportunité de jeu
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Fidélisation naturelle</h3>
            <p className="text-green-50 leading-relaxed">
              Les clients reviennent pour compléter leur collection
            </p>
          </div>

          {/* Card 3 (With Tooltip) */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:bg-white/15 transition-colors relative">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <FaceSmileIcon className="w-8 h-8 text-white" />
              
              {/* Static Cursor Tooltip */}
              <div className="absolute top-10 left-10 z-20 flex items-start drop-shadow-xl pointer-events-none">
                {/* SVG Pointer */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="z-20 rotate-[-15deg]">
                  <path d="M5.5 3L11 21L14.5 14.5L21 11L5.5 3Z" fill="#10b981" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                {/* Name Badge */}
                <div className="bg-[#10b981] text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap -ml-2 mt-5 z-10 hidden sm:block">
                  Abdessalam Chakiri
                </div>
              </div>

            </div>
            <h3 className="text-xl font-bold text-white mb-4">Viralité organique</h3>
            <p className="text-green-50 leading-relaxed">
              Les fans partagent et échangent entre eux
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
