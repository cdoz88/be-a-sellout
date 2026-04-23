"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, Check, TriangleAlert } from 'lucide-react';
import { GlobalStyles, Header, Footer, RevealOnScroll, DiscordSVG, ScratchSVG } from '../../../components/SharedUI';

export default function DiscordComparePage() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const comparisonData = [
    {
      label: "Discovery",
      discord: "Zero. No public feed. You must recruit every single member from Instagram or X.",
      discordStatus: "fail",
      sellout: "Built-In. Your content appears in public feeds, helping new fans find you automatically."
    },
    {
      label: "User Interface",
      discord: "Confusing. Complex channels, servers, and bots. Built for gamers, not sports fans.",
      discordStatus: "fail",
      sellout: "Familiar. A clean, social feed layout that your fans already know how to use."
    },
    {
      label: "Growth",
      discord: "Siloed. Your community lives on an island. You cannot share audiences easily.",
      discordStatus: "fail",
      sellout: "Shared. Interact with other communities in shared spaces to cross-pollinate and grow."
    },
    {
      label: "The App",
      discord: "Separate Download. You have to convince fans to download a \"gaming chat\" app.",
      discordStatus: "fail",
      sellout: "All-In-One. Fans are already here for the news and scores."
    },
    {
      label: "Monetization",
      discord: "Complicated. Often requires 3rd party bots (Patreon, etc.) to manage roles.",
      discordStatus: "warn",
      sellout: "Native. Subscriptions and exclusive content tools are built right into the platform."
    }
  ];

  const accordionData = [
    {
      title: "1. The \"Silo\" Problem (Growth vs. Isolation)",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Discord was built for privacy. It is fantastic if you want a secret clubhouse, but terrible if you want a growing business.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <DiscordSVG size={20} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-gray-300">Discord:</strong> To grow a Discord server, you have to be a marketing genius on other platforms (X, Instagram, YouTube) just to funnel people into your server. Once they are there, they are locked in a room with only you.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300"><strong className="text-white">Sellout Crowds:</strong> We are an open ecosystem. Your content lives in a shared "Public Arena." A fan might come for the football scores, see your hot take in the public feed, and join your community instantly. You grow just by being active.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "2. The Barrier to Entry (Gamers vs. Sports Fans)",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Let's be honest: Explaining Discord to a casual sports fan is a headache.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <DiscordSVG size={20} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-gray-300">Discord:</strong> "Download this app, create a username, find my server invite link, accept the rules, verify your email, figure out which 'channel' to talk in..." It's a lot of friction. Many of your potential fans simply give up before they even join.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300"><strong className="text-white">Sellout Crowds:</strong> It looks and feels like the social apps they use every day. There is no learning curve. They download the app, find your page, and they are in.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "3. One App to Rule Them All",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Why force your fans to bounce between three different apps just to follow you?</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <DiscordSVG size={20} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-gray-300">Discord:</strong> It is only a chat room. It isn't a news feed, it isn't a scoreboard, and it isn't a video player.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300"><strong className="text-white">Sellout Crowds:</strong> We combine the best parts of the stadium experience. Fans can check the live scores, watch your game breakdown video, and debate in your community thread—<strong className="text-white">all without leaving the app.</strong></span>
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
                <div className="absolute top-1/2 left-1/2 translate-x-[20%] md:translate-x-[50%] -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-[#5865F2]/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                <div className="relative z-10 group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#111] border border-gray-800 rounded-3xl shadow-lg p-5">
                   <div className="absolute inset-0 bg-[#a3e635]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-full h-full object-contain relative z-10" />
                </div>
                
                <div className="relative z-10 text-gray-600 font-black italic text-2xl md:text-4xl">VS.</div>

                <div className="relative z-10 group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#111] border border-gray-800 rounded-3xl shadow-lg">
                   <div className="absolute inset-0 bg-[#5865F2]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <DiscordSVG className="w-12 h-12 md:w-16 md:h-16 text-[#5865F2] opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>

             <h1 className="relative z-10 text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
               STOP HIDING YOUR COMMUNITY. START GROWING IT.
             </h1>
             <p className="relative z-10 text-lg md:text-xl font-medium text-gray-400 max-w-3xl mx-auto">
               Discord is a private room. <span className="text-white">Sellout Crowds is a packed stadium.</span> See why sports creators are making the switch.
             </p>
          </RevealOnScroll>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-32 relative z-0">
          <div className="hidden md:grid grid-cols-12 gap-6 mb-6 px-6 relative z-10 text-center">
             <div className="col-span-2"></div>
             <div className="col-span-5 border-b-2 border-[#5865F2] pb-4">
               <h3 className="text-2xl font-black uppercase text-white tracking-widest">Discord</h3>
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
                    <div className={`mt-1 shrink-0 p-1.5 rounded-full h-fit ${row.discordStatus === 'warn' ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}>
                      {row.discordStatus === 'warn' ? (
                        <TriangleAlert size={16} className="text-yellow-500" strokeWidth={3} />
                      ) : (
                        <X size={16} className="text-[#FF424D]" strokeWidth={3} />
                      )}
                    </div>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                      {row.discord}
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
           {/* UPDATED ADMIN URL */}
           <div 
             className="absolute inset-0 bg-center bg-cover bg-fixed opacity-20 filter grayscale mix-blend-luminosity pointer-events-none z-0"
             style={{ backgroundImage: `url('https://admin.beasellout.com/wp-content/uploads/2026/04/Cage.webp')` }}
           ></div>
           
           <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-0"></div>
           <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-0"></div>

           <div className="max-w-4xl mx-auto px-6 relative z-10">
              <RevealOnScroll>
                 <h2 className="text-3xl md:text-5xl font-black uppercase text-center text-white tracking-tighter mb-16">
                   WHY DISCORD IS HOLDING YOU BACK
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
           {/* UPDATED ADMIN URL */}
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
                Discord is great for chatting with your friends while you play video games. <strong className="text-white font-black">Sellout Crowds is built for building a sports business.</strong>
              </p>
              <p className="text-base md:text-lg text-white font-semibold mb-12 max-w-2xl mx-auto drop-shadow-sm">
                Don't force your fans to learn a new operating system just to talk sports. Give them a home field they actually understand.
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