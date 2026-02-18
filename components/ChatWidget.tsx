import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  user: string;
  text: string;
  avatar: string;
  isSystem?: boolean;
}

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ChatWidget: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', user: 'System', text: 'Welcome to the global chat!', avatar: '', isSystem: true },
    { id: '2', user: 'Alex99', text: 'Anyone got the survey reward yet?', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    { id: '3', user: 'SarahJ', text: 'Yeah, CPX is paying fast today.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: 'You',
      text: inputValue,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    
    // Simulate auto-reply for liveliness
    setTimeout(() => {
        const replies = [
            "Nice!", "Keep earning!", "How do I withdraw?", "Congrats!", "gg", "wow"
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        const botMsg: Message = {
            id: Date.now().toString() + 'bot',
            user: 'User' + Math.floor(Math.random() * 1000),
            text: randomReply,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`
        };
        setMessages(prev => [...prev, botMsg]);
    }, 2000 + Math.random() * 5000);
  };

  return (
    <>
      {/* Chat Window */}
      <div 
        className={`fixed z-50 bottom-24 right-4 md:right-8 w-80 sm:w-96 bg-[#0f172a] border border-gray-800 rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{ height: '450px', maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm rounded-t-xl">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-gray-900 rounded-full z-10"></div>
                    <div className="w-8 h-8 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-400">
                        <MessageCircle className="w-5 h-5" />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-white text-sm">Global Chat</h3>
                    <span className="text-xs text-green-400 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        1,420 Online
                    </span>
                </div>
            </div>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-lg">
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[#0b101d]">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.user === 'You' ? 'flex-row-reverse' : ''}`}>
                    {!msg.isSystem && (
                        <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 border border-gray-700" />
                    )}
                    <div className={`flex flex-col ${msg.user === 'You' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                        {!msg.isSystem && <span className="text-[10px] text-gray-500 mb-1 px-1">{msg.user}</span>}
                        <div className={`px-3 py-2 rounded-2xl text-sm ${
                            msg.isSystem 
                                ? 'bg-primary-500/10 text-primary-300 border border-primary-500/20 w-full text-center text-xs py-1 rounded-lg' 
                                : msg.user === 'You' 
                                    ? 'bg-primary-600 text-white rounded-br-none shadow-lg shadow-primary-900/20' 
                                    : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 border-t border-gray-800 bg-gray-900/50 rounded-b-xl flex gap-2">
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..." 
                className="flex-1 bg-gray-800/50 border border-gray-700/50 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 rounded-lg text-sm text-white placeholder-gray-500 px-3 py-2.5 transition-all outline-none"
            />
            <button type="submit" disabled={!inputValue.trim()} className="bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-lg transition-all shadow-lg shadow-primary-900/20">
                <Send className="w-4 h-4" />
            </button>
        </form>
      </div>

      {/* Floating Button */}
      <button 
        onClick={toggleChat}
        className="fixed z-50 bottom-24 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-[0_4px_20px_rgba(147,51,234,0.5)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
      >
         <div className={`transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'}`}>
            <MessageCircle className="w-6 h-6" />
         </div>
         <div className={`transition-all duration-300 ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0 absolute'}`}>
            <X className="w-6 h-6" />
         </div>
         
         {!isOpen && (
            <span className="absolute -right-1 -top-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-background animate-bounce">1</span>
         )}
      </button>
    </>
  );
};

export default ChatWidget;