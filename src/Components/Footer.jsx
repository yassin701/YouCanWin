import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAFA] border-t border-slate-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column (takes up 2 columns on medium screens) */}
          <div className="md:col-span-2">
             <div className="flex items-center space-x-2 mb-6">
                 {/* Replicating the logo style from Section 9 screenshot */}
                 <div className="bg-[#18A058] p-1.5 rounded-md flex items-center justify-center">
                    {/* Placeholder for trophy icon, using a generic shape for now */}
                    <div className="w-5 h-5 border-2 border-white rounded-t-full border-b-0 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-1.5 after:bg-white after:translate-y-full"></div>
                 </div>
                 <span className="text-xl font-bold">
                    <span className="text-red-500">You</span>
                    <span className="text-gray-900">Can</span>
                    <span className="text-green-600">Win</span>
                 </span>
            </div>
            
            <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.
            </p>
            
            {/* Social Icons (Placeholders using letters for now, can be replaced with real SVG icons later) */}
            <div className="flex space-x-3">
              {['f', '𝕏', 'IG', 'in'].map((social, index) => (
                <a key={index} href="#" className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#18A058] hover:text-white transition-colors">
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Liens rapides</h3>
            <ul className="space-y-4">
              {['Nos offres', 'Nos jeux', 'Album 2025', 'À propos'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-500 hover:text-[#18A058] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Contact & Légal</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:games@agency.africa" className="text-sm text-slate-500 hover:text-[#18A058] transition-colors select-all">
                  games@agency.africa
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-[#18A058] transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-[#18A058] transition-colors inline-flex items-center">
                  Protection des données (CNDP)
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-[#18A058] transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0 relative z-10">
            <p>© {currentYear} YouCanWin. Tous droits réservés.</p>
            <p>
              Un service de <span className="font-bold text-[#18A058]">Agency.Africa</span> — games.agency.africa
            </p>
          </div>

          {/* CNDP Badge - Absolutely positioned in center on md screens, inline on sm */}
          <div className="mt-6 md:mt-0 flex justify-center md:absolute md:inset-0 md:items-center md:pointer-events-none z-0">
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-1.5 rounded-md pointer-events-auto">
              <ShieldCheckIcon className="w-4 h-4 text-[#18A058]" strokeWidth={2} />
              <span className="text-xs font-semibold text-[#18A058]">Site conforme CNDP Maroc</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
