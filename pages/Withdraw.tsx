import React from 'react';
import RewardSection from '../components/RewardSection';
import FadeIn from '../components/FadeIn';

const Withdraw: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-[#0b101d]">
      <RewardSection />
      
      {/* Additional Transaction Info Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeIn direction="up" delay={200}>
            <div className="bg-background-lighter border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-800 text-gray-500 text-sm">
                                <th className="pb-3 pl-2">Date</th>
                                <th className="pb-3">Method</th>
                                <th className="pb-3">Amount</th>
                                <th className="pb-3 text-right pr-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-gray-800/50">
                                <td className="py-4 pl-2 text-gray-400">Oct 24, 2025</td>
                                <td className="py-4 text-white">PayPal</td>
                                <td className="py-4 text-emerald-400">$5.00</td>
                                <td className="py-4 text-right pr-2"><span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Completed</span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pl-2 text-gray-400">Oct 12, 2025</td>
                                <td className="py-4 text-white">Bitcoin</td>
                                <td className="py-4 text-emerald-400">$10.00</td>
                                <td className="py-4 text-right pr-2"><span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Completed</span></td>
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

export default Withdraw;