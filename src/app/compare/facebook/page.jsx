"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, Check, TriangleAlert } from 'lucide-react';
import { GlobalStyles, Header, Footer, RevealOnScroll, FacebookSVG, ScratchSVG } from '../../../components/SharedUI';

export default function FacebookComparePage() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const comparisonData = [
    {
      label: "The Feed",
      facebook: "\"Suggested For You.\" Your timeline is hijacked by random viral videos, ads, and pages you never followed.",
      facebookStatus: "fail",
      sellout: "100% Opt-In. You control the lineup. If you didn't follow it, you won't see it."
    },
    {
      label: "The Algorithm",
      facebook: "Rage-Bait. Prioritizes controversial topics, politics, and anger to keep users scrolling.",
      facebookStatus: "fail",
      sellout: "Sports-First. Prioritizes the games, teams, and creators the user actually follows."
    },
    {
      label: "Your Reach",
      facebook: "Throttled. You have to \"Pay to Play.\" Only a tiny fraction of your followers actually see your posts.",
      facebookStatus: "fail",
      sellout: "Unfiltered. If a fan follows you, they see your content. No hiding behind a paywall."
    },
    {
      label: "Monetization",
      facebook: "Nearly Impossible. Requires massive viral numbers to earn pennies. Links to outside stores are buried.",
      facebookStatus: "fail",
      sellout: "Direct. Built-in subscription tools allow you to monetize your true fans from Day 1."
    },
    {
      label: "The Audience",
      facebook: "Everyone & Bots. A mix of grandmas, political bots, and spam accounts.",
      facebookStatus: "warn",
      sellout: "Qualified Fans. 100% sports fans, bettors, and fantasy players."
    },
    {
      label: "The Vibe",
      facebook: "Toxic. Noise, politics, arguments, and distraction.",
      facebookStatus: "fail",
      sellout: "Stadium Energy. Passionate debate, highlights, and community."
    }
  ];

  const accordionData = [
    {
      title: "1. The \"Rage Farm\" vs. The Stadium",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Facebook's algorithm is designed to do one thing: keep people on the app by making them emotional. Usually, that means making them angry.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <FacebookSVG size={20} className="text-[#1877F2] shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-gray-300">Facebook:</strong> To go viral, you often have to post controversial "hot takes" that attract trolls and bots. It's a toxic environment where sports discussion gets drowned out by political arguments.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300"><strong className="text-white">Sellout Crowds:</strong> We built an arena, not a rage farm. Our community is here for the love of the game. The "noise" here is fans cheering and debating stats, not bots pushing agendas.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "2. Your Feed, Your Rules.",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">On most platforms, following someone is just a "suggestion" to the algorithm. On Sellout Crowds, it's a command.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <FacebookSVG size={20} className="text-[#1877F2] shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-gray-300">Facebook:</strong> You log in to see your friends or favorite creators, but instead, you are forced to scroll past "Suggested Posts," random viral videos, and ads for things you don't need. You are fighting the app just to see the content you actually signed up for.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300"><strong className="text-white">Sellout Crowds:</strong> Your FanFeed is sacred ground. It is populated only by the teams, sports, and creators you have explicitly chosen to follow. No surprise guests. No unwanted clutter. Just the game you love.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "3. The Monetization Trap",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">You create the content, but Mark Zuckerberg keeps the money.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <FacebookSVG size={20} className="text-[#1877F2] shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-gray-300">Facebook:</strong> Trying to monetize a Facebook Group or Page is a nightmare. They throttle your reach if you post links to your merch or Patreon, and their own monetization program pays pennies unless you have millions of views.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300"><strong className="text-white">Sellout Crowds:</strong> We believe the creator should get paid. With our "Charge Admission" features, you can offer premium content, exclusive groups, and subscriber badges directly to your audience without fear of being shadow-banned.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "4. Context Matters (The \"Grandma\" Factor)",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Sports content doesn't belong next to sad life updates and cat photos.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <FacebookSVG size={20} className="text-[#1877F2] shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-gray-300">Facebook:</strong> Your breakdown of the Quarterback's performance looks out of place sandwiched between a political rant from your uncle and an ad for toaster ovens. The context is wrong, which kills engagement.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300"><strong className="text-white">Sellout Crowds:</strong> Every user on our app is in the "Sports Mindset." They are there to consume highlights, read analysis, and talk trash. Your content fits perfectly every time.</span>
            </li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-gray-300 min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-hidden">
      <GlobalStyles />
      <Header />
      
      <main className="flex-1 w-full pt-32 pb-0">
        <section className="max-w-6xl mx-auto px-6 mb-24 text-center">
          <RevealOnScroll>
             <div className="relative flex items-center justify-center gap-6 md:gap-12 mb-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-[120%] md:-translate-x-[150%] -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-[#a3e635]/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 translate-x-[20%] md:translate-x-[50%] -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-[#1877F2]/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                <div className="relative z-10 group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#111] border border-gray-800 rounded-3xl shadow-lg p-5">
                   <div className="absolute inset-0 bg-[#a3e635]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-full h-full object-contain relative z-10" />
                </div>
                
                <div className="relative z-10 text-gray-600 font-black italic text-2xl md:text-4xl">VS.</div>

                <div className="relative z-10 group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#111] border border-gray-800 rounded-3xl shadow-lg">
                   <div className="absolute inset-0 bg-[#1877F2]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <FacebookSVG className="w-12 h-12 md:w-16 md:h-16 text-[#1877F2] opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>

             <h1 className="relative z-10 text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
               STOP FIGHTING THE ALGORITHM. START BUILDING A BUSINESS.
             </h1>
             <p className="relative z-10 text-lg md:text-xl font-medium text-gray-400">
               Facebook connects you with bots and angry relatives. <span className="text-white">Sellout Crowds connects you with sports fans.</span>
             </p>
          </RevealOnScroll>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-32 relative z-0">
          <div className="hidden md:grid grid-cols-12 gap-6 mb-6 px-6 relative z-10 text-center">
             <div className="col-span-2"></div>
             <div className="col-span-5 border-b-2 border-[#1877F2] pb-4">
               <h3 className="text-2xl font-black uppercase text-white tracking-widest">Facebook</h3>
             </div>
             <div className="col-span-5 border-b-2 border-[#a3e635] pb-4">
               <h3 className="text-2xl font-black uppercase text-white tracking-widest">Sellout Crowds</h3>
             </div>
          </div>

          <div className="space-y-4">
            {comparisonData.map((row, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition-colors shadow-md">
                  <div className="col-span-1 md:col-span-2 flex items-center md:justify-end md:pr-4">
                    <h4 className="text-base md:text-lg font-bold text-white whitespace-nowrap">{row.label}</h4>
                  </div>
                  
                  <div className="col-span-1 md:col-span-5 flex gap-4 pr-0 md:pr-4 border-b border-gray-800 md:border-b-0 pb-4 md:pb-0 md:border-r">
                    <div className={`mt-1 shrink-0 p-1.5 rounded-full h-fit ${row.facebookStatus === 'warn' ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}>
                      {row.facebookStatus === 'warn' ? (
                        <TriangleAlert size={16} className="text-yellow-500" strokeWidth={3} />
                      ) : (
                        <X size={16} className="text-red-500" strokeWidth={3} />
                      )}
                    </div>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                      {row.facebook}
                    </p>
                  </div>
                  
                  <div className="col-span-1 md:col-span-5 flex gap-4 pl-0 md:pl-4 pt-2 md:pt-0">
                    <div className="mt-1 shrink-0 bg-[#a3e635]/20 p-1.5 rounded-full h-fit">
                      <Check size={16} className="text-[#a3e635]" strokeWidth={3} />
                    </div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
                      {row.sellout}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="bg-[#0a0a0a] py-32 z-0 relative overflow-hidden">
           <div 
             className="absolute inset-0 bg-center bg-cover bg-fixed opacity-20 filter grayscale mix-blend-luminosity pointer-events-none z-0"
             style={{ backgroundImage: `url('https://admin.beasellout.com/wp-content/uploads/2026/04/Cage.webp')` }}
           ></div>
           
           <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-0"></div>
           <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-0"></div>

           <div className="max-w-4xl mx-auto px-6 relative z-10">
              <RevealOnScroll>
                 <h2 className="text-3xl md:text-5xl font-black uppercase text-center text-white tracking-tighter mb-16">
                   WHY FACEBOOK IS FAILING CREATORS
                 </h2>
              </RevealOnScroll>

              <div className="space-y-4">
                {accordionData.map((item, index) => (
                  <RevealOnScroll key={index} delay={index * 100}>
                    <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg">
                      <button 
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                      >
                        <h3 className={`text-lg md:text-xl font-bold transition-colors ${openAccordion === index ? 'text-[#a3e635]' : 'text-gray-300'}`}>
                          {item.title}
                        </h3>
                        <div className={`p-2 rounded-full border transition-all duration-300 ${openAccordion === index ? 'bg-[#a3e635]/10 border-[#a3e635] text-[#a3e635] rotate-180' : 'border-gray-700 text-gray-500 bg-transparent animate-pulse'}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>
                      
                      <div 
                        className={`transition-all duration-500 ease-in-out overflow-hidden`}
                        style={{ maxHeight: openAccordion === index ? '1000px' : '0px', opacity: openAccordion === index ? 1 : 0 }}
                      >
                        <div className="p-6 pt-0 border-t border-gray-800/50 text-gray-400 font-medium text-sm md:text-base leading-relaxed relative z-10">
                           {item.content}
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
           </div>
        </section>

        <section className="relative py-32 px-6 text-center overflow-hidden">
           <div 
             className="absolute inset-0 bg-bottom bg-cover"
             style={{ backgroundImage: `url('https://admin.beasellout.com/wp-content/uploads/2026/04/Green-Crowd-scaled-1.webp')` }}
           />
           <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-0"></div>
           <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-0"></div>
           
           <RevealOnScroll className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-1 drop-shadow-md">
                THE BOTTOM LINE
              </h2>
              
              <div className="flex justify-center mb-10">
                 <ScratchSVG className="w-48 md:w-64 h-[12px] md:h-[16px] [&_path]:!fill-black drop-shadow-sm" />
              </div>
              
              <p className="text-lg md:text-xl text-white font-bold mb-4 drop-shadow-sm">
                Facebook is for keeping up with people you went to high school with. <strong className="text-white font-black">Sellout Crowds is for building a sports empire.</strong>
              </p>
              <p className="text-base md:text-lg text-white font-semibold mb-12 max-w-2xl mx-auto drop-shadow-sm">
                Stop posting into the void. Move your community to a platform that actually wants you to succeed.
              </p>
              
              <a 
                href="https://www.selloutcrowds.com/create-crowd-profile" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-gray-900 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1"
              >
                BUILD YOUR COMMUNITY <ChevronRight size={18}/>
              </a>
           </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </div>
  );
}