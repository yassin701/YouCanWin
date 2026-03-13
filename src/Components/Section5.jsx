import React from 'react';
import { 
    QrCodeIcon, 
    UserGroupIcon, 
    AdjustmentsHorizontalIcon, 
    ChartBarIcon, 
    GiftIcon, 
    BellIcon, 
    ArrowDownTrayIcon, 
    Square3Stack3DIcon
} from '@heroicons/react/24/outline';

const Section5 = () => {
  return (
    <section className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold text-sm px-4 py-1.5 rounded-full mb-6 relative">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             Backoffice tout-en-un
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos 
            <br className="hidden md:block" /> campagnes en toute autonomie
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <QrCodeIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Générateur QR Codes</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Créez et téléchargez vos QR codes uniques en masse</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <UserGroupIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">CRM Participants</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Collectez et gérez vos participants avec segmentation avancée</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <AdjustmentsHorizontalIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Configuration jeux</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Paramétrez entièrement vos jeux : règles, lots, durée, visuels</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <ChartBarIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Analytics temps réel</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Suivez vos KPIs : scans, conversions, engagement, ROI</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <GiftIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Gestion des lots</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Définissez vos récompenses et gérez les tirages au sort</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <BellIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Notifications</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Envoyez des push, emails et SMS à vos participants</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <ArrowDownTrayIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Export données</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Téléchargez vos données en CSV, Excel ou via API</p>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Square3Stack3DIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Multi-campagnes</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Gérez plusieurs campagnes simultanément</p>
            </div>

        </div>

        {/* Action Button */}
        <div className="text-center">
            <button className="bg-[#15803d] text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                Demander un accès au backoffice <span>›</span>
            </button>
        </div>

      </div>
    </section>
  );
};

export default Section5;
