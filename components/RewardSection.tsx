import React from 'react';
import FadeIn from './FadeIn';

const RewardSection: React.FC = () => {
  const brands = [
    { name: 'PayPal', bg: 'bg-[#003087] hover:bg-[#002569]', text: 'text-white italic font-bold text-2xl', icon: null },
    { name: 'VISA', bg: 'bg-[#1434CB] hover:bg-[#1029a3]', text: 'text-white font-serif font-black text-2xl tracking-wide', icon: null },
    { name: 'amazon', bg: 'bg-[#FF9900] hover:bg-[#e68a00]', text: 'text-white font-bold text-2xl tracking-tighter', icon: null },
    { name: 'Walmart', bg: 'bg-[#0071DC] hover:bg-[#0060ba]', text: 'text-white font-medium text-2xl', icon: null },
    { name: 'Bitcoin', bg: 'bg-[#F7931A] hover:bg-[#d87d10]', text: 'text-white font-bold text-xl', icon: '₿' },
    { name: 'Ethereum', bg: 'bg-[#ecf0f1] hover:bg-[#dce4e6]', text: 'text-slate-800 font-bold text-xl', icon: 'Ξ' },
    { name: 'Litecoin', bg: 'bg-[#eeeeee] hover:bg-[#e0e0e0]', text: 'text-gray-600 font-bold text-xl', icon: 'Ł' },
    { name: 'Solana', bg: 'bg-[#9945FF] hover:bg-[#7a37cc]', text: 'text-white font-bold text-xl uppercase', icon: null },
    { name: 'USDC', bg: 'bg-[#2775CA] hover:bg-[#1f5da0]', text: 'text-white font-bold text-xl', icon: '$' },
    { name: 'Tether', bg: 'bg-[#50AF95] hover:bg-[#408c77]', text: 'text-white font-bold text-xl', icon: '₮' },
    { name: 'Apple', bg: 'bg-[#e0e0e0] hover:bg-[#d0d0d0]', text: 'text-black font-bold text-2xl', icon: '' },
    { name: 'Google Play', bg: 'bg-[#A639F5] hover:bg-[#8e2ed6]', text: 'text-white font-medium text-xl', icon: '▶' },
    { name: 'DOORDASH', bg: 'bg-[#eee] hover:bg-[#e0e0e0]', text: 'text-[#FF3008] font-black text-xl tracking-wide', icon: null },
    { name: 'NIKE', bg: 'bg-[#FF4500] hover:bg-[#e03e00]', text: 'text-white italic font-black text-3xl', icon: null },
    { name: 'ROBLOX', bg: 'bg-[#919191] hover:bg-[#7a7a7a]', text: 'text-white font-black text-2xl', icon: null },
    { name: 'STEAM', bg: 'bg-[#171a21] hover:bg-[#2a2e38]', text: 'text-white font-bold text-xl tracking-widest', icon: null },
  ];

  return (
    <section id="withdraw" className="bg-[#0b101d] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Choose Your Reward, Your Way
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
              From PayPal and gift cards to crypto, EarnLeaf offers a wide range of withdrawal options. Select the method that works best for you and enjoy your earnings with ease.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-6 py-3 rounded-full bg-primary-500/5 border border-primary-500/20 text-primary-300 text-sm font-medium">
              <span>Exchange Rate: 1,000 Coins = $1.00</span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary-500/40"></span>
              <span className="text-emerald-400">Minimum Withdrawal: $5.00</span>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <FadeIn key={brand.name} delay={index * 50} className="h-full">
              <div 
                className={`${brand.bg} aspect-[3/2] rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-[shimmer_1s_infinite]"></div>
                
                <span className={`${brand.text} flex items-center gap-2 z-10 select-none transform transition-transform group-hover:scale-110`}>
                  {brand.icon && <span className="text-2xl">{brand.icon}</span>}
                  {brand.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `}</style>
    </section>
  );
};

export default RewardSection;