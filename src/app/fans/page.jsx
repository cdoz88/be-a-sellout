"use client";
import React, { useState } from 'react';
import { Star, Trophy, Grid, ShoppingCart, Newspaper, RefreshCw, Users, ArrowRight, ChevronRight, LayoutList, MessageSquare } from 'lucide-react';
import { ASSETS, GlobalStyles, Header, Footer, RevealOnScroll, FeatureModal, FacebookSVG, RedditSVG, PatreonSVG, DiscordSVG, UserBrushSVG } from '../../components/SharedUI';

export default function FansPage() {
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      <GlobalStyles />
      <Header />
      
      <main className="flex-1 w-full relative">
        <section className="relative w-full pt-24 pb-48 flex items-center justify-center overflow-hidden min-h-[70vh] md:min-h-[80vh]" onMouseMove={handleMouseMove}>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 transition-transform duration-200 ease-out" style={{ transform: `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)` }}>
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          
          {/* Base darkening */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Smooth gradient fade to #050505 at the bottom */}
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

        {/* COMPARISON SECTION - Uses gradient from transparent to #050505 and pulls up over the video fade */}
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
                <div className="relative z-10 mb-6 text-[#1877F2]"><FacebookSVG size={40} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Ditch the Noise.</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium max-w-xl leading-relaxed">
                  Avoid the politics, algorithms, and random advertisements that clog up your feed. Just sports.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF4500]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D93A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#FF4500]"><RedditSVG size={48} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Lose the Trolls.</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                  Real sports talk with real fanatics. Get the same sense of community, but strictly with people who actually know the game.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF424D]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF424D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#FF424D]"><PatreonSVG size={40} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Stop the Hop.</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                  Patreon is great for taking your money, but terrible for community. Stop jumping between 3 different apps to connect.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#5865F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#5865F2]"><DiscordSVG size={40} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">End the Confusion.</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                  What the F*$% is Discord?! Clean, simple, and built for sports. No more messy servers or weird channels.
                </p>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        <section className="py-8 bg-[#a3e635] overflow-hidden">
          <div className="animate-marquee gap-6 items-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-6 items-center shrink-0 justify-around whitespace-nowrap text-black">
                <span className="text-2xl md:text-3xl font-black tracking-tighter">SOCCER</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">FOOTBALL</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">BASKETBALL</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">BASEBALL</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">HOCKEY</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">GOLF</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">RACING</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">TENNIS</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">RUGBY</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">CRICKET</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">NCAA</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">COMBAT</span>
                <span className="text-xl font-bold opacity-50">///</span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">FANTASY</span>
                <span className="text-xl font-bold opacity-50">///</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 max-w-6xl mx-auto overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <RevealOnScroll animation="fade-right" className="lg:w-5/12 text-center lg:text-left relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#a3e635]/10 rounded-full blur-[60px] -z-10 animate-pulse"></div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#a3e635] border border-[#a3e635] rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.4)] transform -rotate-6 mb-6 hover:rotate-0 transition-transform duration-300">
                <LayoutList size={32} className="text-black" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-gray-100 leading-tight">
                YOUR CUSTOM<br/>FANFEED
              </h2>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
                Forget algorithms feeding you rage bait. Your FanFeed will <strong className="text-gray-300">only</strong> show the leagues, teams, and creators that you follow. Period.
              </p>
            </RevealOnScroll>

            <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 relative z-10">
              {[
                { 
                  icon: <Star />, 
                  title: "Exclusive Content", 
                  desc: "Access premium content from creators.", 
                  detailedDesc: "Creators can post articles, videos, and podcasts to their Crowds and Spaces. You decide how you want to customize your community and how access is controlled to your content!",
                  delay: 0 
                },
                { 
                  icon: <Trophy />, 
                  title: "Leaderboard", 
                  desc: "Compete as the top sports fanatic!", 
                  detailedDesc: "Every interaction, post, and correct prediction earns you points. Climb the ranks and show everyone who the ultimate sports fanatic really is!",
                  delay: 100 
                },
                { 
                  icon: <Grid />, 
                  title: "Live Scoreboard", 
                  desc: "Track the game while hanging out.", 
                  detailedDesc: "No need to app-switch. Keep track of live scores and play-by-play action natively while you chat with your community.",
                  delay: 200 
                },
                { 
                  icon: <ShoppingCart />, 
                  title: "Merch & Gear", 
                  desc: "Shop brand marketplaces for cool merch.", 
                  detailedDesc: "Support your favorite creators by purchasing their custom merchandise directly through their FanFeed. Secure, fast, and built-in.",
                  soon: true, 
                  delay: 300 
                }
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={item.delay} animation="fade-up">
                  <div className="bg-[#111] border border-gray-800 p-5 rounded-2xl shadow-md hover:border-[#a3e635]/40 transition-colors duration-300 group h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 shrink-0 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:bg-[#a3e635]/10 group-hover:text-[#a3e635] text-gray-500 transition-colors duration-300">
                        {React.cloneElement(item.icon, { size: 18 })}
                      </div>
                      <h4 className="text-base font-black tracking-tight text-gray-200 leading-tight group-hover:text-white transition-colors">{item.title}</h4>
                    </div>
                    {item.soon && <span className="inline-block text-[9px] font-black uppercase tracking-widest text-black bg-[#a3e635] px-2 py-1 rounded-sm self-start mb-2 shadow-sm">Coming Soon</span>}
                    <p className="text-gray-500 text-xs leading-relaxed font-medium flex-1 w-full">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-end mt-3 w-full">
                      {item.detailedDesc && (
                        <button 
                          onClick={(e) => { e.preventDefault(); setActiveModalFeature(item); }}
                          className="text-[#a3e635] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:text-white transition-colors w-fit"
                        >
                          Learn More <ChevronRight size={12} />
                        </button>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
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