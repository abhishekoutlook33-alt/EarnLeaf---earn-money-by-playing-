import React from 'react';
import { Star } from 'lucide-react';
import { Offer } from '../types';

interface Props {
  offer: Offer;
}

const OfferCard: React.FC<Props> = ({ offer }) => {
  return (
    <div className="group relative bg-background-lighter rounded-xl border border-gray-800/60 overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-1">
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Image Area */}
      <div className="relative h-28 sm:h-36 w-full overflow-hidden bg-gray-900">
        <img 
          src={offer.image} 
          alt={offer.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {offer.tags && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {offer.tags.map(tag => (
              <span key={tag} className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase bg-primary-600 text-white shadow-lg">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-black/70 backdrop-blur-sm text-[10px] sm:text-xs font-medium text-white flex items-center gap-1">
          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-amber-400" />
          {offer.rating}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-2.5 sm:p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
           <div className="min-w-0 flex-1">
             <h4 className="text-sm sm:text-base font-semibold text-gray-100 truncate group-hover:text-primary-400 transition-colors">
               {offer.title}
             </h4>
             <p className="text-[10px] sm:text-xs text-gray-500 truncate">{offer.provider}</p>
           </div>
        </div>

        {/* Action / Reward */}
        <div className="flex items-center justify-between mt-2 sm:mt-3">
           <div className="flex items-center gap-1 sm:gap-1.5 bg-emerald-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-emerald-500/20">
             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-xs sm:text-sm font-bold text-emerald-400">+{offer.reward}</span>
           </div>
           
           <button className="bg-white text-black hover:bg-primary-500 hover:text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-colors">
             Start
           </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;