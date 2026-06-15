"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Trophy, Globe, Users, Star, ArrowRight, ChevronRight, Zap, Flag, Activity, Crown, ShieldCheck, Megaphone, Send, ChevronDown
} from 'lucide-react';
import { ASSETS, GlobalStyles, Header, Footer, RevealOnScroll, ScratchSVG } from '../../components/SharedUI';

// Comprehensive list of countries for the dropdown
const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default function FanCupPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Use FormSubmit's AJAX endpoint so we don't leave the page
      const response = await fetch('https://formsubmit.co/ajax/info@selloutcrowds.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#0a0a0a] min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-clip">
      <GlobalStyles />
      <Header />
      
      <main className="flex-1 w-full relative">
        {/* HERO SECTION */}
        <section className="relative w-full pt-32 pb-32 flex items-center justify-center overflow-hidden min-h-[85vh]" onMouseMove={handleMouseMove}>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110 transition-transform duration-200 ease-out" style={{ transform: `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)` }}>
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a3e635]/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full">
            <RevealOnScroll animation="zoom-in">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#a3e635]/30 bg-black/60 backdrop-blur-md shadow-lg mb-8">
                <Globe size={16} className="text-[#a3e635]" /> 
                <span className="text-white text-xs font-black uppercase tracking-widest">Powered by Sellout Crowds</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter mb-4 leading-[0.85] text-white drop-shadow-2xl">
                THE FAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-green-400">CUP</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="flex justify-center mb-8">
                 <ScratchSVG className="w-48 md:w-64 h-[12px] md:h-[16px] [&_path]:!fill-white opacity-20 drop-shadow-sm" />
              </div>
              <p className="text-xl md:text-3xl font-bold uppercase tracking-widest text-gray-300 mb-6 max-w-3xl mx-auto drop-shadow-md">
                The world's biggest social competition.
              </p>
              <p className="text-base md:text-xl font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
                Fans from every nation compete for the Sellout Crown. Join the platform, rally behind your country's Captains, and prove who has the best fans in the world.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#fans" className="w-full sm:w-auto bg-[#a3e635] text-black px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_30px_rgba(163,230,53,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1">
                  Represent your Country <ChevronRight size={18}/>
                </a>
                <a href="#creators" className="w-full sm:w-auto bg-[#111] border border-gray-700 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                  Apply as Captain <Flag size={18}/>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FANS SECTION: HOW TO COMPETE */}
        <section id="fans" className="relative py-24 px-6 bg-[#050505] z-10 border-t border-gray-900 overflow-hidden">
          
          {/* Decorative Crown Image */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-48 lg:-left-16 w-80 md:w-[500px] -rotate-45 opacity-20 md:opacity-30 pointer-events-none z-0">
             <img src="https://admin.beasellout.com/wp-content/uploads/2026/06/The-Sellout-Crown.webp" alt="The Sellout Crown" className="w-full h-auto drop-shadow-[0_0_50px_rgba(163,230,53,0.2)]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <RevealOnScroll className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                HOW TO <span className="text-[#a3e635]">COMPETE</span>
              </h2>
              <p className="text-gray-400 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                The Fan Cup is driven entirely by user engagement. Every interaction counts towards your nation's score.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealOnScroll delay={0}>
                <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 h-full relative overflow-hidden group hover:border-[#a3e635]/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
                  <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3e635] mb-6 border border-gray-800 shadow-inner">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">1. Join & Draft</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Sign up for Sellout Crowds and officially select your country. Once drafted, your profile is permanently linked to your nation's global rank.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 h-full relative overflow-hidden group hover:border-[#a3e635]/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
                  <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3e635] mb-6 border border-gray-800 shadow-inner">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">2. Engage Daily</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Post content, debate with rivals, vote on polls, and cheer on your National Captains. Every single interaction generates points for your team.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 h-full relative overflow-hidden group hover:border-[#a3e635]/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
                  <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3e635] mb-6 border border-gray-800 shadow-inner">
                    <Trophy size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">3. Claim the Crown</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Watch the live global leaderboards. The country with the highest engagement index at the end of the games takes home the inaugural Sellout Crown.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* LIVE LEADERBOARDS (COMING SOON PREVIEW) */}
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-transparent via-[#a3e635]/5 to-transparent -skew-y-6 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
             <RevealOnScroll>
               <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4">
                 Global Standings
               </h2>
               <p className="text-gray-400 font-medium text-lg mb-12">The war room is being prepped. Leaderboards activate when the games begin.</p>
             </RevealOnScroll>

             <RevealOnScroll delay={100}>
               <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-gray-800 bg-[#111]">
                 {/* Blurred Placeholder overlay */}
                 <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-md z-20 flex flex-col items-center justify-center border border-white/5">
                    <Zap size={48} className="text-[#a3e635] mb-4 animate-pulse" />
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white mb-2">Live Tracker Loading</h3>
                    <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Interactive Captain Highlights & Scoreboards</p>
                 </div>

                 {/* Fake UI underneath */}
                 <div className="opacity-30 p-8 select-none">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-4 mb-4">
                       <div className="w-1/3 h-6 bg-gray-800 rounded"></div>
                       <div className="w-1/4 h-6 bg-gray-800 rounded"></div>
                    </div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-800/50">
                        <div className="w-8 h-8 rounded-full bg-gray-800 shrink-0"></div>
                        <div className="w-10 h-6 bg-gray-800 rounded"></div>
                        <div className="flex-1 h-6 bg-gray-800 rounded"></div>
                        <div className="w-24 h-6 bg-gray-800 rounded"></div>
                      </div>
                    ))}
                 </div>
               </div>
             </RevealOnScroll>
          </div>
        </section>

        {/* CREATORS SECTION: BECOME A CAPTAIN */}
        <section id="creators" className="relative py-32 px-6 bg-[#111] border-t border-gray-900">
           {/* Abstract Background element */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a3e635]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 
                 {/* Left Side: Pitch */}
                 <div className="relative z-10">
                    <RevealOnScroll>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-black mb-6 shadow-sm">
                        <Crown size={14} className="text-[#a3e635]" /> 
                        <span className="text-white text-[10px] font-black uppercase tracking-widest">For Creators</span>
                      </div>
                      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
                        LEAD YOUR<br/><span className="text-[#a3e635]">NATION.</span>
                      </h2>
                      <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-8">
                        We are scouting elite content creators to serve as <strong className="text-white">National Captains</strong>. Standard brand sponsorships are easily ignored. We are offering you global prestige, massive exposure, and total ownership of your new audience.
                      </p>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <RevealOnScroll delay={100}>
                        <div className="flex flex-col gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#a3e635] border border-gray-800">
                            <ShieldCheck size={20} />
                          </div>
                          <h4 className="text-white font-black uppercase tracking-tight text-lg">Elite Designation</h4>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed">
                            You don't just participate; you lead. Gain foundational bragging rights as an official ambassador for the games.
                          </p>
                        </div>
                      </RevealOnScroll>

                      <RevealOnScroll delay={200}>
                        <div className="flex flex-col gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#a3e635] border border-gray-800">
                            <Star size={20} />
                          </div>
                          <h4 className="text-white font-black uppercase tracking-tight text-lg">Free Lifetime Deal</h4>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed">
                            Zero barriers to entry. Selected Captains receive a free lifetime creator account (waiving the standard fee).
                          </p>
                        </div>
                      </RevealOnScroll>

                      <RevealOnScroll delay={300}>
                        <div className="flex flex-col gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#a3e635] border border-gray-800">
                            <Megaphone size={20} />
                          </div>
                          <h4 className="text-white font-black uppercase tracking-tight text-lg">Massive Exposure</h4>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed">
                            Get premium real estate on the interactive hub, driving thousands of global fans directly to your profile.
                          </p>
                        </div>
                      </RevealOnScroll>

                      <RevealOnScroll delay={400}>
                        <div className="flex flex-col gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#a3e635] border border-gray-800">
                            <Users size={20} />
                          </div>
                          <h4 className="text-white font-black uppercase tracking-tight text-lg">Shared Spotlight</h4>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed">
                            It's not winner-take-all. We select multiple creators per country, ensuring you are celebrated regardless of your current size.
                          </p>
                        </div>
                      </RevealOnScroll>
                    </div>
                 </div>

                 {/* Right Side: Application Form */}
                 <RevealOnScroll delay={200} className="relative z-10 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                    <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635]/10 blur-[40px] rounded-full pointer-events-none"></div>
                       
                       {formStatus === 'success' ? (
                          <div className="flex flex-col items-center justify-center py-10 text-center animate-in zoom-in duration-300">
                             <div className="w-16 h-16 bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/30 rounded-2xl flex items-center justify-center mb-6">
                               <ShieldCheck size={32} />
                             </div>
                             <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Application Received!</h4>
                             <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
                               We have received your submission. Our scouting team will review your profile and be in touch soon.
                             </p>
                             <button 
                               onClick={() => setFormStatus('idle')} 
                               className="text-[#a3e635] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                             >
                               Submit Another Application
                             </button>
                          </div>
                       ) : (
                         <>
                           <h3 className="text-2xl font-black uppercase text-white mb-2 relative z-10">Captain Application</h3>
                           <p className="text-xs font-medium text-gray-400 mb-8 relative z-10">Submit your details to be considered for the inaugural draft.</p>
                           
                           <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
                              <input type="hidden" name="_subject" value="New Captain Application - Fan Cup" />
                              <input type="hidden" name="_captcha" value="false" />

                              <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Name / Handle</label>
                                <input type="text" name="name" required className="bg-[#111] border border-gray-800 focus:border-[#a3e635] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors" placeholder="e.g. @SportsTakes" />
                              </div>

                              <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                                <input type="email" name="email" required className="bg-[#111] border border-gray-800 focus:border-[#a3e635] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors" placeholder="you@example.com" />
                              </div>

                              <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Primary Social Link</label>
                                <input type="url" name="social_link" required className="bg-[#111] border border-gray-800 focus:border-[#a3e635] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors" placeholder="URL to your largest following" />
                              </div>

                              <div className="flex flex-col gap-1.5 relative">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Country You Represent</label>
                                <div className="relative">
                                  <select name="country" required defaultValue="" className="w-full bg-[#111] border border-gray-800 focus:border-[#a3e635] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors appearance-none cursor-pointer">
                                    <option value="" disabled>Select your country</option>
                                    {COUNTRIES.map(country => (
                                      <option key={country} value={country}>{country}</option>
                                    ))}
                                  </select>
                                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                </div>
                              </div>

                              <button 
                                type="submit" 
                                disabled={formStatus === 'submitting'}
                                className="mt-4 bg-[#a3e635] text-black px-6 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] flex items-center justify-center gap-2 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                              >
                                {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'} <Send size={16} />
                              </button>
                              
                              {formStatus === 'error' && (
                                <p className="text-red-500 text-xs font-medium text-center mt-2">Something went wrong. Please try again.</p>
                              )}
                           </form>
                         </>
                       )}
                    </div>
                 </RevealOnScroll>

              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}