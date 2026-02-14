import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import EarningTips from './components/EarningTips';
import CategoryFilter from './components/CategoryFilter';
import Section from './components/Section';
import LandingHero from './components/LandingHero';
import RewardSection from './components/RewardSection';
import StatsSection from './components/StatsSection';
import ChatWidget from './components/ChatWidget';
import { OFFERS } from './constants';
import { Category } from './types';
import { FileText, Target } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredOffers = useMemo(() => {
    if (activeCategory === 'All') return OFFERS;
    return OFFERS.filter(o => o.type === activeCategory);
  }, [activeCategory]);

  const surveyOffers = filteredOffers.filter(o => o.type === 'Surveys');
  const gameOffers = filteredOffers.filter(o => o.type === 'Games');

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary-500/30">
      <Header />
      
      <main className="flex-1 w-full pb-20 md:pb-0">
        
        {/* NEW SECTIONS ADDED HERE */}
        <LandingHero />
        <StatsSection />
        <RewardSection />

        {/* EXISTING EARNING DASHBOARD */}
        <div id="earn" className="relative w-full space-y-8 py-12 sm:py-16 bg-gradient-to-b from-gray-950 to-background border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Current Opportunities</h2>
              <p className="text-gray-400">Log in to your account to start these tasks.</p>
            </div>

            {/* Content Area */}
            <div>
              <EarningTips />
              <CategoryFilter activeCategory={activeCategory} setCategory={setActiveCategory} />
              
              <div className="space-y-8 sm:space-y-12 min-h-[500px]">
                {/* Surveys Section */}
                {(activeCategory === 'All' || activeCategory === 'Surveys') && (
                   <Section 
                     title="Surveys" 
                     subtitle="Share your opinions and earn Coins!" 
                     icon={<FileText className="w-5 h-5 text-white" />} 
                     iconBgColor="bg-blue-500"
                     offers={surveyOffers}
                   />
                )}

                {/* Games Section */}
                {(activeCategory === 'All' || activeCategory === 'Games') && (
                   <Section 
                     title="Games" 
                     subtitle="Play trending games to get massive rewards!" 
                     icon={<Target className="w-5 h-5 text-white" />} 
                     iconBgColor="bg-emerald-500"
                     offers={gameOffers}
                   />
                )}

                {filteredOffers.length === 0 && (
                  <div className="text-center py-20">
                    <div className="inline-block p-4 rounded-full bg-gray-800/50 mb-4">
                       <Target className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">No offers found</h3>
                    <p className="text-gray-500">Try selecting a different category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Live Chat Widget */}
      <ChatWidget />

      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;