import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const StatsSection: React.FC = () => {
  // Initial state with the values from the design
  const [users, setUsers] = useState(525455);
  const [tasks, setTasks] = useState(2161385);
  const [earned, setEarned] = useState(4997596);

  useEffect(() => {
    // Simulate real-time user growth (slower)
    const userInterval = setInterval(() => {
      setUsers(prev => prev + 1);
    }, 4500);

    // Simulate real-time task completion (faster)
    const taskInterval = setInterval(() => {
      setTasks(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);

    // Simulate real-time earnings (constant flow)
    const earnedInterval = setInterval(() => {
      setEarned(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 1500);

    return () => {
      clearInterval(userInterval);
      clearInterval(taskInterval);
      clearInterval(earnedInterval);
    };
  }, []);

  return (
    <section className="bg-background py-16 sm:py-24 border-t border-gray-800/20 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Join The EarnLeaf Success Story
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={100}>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            Be part of our growing community and start earning effortlessly. See how thousands are turning simple tasks into real money.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Vertical dividers for desktop */}
          <div className="hidden md:block absolute top-1/4 bottom-1/4 left-1/3 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
          <div className="hidden md:block absolute top-1/4 bottom-1/4 right-1/3 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>

          <FadeIn delay={200} className="w-full">
            <div className="flex flex-col items-center p-4 hover:bg-white/5 rounded-2xl transition-colors duration-300">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-400 mb-2 font-mono tracking-tight tabular-nums drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                {users.toLocaleString()}
              </span>
              <span className="text-white font-semibold text-lg">Total Users</span>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="w-full">
            <div className="flex flex-col items-center p-4 hover:bg-white/5 rounded-2xl transition-colors duration-300">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-400 mb-2 font-mono tracking-tight tabular-nums drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                {tasks.toLocaleString()}
              </span>
              <span className="text-white font-semibold text-lg">Tasks Completed</span>
            </div>
          </FadeIn>

          <FadeIn delay={400} className="w-full">
            <div className="flex flex-col items-center p-4 hover:bg-white/5 rounded-2xl transition-colors duration-300">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-400 mb-2 font-mono tracking-tight tabular-nums drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                ${earned.toLocaleString()}
              </span>
              <span className="text-white font-semibold text-lg">Total Earned</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={500} className="mt-16">
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 px-12 rounded-xl transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 active:scale-95">
            Join Us
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default StatsSection;