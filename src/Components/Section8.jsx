import { 
  ArrowTrendingUpIcon, 
  UsersIcon, 
  StarIcon, 
  LifebuoyIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Section8 = () => {
  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce8058?auto=format&fit=crop&q=80&w=800", // Cleats/Ball
      badge: { text: "STAR", color: "bg-[#18A058]" },
      title: "Album Digital 2025",
      description: "Collection de cartes avec échanges et défis.",
      link: "Découvrir"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800", // Football players
      badge: { text: "BIENTÔT", color: "bg-slate-600" },
      title: "Quiz Football",
      description: "Questions sur l'actualité et l'histoire du foot.",
      link: "Découvrir"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", // Phone / Gaming
      badge: null,
      title: "Tombola digitale",
      description: "Tirages au sort avec lots sponsorisés.",
      link: "Découvrir"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // UI Mockup
      badge: null,
      title: "Pronostics",
      description: "Prédictions de matchs et classements.",
      link: "Découvrir"
    }
  ];

  const stats = [
    {
      id: 1,
      icon: ArrowTrendingUpIcon,
      value: "500K+",
      label: "Interactions mensuelles"
    },
    {
      id: 2,
      icon: UsersIcon,
      value: "50+",
      label: "Marques partenaires"
    },
    {
      id: 3,
      icon: StarIcon,
      value: "98%",
      label: "Taux de satisfaction"
    },
    {
      id: 4,
      icon: LifebuoyIcon,
      value: "24/7",
      label: "Support technique"
    }
  ];

  return (
    <section className="bg-slate-50 w-full pt-20">
      {/* Top Part: Catalogue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">
            Catalogue de jeux
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Badge (absolute positioned inside the relative wrapper) */}
                {card.badge && (
                  <div className={`absolute top-0 right-0 ${card.badge.color} text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-bl-lg`}>
                    {card.badge.text}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-2 leading-tight">{card.title}</h3>
                <p className="text-[15px] text-slate-500 flex-grow leading-relaxed">{card.description}</p>
                
                {/* Optional Link */}
                <div className="mt-5 h-6"> {/* Fixed height to maintain alignment even if empty */}
                  {card.link && (
                    <a href="#" className="inline-flex items-center text-[15px] font-semibold text-[#18A058] hover:text-[#128045] transition-colors group">
                      {card.link}
                      <ChevronRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Part: Statistics Ribbon */}
      <div className="bg-white border-t-2 border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
            {stats.map((stat, index) => (
              <div key={stat.id} className={`flex flex-col items-center text-center ${index !== 0 ? 'md:pl-8' : ''} ${index !== 3 ? 'md:pr-8' : ''}`}>
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-[#18A058]" strokeWidth={2} />
                </div>
                <div className="text-3xl font-extrabold text-[#111827] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
