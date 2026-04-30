"use client";
import React from 'react';
import { Mail, Newspaper, Megaphone, Briefcase, ArrowRight } from 'lucide-react';
import { GlobalStyles, Header, Footer, RevealOnScroll } from '../../components/SharedUI';

export default function ContactPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#0a0a0a] min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-clip">
      <GlobalStyles />
      <Header />

      <main className="flex-1 w-full relative pt-32 pb-32">
        {/* Background Gradients & Glow */}
        <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-[#111] to-[#0a0a0a] pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#a3e635]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-20">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full border border-gray-700 bg-black/60 backdrop-blur-md shadow-lg mb-6">
              <Mail size={14} className="text-[#a3e635]" /> 
              <span className="text-white text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-lg">
              WE WANT TO <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-green-400">HEAR FROM YOU.</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Whether you have a question, want to contribute content, or are looking to reach a massive sports audience, our team is ready to assist.
            </p>
          </RevealOnScroll>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Updated to a 2x2 grid for 4 items (md:grid-cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* General Card */}
            <RevealOnScroll delay={0}>
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#a3e635]/50 transition-all duration-300 flex flex-col h-full group shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3e635] mb-6 border border-gray-800 group-hover:bg-[#a3e635]/10 group-hover:border-[#a3e635]/30 transition-all shadow-inner">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">General</h3>
                <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed mb-8 flex-1">
                  Have a general question, need platform support, or just want to say hi? Drop us a line.
                </p>
                <a href="mailto:info@selloutcrowds.com" className="inline-flex items-center text-sm md:text-xs font-black uppercase tracking-widest text-[#a3e635] hover:text-white transition-colors group/link mt-auto">
                  info@selloutcrowds.com <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </RevealOnScroll>

            {/* Enterprise Card */}
            <RevealOnScroll delay={100}>
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#a3e635]/50 transition-all duration-300 flex flex-col h-full group shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3e635] mb-6 border border-gray-800 group-hover:bg-[#a3e635]/10 group-hover:border-[#a3e635]/30 transition-all shadow-inner">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">Enterprise</h3>
                <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed mb-8 flex-1">
                  Interested in our custom infrastructure for high-volume creators? Let's talk scale and strategy.
                </p>
                <a href="mailto:sales@selloutcrowds.com" className="inline-flex items-center text-sm md:text-xs font-black uppercase tracking-widest text-[#a3e635] hover:text-white transition-colors group/link mt-auto">
                  sales@selloutcrowds.com <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </RevealOnScroll>

            {/* News Source Card */}
            <RevealOnScroll delay={200}>
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#a3e635]/50 transition-all duration-300 flex flex-col h-full group shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3e635] mb-6 border border-gray-800 group-hover:bg-[#a3e635]/10 group-hover:border-[#a3e635]/30 transition-all shadow-inner">
                  <Newspaper size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">News Source</h3>
                <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed mb-8 flex-1">
                  Got the inside scoop or breaking coverage? Reach out to become an official news source on our platform.
                </p>
                <a href="mailto:content@selloutcrowds.com" className="inline-flex items-center text-sm md:text-xs font-black uppercase tracking-widest text-[#a3e635] hover:text-white transition-colors group/link mt-auto">
                  content@selloutcrowds.com <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </RevealOnScroll>

            {/* Advertise Card */}
            <RevealOnScroll delay={300}>
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#a3e635]/50 transition-all duration-300 flex flex-col h-full group shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3e635] mb-6 border border-gray-800 group-hover:bg-[#a3e635]/10 group-hover:border-[#a3e635]/30 transition-all shadow-inner">
                  <Megaphone size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">Advertise</h3>
                <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed mb-8 flex-1">
                  Put your brand directly in front of thousands of dedicated sports fans and premium creators.
                </p>
                <a href="mailto:advertise@selloutcrowds.com" className="inline-flex items-center text-sm md:text-xs font-black uppercase tracking-widest text-[#a3e635] hover:text-white transition-colors group/link mt-auto">
                  advertise@selloutcrowds.com <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}