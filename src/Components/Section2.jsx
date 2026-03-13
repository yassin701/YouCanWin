import React from 'react';
// Import icons from heroicons if you installed them, 
// otherwise these SVG placeholders work perfectly.
import { 
  QrCodeIcon, 
  Square3Stack3DIcon, 
  GiftIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const Section2 = () => {
  const features = [
    {
      title: "Activation instantanée",
      description: "QR codes uniques sur chaque produit",
      icon: <QrCodeIcon className="w-6 h-6" />,
    },
    {
      title: "Collection digitale",
      description: "Cartes de joueurs, raretés, échanges",
      icon: <Square3Stack3DIcon className="w-6 h-6" />,
    },
    {
      title: "Récompenses exclusives",
      description: "Tirages au sort, lots partenaires, expériences VIP",
      icon: <GiftIcon className="w-6 h-6" />,
    },
    {
      title: "Analytics avancés",
      description: "Dashboard temps réel, insights consommateurs",
      icon: <ChartBarIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Image Container */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800" 
              alt="Football terrain de jeu" 
              className="w-full h-[500px] object-cover"
            />
            {/* Optional overlay gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Solution complète
          </div>

          <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
            Le terrain de jeu digital <br /> de votre marque
          </h2>

          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            YouCanWin transforme vos produits en expériences interactives. 
            Chaque achat devient une opportunité d'engagement avec vos consommateurs.
          </p>

          {/* Features List */}
          <div className="space-y-8 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{feature.title}</h4>
                  <p className="text-sm text-slate-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button className="bg-[#e11d48] hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-rose-100">
            Planifier une démo
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section2;