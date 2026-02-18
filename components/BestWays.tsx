import React from 'react';
import { Gamepad2, Smartphone, ClipboardList, Wallet } from 'lucide-react';
import FadeIn from './FadeIn';

const BestWays: React.FC = () => {
  const methods = [
    {
      title: "Play games",
      desc: "In order to attract more players, gaming companies want to pay you to play their games. Let's play!",
      range: "$1.00 - $120.00",
      label: "Earn per game",
      icons: [Gamepad2],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Complete offers",
      desc: "Get to know new companies by trying their apps while you earn money. It's time to get paid for using apps!",
      range: "$1.00 - $75.00",
      label: "Earn per app",
      icons: [Smartphone, Wallet],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Join surveys",
      desc: "Companies need your opinion to create better products and services. That's why they pay for your feedback.",
      range: "$1.00",
      label: "Earn per 5-10 min survey",
      icons: [ClipboardList],
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Best ways to earn</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {methods.map((method, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="h-full bg-[#131b2e] border border-slate-800/60 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                {/* Gradient BG on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {method.desc}
                </p>

                <div className="space-y-1 mb-8">
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{method.label}</div>
                   <div className="text-2xl font-black text-white">{method.range}</div>
                </div>

                {/* Icons Area */}
                <div className="mt-auto w-full pt-6 border-t border-slate-800/50 flex justify-center gap-4">
                  {method.icons.map((Icon, i) => (
                     <div key={i} className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                     </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestWays;