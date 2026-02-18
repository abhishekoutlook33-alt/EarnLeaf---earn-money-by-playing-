import React from 'react';
import { Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-gray-800/30 pt-12 pb-24 md:pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 mb-6">
               <div className="relative w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary-500 fill-primary-500/20">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-2.5-3-2.5-3S6 10.62 6 12a2.5 2.5 0 0 0 2.5 2.5Z" />
                      <path d="M15.58 9c1.56 0 3.12 2.23 3.12 5.37 0 3.03-2.6 5.63-6 5.63-2.12 0-3.95-1.02-4.99-2.54l-1-1.63a7.43 7.43 0 0 1-.71-3.37C6 8.35 10 3 12 3c.6 0 1.25.32 1.83.91.56.57.94 1.34 1.75 5.09Z" />
                  </svg>
               </div>
               <span className="text-xl font-bold text-white">Earn<span className="text-primary-500">Leaf</span></span>
            </a>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background-lighter border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background-lighter border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#229ED9] hover:border-[#229ED9] transition-all duration-300">
                <Send className="w-5 h-5 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Earn Coins</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Withdraw</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Leaderboard</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Affiliates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stats</h3>
              <div className="space-y-3">
                 <div className="bg-background-lighter/50 rounded-lg p-3 border border-gray-800/50">
                    <div className="text-xs text-gray-500">Total Paid Out</div>
                    <div className="text-lg font-bold text-emerald-400">$2,450,291</div>
                 </div>
                 <div className="bg-background-lighter/50 rounded-lg p-3 border border-gray-800/50">
                    <div className="text-xs text-gray-500">Users Online</div>
                    <div className="text-lg font-bold text-primary-400">14,203</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-600">© 2026 EarnLeaf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;