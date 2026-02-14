import React from 'react';
import { NAV_ITEMS } from '../constants';

const MobileNav: React.FC = () => {
  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-gray-800/30 z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-4 h-16">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors relative
              ${item.label === 'Earn' ? 'text-primary-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            {item.label === 'Earn' && (
               <div className="absolute top-0 inset-x-0 h-0.5 bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            )}
            <item.icon className={`w-5 h-5 ${item.label === 'Earn' ? 'fill-primary-500/10' : ''}`} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;