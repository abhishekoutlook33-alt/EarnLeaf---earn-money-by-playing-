import React from 'react';
import { HandCoins, Zap, Gift } from 'lucide-react';
import FadeIn from './FadeIn';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: HandCoins,
      title: "Highest payouts",
      desc: "Earn way more than on other sites. It's our goal to help you make as much money as possible.",
    },
    {
      icon: Zap,
      title: "Instant cashouts",
      desc: "Ready to get your money? The minimum cashout varies by region, between as little as $5 and $20, and payouts are almost instant.",
    },
    {
      icon: Gift,
      title: "Daily bonuses",
      desc: "Climb the daily bonus ladder, reach the leaderboard, or start a streak to earn extra rewards, for free.",
    }
  ];

  return (
    <section className="py-20 bg-background-lighter/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="down" className="text-center mb-16">
           <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
             We're the <span className="text-emerald-400">#1 site</span> to make money. Here's why
           </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
           {features.map((feature, index) => (
             <FadeIn key={index} delay={index * 100} className="h-full">
               <div className="h-full bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors group">
                 <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-emerald-400" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                 <p className="text-gray-400 leading-relaxed">
                   {feature.desc}
                 </p>
               </div>
             </FadeIn>
           ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;