"use client";
import React, { useState } from 'react';
import { 
  Star, Trophy, Grid, ShoppingCart, Newspaper, RefreshCw, Users, 
  ChevronRight, LayoutList, MessageSquare, CircleDashed, Dribbble, 
  CircleDot, Snowflake, FlagTriangleRight, Flag, Shield, Medal, 
  GraduationCap, Swords, Gamepad2, Activity 
} from 'lucide-react';
import { ASSETS, GlobalStyles, Header, Footer, RevealOnScroll, FeatureModal } from '../../components/SharedUI';

const TICKER_ITEMS = [
  { name: "SOCCER", Icon: CircleDashed },
  { name: "FOOTBALL", Icon: Trophy },
  { name: "BASKETBALL", Icon: Dribbble },
  { name: "BASEBALL", Icon: CircleDot },
  { name: "HOCKEY", Icon: Snowflake },
  { name: "GOLF", Icon: FlagTriangleRight },
  { name: "RACING", Icon: Flag },
  { name: "TENNIS", Icon: Activity },
  { name: "RUGBY", Icon: Shield },
  { name: "CRICKET", Icon: Medal },
  { name: "NCAA", Icon: GraduationCap },
  { name: "COMBAT", Icon: Swords },
  { name: "FANTASY", Icon: Gamepad2 },
];

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
                <div className="relative z-10 mb-6 text-[#1877F2]">
                  <svg viewBox="0 0 155.139 155.139" width={40} height={40} fill="currentColor">
                    <path d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184 c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452 v20.341H37.29v27.585h23.814v70.761H89.584z"/>
                  </svg>
                </div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Ditch the Noise.</h3>
                  <svg className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" viewBox="0 0 277.38 22.32" preserveAspectRatio="none">
                    <g><path d="M56.14,16.17c-.15.06-.41.09-.72.12.07-.08.47-.17.72-.12Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M44.27,8.22c-.22.06-.91.2-.85.04.39-.05.56-.03.85-.04Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M43.05,8.13c-.05.08-.6.06-.85.11,0-.09.69-.14.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M39.78,9.81c-.17.06-.63.15-.85.11.05-.08.6-.06.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M38.09,8.53c-.28.11-.78.19-1.45.23.23-.12.93-.17,1.45-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M34.58,15.99c-.74.08-2.23.36-2.77.27.91,0,1.93-.26,2.77-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M32.28,13.12c-.9.28-2.58.24-3.74.49-.18-.14,1.73-.2,2.05-.36.28-.02.5,0,.72,0,.33-.05.62-.18.97-.13Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M20.92,13.85c.03.08-.04.14-.36.17-.09-.02-.13-.06-.12-.12l.48-.05Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M16.35,15.47c-.73.23-2.43.42-3.38.43-.12.04-.12.09-.36.11-.56.09-1.82.18-.6.04,1.49-.29,2.69-.32,4.34-.57Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M15.6,13.92c-.17.07-.47.12-.84.15.08-.09.7-.17.84-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.95,18.26c-.13.09-.76.09-1.08.15.23-.07.81-.19,1.08-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.77,14.56c-.29.12-.96.17-1.32.27-.34-.09.87-.21,1.32-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.16,14.17c-.23.12-.93.18-1.45.26.3-.11.98-.18,1.45-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.88,19.16c-.03.11-.5.16-.84.23.06-.11.55-.15.84-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.26,18.45c-.38.14-1.73.27-2.4.34.84-.18,1.48-.25,2.4-.34Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.47,14.46c-.6.22-1.53.22-2.05.26.56-.15,1.41-.1,2.05-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M11.05,16.15c-.23.08-.63.14-.96.21-.08-.13.56-.15.96-.21Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M9.96,15.95c-.28.11-.54.11-.96.14.09-.08.68-.09.96-.14Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M8.87,15.68c-.12.1-1.03.23-.85.03.26-.04.23.02.24.07.29-.02.26-.09.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M6.63,18.45c.58-.2,1.62-.13,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.46,19.79c-.49.13-.97.17-1.56.22.36-.09,1.31-.22,1.56-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.11,20.03c.19.08-.78.19-.6.07l.6-.07Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.2,21.87c-.16.09-.54.15-.83.17.08-.09.69-.18.83-.17Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M.86,22.15c-.96.28-1.33.17,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M27.84,19.05c-.2.06-.47.11-.6.19-.39-.09-1.05.09-1.56.09.6-.21,1.28-.09,2.17-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.09,17.76c-.29.05-.26-.03-.6.04-.04-.05.11-.07.12-.11-.6.05-.93.14-1.44.2.06-.03.12-.07.12-.11-.66.25-1.48.08-2.89.33,1.33-.34,4.35-.58,5.53-.75-.16.14-1.21.15-1.32.31-.02.1.67-.06.48.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.48,14.88c-.14.02-.07.04,0,.03-.03.08-.53.08-.6.07.14-.11,1.74-.25.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M3.56,16.33v-.13c-.77.11-2,.29-2.54.24.9-.21,2.86-.23,3.49-.52.16.01.45-.02.6,0,2.1-.47,4.44-.52,6.63-.92-.95.46-3.25.26-4.34.75-.19,0,0-.03.12-.05-.98.12-2.74.26-3.97.63Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.88,20.32c-.18.08-.51.14-.71.22-.11,0,.46-.27.71-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/></g>
                  </svg>
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium max-w-xl leading-relaxed">
                  Avoid the politics, algorithms, and random advertisements that clog up your feed. Just sports.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF4500]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D93A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#FF4500]">
                  <svg viewBox="0 0 152 152" width={48} height={48} fill="currentColor">
                    <path d="m141.1 76.9c-.3-7.9-7-14-14.9-13.7-3.5.1-6.8 1.5-9.3 4-11.1-7.7-24.2-11.9-37.7-12.2l6.4-30.5 21 4.4c.6 5.4 5.4 9.2 10.8 8.7 5.4-.6 9.2-5.4 8.7-10.8-.6-5.4-5.4-9.2-10.8-8.7-3.1.3-5.8 2.1-7.4 4.8l-24-4.8c-1.6-.4-3.3.7-3.6 2.3l-7.2 34c-13.6.2-26.9 4.4-38.2 12-5.9-5.2-15-4.6-20.2 1.3-5 5.7-4.7 14.2.6 19.5 1.1 1.1 2.4 1.9 3.8 2.6-.1 1.4-.1 2.9 0 4.3 0 21.9 25.5 39.7 57 39.7s57-17.8 57-39.7c.1-1.4.1-2.9 0-4.3 5-2.4 8.1-7.4 8-12.9zm-97.8 9.8c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8c-5.5-.1-9.8-4.4-9.8-9.8zm56.8 26.9c-6.9 5.2-15.5 7.9-24.2 7.5-8.7.4-17.2-2.3-24.2-7.5-1-1.1-.8-2.8.3-3.7 1-.9 2.5-.9 3.5 0 5.9 4.3 13.1 6.5 20.4 6.2 7.3.4 14.5-1.7 20.4-6 1.1-1.1 2.8-1 3.9 0 1.1 1.1 1 2.8 0 3.9zm-1.8-16.8c-2.8-2.6-2.9-7-.2-9.8 2.6-2.8 7-2.9 9.8-.2 2.8 2.6 2.9 7 .2 9.8-2.5 2.6-6.6 2.9-9.4.6h-.5z"/>
                  </svg>
                </div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Lose the Trolls.</h3>
                  <svg className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" viewBox="0 0 277.38 22.32" preserveAspectRatio="none">
                    <g><path d="M56.14,16.17c-.15.06-.41.09-.72.12.07-.08.47-.17.72-.12Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M44.27,8.22c-.22.06-.91.2-.85.04.39-.05.56-.03.85-.04Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M43.05,8.13c-.05.08-.6.06-.85.11,0-.09.69-.14.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M39.78,9.81c-.17.06-.63.15-.85.11.05-.08.6-.06.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M38.09,8.53c-.28.11-.78.19-1.45.23.23-.12.93-.17,1.45-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M34.58,15.99c-.74.08-2.23.36-2.77.27.91,0,1.93-.26,2.77-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M32.28,13.12c-.9.28-2.58.24-3.74.49-.18-.14,1.73-.2,2.05-.36.28-.02.5,0,.72,0,.33-.05.62-.18.97-.13Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M20.92,13.85c.03.08-.04.14-.36.17-.09-.02-.13-.06-.12-.12l.48-.05Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M16.35,15.47c-.73.23-2.43.42-3.38.43-.12.04-.12.09-.36.11-.56.09-1.82.18-.6.04,1.49-.29,2.69-.32,4.34-.57Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M15.6,13.92c-.17.07-.47.12-.84.15.08-.09.7-.17.84-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.95,18.26c-.13.09-.76.09-1.08.15.23-.07.81-.19,1.08-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.77,14.56c-.29.12-.96.17-1.32.27-.34-.09.87-.21,1.32-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.16,14.17c-.23.12-.93.18-1.45.26.3-.11.98-.18,1.45-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.88,19.16c-.03.11-.5.16-.84.23.06-.11.55-.15.84-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.26,18.45c-.38.14-1.73.27-2.4.34.84-.18,1.48-.25,2.4-.34Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.47,14.46c-.6.22-1.53.22-2.05.26.56-.15,1.41-.1,2.05-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M11.05,16.15c-.23.08-.63.14-.96.21-.08-.13.56-.15.96-.21Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M9.96,15.95c-.28.11-.54.11-.96.14.09-.08.68-.09.96-.14Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M8.87,15.68c-.12.1-1.03.23-.85.03.26-.04.23.02.24.07.29-.02.26-.09.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M6.63,18.45c.58-.2,1.62-.13,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.46,19.79c-.49.13-.97.17-1.56.22.36-.09,1.31-.22,1.56-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.11,20.03c.19.08-.78.19-.6.07l.6-.07Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.2,21.87c-.16.09-.54.15-.83.17.08-.09.69-.18.83-.17Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M.86,22.15c-.96.28-1.33.17,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M27.84,19.05c-.2.06-.47.11-.6.19-.39-.09-1.05.09-1.56.09.6-.21,1.28-.09,2.17-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.09,17.76c-.29.05-.26-.03-.6.04-.04-.05.11-.07.12-.11-.6.05-.93.14-1.44.2.06-.03.12-.07.12-.11-.66.25-1.48.08-2.89.33,1.33-.34,4.35-.58,5.53-.75-.16.14-1.21.15-1.32.31-.02.1.67-.06.48.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.48,14.88c-.14.02-.07.04,0,.03-.03.08-.53.08-.6.07.14-.11,1.74-.25.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M3.56,16.33v-.13c-.77.11-2,.29-2.54.24.9-.21,2.86-.23,3.49-.52.16.01.45-.02.6,0,2.1-.47,4.44-.52,6.63-.92-.95.46-3.25.26-4.34.75-.19,0,0-.03.12-.05-.98.12-2.74.26-3.97.63Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.88,20.32c-.18.08-.51.14-.71.22-.11,0,.46-.27.71-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/></g>
                  </svg>
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                  Real sports talk with real fanatics. Get the same sense of community, but strictly with people who actually know the game.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF424D]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF424D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#FF424D]">
                  <svg viewBox="0 0 569 546" width={40} height={40} fill="currentColor">
                    <circle cx="362.59" cy="204.59" r="204.59"/>
                    <rect height="545.8" width="100" x="0" y="0"/>
                  </svg>
                </div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Stop the Hop.</h3>
                  <svg className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" viewBox="0 0 277.38 22.32" preserveAspectRatio="none">
                    <g><path d="M56.14,16.17c-.15.06-.41.09-.72.12.07-.08.47-.17.72-.12Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M44.27,8.22c-.22.06-.91.2-.85.04.39-.05.56-.03.85-.04Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M43.05,8.13c-.05.08-.6.06-.85.11,0-.09.69-.14.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M39.78,9.81c-.17.06-.63.15-.85.11.05-.08.6-.06.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M38.09,8.53c-.28.11-.78.19-1.45.23.23-.12.93-.17,1.45-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M34.58,15.99c-.74.08-2.23.36-2.77.27.91,0,1.93-.26,2.77-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M32.28,13.12c-.9.28-2.58.24-3.74.49-.18-.14,1.73-.2,2.05-.36.28-.02.5,0,.72,0,.33-.05.62-.18.97-.13Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M20.92,13.85c.03.08-.04.14-.36.17-.09-.02-.13-.06-.12-.12l.48-.05Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M16.35,15.47c-.73.23-2.43.42-3.38.43-.12.04-.12.09-.36.11-.56.09-1.82.18-.6.04,1.49-.29,2.69-.32,4.34-.57Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M15.6,13.92c-.17.07-.47.12-.84.15.08-.09.7-.17.84-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.95,18.26c-.13.09-.76.09-1.08.15.23-.07.81-.19,1.08-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.77,14.56c-.29.12-.96.17-1.32.27-.34-.09.87-.21,1.32-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.16,14.17c-.23.12-.93.18-1.45.26.3-.11.98-.18,1.45-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.88,19.16c-.03.11-.5.16-.84.23.06-.11.55-.15.84-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.26,18.45c-.38.14-1.73.27-2.4.34.84-.18,1.48-.25,2.4-.34Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.47,14.46c-.6.22-1.53.22-2.05.26.56-.15,1.41-.1,2.05-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M11.05,16.15c-.23.08-.63.14-.96.21-.08-.13.56-.15.96-.21Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M9.96,15.95c-.28.11-.54.11-.96.14.09-.08.68-.09.96-.14Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M8.87,15.68c-.12.1-1.03.23-.85.03.26-.04.23.02.24.07.29-.02.26-.09.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M6.63,18.45c.58-.2,1.62-.13,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.46,19.79c-.49.13-.97.17-1.56.22.36-.09,1.31-.22,1.56-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.11,20.03c.19.08-.78.19-.6.07l.6-.07Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.2,21.87c-.16.09-.54.15-.83.17.08-.09.69-.18.83-.17Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M.86,22.15c-.96.28-1.33.17,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M27.84,19.05c-.2.06-.47.11-.6.19-.39-.09-1.05.09-1.56.09.6-.21,1.28-.09,2.17-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.09,17.76c-.29.05-.26-.03-.6.04-.04-.05.11-.07.12-.11-.6.05-.93.14-1.44.2.06-.03.12-.07.12-.11-.66.25-1.48.08-2.89.33,1.33-.34,4.35-.58,5.53-.75-.16.14-1.21.15-1.32.31-.02.1.67-.06.48.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.48,14.88c-.14.02-.07.04,0,.03-.03.08-.53.08-.6.07.14-.11,1.74-.25.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M3.56,16.33v-.13c-.77.11-2,.29-2.54.24.9-.21,2.86-.23,3.49-.52.16.01.45-.02.6,0,2.1-.47,4.44-.52,6.63-.92-.95.46-3.25.26-4.34.75-.19,0,0-.03.12-.05-.98.12-2.74.26-3.97.63Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.88,20.32c-.18.08-.51.14-.71.22-.11,0,.46-.27.71-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/></g>
                  </svg>
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                  Patreon is great for taking your money, but terrible for community. Stop jumping between 3 different apps to connect.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#5865F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 mb-6 text-[#5865F2]">
                  <svg viewBox="0 0 512 512" width={40} height={40} fill="currentColor">
                    <path d="M433.43,93.222c-32.633-14.973-67.627-26.005-104.216-32.324c-0.666-0.122-1.332,0.183-1.675,0.792c-4.501,8.005-9.486,18.447-12.977,26.655c-39.353-5.892-78.505-5.892-117.051,0c-3.492-8.39-8.658-18.65-13.179-26.655c-0.343-0.589-1.009-0.894-1.675-0.792c-36.568,6.298-71.562,17.33-104.216,32.324c-0.283,0.122-0.525,0.325-0.686,0.589c-66.376,99.165-84.56,195.893-75.64,291.421c0.04,0.467,0.303,0.914,0.666,1.198c43.793,32.161,86.215,51.685,127.848,64.627c0.666,0.203,1.372-0.04,1.796-0.589c9.848-13.449,18.627-27.63,26.154-42.543c0.444-0.873,0.02-1.909-0.888-2.255c-13.925-5.282-27.184-11.723-39.939-19.036c-1.009-0.589-1.09-2.032-0.161-2.723c2.684-2.011,5.369-4.104,7.932-6.217c0.464-0.386,1.11-0.467,1.655-0.224c83.792,38.257,174.507,38.257,257.31,0c0.545-0.264,1.191-0.182,1.675,0.203c2.564,2.113,5.248,4.226,7.952,6.237c0.928,0.691,0.867,2.134-0.141,2.723c-12.755,7.456-26.014,13.754-39.959,19.016c-0.908,0.345-1.312,1.402-0.867,2.275c7.689,14.892,16.468,29.073,26.134,42.523c0.404,0.569,1.13,0.813,1.796,0.609c41.835-12.941,84.257-32.466,128.05-64.627c0.384-0.284,0.626-0.711,0.666-1.178c10.676-110.441-17.881-206.376-75.7-291.421C433.954,93.547,433.712,93.344,433.43,93.222z M171.094,327.065c-25.227,0-46.014-23.16-46.014-51.604s20.383-51.604,46.014-51.604c25.831,0,46.417,23.364,46.013,51.604C217.107,303.905,196.723,327.065,171.094,327.065z M341.221,327.065c-25.226,0-46.013-23.16-46.013-51.604s20.383-51.604,46.013-51.604c25.832,0,46.417,23.364,46.014,51.604C387.235,303.905,367.054,327.065,341.221,327.065z"/>
                  </svg>
                </div>
                <div className="relative z-10 w-fit mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">End the Confusion.</h3>
                  <svg className="absolute top-[60%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" viewBox="0 0 277.38 22.32" preserveAspectRatio="none">
                    <g><path d="M56.14,16.17c-.15.06-.41.09-.72.12.07-.08.47-.17.72-.12Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M44.27,8.22c-.22.06-.91.2-.85.04.39-.05.56-.03.85-.04Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M43.05,8.13c-.05.08-.6.06-.85.11,0-.09.69-.14.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M39.78,9.81c-.17.06-.63.15-.85.11.05-.08.6-.06.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M38.09,8.53c-.28.11-.78.19-1.45.23.23-.12.93-.17,1.45-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M34.58,15.99c-.74.08-2.23.36-2.77.27.91,0,1.93-.26,2.77-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M32.28,13.12c-.9.28-2.58.24-3.74.49-.18-.14,1.73-.2,2.05-.36.28-.02.5,0,.72,0,.33-.05.62-.18.97-.13Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M20.92,13.85c.03.08-.04.14-.36.17-.09-.02-.13-.06-.12-.12l.48-.05Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M16.35,15.47c-.73.23-2.43.42-3.38.43-.12.04-.12.09-.36.11-.56.09-1.82.18-.6.04,1.49-.29,2.69-.32,4.34-.57Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M15.6,13.92c-.17.07-.47.12-.84.15.08-.09.7-.17.84-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.95,18.26c-.13.09-.76.09-1.08.15.23-.07.81-.19,1.08-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.77,14.56c-.29.12-.96.17-1.32.27-.34-.09.87-.21,1.32-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.16,14.17c-.23.12-.93.18-1.45.26.3-.11.98-.18,1.45-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.88,19.16c-.03.11-.5.16-.84.23.06-.11.55-.15.84-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M13.26,18.45c-.38.14-1.73.27-2.4.34.84-.18,1.48-.25,2.4-.34Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.47,14.46c-.6.22-1.53.22-2.05.26.56-.15,1.41-.1,2.05-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M11.05,16.15c-.23.08-.63.14-.96.21-.08-.13.56-.15.96-.21Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M9.96,15.95c-.28.11-.54.11-.96.14.09-.08.68-.09.96-.14Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M8.87,15.68c-.12.1-1.03.23-.85.03.26-.04.23.02.24.07.29-.02.26-.09.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M6.63,18.45c.58-.2,1.62-.13,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.46,19.79c-.49.13-.97.17-1.56.22.36-.09,1.31-.22,1.56-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M5.11,20.03c.19.08-.78.19-.6.07l.6-.07Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.2,21.87c-.16.09-.54.15-.83.17.08-.09.69-.18.83-.17Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M.86,22.15c-.96.28-1.33.17,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M27.84,19.05c-.2.06-.47.11-.6.19-.39-.09-1.05.09-1.56.09.6-.21,1.28-.09,2.17-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M14.09,17.76c-.29.05-.26-.03-.6.04-.04-.05.11-.07.12-.11-.6.05-.93.14-1.44.2.06-.03.12-.07.12-.11-.66.25-1.48.08-2.89.33,1.33-.34,4.35-.58,5.53-.75-.16.14-1.21.15-1.32.31-.02.1.67-.06.48.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M12.48,14.88c-.14.02-.07.04,0,.03-.03.08-.53.08-.6.07.14-.11,1.74-.25.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M3.56,16.33v-.13c-.77.11-2,.29-2.54.24.9-.21,2.86-.23,3.49-.52.16.01.45-.02.6,0,2.1-.47,4.44-.52,6.63-.92-.95.46-3.25.26-4.34.75-.19,0,0-.03.12-.05-.98.12-2.74.26-3.97.63Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/><path d="M4.88,20.32c-.18.08-.51.14-.71.22-.11,0,.46-.27.71-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/></g>
                  </svg>
                </div>
                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                  What the F*$% is Discord?! Clean, simple, and built for sports. No more messy servers or weird channels.
                </p>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        {/* LED DIGITAL TICKER SECTION */}
        <section className="py-6 bg-[#050505] border-y-4 border-[#111] overflow-hidden relative shadow-[inset_0_0_30px_rgba(0,0,0,1)]">
          {/* Subtle LED Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:4px_4px] opacity-40 pointer-events-none z-10"></div>
          
          <div className="animate-marquee gap-8 items-center flex relative z-0">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center shrink-0 justify-around whitespace-nowrap">
                {TICKER_ITEMS.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="text-2xl md:text-3xl font-mono font-bold tracking-widest text-[#a3e635] [text-shadow:0_0_12px_#a3e635]">
                      {item.name}
                    </span>
                    <item.Icon size={28} className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] opacity-90" />
                  </React.Fragment>
                ))}
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