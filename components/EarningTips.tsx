import React, { useState } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';
import { EARNING_TIPS } from '../constants';

const EarningTips: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % EARNING_TIPS.length);
  };

  return (
    <div className="w-full mb-6">
      <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950 rounded-xl border border-primary-500/20 p-5 shadow-lg overflow-hidden group">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(124,58,237,0.1),_transparent_70%)]"></div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-600/5 rounded-full blur-2xl"></div>
        
        <div className="flex items-start gap-5 relative z-10">
          {/* Mascot Avatar */}
          <div className="hidden sm:block w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0 bg-black">
            <img 
              src="https://picsum.photos/seed/mascot/200/200" 
              alt="Mascot" 
              className="w-full h-full object-cover animate-float" 
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary-400 fill-primary-400/20" />
                <span className="text-lg tracking-tight">Earning Tips</span>
              </h3>
              <button 
                onClick={() => setVisible(false)}
                className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-lg" 
                aria-label="Dismiss tips"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[48px] sm:h-[56px] overflow-hidden flex items-center">
              <p key={currentTip} className="text-sm sm:text-base text-gray-300 leading-relaxed animate-[fadeIn_0.5s_ease-out]">
                {EARNING_TIPS[currentTip]}
              </p>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-800/50">
              <div className="flex gap-1.5">
                {EARNING_TIPS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTip(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentTip ? 'w-6 bg-primary-400' : 'w-1.5 bg-gray-700 hover:bg-gray-600'
                    }`}
                    aria-label={`Tip ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTip}
                className="text-xs sm:text-sm flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                Next tip
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningTips;
