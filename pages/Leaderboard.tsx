import React from 'react';
import FadeIn from '../components/FadeIn';
import { Trophy, Medal, Crown } from 'lucide-react';
import { LIVE_FEED } from '../constants';

const Leaderboard: React.FC = () => {
  // Generate some mock leaderboard data
  const leaderboardData = [
    { rank: 1, user: 'Kratos_God', earnings: 45200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kratos' },
    { rank: 2, user: 'SarahJ', earnings: 38500, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { rank: 3, user: 'SpeedyBoi', earnings: 29100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Speedy' },
    { rank: 4, user: 'Alex99', earnings: 25400, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    { rank: 5, user: 'LunaMoon', earnings: 21200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna' },
    { rank: 6, user: 'CryptoKing', earnings: 18900, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Crypto' },
    { rank: 7, user: 'TaskMaster', earnings: 15600, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Task' },
    { rank: 8, user: 'GamerGirl', earnings: 14200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer' },
    { rank: 9, user: 'JohnDoe', earnings: 12100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
    { rank: 10, user: 'PixelArt', earnings: 11000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pixel' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="down">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-10 h-10 text-yellow-400" />
              Leaderboard
            </h1>
            <p className="text-gray-400 text-lg">Top earners this month. Compete for extra rewards!</p>
          </div>
        </FadeIn>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-12 items-end">
           {/* 2nd Place */}
           <FadeIn delay={200} className="order-1">
             <div className="bg-background-lighter/80 border border-gray-800 rounded-2xl p-4 flex flex-col items-center relative transform translate-y-4">
                <div className="absolute -top-6">
                    <Medal className="w-12 h-12 text-gray-300 drop-shadow-lg" />
                </div>
                <img src={leaderboardData[1].avatar} alt={leaderboardData[1].user} className="w-16 h-16 rounded-full border-4 border-gray-300 mt-6 mb-3" />
                <div className="font-bold text-lg text-white">{leaderboardData[1].user}</div>
                <div className="text-gray-300 font-mono font-bold text-sm bg-gray-800/50 px-3 py-1 rounded-full mt-1">
                    {leaderboardData[1].earnings.toLocaleString()}
                </div>
             </div>
           </FadeIn>

           {/* 1st Place */}
           <FadeIn delay={100} className="order-2">
             <div className="bg-gradient-to-b from-primary-900/40 to-background-lighter border border-yellow-500/30 rounded-2xl p-4 flex flex-col items-center relative z-10 shadow-[0_0_50px_-10px_rgba(234,179,8,0.2)]">
                <div className="absolute -top-8">
                    <Crown className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                </div>
                <img src={leaderboardData[0].avatar} alt={leaderboardData[0].user} className="w-20 h-20 rounded-full border-4 border-yellow-400 mt-8 mb-3 shadow-lg" />
                <div className="font-bold text-xl text-white">{leaderboardData[0].user}</div>
                <div className="text-yellow-400 font-mono font-bold text-lg bg-yellow-400/10 px-4 py-1.5 rounded-full mt-2 border border-yellow-400/20">
                    {leaderboardData[0].earnings.toLocaleString()}
                </div>
             </div>
           </FadeIn>

           {/* 3rd Place */}
           <FadeIn delay={300} className="order-3">
             <div className="bg-background-lighter/80 border border-gray-800 rounded-2xl p-4 flex flex-col items-center relative transform translate-y-8">
                <div className="absolute -top-6">
                    <Medal className="w-12 h-12 text-amber-700 drop-shadow-lg" />
                </div>
                <img src={leaderboardData[2].avatar} alt={leaderboardData[2].user} className="w-16 h-16 rounded-full border-4 border-amber-700 mt-6 mb-3" />
                <div className="font-bold text-lg text-white">{leaderboardData[2].user}</div>
                <div className="text-amber-600 font-mono font-bold text-sm bg-amber-900/20 px-3 py-1 rounded-full mt-1">
                    {leaderboardData[2].earnings.toLocaleString()}
                </div>
             </div>
           </FadeIn>
        </div>

        {/* List for the rest */}
        <div className="bg-background-lighter/50 border border-gray-800 rounded-2xl overflow-hidden">
            {leaderboardData.slice(3).map((item, index) => (
                <FadeIn key={item.rank} delay={400 + (index * 50)} fullWidth>
                    <div className="flex items-center p-4 border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                        <div className="w-8 text-center font-mono font-bold text-gray-500">#{item.rank}</div>
                        <img src={item.avatar} alt={item.user} className="w-10 h-10 rounded-full bg-gray-800 mx-4" />
                        <div className="flex-1 font-medium text-gray-200">{item.user}</div>
                        <div className="font-mono font-bold text-primary-400">{item.earnings.toLocaleString()}</div>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;