import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl sm:text-2xl font-bold">🏆</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-lg sm:text-xl font-extrabold text-slate-800">Youcanwin</span>
          <span className="text-[9px] sm:text-[10px] tracking-widest text-green-500 font-bold uppercase">Games</span>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
        <a href="#" className="hover:text-green-600 border-l-2 border-dotted border-blue-400 pl-4">Nos offres</a>
        <a href="#" className="hover:text-green-600">Nos jeux</a>
        <a href="#" className="hover:text-green-600">Album 2025</a>
        <a href="#" className="hover:text-green-600">À propos</a>
      </div>

      {/* Desktop CTA & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex bg-[#18A058] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold items-center gap-2 hover:bg-[#128045] transition-colors text-sm sm:text-base">
          Planifier une démo
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg lg:hidden py-4 px-4 flex flex-col gap-4">
          <a href="#" className="font-medium text-slate-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Nos offres</a>
          <a href="#" className="font-medium text-slate-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Nos jeux</a>
          <a href="#" className="font-medium text-slate-700 hover:text-green-600" onClick={() => setIsOpen(false)}>Album 2025</a>
          <a href="#" className="font-medium text-slate-700 hover:text-green-600" onClick={() => setIsOpen(false)}>À propos</a>
          <button className="w-full bg-[#18A058] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#128045] transition-colors mt-2">
            Planifier une démo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;