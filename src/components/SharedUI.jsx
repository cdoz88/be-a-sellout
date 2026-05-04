"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

// IMPORT ALL YOUR ICONS FROM THE NEW FILE
import { 
  UserBrushSVG, 
  ScratchSVG, 
  DiscordSVG, 
  FacebookSVG, 
  PatreonSVG, 
  RedditSVG, 
  AppStoreSVG, 
  GooglePlaySVG, 
  WordpressSVG 
} from './Icons';

// RE-EXPORT THEM SO OTHER PAGES CAN STILL FIND THEM HERE
export { 
  UserBrushSVG, 
  ScratchSVG, 
  DiscordSVG, 
  FacebookSVG, 
  PatreonSVG, 
  RedditSVG, 
  AppStoreSVG, 
  GooglePlaySVG, 
  WordpressSVG 
};

export const ASSETS = {
  heroVideo: "https://admin.beasellout.com/wp-content/uploads/2025/08/All-Sports.mp4",
  logo: "https://admin.beasellout.com/wp-content/uploads/2025/04/Logo.png"
};

export const GlobalStyles = () => (
  <style>{`
    @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
    .animate-marquee { display: flex; width: 200%; animation: marquee 25s linear infinite; }
    .animate-marquee-reverse { display: flex; width: 200%; animation: marquee 30s linear infinite reverse; }
    .marquee-hover-pause:hover .animate-marquee, .marquee-hover-pause:hover .animate-marquee-reverse { animation-play-state: paused; }
    
    .glass-panel {
      background: rgba(15, 15, 15, 0.6);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    .split-panel { transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease; }
    .funnel-container:hover .split-panel { filter: grayscale(80%) brightness(0.4); }
    .funnel-container .split-panel:hover { flex: 1.6; filter: grayscale(0%) brightness(1.1); z-index: 10; }
    
    .center-divider { transition: opacity 0.3s ease, transform 0.3s ease; }
    .funnel-container:hover .center-divider { opacity: 0; transform: translate(-50%, -50%) scale(0.9); pointer-events: none; }
    
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

export const FeatureModal = ({ feature, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      <div className="relative bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl animate-in zoom-in-95 duration-300">
         <button onClick={onClose} className="absolute top-5 right-5 p-2 bg-[#1a1a1a] hover:bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-full text-gray-400 hover:text-white transition-colors z-10 shadow-lg">
            <X size={20} />
         </button>
         
         <div className="w-20 h-20 bg-[#a3e635]/10 text-[#a3e635] rounded-2xl flex items-center justify-center mb-6 border border-[#a3e635]/30 shadow-[0_0_30px_rgba(163,230,53,0.15)] transform -rotate-3">
            {React.cloneElement(feature.icon, { size: 36 })}
         </div>
         
         <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2 leading-none uppercase">{feature.title}</h3>
         
         {feature.soon && (
            <div className="mb-4">
              <span className="inline-block text-[10px] font-black uppercase tracking-widest text-black bg-[#a3e635] px-3 py-1 rounded-full shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                Coming Soon
              </span>
            </div>
         )}
         
         <div className="w-16 h-1.5 bg-[#a3e635] rounded-full mb-6 mt-2"></div>
         
         <p className="text-gray-300 text-lg leading-relaxed font-medium">
           {feature.detailedDesc}
         </p>
         
         <div className="mt-10 pt-6 border-t border-gray-800 flex justify-end">
            <button onClick={onClose} className="bg-[#1a1a1a] hover:bg-gray-800 border border-gray-700 text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-colors shadow-md hover:-translate-y-0.5">
              Got it
            </button>
         </div>
      </div>
    </div>
  );
};

export const RevealOnScroll = ({ children, className = "", delay = 0, animation = "fade-up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      if (animation === "fade-up") return "opacity-0 translate-y-8 scale-95";
      if (animation === "fade-left") return "opacity-0 translate-x-8";
      if (animation === "fade-right") return "opacity-0 -translate-x-8";
      if (animation === "zoom-in") return "opacity-0 scale-90";
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isFunnel = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 pointer-events-none transition-all duration-300 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className={`w-full px-6 md:px-12 flex justify-between items-center ${isFunnel ? 'opacity-0 translate-y-[-10px]' : 'opacity-100 translate-y-0'} transition-all duration-500 pointer-events-auto`}>
        
        <div className="flex items-center gap-8">
          <Link href="/" className="group relative block w-20 md:w-24 focus:outline-none shrink-0">
            <div className="absolute -inset-2 bg-[#a3e635]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={ASSETS.logo} alt="Sellout Crowds" className="w-full h-auto relative z-10 transition-transform duration-300 group-hover:scale-105" />
          </Link>
          
          {!isFunnel && (
            <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">
              <Link href="/fans" className="relative group pb-2 pt-1">
                <span className={`relative z-10 transition-colors ${pathname === '/fans' ? 'text-[#9df01c]' : 'hover:text-white'}`}>For Fans</span>
                <UserBrushSVG className={`absolute -bottom-2 left-0 w-[120%] -ml-[10%] h-[12px] origin-left transition-all duration-300 ${pathname === '/fans' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`} />
              </Link>
              <Link href="/creators" className="relative group pb-2 pt-1">
                <span className={`relative z-10 transition-colors ${pathname === '/creators' ? 'text-[#9df01c]' : 'hover:text-white'}`}>For Creators</span>
                <UserBrushSVG className={`absolute -bottom-2 left-0 w-[120%] -ml-[10%] h-[12px] origin-left transition-all duration-300 ${pathname === '/creators' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`} />
              </Link>
              <Link href="/faqs" className="relative group pb-2 pt-1">
                <span className={`relative z-10 transition-colors ${pathname === '/faqs' ? 'text-[#9df01c]' : 'hover:text-white'}`}>FAQs</span>
                <UserBrushSVG className={`absolute -bottom-2 left-0 w-[120%] -ml-[10%] h-[12px] origin-left transition-all duration-300 ${pathname === '/faqs' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`} />
              </Link>
            </nav>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3 mt-1">
          <a href="#" className="bg-white/10 backdrop-blur-sm text-white border border-white/10 px-5 py-2.5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all duration-300 rounded-md">
            Sign Up
          </a>
          <a href="#" className="bg-[#a3e635] text-black px-5 py-2.5 font-bold uppercase tracking-widest text-[10px] hover:bg-[#84cc16] transition-all duration-300 rounded-md shadow-[0_0_10px_rgba(163,230,53,0.2)] hover:shadow-[0_0_15px_rgba(163,230,53,0.4)]">
            Login
          </a>
        </div>

        {!isFunnel && (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white hover:text-[#a3e635] transition-colors focus:outline-none pointer-events-auto">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/5 p-4 flex flex-col gap-3 shadow-2xl transition-all duration-300 overflow-hidden pointer-events-auto ${mobileMenuOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0 py-0 border-transparent'}`}>
        <Link href="/fans" onClick={() => setMobileMenuOpen(false)} className={`text-left font-bold uppercase tracking-widest text-xs py-2 border-b border-white/5 ${pathname === '/fans' ? 'text-[#9df01c]' : 'text-white'}`}>For Fans</Link>
        <Link href="/creators" onClick={() => setMobileMenuOpen(false)} className={`text-left font-bold uppercase tracking-widest text-xs py-2 border-b border-white/5 ${pathname === '/creators' ? 'text-[#9df01c]' : 'text-white'}`}>For Creators</Link>
        <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className={`text-left font-bold uppercase tracking-widest text-xs py-2 border-b border-white/5 ${pathname === '/faqs' ? 'text-[#9df01c]' : 'text-white'}`}>FAQs</Link>
        <div className="flex gap-2 mt-1">
          <a href="#" className="flex-1 bg-white/10 text-white text-center py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-md">Sign Up</a>
          <a href="#" className="flex-1 bg-[#a3e635] text-black text-center py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-md">Login</a>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-[#050505] text-gray-500 py-10 px-6 relative overflow-hidden mt-auto">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
      
      {/* Two Column Layout for Links */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="flex flex-col gap-2 text-xs font-medium text-center md:text-left">
          <h4 className="text-white font-black uppercase tracking-widest mb-1">The Real Truth</h4>
          <Link href="/compare/discord" className="hover:text-[#a3e635] transition-colors">Why Discord Sucks</Link>
          <Link href="/compare/facebook" className="hover:text-[#a3e635] transition-colors">Why Facebook is Lame</Link>
          <Link href="/compare/patreon" className="hover:text-[#a3e635] transition-colors">Why Patreon is a Waste of Time</Link>
          <Link href="/compare/reddit" className="hover:text-[#a3e635] transition-colors">Why Reddit...Seriously, Why?</Link>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-2 text-xs font-medium text-center md:text-left">
          <h4 className="text-white font-black uppercase tracking-widest mb-1">Support</h4>
          <Link href="/faqs" className="hover:text-[#a3e635] transition-colors">FAQs</Link>
          <Link href="/contact" className="hover:text-[#a3e635] transition-colors">Contact Us</Link>
          <a href="https://www.selloutcrowds.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#a3e635] transition-colors">Terms of Service</a>
          <a href="https://www.selloutcrowds.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#a3e635] transition-colors">Privacy Policy</a>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end gap-5">
        <div className="flex flex-wrap justify-center gap-3">
            <a href="https://apple.selloutcrowds.com/" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-gray-800 rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:border-gray-500 transition-all duration-300 group shadow-md">
              <AppStoreSVG size={24} className="text-white group-hover:text-gray-300 transition-colors" />
              <div className="flex flex-col text-left">
                  <span className="text-[8px] uppercase tracking-widest text-gray-500 leading-none">Download on the</span>
                  <span className="text-sm font-bold text-white leading-none mt-0.5">App Store</span>
              </div>
            </a>
            
            <a href="https://android.selloutcrowds.com/" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-gray-800 rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:border-gray-500 transition-all duration-300 group shadow-md">
              <GooglePlaySVG size={24} className="text-white group-hover:text-gray-300 transition-colors" />
              <div className="flex flex-col text-left">
                  <span className="text-[8px] uppercase tracking-widest text-gray-500 leading-none">GET IT ON</span>
                  <span className="text-sm font-bold text-white leading-none mt-0.5">Google Play</span>
              </div>
            </a>
        </div>
        
        <div className="flex items-center gap-3">
            <Link href="/">
              <img src="https://admin.beasellout.com/wp-content/uploads/2025/04/Mark.webp" alt="Sellout Crowds Mark" className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
            </Link>
            <p className="text-[10px] uppercase tracking-widest opacity-60 border-l border-gray-800 pl-3">&copy; {new Date().getFullYear()} Sellout Crowds. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);