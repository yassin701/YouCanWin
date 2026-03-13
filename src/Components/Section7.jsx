import React from 'react';
import { BoltIcon, ArrowTrendingUpIcon, GlobeAltIcon, CheckIcon } from '@heroicons/react/24/outline';

const Section7 = () => {
  return (
    <section className="bg-slate-50 py-24 px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            
            {/* Card 1: Starter */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                    <BoltIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">Starter</h3>
                <p className="text-green-600 font-medium mb-6">Campagne locale</p>
                <p className="text-slate-500 mb-8 min-h-[48px]">Idéal pour tester sur un marché</p>
                
                <div className="h-px w-full bg-slate-100 mb-6"></div>
                <p className="text-xs text-slate-400 font-medium mb-6">Tarification sur mesure selon vos volumes</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Jusqu'à 1 000 utilisateurs",
                        "Jusqu'à 10K QR codes",
                        "1 pays / région",
                        "Album standard (équipe nationale)",
                        "Hébergement Cloud sécurisé",
                        "Backoffice simplifié",
                        "Support par email",
                        "1 marque"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-4 focus:ring-slate-100">
                    Demander un devis
                </button>
            </div>

            {/* Card 2: Scale (Highlighted) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-100 shadow-2xl shadow-red-500/10 flex flex-col relative -mt-4 mb-4 lg:mb-0 lg:-mt-8 z-10">
                
                {/* Popular Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-[#cc2222] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                        Populaire
                    </div>
                </div>

                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <ArrowTrendingUpIcon className="w-6 h-6 text-[#cc2222]" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">Scale</h3>
                <p className="text-green-600 font-medium mb-6">Expansion nationale</p>
                <p className="text-slate-500 mb-8 min-h-[48px]">Pour des campagnes d'envergure</p>
                
                <div className="h-px w-full bg-slate-100 mb-6"></div>
                <p className="text-xs text-slate-400 font-medium mb-6">Tarification sur mesure selon vos volumes</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Jusqu'à 50 000 utilisateurs",
                        "QR codes illimités",
                        "Multi-pays (jusqu'à 5)",
                        "Album complet (toutes les équipes)",
                        "Cloud ou On-Premise",
                        "Backoffice avancé avec analytics",
                        "Support prioritaire 24/7",
                        "Jusqu'à 3 marques",
                        "API REST disponible"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckIcon className="w-5 h-5 text-[#cc2222] shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-xl bg-[#cc2222] text-white font-bold hover:bg-red-800 transition-colors shadow-lg shadow-red-200 focus:outline-none focus:ring-4 focus:ring-red-100">
                    Planifier une démo
                </button>
            </div>

            {/* Card 3: Enterprise */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                    <GlobeAltIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">Enterprise</h3>
                <p className="text-green-600 font-medium mb-6">Solution globale</p>
                <p className="text-slate-500 mb-8 min-h-[48px]">Pour les groupes internationaux</p>
                
                <div className="h-px w-full bg-slate-100 mb-6"></div>
                <p className="text-xs text-slate-400 font-medium mb-6">Tarification sur mesure selon vos volumes</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Utilisateurs illimités",
                        "QR codes illimités",
                        "Déploiement mondial",
                        "Albums personnalisés par région",
                        "Infrastructure dédiée (On-Premise)",
                        "Multi-marques illimité",
                        "Développements sur-mesure",
                        "Account manager dédié",
                        "SLA garanti 99.9%",
                        "Formation et onboarding complet"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-4 focus:ring-slate-100">
                    Contactez-nous
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Section7;
