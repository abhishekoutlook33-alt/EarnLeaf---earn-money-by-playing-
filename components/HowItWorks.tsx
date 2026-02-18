import React from 'react';
import { MousePointer2, Star } from 'lucide-react';
import FadeIn from './FadeIn';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        
        {/* Step 1: Choose an offer */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="lg:order-2">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              {/* Cards Container */}
              <div className="relative flex items-center justify-center gap-3 sm:gap-6 perspective-1000">
                
                {/* Netflix Card (Left) */}
                <div className="w-32 sm:w-44 bg-[#151921] rounded-2xl p-3 border border-gray-800 opacity-60 scale-90 -rotate-6 transform transition-all duration-500 hover:opacity-100 hover:scale-95 hover:rotate-0 hover:z-10 shadow-2xl shrink-0">
                   <div className="aspect-square bg-black rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                      <span className="text-red-600 text-5xl sm:text-6xl font-black tracking-tighter">N</span>
                   </div>
                   <h4 className="font-bold text-white text-xs sm:text-sm mb-1">Netflix</h4>
                   <p className="text-[10px] text-gray-400 mb-2 truncate">Start a trial month</p>
                   <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-xs sm:text-sm">$5.00</span>
                      <div className="flex gap-0.5"><Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /><span className="text-[10px] text-white">5.0</span></div>
                   </div>
                </div>

                {/* Dice Dreams Card (Center) */}
                <div className="w-40 sm:w-48 bg-[#1c2230] rounded-2xl p-3 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] z-20 scale-100 transform transition-all duration-500 hover:scale-105 relative shrink-0">
                    {/* Floating Selection Cursor */}
                    <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-30 animate-[float_3s_ease-in-out_infinite]">
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/40 blur-md rounded-full"></div>
                            <MousePointer2 className="relative w-8 h-8 sm:w-10 sm:h-10 text-white fill-black stroke-[1.5px] -rotate-12 drop-shadow-xl" />
                        </div>
                    </div>
                    
                    <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-[#3b82f6] relative">
                         <div className="absolute inset-0 flex items-center justify-center">
                            <img 
                                src="https://play-lh.googleusercontent.com/c4sJ6g4g7h8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j" 
                                className="w-full h-full object-cover" 
                                alt="Dice Dreams"
                            />
                         </div>
                    </div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-1">Dice Dreams</h4>
                    <p className="text-[10px] text-gray-400 mb-2">Reach level 10</p>
                    <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-base sm:text-lg">$200.00</span>
                        <div className="flex gap-0.5"><Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /><span className="text-[10px] text-white">5.0</span></div>
                    </div>
                </div>

                {/* TikTok Card (Right) */}
                <div className="w-32 sm:w-44 bg-[#151921] rounded-2xl p-3 border border-gray-800 opacity-60 scale-90 rotate-6 transform transition-all duration-500 hover:opacity-100 hover:scale-95 hover:rotate-0 hover:z-10 shadow-2xl shrink-0">
                   <div className="aspect-square bg-black rounded-xl mb-3 flex items-center justify-center overflow-hidden relative">
                      {/* TikTok Logo Simulation */}
                      <div className="text-white font-black text-5xl sm:text-6xl mix-blend-screen relative z-10 select-none">
                         <span className="absolute -left-[2px] -top-[2px] text-[#25F4EE] mix-blend-screen opacity-70">♪</span>
                         <span className="absolute left-[2px] top-[2px] text-[#FE2C55] mix-blend-screen opacity-70">♪</span>
                         <span className="relative">♪</span>
                      </div>
                   </div>
                   <h4 className="font-bold text-white text-xs sm:text-sm mb-1">TikTok</h4>
                   <p className="text-[10px] text-gray-400 mb-2 truncate">Sign up</p>
                   <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-xs sm:text-sm">$2.00</span>
                      <div className="flex gap-0.5"><Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /><span className="text-[10px] text-white">5.0</span></div>
                   </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="lg:order-1 space-y-4 sm:space-y-6">
             <div className="flex items-center gap-4 text-2xl sm:text-3xl font-extrabold text-white">
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                  <span className="font-mono text-lg sm:text-xl font-bold">1.</span>
               </div>
               Choose an offer
            </div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps, surveys, and products.
            </p>
          </FadeIn>
        </div>

        {/* Step 2: Complete the offer */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full"></div>
              
              <div className="relative w-full max-w-sm bg-gradient-to-b from-[#1a1f2e] to-[#0f1219] border border-gray-800 rounded-[2rem] p-6 sm:p-8 shadow-2xl">
                 <div className="flex flex-col items-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] bg-[#3b82f6] shadow-2xl mb-6 overflow-hidden relative border-4 border-[#1a1f2e]">
                        <img src="https://play-lh.googleusercontent.com/c4sJ6g4g7h8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j" className="w-full h-full object-cover" alt="Dice Dreams"/>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Dice Dreams</h3>
                    <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                    </div>

                    <div className="w-full bg-[#13161c] rounded-xl p-2 flex items-center justify-between border border-gray-800">
                        <div className="flex items-center gap-3">
                           <span className="bg-[#132f25] text-emerald-400 text-sm font-bold px-2 py-1 rounded border border-emerald-500/20">$5.00</span>
                           <span className="text-white text-sm font-medium">Reach level 5</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xs shadow-lg shadow-yellow-500/50">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="space-y-4 sm:space-y-6">
             <div className="flex items-center gap-4 text-2xl sm:text-3xl font-extrabold text-white">
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 shrink-0">
                  <span className="font-mono text-lg sm:text-xl font-bold">2.</span>
               </div>
               Complete the offer
            </div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes to complete.
            </p>
          </FadeIn>
        </div>

        {/* Step 3: Get paid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="lg:order-2">
            <div className="relative">
               <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
               
               <div className="relative bg-[#0f1219] border border-gray-800 rounded-[2.5rem] p-8 text-center overflow-hidden">
                  
                  {/* Floating Coins */}
                  <div className="absolute top-10 left-10 text-2xl animate-float opacity-40">🪙</div>
                  <div className="absolute bottom-10 right-10 text-xl animate-float-delayed opacity-40">💰</div>
                  <div className="absolute top-20 right-20 text-lg animate-float opacity-40">💎</div>

                  <div className="relative z-10 flex flex-col items-center">
                      <div className="bg-[#1a1f2e] px-8 py-3 rounded-2xl border border-gray-700 shadow-xl mb-4 min-w-[120px]">
                          <span className="text-4xl font-black text-white">$120</span>
                      </div>
                      
                      {/* Payment Grid */}
                      <div className="grid grid-cols-5 gap-3 w-full max-w-sm mx-auto mt-6">
                          {/* Icons row 1 */}
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-blue-500/50 transition-colors group">
                              <span className="text-blue-500 font-bold text-xl group-hover:scale-110 transition-transform">P</span>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-orange-500/50 transition-colors group">
                              <span className="text-orange-500 font-bold text-xl group-hover:scale-110 transition-transform">₿</span>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-green-500/50 transition-colors relative group">
                             {/* Play Store Triangle */}
                             <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-green-500 transform rotate-90 scale-125 group-hover:scale-150 transition-transform"></div>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-purple-400/50 transition-colors group">
                              <span className="text-purple-400 font-bold text-xl group-hover:scale-110 transition-transform">Ξ</span>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-gray-400/50 transition-colors group">
                              <span className="text-gray-400 font-bold text-xl group-hover:scale-110 transition-transform">Ł</span>
                          </div>

                          {/* Icons row 2 */}
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-blue-600/50 transition-colors group">
                              <span className="text-blue-600 font-bold text-xl group-hover:scale-110 transition-transform">V</span>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-green-400/50 transition-colors group">
                              <div className="w-4 h-4 rounded-full bg-green-500 group-hover:scale-125 transition-transform"></div>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-red-600/50 transition-colors group">
                              <span className="text-red-600 font-bold text-xl group-hover:scale-110 transition-transform">N</span>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-white/50 transition-colors group">
                              <div className="w-3 h-4 border border-white rounded-sm group-hover:bg-white transition-colors"></div>
                          </div>
                          <div className="aspect-square bg-[#1a1f2e] rounded-xl flex items-center justify-center border border-gray-800 hover:border-green-600/50 transition-colors group">
                              <span className="text-green-600 font-bold text-xl group-hover:scale-110 transition-transform">X</span>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:order-1 space-y-4 sm:space-y-6">
             <div className="flex items-center gap-4 text-2xl sm:text-3xl font-extrabold text-white">
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <span className="font-mono text-lg sm:text-xl font-bold">3.</span>
               </div>
               Get paid
            </div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              For each task you complete, you'll be rewarded with coins: 1000 coins = $1.00. Cashout the coins and get your hands on your free cash!
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;