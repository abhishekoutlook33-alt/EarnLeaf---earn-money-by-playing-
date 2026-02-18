import React from 'react';
import { NAV_ITEMS } from '../constants';

interface Props {
  onOpenChat: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

const MobileNav: React.FC<Props> = ({ onOpenChat, currentView, onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, itemLabel: string) => {
    e.preventDefault();
    
    // Map labels to views
    let view = 'home';
    if (itemLabel === 'Withdraw') view = 'withdraw';
    if (itemLabel === 'Leaderboard') view = 'leaderboard';
    if (itemLabel === 'Affiliates') view = 'affiliates';
    
    onNavigate(view);

    if (itemLabel === 'Earn') {
        const element = document.getElementById('earn');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (label: string) => {
    if (label === 'Earn' && currentView === 'home') return true;
    if (label.toLowerCase() === currentView) return true;
    return false;
  };

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-gray-800/30 z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-5 h-16">
        {NAV_ITEMS.map((item) => {
          if (item.label === 'Live Chat') {
            return (
              <button
                key={item.label}
                onClick={onOpenChat}
                className="flex flex-col items-center justify-center space-y-1 transition-colors relative text-primary-300 hover:text-white"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium text-center leading-none">{item.label}</span>
              </button>
            );
          }

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.label)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors relative
                ${isActive(item.label)
                  ? 'text-primary-400' 
                  : 'text-gray-500 hover:text-gray-300'
                }`}
            >
              {isActive(item.label) && (
                 <div className="absolute top-0 inset-x-0 h-0.5 bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              )}
              <item.icon className={`w-5 h-5 ${isActive(item.label) ? 'fill-primary-500/10' : ''}`} />
              <span className="text-[10px] font-medium text-center leading-none">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;