import React from 'react';

const Hero = () => {
  return (
    <section className="relative px-8 pt-16 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="z-10">
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
          Transformez chaque <br />
          <span className="relative inline-block text-green-500">
            produit
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15C50 5 150 5 195 15" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span> <br />
          en expérience de jeu
        </h1>
        
        <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
          YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes. 
          <span className="font-bold text-slate-900"> Codes QR, cartes digitales, défis et récompenses.</span>
        </p>

        {/* Stats Row */}
        <div className="flex gap-12 mb-10">
          <div>
            <div className="text-4xl font-black text-green-700">500K+</div>
            <div className="text-sm text-slate-500 font-medium">Interactions/mois</div>
          </div>
          <div>
            <div className="text-4xl font-black text-green-700">50+</div>
            <div className="text-sm text-slate-500 font-medium">Marques actives</div>
          </div>
          <div>
            <div className="text-4xl font-black text-green-700">x3.5</div>
            <div className="text-sm text-slate-500 font-medium">ROI moyen</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#15803d] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-green-200 hover:scale-105 transition-transform">
            Voir la démo <span>›</span>
          </button>
          <button className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-colors">
            <span>💡</span> Comment ça marche
          </button>
        </div>

        {/* Partners */}
        <div className="mt-16">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4">Ils nous font confiance</p>
          <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-slate-700">Maroc Telecom</span>
            <span className="font-bold text-slate-700">Inwi</span>
            <span className="font-bold text-slate-700">Orange</span>
            <span className="font-bold text-slate-700">Carrefour</span>
          </div>
        </div>
      </div>

      {/* Right Content (Phone Mockup) */}
      <div className="relative flex justify-center">
        {/* The Pink Border box from your screenshot */}
        <div className="relative border-2 border-pink-400 p-8 rounded-3xl">
          <div className="w-[320px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative">
            {/* Mockup Header */}
            <div className="bg-green-700 p-6 pt-12 pb-10">
                <p className="text-[10px] text-green-200 font-bold uppercase">Album Digital 2025</p>
                <h3 className="text-white text-2xl font-bold">Ma Collection</h3>
                <div className="flex gap-4 mt-4">
                    <div className="text-white"><p className="text-xs opacity-70">127</p><p className="font-bold">Cartes</p></div>
                    <div className="text-white"><p className="text-xs opacity-70">76%</p><p className="font-bold">Complet</p></div>
                    <div className="text-white"><p className="text-xs opacity-70">#12</p><p className="font-bold">Rang</p></div>
                </div>
            </div>
            {/* Card Grid Placeholder */}
            <div className="bg-white h-full p-4 grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-[3/4] bg-slate-100 rounded-lg"></div>
                ))}
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">QR</div>
            <div>
                <p className="text-xs font-bold">Scan QR Code</p>
                <p className="text-[10px] text-slate-400">Débloquer une carte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;