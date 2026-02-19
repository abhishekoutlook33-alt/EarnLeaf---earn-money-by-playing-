import React, { useState, useEffect } from 'react';
import { User } from './types';
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking local storage for auth
    const storedUser = localStorage.getItem('earnleaf_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
        const mockUser: User = {
            uid: 'mock-user-123',
            displayName: 'Demo User',
            email: 'demo@example.com',
            photoURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
        };
        setUser(mockUser);
        localStorage.setItem('earnleaf_user', JSON.stringify(mockUser));
        setLoading(false);
    }, 800);
  };

  const handleSignOut = async () => {
    setUser(null);
    localStorage.removeItem('earnleaf_user');
    setCurrentView('home');
  };

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
        return <Home onSignIn={handleGoogleSignIn} user={user} />;
    }
  };

  if (loading) {
     return (
       <div className="min-h-screen bg-background flex items-center justify-center">
         <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
       </div>
     );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary-500/30">
      <Header 
        onOpenChat={handleOpenChat} 
        currentView={currentView}
        onNavigate={handleNavigate}
        user={user}
        onSignIn={handleGoogleSignIn}
        onSignOut={handleSignOut}
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