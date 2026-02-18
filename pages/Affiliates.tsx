import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Users, Copy, Check, Share2, DollarSign } from 'lucide-react';

const Affiliates: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://earnleaf.com/?ref=user123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Hero Section */}
        <FadeIn direction="down">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 mb-6 border border-primary-500/20">
                <Users className="w-8 h-8 text-primary-400" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Invite Friends & <span className="text-primary-400">Earn Forever</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Share your referral link with friends. When they sign up and earn coins, you get 10% of their earnings for life! No limits.
            </p>
          </div>
        </FadeIn>

        {/* Link Box */}
        <FadeIn delay={200}>
          <div className="bg-background-lighter border border-gray-800 rounded-2xl p-6 sm:p-8 mt-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl group-hover:bg-primary-600/10 transition-colors"></div>
            
            <label className="block text-sm font-medium text-gray-400 mb-2">Your Referral Link</label>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 bg-gray-950/50 border border-gray-700 rounded-xl px-4 py-3 text-white font-mono text-sm sm:text-base flex items-center">
                    {referralLink}
                </div>
                <button 
                    onClick={handleCopy}
                    className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${copied ? 'bg-emerald-500 text-white' : 'bg-primary-600 hover:bg-primary-500 text-white'}`}
                >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    {copied ? 'Copied!' : 'Copy Link'}
                </button>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 font-medium transition-colors">
                    <Share2 className="w-4 h-4" /> Share on Facebook
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 font-medium transition-colors">
                    <Share2 className="w-4 h-4" /> Share on Twitter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 font-medium transition-colors">
                    <Share2 className="w-4 h-4" /> Share on WhatsApp
                </button>
            </div>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FadeIn delay={300} className="h-full">
                <div className="bg-background-lighter/50 border border-gray-800 p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center">
                    <div className="text-gray-500 text-sm font-medium mb-1">Friends Invited</div>
                    <div className="text-3xl font-bold text-white">12</div>
                </div>
            </FadeIn>
            <FadeIn delay={400} className="h-full">
                <div className="bg-background-lighter/50 border border-gray-800 p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center">
                    <div className="text-gray-500 text-sm font-medium mb-1">Coins Earned</div>
                    <div className="text-3xl font-bold text-primary-400">4,500</div>
                </div>
            </FadeIn>
            <FadeIn delay={500} className="h-full">
                <div className="bg-background-lighter/50 border border-gray-800 p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center">
                    <div className="text-gray-500 text-sm font-medium mb-1">Commission Rate</div>
                    <div className="text-3xl font-bold text-emerald-400">10%</div>
                </div>
            </FadeIn>
        </div>

        {/* Referral History */}
        <FadeIn delay={600}>
            <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Recent Referrals</h3>
                <div className="bg-background-lighter border border-gray-800 rounded-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-800 text-gray-500 text-sm bg-gray-900/50">
                                <th className="py-3 px-4">User</th>
                                <th className="py-3 px-4">Date Joined</th>
                                <th className="py-3 px-4 text-right">Your Earnings</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                                <td className="py-3 px-4 text-gray-300">User9923</td>
                                <td className="py-3 px-4 text-gray-500">Today</td>
                                <td className="py-3 px-4 text-right font-medium text-emerald-400">+50</td>
                            </tr>
                            <tr className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                                <td className="py-3 px-4 text-gray-300">CryptoFan</td>
                                <td className="py-3 px-4 text-gray-500">Yesterday</td>
                                <td className="py-3 px-4 text-right font-medium text-emerald-400">+120</td>
                            </tr>
                             <tr className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                                <td className="py-3 px-4 text-gray-300">MikeT</td>
                                <td className="py-3 px-4 text-gray-500">Oct 20, 2025</td>
                                <td className="py-3 px-4 text-right font-medium text-emerald-400">+850</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Affiliates;