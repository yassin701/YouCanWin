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
