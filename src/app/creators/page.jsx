"use client";
import React, { useState } from 'react';
import { DollarSign, Tag, MonitorSmartphone, ShoppingCart, Users, ArrowRight, Check, X, Play, Rocket, Monitor, ListOrdered, ChevronRight, Zap, Mic } from 'lucide-react';
import { ASSETS, GlobalStyles, Header, Footer, RevealOnScroll, FeatureModal, FacebookSVG, RedditSVG, PatreonSVG, DiscordSVG, WordpressSVG, UserBrushSVG, ScratchSVG } from '../../components/SharedUI';

export default function CreatorsPage() {
  const [pricingInterval, setPricingInterval] = useState('yearly');
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
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#0a0a0a] min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-hidden">
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
          
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto w-full pb-20">
            <RevealOnScroll animation="zoom-in">
              <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full border border-gray-700 bg-black/60 backdrop-blur-md shadow-lg mb-6">
                <Zap size={14} className="text-[#a3e635] fill-[#a3e635]" /> 
                <span className="text-white text-xs font-bold uppercase tracking-widest">Attention Content Creators</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-lg">
                MAKE COMMUNITY.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-green-400">MAKE MONEY.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Give your fans exclusive access, simplify how they connect with you, and enjoy tools designed specifically for your success.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* COMPARISON SECTION - Uses gradient from transparent to #050505 and pulls up over the video fade */}
        <section className="relative z-20 -mt-40 pt-10 pb-24 px-6 bg-gradient-to-b from-transparent via-[#050505] to-[#050505]">
          <div className="max-w-6xl mx-auto relative z-10">
            <RevealOnScroll className="mb-16 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                EVERYTHING YOU NEED<br/>
                <span className="text-[#a3e635]">IN A SINGLE APP.</span>
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <RevealOnScroll delay={0} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#1877F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#1877F2]"><FacebookSVG size={40} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Facebook</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[70%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium max-w-xl leading-relaxed mb-6">
                  Avoid all the politics, Crossfit workouts, advertisements, and other bullsh*t that annoys you on other social media platforms.
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <span className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                    Why Facebook is Lame <ArrowRight size={14} />
                  </span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF4500]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D93A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#FF4500]"><RedditSVG size={48} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Reddit</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[70%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
                  Tired of the trolls and no way to be rewarded for all your hard work? Get the same sense of community but with added benefits suited specifically to your needs.
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <span className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                    See why to punt Reddit <ArrowRight size={14} />
                  </span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF424D]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF424D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#FF424D]"><PatreonSVG size={40} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Patreon</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[70%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
                  "Thanks for joining us on this platform. Now go download another app to interact with your community and monetize it on the same platform!" Uh, no thanks! Create your community and monetize it on the same platform!
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <span className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                    See what Patreon is missing <ArrowRight size={14} />
                  </span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#5865F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#5865F2]"><DiscordSVG size={40} /></div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Discord</h3>
                  <UserBrushSVG className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[70%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
                  What the F*$% is Discord?! Stop confusing your fans by setting up Spaces or 1-on-1 message without ever leaving the site or having to download and learn a separate (confusing) app.
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <span className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                    See why Discord sucks <ArrowRight size={14} />
                  </span>
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        <section className="py-32 px-6 text-center relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#a3e635]/5 -skew-y-6 transform-gpu"></div>
          
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white relative z-10">
              TIME TO UP YOUR GAME
            </h2>
            <p className="text-gray-400 mb-20 font-medium text-xl relative z-10">Sell admission to your Crowd and start earning.</p>
          </RevealOnScroll>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { 
                icon: <DollarSign />, 
                title: "Monetize", 
                desc: "Create a paywall for your fans to gain access to you and your expertise.", 
                detailedDesc: "Turn your passion into profit. Set your own monthly or annual subscription prices and keep the lion's share of your revenue.",
                delay: 0 
              },
              { 
                icon: <Tag />, 
                title: "Exclusive Content", 
                desc: "Post exclusive content within your Crowd so that only your fans can view it!", 
                detailedDesc: "Creators can post articles, videos, and podcasts to their Crowds and Spaces. You decide how you want to customize your community and how access is controlled to your content!",
                delay: 100 
              },
              { 
                icon: <ShoppingCart />, 
                title: "Sell Stuff", 
                desc: "Utilize the marketplace to sell your merchandise.", 
                detailedDesc: "Launch your own digital storefront within your Crowd. Sell merchandise, draft guides, or custom shoutouts with zero hassle.",
                soon: true, 
                delay: 200 
              },
              { 
                icon: <MonitorSmartphone />, 
                title: "Ad Space", 
                desc: "Leverage your audience and sell ad space within your Crowd.", 
                detailedDesc: "You own your audience. Partner with relevant brands and feature their advertisements directly in your feed, keeping 100% of the ad revenue.",
                delay: 300 
              }
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={item.delay}>
                <div className="glass-panel p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 border border-white/10 hover:border-[#a3e635]/50 group h-full flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#a3e635] group-hover:text-black text-white transition-all duration-500 transform group-hover:rotate-12 shadow-xl">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <h4 className="font-black text-xl mb-3 tracking-tight text-white">{item.title}</h4>
                  {item.soon && <span className="inline-block text-[10px] font-black uppercase tracking-widest text-black bg-[#a3e635] px-2.5 py-1 rounded-sm mb-4 shadow-sm">Coming Soon</span>}
                  <p className="text-gray-400 text-sm font-medium leading-relaxed flex-1">{item.desc}</p>
                  <div className="flex flex-col items-center gap-3 mt-4 w-full">
                    {item.detailedDesc && (
                      <button 
                        onClick={(e) => { e.preventDefault(); onOpenModal(item); }}
                        className="text-[#a3e635] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:text-white transition-colors"
                      >
                        Learn More <ChevronRight size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center">
          <div 
            className="absolute inset-0 bg-fixed bg-center bg-cover opacity-60 filter grayscale mix-blend-luminosity"
            style={{ backgroundImage: `url('https://beasellout.com/wp-content/uploads/2025/04/wepik-202159-213820.jpeg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <RevealOnScroll>
              <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black uppercase tracking-tighter leading-[0.9] text-[#a3e635] mb-4 drop-shadow-2xl">
                WE'RE<br/>ROOTING<br/>FOR YOU!
              </h2>
              <p className="text-white font-black uppercase tracking-widest text-sm md:text-xl drop-shadow-md">
                WE ARE YOUR TEAMMATE
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
          <RevealOnScroll className="mb-16">
            <h2 className="text-[#a3e635] text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 drop-shadow-md">
              MORE FEATURES TO HELP YOU WIN
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users size={24} color="currentColor" />, title: "Niche Audience", desc: "This is a platform for sports fans, which means they are all your target audience! You don't have to try to get noticed through all those dance challenges." },
              { icon: <Play size={24} color="currentColor" fill="currentColor" />, title: "Automatic Video Sync", desc: "Automatically sync your YouTube videos to your Crowd. No need to post twice." },
              { icon: <WordpressSVG size={28} className="text-currentColor" />, title: "Post from WordPress", desc: "Install our WordPress plugin to post articles directly from your WordPress site, saving you precious time." },
              { icon: <Mic size={24} color="currentColor" />, title: "Embed Podcasts", desc: "Embed all your podcasts so all your fans can listen and converse. (Coming Soon)" },
              { icon: <DollarSign size={24} color="currentColor" />, title: "Keep Your Money", desc: "No cash out requests or minimum payouts. Connect your Stripe account and take direct payments from your fans!" },
              { icon: <Monitor size={24} color="currentColor" />, title: "Website", desc: "Use Sellout Crowds as your website! Post articles, videos and podcasts for your fans!" },
              { icon: <Rocket size={24} color="currentColor" />, title: "Flexible Pricing", desc: "We offer multiple pricing plans so you can choose what works for you. Change your plan as your Crowd grows!" },
              { icon: <Users size={24} color="currentColor" />, title: "Add Existing Subscribers", desc: "Give access to your existing WordPress subscribers. (Coming Soon)" },
              { icon: <ListOrdered size={24} color="currentColor" />, title: "Challenge Your Fans", desc: "Encourage your fans to be active and climb your Crowd's leaderboard." }
            ].map((feat, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <div className="bg-[#111] border border-gray-800 hover:border-gray-600 rounded-2xl p-6 transition-all duration-300 flex items-start gap-4 group hover:-translate-y-1 shadow-lg text-left h-full">
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-700 group-hover:border-[#a3e635] group-hover:text-[#a3e635] text-gray-400 transition-colors shadow-inner">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black tracking-tight mb-2 text-white group-hover:text-[#a3e635] transition-colors">{feat.title}</h4>
                    <p className="text-[13px] text-gray-400 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="relative py-32 px-6 overflow-hidden">
          <div 
            className="absolute inset-0 bg-fixed bg-center bg-cover opacity-40 filter grayscale mix-blend-luminosity"
            style={{ backgroundImage: `url('https://beasellout.com/wp-content/uploads/2026/01/Super-Bowl-American-Football-Concept-scaled.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/50 to-[#111] z-0"></div>
          
          <RevealOnScroll delay={100} className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black uppercase text-white mb-4 drop-shadow-md">The Game Plan</h3>
            <p className="text-lg font-medium mb-8 text-gray-300">Want to see our roadmap and even suggest more features for the platform?</p>
            <a href="#" className="bg-[#a3e635] text-black px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(163,230,53,0.4)] flex items-center gap-2 hover:-translate-y-1">
              View Game Plan <ArrowRight size={18}/>
            </a>
          </RevealOnScroll>
        </section>

        <section className="bg-[#111] py-24 px-4 text-center max-w-7xl mx-auto relative shadow-2xl">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
              YOUR FANS ARE WAITING
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-medium text-sm md:text-base">
              Build your Crowd. Build your income. Choose the plan that gives you the tools to grow, engage, and monetize your fans.
            </p>
            <div className="inline-block bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/50 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest mb-12 shadow-sm">
              Commit for a year and save 14-33%
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex justify-center items-center gap-2 mb-12 bg-gray-900 p-1.5 rounded-full inline-flex border border-gray-800">
              <button 
                onClick={() => setPricingInterval('yearly')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${pricingInterval === 'yearly' ? 'bg-[#a3e635] text-black shadow-md' : 'text-gray-500 hover:text-white'}`}
              >
                Yearly
              </button>
              <button 
                onClick={() => setPricingInterval('monthly')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${pricingInterval === 'monthly' ? 'bg-[#a3e635] text-black shadow-md' : 'text-gray-500 hover:text-white'}`}
              >
                Monthly
              </button>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left relative z-10">
            
            <RevealOnScroll delay={0} className="relative z-20 transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a3e635] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md whitespace-nowrap z-30">
                Most Valuable
              </div>
              <div className="bg-[#1a1a1a] border-2 border-[#a3e635] rounded-2xl p-6 flex flex-col h-full shadow-[0_10px_30px_rgba(163,230,53,0.1)] relative overflow-hidden">
                <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">H.O.F.</h3>
                <div className="text-4xl font-black text-[#a3e635] mb-6 flex items-baseline">
                  ${pricingInterval === 'yearly' ? '85' : '100'}
                  <span className="text-xs text-gray-500 font-medium ml-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-2 flex-1">
                  {[
                    "Brand Badge", "Unlimited Crowds", "6% commissions", "Place Ads in Crowd", "WordPress Plugin", "YouTube Auto-Import", "Sell on marketplace", "Onboarding setup"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-300">
                      <Check size={14} className="text-[#a3e635] shrink-0 mt-0.5 font-bold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-all">
                <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">All-Star</h3>
                <div className="text-3xl font-black text-white mb-6 flex items-baseline">
                  ${pricingInterval === 'yearly' ? '42' : '50'}
                  <span className="text-xs text-gray-500 font-medium ml-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-2 flex-1">
                  {[
                    "Brand Badge", "Unlimited Crowds", "8% commissions", "Place Ads in Crowd", "WordPress Plugin", "YouTube Auto-Import", "Sell on marketplace", "Onboarding setup"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-400">
                      <Check size={14} className="text-white shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-all">
                <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">Rookie</h3>
                <div className="text-3xl font-black text-white mb-6 flex items-baseline">
                  ${pricingInterval === 'yearly' ? '16' : '19'}
                  <span className="text-xs text-gray-500 font-medium ml-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-2 flex-1">
                  {[
                    {text: "Brand Badge", available: true},
                    {text: "Unlimited Crowds", available: true},
                    {text: "10% commissions", available: true},
                    {text: "Place Ads in Crowd", available: false},
                    {text: "WordPress Plugin", available: false},
                    {text: "YouTube Auto-Import", available: false},
                  ].map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 text-xs font-medium ${!feature.available ? 'text-gray-600 opacity-60' : 'text-gray-400'}`}>
                      <div className="shrink-0 mt-0.5">
                        {feature.available ? <Check size={14} className="text-white"/> : <X size={14} className="text-gray-600"/>}
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-all">
                <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">Teammate</h3>
                <div className="text-3xl font-black text-white mb-6 flex items-baseline">
                  $2
                  <span className="text-xs text-gray-500 font-medium ml-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-2 flex-1">
                  {[
                    {text: "Brand Badge", available: true},
                    {text: "Post Content", available: true},
                    {text: "No Crowds", available: false},
                    {text: "No Monetization", available: false},
                    {text: "No Tools", available: false}
                  ].map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 text-xs font-medium ${!feature.available ? 'text-gray-600 opacity-60' : 'text-gray-400'}`}>
                      <div className="shrink-0 mt-0.5">
                        {feature.available ? <Check size={14} className="text-white"/> : <X size={14} className="text-gray-600"/>}
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

          </div>

          <RevealOnScroll delay={400} className="mt-12 flex justify-center relative z-10">
            <a 
              href="https://www.selloutcrowds.com/create-crowd-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a3e635] text-black px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_30px_rgba(163,230,53,0.6)] flex items-center gap-2 hover:-translate-y-1"
            >
              Build Your Crowd <ArrowRight size={18}/>
            </a>
          </RevealOnScroll>
        </section>
      </main>

      <Footer />
      <FeatureModal feature={activeModalFeature} onClose={() => setActiveModalFeature(null)} />
    </div>
  );
}