import React from 'react';
import { ArrowRight } from 'lucide-react';
import OfferCard from './OfferCard';
import { Offer } from '../types';
import FadeIn from './FadeIn';

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
    <section className="space-y-6">
      <FadeIn direction="left" delay={0}>
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${iconBgColor} flex items-center justify-center shadow-lg shadow-black/20 transform transition-transform hover:rotate-6`}>
                {icon}
              </div>
              <div className="font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {title}
              </div>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-400 mt-2 ml-1">
              {subtitle}
            </p>
          </div>
          
          <button className="hidden sm:flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5">
            View All
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {offers.map((offer, index) => (
          <FadeIn key={offer.id} delay={index * 100} fullWidth>
            <OfferCard offer={offer} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Section;