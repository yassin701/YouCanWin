import React from 'react';
import { 
  ShoppingCartIcon, 
  QrCodeIcon, 
  LockOpenIcon, 
  PuzzlePieceIcon, 
  GiftIcon 
} from '@heroicons/react/24/outline';

const Section3 = () => {
  const steps = [
    {
      id: 1,
      title: "Achat produit",
      desc: "Le client achète votre produit en magasin",
      icon: <ShoppingCartIcon className="w-6 h-6 text-green-600" />,
      color: "green",
    },
    {
      id: 2,
      title: "Scan QR Code",
      desc: "Il scanne le code sur l'emballage",
      icon: <QrCodeIcon className="w-6 h-6 text-green-600" />,
      color: "green",
    },
    {
      id: 3,
      title: "Déblocage carte",
      desc: "Une carte digitale est débloquée",
      icon: <LockOpenIcon className="w-6 h-6 text-green-600" />,
      color: "green",
    },
    {
      id: 4,
      title: "Collection",
      desc: "Il complète sa collection",
      icon: <PuzzlePieceIcon className="w-6 h-6 text-rose-600" />,
      color: "rose",
    },
    {
      id: 5,
      title: "Récompenses",
      desc: "Participe aux tirages",
      icon: <GiftIcon className="w-6 h-6 text-rose-600" />,
      color: "rose",
    },
  ];

  return (
    <section className="py-24 px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          Un parcours client simple et engageant
        </h2>
        <p className="text-slate-500 mb-20">
          De l'achat du produit à la récompense, en 5 étapes
        </p>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 lg:gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-16 right-16 h-0.5 border-t-2 border-dashed border-slate-200 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-row md:flex-col items-start md:items-center w-full md:w-auto md:flex-1 group">
              
              {/* Vertical connecting line (Mobile Only) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden absolute top-20 left-10 -ml-[1px] -bottom-8 w-0 border-l-2 border-dashed border-slate-200 -z-10"></div>
              )}

              {/* Icon Box with Step Number */}
              <div className="relative mr-6 md:mr-0 md:mb-6 shrink-0">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm
                  ${step.color === 'green' 
                    ? 'bg-white ring-1 ring-green-100 group-hover:ring-green-400' 
                    : 'bg-white ring-1 ring-rose-100 group-hover:ring-rose-400'}
                `}>
                  {step.icon}
                </div>
                
                {/* Number Badge */}
                <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md
                  ${step.color === 'green' ? 'bg-green-600' : 'bg-rose-600'}
                `}>
                  {step.id}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col pt-3 md:pt-0">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1 md:mb-2 text-left md:text-center">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[220px] md:max-w-[160px] text-left md:text-center">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;