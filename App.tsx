import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Withdraw from './pages/Withdraw';
import Leaderboard from './pages/Leaderboard';
import Affiliates from './pages/Affiliates';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'withdraw':
        return <Withdraw />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'affiliates':
        return <Affiliates />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary-500/30">
      <Header 
        onOpenChat={handleOpenChat} 
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      
      <main className="flex-1 w-full pb-20 md:pb-0">
        {renderView()}
      </main>

      {/* Live Chat Widget */}
      <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      <Footer />
      <MobileNav 
        onOpenChat={handleOpenChat}
        currentView={currentView}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;