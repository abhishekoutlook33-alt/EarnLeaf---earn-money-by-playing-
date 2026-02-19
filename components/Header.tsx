import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Star, LogOut, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface Props {
  onOpenChat: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
  user: User | null;
  onSignIn: () => void;
  onSignOut: () => void;
}

const Header: React.FC<Props> = ({ onOpenChat, currentView, onNavigate, user, onSignIn, onSignOut }) => {
  const handleNavClick = (e: React.MouseEvent, itemLabel: string, href: string) => {
    e.preventDefault();
    if (itemLabel === 'Live Chat') {
      onOpenChat();
      return;
    }
    
    // Map labels to views
    let view = 'home';
    if (itemLabel === 'Withdraw') view = 'withdraw';
    if (itemLabel === 'Leaderboard') view = 'leaderboard';
    if (itemLabel === 'Affiliates') view = 'affiliates';
    
    onNavigate(view);
    
    // Handle hash scroll for Earn
    if (itemLabel === 'Earn') {
        window.location.hash = 'earn';
        // If we are already on home, we might need to scroll manually if the hash didn't trigger it
        const element = document.getElementById('earn');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Clear hash for other pages
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  const isActive = (label: string) => {
    if (label === 'Earn' && currentView === 'home') return true;
    if (label.toLowerCase() === currentView) return true;
    return false;
  };

  // Mock balance for display until Firestore is integrated
  const balance = 2450;
  const usdBalance = (balance / 1000).toFixed(2);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 lg:h-16 bg-background/95 backdrop-blur-md border-b border-gray-800/40 z-50">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
        {/* Logo Area */}
        <nav className="flex items-center">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="flex items-center space-x-2 mr-4 lg:mr-8 group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary-500 fill-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-2.5-3-2.5-3S6 10.62 6 12a2.5 2.5 0 0 0 2.5 2.5Z" />
                  <path d="M15.58 9c1.56 0 3.12 2.23 3.12 5.37 0 3.03-2.6 5.63-6 5.63-2.12 0-3.95-1.02-4.99-2.54l-1-1.63a7.43 7.43 0 0 1-.71-3.37C6 8.35 10 3 12 3c.6 0 1.25.32 1.83.91.56.57.94 1.34 1.75 5.09Z" />
               </svg>
               <div className="absolute inset-0 bg-primary-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="flex text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-white">Earn</span>
              <span className="text-primary-500">Leaf</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.label, item.href)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive(item.label)
                    ? 'text-primary-400 bg-primary-500/10 hover:bg-primary-500/20' 
                    : item.label === 'Live Chat'
                      ? 'text-primary-300 hover:text-white hover:bg-white/5 hover:text-primary-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <item.icon className={`w-4 h-4 ${isActive(item.label) || item.label === 'Live Chat' ? 'text-primary-500' : ''}`} />
                <span>{item.label}</span>
              </a>
            ))}
            
            <a 
                href="#withdraw" 
                onClick={(e) => { e.preventDefault(); onNavigate('withdraw'); }}
                className={`flex items-center space-x-2 text-sm font-medium transition-all px-3 py-1.5 rounded-full border border-primary-500/20 ${currentView === 'withdraw' ? 'bg-primary-500 text-white' : 'text-primary-400 hover:text-primary-300 bg-primary-500/10 hover:bg-primary-500/20'}`}
            >
              <Star className={`w-4 h-4 ${currentView === 'withdraw' ? 'text-white fill-white' : 'text-primary-400 fill-primary-500/20'}`} />
              <span>Rewards</span>
            </a>
          </div>
        </nav>

        {/* User Stats / Profile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a 
            href="#withdraw" 
            onClick={(e) => { e.preventDefault(); onNavigate('withdraw'); }}
            className="md:hidden flex items-center gap-1.5 px-2.5 py-1 bg-primary-500/10 rounded-full border border-primary-500/20"
          >
             <Star className="w-3.5 h-3.5 text-primary-400 fill-current" />
             <span className="text-xs font-bold text-primary-400">Rewards</span>
          </a>
          
          <div className="pl-2 sm:pl-4 border-l border-gray-800">
             {user ? (
               <div className="flex items-center gap-3">
                 <div className="hidden sm:block text-right">
                    <div className="text-xs text-gray-400">Balance</div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm font-bold text-primary-400 flex items-center justify-end gap-1">
                         <span>{balance.toLocaleString()}</span>
                         <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                      </div>
                      <div className="text-[10px] text-gray-500 font-medium tracking-wide">
                        ${usdBalance}
                      </div>
                    </div>
                 </div>
                 
                 <div className="relative group cursor-pointer" onClick={onSignOut}>
                    {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || "User"} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-700 hover:border-primary-500 transition-colors" />
                    ) : (
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-600/20 flex items-center justify-center border border-gray-700 text-primary-400">
                           <UserIcon className="w-5 h-5" />
                        </div>
                    )}
                    <div className="absolute top-full right-0 mt-2 w-32 bg-gray-900 border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <button onClick={onSignOut} className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 flex items-center gap-2">
                            <LogOut className="w-3 h-3" /> Sign Out
                        </button>
                    </div>
                 </div>
               </div>
             ) : (
                <button 
                  onClick={onSignIn}
                  className="bg-primary-600 hover:bg-primary-500 text-white text-xs sm:text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-lg shadow-primary-500/20"
                >
                  Sign In
                </button>
             )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
