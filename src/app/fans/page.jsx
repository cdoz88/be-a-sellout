"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, Trophy, Grid, ShoppingCart, Newspaper, RefreshCw, Users, 
  ChevronRight, LayoutList, MessageSquare 
} from 'lucide-react';
import { ASSETS, GlobalStyles, Header, Footer, RevealOnScroll, FeatureModal, FacebookSVG, RedditSVG, PatreonSVG, DiscordSVG, ScratchSVG } from '../../components/SharedUI';
import SportsTicker from '../../components/SportsTicker';

const FEATURES = [
  { 
    icon: <LayoutList />, 
    title: "Your Custom Fanfeed", 
    desc: "Forget algorithms feeding you rage bait. Your FanFeed will only show the leagues, teams, and creators that you follow. Period.", 
    mockup: "https://admin.beasellout.com/wp-content/uploads/2026/04/FanFeed-scaled-e1777003279289.webp",
  },
  { 
    icon: <Star />, 
    title: "Exclusive Content", 
    desc: "Join Crowds and Spaces to gain access to exclusive articles, videos, and podcasts posted by your favorite creators.", 
    mockup: "https://admin.beasellout.com/wp-content/uploads/2026/04/Content-Screens.webp",
  },
  { 
    icon: <Grid />, 
    title: "Live Scoreboard", 
    desc: "No need to app-switch. Keep track of live scores and play-by-play action while you chat about your favorite team.", 
    mockup: "https://admin.beasellout.com/wp-content/uploads/2026/04/Live-Scoreboard-e1777003245301.webp",
  },
  { 
    icon: <Trophy />, 
    title: "Leaderboard", 
    desc: "Every interaction, post, and vote on a poll earns you points. Climb the ranks and show everyone who the ultimate sports fanatic really is!", 
    mockup: "https://admin.beasellout.com/wp-content/uploads/2026/04/Leaderboard-tilted.webp",
  },
  { 
    icon: <ShoppingCart />, 
    title: "Merch & Gear", 
    desc: "Support your favorite creators by purchasing their products, custom merchandise, and more directly through their Crowd. Everything you need without leaving the site!", 
    mockup: "https://admin.beasellout.com/wp-content/uploads/2026/04/Marketplace-scaled.webp", 
    soon: true, 
  }
];

export default function FansPage() {
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const stickyContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    }
  };

  // Sticky Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!stickyContainerRef.current) return;
      
      const { top, bottom, height } = stickyContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Before reaching the container
      if (top > 0) {
        setActiveFeatureIndex(0);
        return;
      }

      // After passing the container
      if (bottom < windowHeight) {
        setActiveFeatureIndex(FEATURES.length - 1);
        return;
      }

      // Calculate the progress through the sticky wrapper
      const scrollDistance = -top;
      const maxScroll = height - windowHeight;
      
      let progress = scrollDistance / maxScroll;
      progress = Math.max(0, Math.min(1, progress));
      
      // Determine which feature should be active based on scroll progress
      const index = Math.min(Math.floor(progress * FEATURES.length), FEATURES.length - 1);
      setActiveFeatureIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-clip animate-in fade-in duration-500">
      <GlobalStyles />
      <Header />
      
      <main className="flex-1 w-full relative">
        <section className="relative w-full pt-24 pb-48 flex items-center justify-center overflow-hidden min-h-[70vh] md:min-h-[80vh]" onMouseMove={handleMouseMove}>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 transition-transform duration-200 ease-out" style={{ transform: `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)` }}>
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#a3e635]/10 rounded-full blur-[100px] mix-blend-screen animate-pulse pointer-events-none"></div>

          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto w-full pb-20">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#a3e635]/20 bg-black/60 backdrop-blur-sm shadow-sm mb-6">
                <span className="text-[#a3e635] text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-ping"></span> The Fan Zone
                </span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100} animation="zoom-in">
              <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9] drop-shadow-xl mb-6">
                ALL SPORTS.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a3e635] to-white bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  ALL THE TIME.
                </span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Sellout Crowds is the only social platform 100% dedicated to sports. Escape the noise and find your crowd.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="relative z-20 -mt-40 pt-10 pb-24 px-6 bg-gradient-to-b from-transparent via-[#050505] to-[#050505]">
          <div className="max-w-6xl mx-auto relative z-10">
            <RevealOnScroll className="mb-16 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                THE ULTIMATE<br/>
                <span className="text-[#a3e635]">SPORTS HUB.</span>
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <RevealOnScroll delay={0} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#1877F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 mb-6 w-fit text-[#1877F2]">
                  <FacebookSVG size={40} />
                  {/* Scratch over icon */}
                  <ScratchSVG className="absolute top-1/2 left-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 h-[12px] md:h-[12px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>

                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Ditch the Noise.</h3>
                </div>
                
                <p className="relative z-10 text-base md:text-lg text-gray-400 font-medium max-w-xl leading-relaxed">
                  Avoid all the politics, Crossfit workouts, thirst traps, and other bullsh*t that annoys you on other social media platforms.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF4500]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D93A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 mb-6 w-fit text-[#FF4500]">
                  <RedditSVG size={48} />
                  {/* Scratch over icon */}
                  <ScratchSVG className="absolute top-1/2 left-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 h-[12px] md:h-[16px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>

                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Lose the Trolls.</h3>
                </div>
                
                <p className="relative z-10 text-base md:text-lg text-gray-400 font-medium leading-relaxed">
                Tired of the trolls and the "wall of text" layout? Get an improved sense of community with added benefits of being 100% sports centric.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF424D]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF424D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 mb-6 w-fit text-[#FF424D]">
                  <PatreonSVG size={40} />
                  {/* Scratch over icon */}
                  <ScratchSVG className="absolute top-1/2 left-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 h-[12px] md:h-[16px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>

                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Stop the Hop.</h3>
                </div>
                
                <p className="relative z-10 text-base md:text-lg text-gray-400 font-medium leading-relaxed">
                  Patreon is great for taking your money, but terrible for community. Stop jumping between 3 different apps to connect with others.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#5865F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 mb-6 w-fit text-[#5865F2]">
                  <DiscordSVG size={40} />
                  {/* Scratch over icon */}
                  <ScratchSVG className="absolute top-1/2 left-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 h-[12px] md:h-[16px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>

                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">End the Confusion.</h3>
                </div>
                
                <p className="relative z-10 text-base md:text-lg text-gray-400 font-medium leading-relaxed">
                  What the F*$% is Discord?! Forget about it and don't waste your time. Keep it clean and simple with no more messy servers or weird channels.
                </p>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        {/* LED DIGITAL TICKER SECTION */}
        <SportsTicker />

        {/* --- UPGRADED PINNED/STICKY SCROLL SECTION --- */}
        <section 
          ref={stickyContainerRef} 
          className="relative w-full h-[500vh] bg-[#050505]" // 5 items = 500vh for a comfortable scroll distance
        >
          <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center pt-16 pb-8 px-4">
             {/* Background glow that follows active index */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a3e635]/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000"></div>

             <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
                
                {/* LEFT SIDE: Pre-rendered Phone Mockups (Swaps on scroll) */}
                <div className="w-full md:w-1/2 flex justify-center items-center relative h-[45vh] md:h-[70vh]">
                   {FEATURES.map((item, index) => (
                      <div 
                        key={`mockup-${index}`}
                        className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center
                          ${activeFeatureIndex === index ? 'opacity-100 translate-y-0 scale-100 z-20' : 
                            activeFeatureIndex > index ? 'opacity-0 -translate-y-16 scale-95 z-0' : 'opacity-0 translate-y-16 scale-95 z-0'
                          }`}
                      >
                         <div className="relative h-full flex items-center justify-center w-full max-w-[320px] md:max-w-[400px]">
                            {/* Soft glow behind the mockup */}
                            <div className="absolute inset-0 bg-[#a3e635]/10 blur-[50px] transform scale-90 -z-10"></div>
                            {item.mockup && (
                               <img 
                                 src={item.mockup} 
                                 alt={item.title} 
                                 className="h-[95%] md:h-full w-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]" 
                               />
                            )}
                         </div>
                      </div>
                   ))}
                </div>

                {/* RIGHT SIDE: Text & Icons (Swaps on scroll) */}
                <div className="w-full md:w-1/2 relative h-[35vh] md:h-[50vh] flex flex-col justify-center">
                   {FEATURES.map((item, index) => (
                      <div 
                        key={`text-${index}`}
                        className={`absolute inset-x-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-center text-center md:text-left
                          ${activeFeatureIndex === index ? 'opacity-100 translate-y-0' : 
                            activeFeatureIndex > index ? 'opacity-0 -translate-y-12' : 'opacity-0 translate-y-12'
                          }`}
                      >
                        <div className="w-16 h-16 shrink-0 bg-[#111] border border-gray-800 rounded-2xl flex items-center justify-center text-[#a3e635] shadow-lg mb-6 mx-auto md:mx-0">
                          {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white leading-[0.9]">
                          {item.title}
                        </h2>
                        
                        {item.soon && (
                          <div className="mb-4">
                            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-black bg-[#a3e635] px-3 py-1 rounded-full shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                              Coming Soon
                            </span>
                          </div>
                        )}
                        
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                          {item.desc}
                        </p>
                      </div>
                   ))}
                </div>

             </div>

             {/* Sticky Progress Indicator (Dots) */}
             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
               {FEATURES.map((_, index) => (
                 <div 
                   key={`dot-${index}`}
                   className={`h-2 rounded-full transition-all duration-500 ${
                     activeFeatureIndex === index ? 'w-8 bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.8)]' : 'w-2 bg-gray-700 hover:bg-gray-500'
                   }`}
                 ></div>
               ))}
             </div>
          </div>
        </section>

        <section className="relative w-full py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-60 transform hover:scale-105 transition-transform duration-[10s]">
             <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale" alt="Stadium" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-[#0a0a0a]/10"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <RevealOnScroll>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-[#a3e635] drop-shadow-xl">
                REAL<br/><span className="text-white">AND</span><br/>FANTASY<br/>SPORTS
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <RevealOnScroll delay={100} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#a3e635] flex items-center justify-center mb-4 shadow-sm shrink-0">
                  <Newspaper size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-black uppercase mb-2 tracking-tight text-white">League Classifieds</h4>
                <div className="inline-block px-2 py-1 bg-[#a3e635] rounded-sm font-black text-[9px] text-black uppercase tracking-widest mb-3 self-start shadow-sm">Coming Soon</div>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Post openings in your leagues and fill slots quickly with dedicated fans.</p>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#a3e635] flex items-center justify-center mb-4 shadow-sm shrink-0">
                  <RefreshCw size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-black uppercase mb-5 tracking-tight text-white">League Sync</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Sync your leagues to the scoreboard and track all your matchups in one place.</p>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#a3e635] flex items-center justify-center mb-4 shadow-sm shrink-0">
                  <MessageSquare size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-black uppercase mb-5 tracking-tight text-white">Get Advice</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Ask other players for advice and even poll the audience for quick decisions.</p>
              </RevealOnScroll>

              <RevealOnScroll delay={400} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#a3e635] flex items-center justify-center mb-4 shadow-sm shrink-0">
                  <Users size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-black uppercase mb-5 tracking-tight text-white">Follow Creators</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">To gain valuable insights to win your league championship!</p>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FeatureModal feature={activeModalFeature} onClose={() => setActiveModalFeature(null)} />
    </div>
  );
}