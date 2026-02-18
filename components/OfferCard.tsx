import React from 'react';
import { Star } from 'lucide-react';
import { Offer } from '../types';

interface Props {
  offer: Offer;
}

const OfferCard: React.FC<Props> = ({ offer }) => {
  const usdValue = (offer.reward / 1000).toFixed(2);

  return (
    <div className="group relative h-full bg-background-lighter rounded-2xl border border-gray-800/60 overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] hover:-translate-y-2">
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Area */}
      <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-gray-900">
        <img 
          src={offer.image} 
          alt={offer.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
        
        {offer.tags && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {offer.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold uppercase bg-primary-600/90 backdrop-blur-sm text-white shadow-lg border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white flex items-center gap-1 border border-white/10">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          {offer.rating}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col h-[calc(100%-8rem)]">
        <div className="flex-1 min-w-0 mb-3">
             <h4 className="text-sm sm:text-base font-bold text-gray-100 truncate group-hover:text-primary-400 transition-colors">
               {offer.title}
             </h4>
             <p className="text-xs text-gray-500 truncate mt-0.5">{offer.provider}</p>
        </div>

        {/* Action / Reward */}
        <div className="flex items-center justify-between mt-auto">
           <div className="flex flex-col items-start gap-0.5">
             <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-xs sm:text-sm font-bold text-emerald-400">+{offer.reward}</span>
             </div>
             <span className="text-[10px] text-gray-500 ml-1 font-medium">
               ≈ ${usdValue}
             </span>
           </div>
           
           <button className="bg-white text-black hover:bg-primary-500 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all transform group-hover:scale-105 active:scale-95 shadow-lg shadow-white/10 group-hover:shadow-primary-500/20">
             Start
           </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;