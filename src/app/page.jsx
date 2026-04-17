"use client";
import React from 'react';
import Link from 'next/link';
import { Users, Video, ChevronRight } from 'lucide-react';
import { ASSETS, GlobalStyles, Header } from '../components/SharedUI';

export default function FunnelLanding() {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-hidden">
      <GlobalStyles />
      <Header />
      
      <main className="flex-1 w-full relative">
        <div className="relative w-full min-h-[100vh] overflow-hidden bg-black flex flex-col md:flex-row funnel-container animate-in fade-in duration-700">
          
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-32 md:w-40 drop-shadow-xl">
            <img src={ASSETS.logo} alt="Sellout Crowds" className="w-full h-auto" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none hidden md:flex center-divider">
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-white/40 mb-3"></div>
            <span className="bg-black/70 backdrop-blur-sm text-white font-black italic text-xs px-4 py-2 rounded-full border border-white/10 shadow-lg">WHO ARE YOU?</span>
            <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-white/40 mt-3"></div>
          </div>

          <Link href="/fans" className="split-panel relative flex-1 min-h-[50vh] md:min-h-0 flex items-center justify-center cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/5 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#a3e635]/20 to-black/70 z-10 group-hover:opacity-90 transition-opacity duration-300"></div>
            <img src="https://admin.beasellout.com/wp-content/uploads/2026/04/Soccer-Fans-Cheering-Monochrome-scaled.jpg" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity filter grayscale" alt="Fan Crowd" />
            <div className="relative z-20 text-center px-4 transform group-hover:scale-105 transition-transform duration-300">
              <Users size={40} className="text-[#a3e635] mx-auto mb-4 group-hover:-translate-y-1 transition-transform" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2 drop-shadow-md">I'm a Fan</h2>
              <p className="text-gray-300 font-medium text-sm md:text-base max-w-[250px] mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Find your crowd, talk smack, and escape the noise.
              </p>
              <span className="inline-flex items-center gap-2 bg-[#a3e635] text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                Join the Crowd <ChevronRight size={14} />
              </span>
            </div>
          </Link>

          <Link href="/creators" className="split-panel relative flex-1 min-h-[50vh] md:min-h-0 flex items-center justify-center cursor-pointer overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/20 to-black/70 z-10 group-hover:opacity-90 transition-opacity duration-300"></div>
            <img src="https://admin.beasellout.com/wp-content/uploads/2026/04/Empty-Sports-Content-from-Freepik.webp" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity filter grayscale" alt="Creator" />
            <div className="relative z-20 text-center px-4 transform group-hover:scale-105 transition-transform duration-300">
              <Video size={40} className="text-white mx-auto mb-4 group-hover:-translate-y-1 transition-transform" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2 drop-shadow-md">I'm a Creator</h2>
              <p className="text-gray-300 font-medium text-sm md:text-base max-w-[250px] mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Build a community, get paid, and own your audience.
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#a3e635] shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Build Your Legacy <ChevronRight size={14} />
              </span>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}