import React from 'react';

const RewardSection: React.FC = () => {
  const brands = [
    { name: 'PayPal', bg: 'bg-[#003087] hover:bg-[#002569]', text: 'text-white italic font-bold text-2xl', icon: null },
    { name: 'VISA', bg: 'bg-[#1434CB] hover:bg-[#1029a3]', text: 'text-white font-serif font-black text-2xl tracking-wide', icon: null },
    { name: 'amazon', bg: 'bg-[#FF9900] hover:bg-[#e68a00]', text: 'text-white font-bold text-2xl tracking-tighter', icon: null },
    { name: 'Walmart', bg: 'bg-[#0071DC] hover:bg-[#0060ba]', text: 'text-white font-medium text-2xl', icon: null },
    { name: 'Bitcoin', bg: 'bg-[#F7931A] hover:bg-[#d87d10]', text: 'text-white font-bold text-xl', icon: '₿' },
    { name: 'Litecoin', bg: 'bg-[#eeeeee] hover:bg-[#e0e0e0]', text: 'text-gray-600 font-bold text-xl', icon: 'Ł' },
    { name: 'Apple', bg: 'bg-[#e0e0e0] hover:bg-[#d0d0d0]', text: 'text-black font-bold text-2xl', icon: '' },
    { name: 'Google Play', bg: 'bg-[#A639F5] hover:bg-[#8e2ed6]', text: 'text-white font-medium text-xl', icon: '▶' },
    { name: 'DOORDASH', bg: 'bg-[#eee] hover:bg-[#e0e0e0]', text: 'text-[#FF3008] font-black text-xl tracking-wide', icon: null },
    { name: 'NIKE', bg: 'bg-[#FF4500] hover:bg-[#e03e00]', text: 'text-white italic font-black text-3xl', icon: null },
    { name: 'ROBLOX', bg: 'bg-[#919191] hover:bg-[#7a7a7a]', text: 'text-white font-black text-2xl', icon: null },
    { name: 'STEAM', bg: 'bg-[#171a21] hover:bg-[#2a2e38]', text: 'text-white font-bold text-xl tracking-widest', icon: null },
  ];

  return (
    <section className="bg-[#0b101d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Choose Your Reward, Your Way
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From PayPal and gift cards to crypto, EarnLeaf offers a wide range of withdrawal options. Select the method that works best for you and enjoy your earnings with ease.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className={`${brand.bg} aspect-[3/2] rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className={`${brand.text} flex items-center gap-2 z-10 select-none`}>
                {brand.icon && <span className="text-2xl">{brand.icon}</span>}
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardSection;