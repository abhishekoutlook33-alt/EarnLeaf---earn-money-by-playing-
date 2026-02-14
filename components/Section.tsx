import React from 'react';
import { ArrowRight } from 'lucide-react';
import OfferCard from './OfferCard';
import { Offer } from '../types';

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBgColor: string;
  offers: Offer[];
}

const Section: React.FC<Props> = ({ title, subtitle, icon, iconBgColor, offers }) => {
  if (offers.length === 0) return null;

  return (
    <section className="animate-appear">
      <div className="pb-4 sm:pb-6 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${iconBgColor} flex items-center justify-center shadow-lg`}>
              {icon}
            </div>
            <div className="font-bold text-xl sm:text-2xl text-white">
              {title}
            </div>
          </div>
          <p className="text-sm sm:text-base font-medium text-slate-400 mt-1 ml-1 line-clamp-1 sm:line-clamp-none">
            {subtitle}
          </p>
        </div>
        
        <button className="hidden sm:flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors group">
          View All
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};

export default Section;