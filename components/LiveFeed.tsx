import React from 'react';
import { LIVE_FEED } from '../constants';

const LiveFeed: React.FC = () => {
  return (
    <div className="w-full bg-background/50 backdrop-blur-sm border-b border-gray-800/20 overflow-hidden">
      <div className="max-w-[2000px] mx-auto px-4 py-2">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-4 hover:[animation-play-state:paused]">
            {[...LIVE_FEED, ...LIVE_FEED, ...LIVE_FEED].map((item, index) => (
              <div 
                key={`${item.user}-${index}`} 
                className="flex items-center space-x-3 bg-background-lighter/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex-shrink-0 border border-white/5 hover:border-primary-500/30 transition-colors cursor-default"
              >
                <img src={item.avatar} alt={item.user} className="w-6 h-6 rounded-full bg-background-lighter" />
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-primary-400">{item.user}</span>
                  <span className="text-gray-400 mx-1">{item.action}</span>
                  {item.reward > 0 && (
                    <span className="text-emerald-400 font-medium">+{item.reward}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LiveFeed;
