import React from 'react';
import { 
    UserGroupIcon, 
    QrCodeIcon, 
    GlobeAltIcon, 
    Square3Stack3DIcon, 
    CloudIcon 
} from '@heroicons/react/24/outline';

const Section6 = () => {
  return (
    <section className="bg-white py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/*
          Mobile: Horizontal Scroll Container (hide scrollbar for cleaner look)
          Desktop: Flex space-between
        */}
        <div className="flex overflow-x-auto md:overflow-visible gap-8 md:gap-4 justify-start md:justify-between pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar">
            
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center min-w-[160px] md:min-w-0 snap-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <UserGroupIcon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Utilisateurs</h4>
                <p className="text-sm text-slate-500">De 1K à illimité</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center min-w-[160px] md:min-w-0 snap-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <QrCodeIcon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">QR Codes</h4>
                <p className="text-sm text-slate-500">Volume adapté</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center min-w-[160px] md:min-w-0 snap-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <GlobeAltIcon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Couverture</h4>
                <p className="text-sm text-slate-500">Local à mondial</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center min-w-[160px] md:min-w-0 snap-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <Square3Stack3DIcon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Albums</h4>
                <p className="text-sm text-slate-500">Standard ou custom</p>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col items-center text-center min-w-[160px] md:min-w-0 snap-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <CloudIcon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Infrastructure</h4>
                <p className="text-sm text-slate-500">Cloud ou On-Premise</p>
            </div>

        </div>
      </div>

      {/* Global style to hide scrollbar for the horizontal scrolling container */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default Section6;
