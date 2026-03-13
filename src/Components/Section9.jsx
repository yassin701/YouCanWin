import React from 'react';
import { CalendarIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Section9 = () => {
  return (
    <section className="bg-[#D31F26] w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white text-[#D31F26] hover:text-[#B21A20] font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2" strokeWidth={2.5} />
            Planifier une démo gratuite
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-colors duration-300">
            <EnvelopeIcon className="w-5 h-5 mr-2" strokeWidth={2.5} />
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section9;
