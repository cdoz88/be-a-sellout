"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, Check, TriangleAlert, ArrowRight } from 'lucide-react';
import { GlobalStyles, Header, Footer, RevealOnScroll, PatreonSVG, ScratchSVG } from '../../../components/SharedUI';

export default function PatreonComparePage() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const comparisonData = [
    {
      label: "The Experience",
      patreon: "Disjointed. \"Pay here, then go check your email for a Discord link, then create a Discord account...\" It's a hurdle that kills conversion.",
      patreonStatus: "fail",
      sellout: "Seamless. Fans subscribe, and the exclusive content unlocks instantly in the same feed. One app. No friction."
    },
    {
      label: "Community",
      patreon: "Outsourced. Patreon has no real community features. You are forced to build your clubhouse somewhere else (usually Discord).",
      patreonStatus: "warn",
      sellout: "Native. Your paid community lives right next to your content. Chat, polls, and groups are built in."
    },
    {
      label: "Getting Paid",
      patreon: "The Middleman. They hold your money until a specific payout date or threshold. You are waiting on them.",
      patreonStatus: "fail",
      sellout: "Direct Connection. Connect your own Stripe account. When a fan pays, the money goes to you. No minimums. No waiting."
    },
    {
      label: "Discovery",
      patreon: "Zero. You cannot \"browse\" Patreon to find new sports creators. You have to bring 100% of your own traffic.",
      patreonStatus: "fail",
      sellout: "Public Feed. New fans can find you in a public Crowd feed, then decide to join your Crowd."
    },
    {
      label: "The Content",
      patreon: "Hidden. It's a \"walled garden.\" Non-subscribers can't see the excitement inside, making it harder to sell.",
      patreonStatus: "warn",
      sellout: "Teaser-Ready. Mix free and paid content in one feed to show free users what they are missing."
    }
  ];

  const accordionData = [
    {
      title: "1. The \"App Juggling\" Act",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Patreon handles the transaction, but it doesn't handle the experience.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <PatreonSVG size={20} className="text-[#FF424D] shrink-0 mt-0.5" />
              <span className="text-gray-400">To run a community, you are forcing your fans to jump through hoops. They pay on Patreon, then have to download Discord, link their accounts, and hope the integration bot works. Every extra step is a chance for a fan to give up and cancel.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300">We eliminated the "Digital Commute." Your payment gateway and your community hangout are in the same room. A fan subscribes and boom—they are in the VIP section immediately.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "2. Your Money, Your Terms (The Stripe Advantage)",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Why should a platform hold your hard-earned cash?</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <PatreonSVG size={20} className="text-[#FF424D] shrink-0 mt-0.5" />
              <span className="text-gray-400">They act as a bank, holding your funds in a "creator balance" until you hit a threshold or request a payout. It's your money, but it's on their schedule.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300">We treat you like a business owner. By connecting your personal Stripe account, the transaction happens directly between the fan and you. We don't hold your funds hostage. Better cash flow, fewer headaches.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "3. Growth vs. Maintenance",
      content: (
        <>
          <p className="mb-6 text-white font-semibold text-base">Patreon is a toll booth. Sellout Crowds is a highway.</p>
          <ul className="flex flex-col">
            <li className="flex items-start gap-3 pb-5 border-b border-gray-800/50 mb-5">
              <PatreonSVG size={20} className="text-[#FF424D] shrink-0 mt-0.5" />
              <span className="text-gray-400">It is strictly a tool to monetize the audience you already have. It does nothing to help you find new fans.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
              <span className="text-gray-300">We are a discovery engine. Because we are a social network first, you can grow your following organically through our sports feeds, and then convert those new followers into paying subscribers—all in the same ecosystem.</span>
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
                <div className="absolute top-1/2 left-1/2 translate-x-[20%] md:translate-x-[50%] -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-[#FF424D]/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                <div className="relative z-10 group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#111] border border-gray-800 rounded-3xl shadow-lg p-5">
                   <div className="absolute inset-0 bg-[#a3e635]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <img src="https://beasellout.com/wp-content/uploads/2025/04/Mark.png" alt="Sellout Crowds" className="w-full h-full object-contain relative z-10" />
                </div>
                
                <div className="relative z-10 text-gray-600 font-black italic text-2xl md:text-4xl">VS.</div>

                <div className="relative z-10 group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#111] border border-gray-800 rounded-3xl shadow-lg">
                   <div className="absolute inset-0 bg-[#FF424D]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <PatreonSVG className="w-12 h-12 md:w-16 md:h-16 text-[#FF424D] opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>

             <h1 className="relative z-10 text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
               STOP FRAGMENTING YOUR FANBASE.
             </h1>
             <p className="relative z-10 text-lg md:text-xl font-medium text-gray-400">
               Patreon is a payment processor. <span className="text-white">Sellout Crowds is a home for your community.</span>
             </p>
          </RevealOnScroll>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-32 relative z-0">
          <div className="hidden md:grid grid-cols-12 gap-6 mb-6 px-6 relative z-10 text-center">
             <div className="col-span-2"></div>
             <div className="col-span-5 border-b-2 border-[#FF424D] pb-4">
               <h3 className="text-2xl font-black uppercase text-white tracking-widest">Patreon</h3>
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
                    <div className={`mt-1 shrink-0 p-1.5 rounded-full h-fit ${row.patreonStatus === 'warn' ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}>
                      {row.patreonStatus === 'warn' ? (
                        <TriangleAlert size={16} className="text-yellow-500" strokeWidth={3} />
                      ) : (
                        <X size={16} className="text-red-500" strokeWidth={3} />
                      )}
                    </div>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                      {row.patreon}
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
                   WHY PATREON IS "OLD SCHOOL"
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
                Patreon is a ticket booth. <strong className="text-white font-black">Sellout Crowds is the entire stadium.</strong>
              </p>
              <p className="text-base md:text-lg text-white font-semibold mb-12 max-w-2xl mx-auto drop-shadow-sm">
                Stop asking your fans to manage two different accounts just to support you. Give them a single, seamless experience.
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