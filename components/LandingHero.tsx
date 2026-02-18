import React from 'react';
import { Mail, ArrowRight, Gamepad2 } from 'lucide-react';
import FadeIn from './FadeIn';

const LandingHero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-purple-600 via-indigo-600 to-indigo-900 pt-24 pb-24 lg:pt-36 lg:pb-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
         <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
         {/* Floating Coins/Elements simulated with CSS circles */}
         <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full shadow-[0_0_10px_rgba(253,224,71,0.5)] animate-float"></div>
         <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-300 rounded-full shadow-[0_0_15px_rgba(253,224,71,0.5)] animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="text-center lg:text-left space-y-6">
            <FadeIn direction="left" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
                Earn rewards.<br />
                <span className="text-purple-200">Anywhere, Anytime.</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="left" delay={300}>
              <p className="text-lg sm:text-xl text-purple-100 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90">
                EarnLeaf makes earning money online easy and secure. Complete simple, engaging tasks tailored to your schedule and start earning rewards today.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={500}>
              <div className="pt-4 flex justify-center lg:justify-start">
                  <button 
                    className="bg-white text-purple-700 hover:bg-purple-50 font-bold py-4 px-10 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.3)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Signup Card */}
          <div className="flex justify-center lg:justify-end">
             <FadeIn direction="right" delay={200} className="w-full max-w-md">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-500">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Get Started!</h2>
                    <p className="text-purple-100 text-sm">It's free! Sign up and start to earn money!</p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-200 group-focus-within:text-white transition-colors" />
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full bg-indigo-950/40 border border-purple-300/30 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-indigo-950/60 transition-all"
                        />
                    </div>
                    
                    <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-emerald-950 font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-1 hover:shadow-emerald-500/20 active:scale-95">
                      Start Earning Now
                    </button>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-white/20"></div>
                        <span className="flex-shrink-0 mx-4 text-purple-200 text-sm">or</span>
                        <div className="flex-grow border-t border-white/20"></div>
                    </div>

                    <div className="space-y-3">
                        <button 
                          className="w-full bg-white text-gray-700 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 transform active:scale-95"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
                          Sign up via Google
                        </button>
                        <button className="w-full bg-[#1877F2] text-white font-semibold py-2.5 rounded-xl hover:bg-[#166fe5] transition-colors flex items-center justify-center gap-2 transform active:scale-95">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v2.225l-1.501.021c-1.97 0-2.3.006-2.3 2.239v2.775h4.92l-.642 3.667h-4.278v7.98H9.101Z"/></svg>
                          Sign up via Facebook
                        </button>
                        <button className="w-full bg-[#171a21] text-white font-semibold py-2.5 rounded-xl hover:bg-[#2a2e38] transition-colors flex items-center justify-center gap-2 transform active:scale-95">
                          <Gamepad2 className="w-5 h-5" />
                          Sign up via Steam
                        </button>
                    </div>
                  </div>
               </div>
             </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10">
        <svg className="relative block w-full h-[50px] sm:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-background"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-background"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-background"></path>
        </svg>
      </div>
    </div>
  );
};

export default LandingHero;