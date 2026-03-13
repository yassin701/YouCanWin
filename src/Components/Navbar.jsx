import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-2xl font-bold">🏆</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-extrabold text-slate-800">Youcanwin</span>
          <span className="text-[10px] tracking-widest text-green-500 font-bold uppercase">Games</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
        <a href="#" className="hover:text-green-600 border-l-2 border-dotted border-blue-400 pl-4">Nos offres</a>
        <a href="#" className="hover:text-green-600">Nos jeux</a>
        <a href="#" className="hover:text-green-600">Album 2025</a>
        <a href="#" className="hover:text-green-600">À propos</a>
      </div>

      {/* CTA Button */}
      <button className="bg-[#15803d] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-800 transition-colors">
        Demander une démo
        <span className="text-lg">›</span>
      </button>
    </nav>
  );
};

export default Navbar;