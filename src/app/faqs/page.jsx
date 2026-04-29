"use client";
import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, MessageCircleQuestion, Search, Users, ShieldAlert, Zap, 
  LayoutDashboard, CreditCard, MonitorPlay, HelpCircle, 
  Plus, Trash2, Pencil, Save, Lock, X, Copy
} from 'lucide-react';
import { GlobalStyles, Header, Footer, RevealOnScroll } from '../../components/SharedUI';

// Map string icon names to actual Lucide components so they survive JSON saving
const ICON_MAP = {
  MessageCircleQuestion, Users, ShieldAlert, Zap, LayoutDashboard, CreditCard, MonitorPlay, HelpCircle
};

const defaultFaqsData = {
  fans: [
    {
      id: "general",
      icon: "MessageCircleQuestion",
      title: "General",
      faqs: [
        {
          id: "f1",
          q: "Does Sellout Crowds cost?",
          a: "Admission to Sellout Crowds is free! Now, if you want to be the main event, we have multiple levels that can be found on our Creators page."
        },
        {
          id: "f2",
          q: "Why is my FanFeed empty?",
          a: "Your FanFeed only shows content from the Crowds you join, so go out there and find your favorite teams, leagues and creators to join in on the action."
        },
        {
          id: "f3",
          q: "What is a Crowd?",
          a: "Crowds are communities dedicated to a sport, league, event, creator, or brand. there are many free Crowds for users to join for general interaction, news and information. There are also paid, subscription-based Crowds that users can join to connect with their favorite brands and creators."
        },
        {
          id: "f4",
          q: "Who can create a Crowd?",
          a: "Crowds can be created by users that upgrade their account to one of our creator packages. Free users are not able to create Crowds….but they can join as many as they like!"
        },
        {
          id: "f5",
          q: "What are Spaces?",
          a: "Spaces are groups within Crowds for more focused conversation or more exclusive access."
        },
        {
          id: "f6",
          q: "Who can post content?",
          a: "Articles, videos, and podcasts can be posted by Crowd owners and teammates. Fans can find their seats and enjoy the show."
        },
        {
          id: "f7",
          q: "Can I sync my fantasy teams?",
          a: "Yes, users can sync their fantasy team scores to the scoreboard. Only Sleeper football leagues are available at the moment with plans to expand into more sports and platforms in the near future."
        },
        {
          id: "f8",
          q: "Who can create Spaces?",
          a: "Anyone can create a Space! Fans can create Spaces within all of the free, public Crowds of their favorite leagues and teams. Content Creators can create those Spaces, too, but they can also create Spaces within their own Crowds to help organize topics or audiences."
        }
      ]
    },
    {
      id: "account",
      icon: "Users",
      title: "Account & Profile",
      faqs: [
        { 
          id: "f9",
          q: "How do I reset my password?", 
          a: "You can easily reset your password from the login screen by clicking the 'Forgot Password' link. We'll send a secure reset link directly to your registered email address." 
        },
        { 
          id: "f10",
          q: "How do I edit my profile information?", 
          a: "Once logged in, click on your avatar in the top right corner and navigate to 'Settings'. From there, you can update your bio, profile picture, and display name." 
        }
      ]
    },
    {
      id: "safety",
      icon: "ShieldAlert",
      title: "Safety & Privacy",
      faqs: [
        { 
          id: "f11",
          q: "How do I report inappropriate content?", 
          a: "We take community safety seriously. If you see a post or comment that violates our guidelines, click the three dots (...) next to the content and select 'Report'. Our moderation team will review it immediately." 
        }
      ]
    }
  ],
  creators: [
    {
      id: "getting-started",
      icon: "Zap",
      title: "Getting Started",
      faqs: [
        { 
          id: "c1",
          q: "How do I upgrade to a Creator account?", 
          a: "Head over to the Creators page and select the pricing tier that fits your needs. Once you complete the checkout process, your account will instantly be upgraded with all your new tools." 
        }
      ]
    },
    {
      id: "customization",
      icon: "LayoutDashboard",
      title: "Customize Your Space",
      faqs: [
        { 
          id: "c2",
          q: "How do I add a Brand Badge?", 
          a: "Upload your custom logo in the Creator Hub settings. Your Brand Badge will appear next to your name globally across the platform, letting fans know you're an official creator." 
        },
        { 
          id: "c3",
          q: "How can I add or remove tabs in my Crowd?", 
          a: "You can completely customize your Crowd's layout from the Creator Hub. Choose which tabs (like Spaces, Leaderboards, or specific Content feeds) are visible to your fans." 
        },
        { 
          id: "c4",
          q: "Can I hide or show fans on the leaderboard?", 
          a: "Yes! You have full control over the privacy of your leaderboards in the settings menu. You can make them completely public, private, or hide specific elements." 
        }
      ]
    },
    {
      id: "monetization",
      icon: "CreditCard",
      title: "Monetization & Stripe",
      faqs: [
        { 
          id: "c5",
          q: "How do I connect my Stripe account?", 
          a: "You can securely connect your existing Stripe account through your Creator Dashboard under the Monetization tab. We use official Stripe APIs to ensure all transactions are routed safely directly to you." 
        },
        { 
          id: "c6",
          q: "What is a Stripe Webhook and do I need it?", 
          a: "Stripe webhooks can be configured in your Creator Hub. This ensures your Crowd perfectly syncs with fan payments in real-time, automatically granting or revoking access based on subscription status." 
        },
        { 
          id: "c7",
          q: "How do I place ads and offers in my Crowd?", 
          a: "As a Creator, you own your ad space! You can inject custom banner ads, affiliate links, and sponsored content directly into your Crowd's feed from the Ad Management tool in your Hub." 
        }
      ]
    },
    {
      id: "integrations",
      icon: "MonitorPlay",
      title: "YouTube & Integrations",
      faqs: [
        { 
          id: "c8",
          q: "How do I add a YouTube Playlist?", 
          a: "Start syncing your YouTube content and automatically post videos by adding your channel link and Playlist ID directly into the Integrations tab in your Creator Hub." 
        },
        { 
          id: "c9",
          q: "Where do I get my YouTube API Key?", 
          a: "Your YouTube API Key is needed to allow us to securely fetch your videos. You can generate one for free from the Google Cloud Console. Check out our detailed guide in the Creator Hub for step-by-step instructions." 
        }
      ]
    }
  ]
};

export default function FAQsPage() {
  const [data, setData] = useState(defaultFaqsData);
  const [activeMode, setActiveMode] = useState('fans'); // 'fans' | 'creators'
  const [activeCategory, setActiveCategory] = useState(data.fans[0]?.id);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // ADMIN SYSTEM
  const [isAdmin, setIsAdmin] = useState(false);
  const [secretClickCount, setSecretClickCount] = useState(0);
  const [editingFaq, setEditingFaq] = useState(null);

  // Load from local storage on mount if exists
  useEffect(() => {
    const saved = localStorage.getItem('soc_faqs_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed);
        setActiveCategory(parsed.fans[0]?.id);
      } catch(e) { console.error("Failed to load FAQs", e); }
    }
  }, []);

  const saveToStorage = (newData) => {
    setData(newData);
    localStorage.setItem('soc_faqs_data', JSON.stringify(newData));
  };

  // --- Secret Admin Login ---
  const handleSecretClick = () => {
    const newCount = secretClickCount + 1;
    setSecretClickCount(newCount);
    if (newCount === 3) {
      setSecretClickCount(0);
      const pwd = window.prompt("Enter Admin Password:");
      if (pwd === "sellout2026") {
        setIsAdmin(true);
        alert("Admin mode activated!");
      } else if (pwd !== null) {
        alert("Incorrect password.");
      }
    }
  };

  // --- Admin Category Controls ---
  const handleAddCategory = () => {
    const title = window.prompt("Enter Category Title:");
    if (!title) return;
    
    const newCat = {
      id: `cat_${Date.now()}`,
      icon: "HelpCircle", // Default icon
      title: title,
      faqs: []
    };

    const newData = { ...data, [activeMode]: [...data[activeMode], newCat] };
    saveToStorage(newData);
    setActiveCategory(newCat.id);
  };

  const handleEditCategory = (id) => {
    const cat = data[activeMode].find(c => c.id === id);
    const newTitle = window.prompt("Edit Category Title:", cat.title);
    if (!newTitle) return;

    const newData = {
      ...data,
      [activeMode]: data[activeMode].map(c => c.id === id ? { ...c, title: newTitle } : c)
    };
    saveToStorage(newData);
  };

  const handleDeleteCategory = (id) => {
    if (!window.confirm("Are you sure you want to delete this category AND all its questions?")) return;
    const newData = {
      ...data,
      [activeMode]: data[activeMode].filter(c => c.id !== id)
    };
    saveToStorage(newData);
    if (activeCategory === id) setActiveCategory(newData[activeMode][0]?.id);
  };

  // --- Admin FAQ Controls ---
  const handleAddFaq = () => {
    setEditingFaq({ id: `faq_${Date.now()}`, q: '', a: '', isNew: true });
  };

  const handleSaveFaq = () => {
    if (!editingFaq.q || !editingFaq.a) { alert("Please fill out both Question and Answer."); return; }
    
    const currentCats = [...data[activeMode]];
    const catIndex = currentCats.findIndex(c => c.id === activeCategory);
    
    if (editingFaq.isNew) {
      delete editingFaq.isNew;
      currentCats[catIndex].faqs.push(editingFaq);
    } else {
      currentCats[catIndex].faqs = currentCats[catIndex].faqs.map(f => f.id === editingFaq.id ? editingFaq : f);
    }

    saveToStorage({ ...data, [activeMode]: currentCats });
    setEditingFaq(null);
  };

  const handleDeleteFaq = (faqId) => {
    if (!window.confirm("Delete this FAQ?")) return;
    const currentCats = [...data[activeMode]];
    const catIndex = currentCats.findIndex(c => c.id === activeCategory);
    currentCats[catIndex].faqs = currentCats[catIndex].faqs.filter(f => f.id !== faqId);
    saveToStorage({ ...data, [activeMode]: currentCats });
  };

  // --- Export Data ---
  const handleExportData = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    alert("FAQ Data copied to clipboard! Paste this over 'defaultFaqsData' in the code to make it permanent for everyone.");
  };

  const handleModeSwitch = (mode) => {
    setActiveMode(mode);
    setActiveCategory(data[mode][0]?.id);
    setOpenAccordion(null);
    setSearchQuery("");
  };

  const currentCategories = data[activeMode] || [];
  
  // Flatten and filter FAQs if searching, otherwise just use the active category
  let displayedFaqs = [];
  if (searchQuery.trim() !== "") {
    currentCategories.forEach(cat => {
      cat.faqs.forEach(faq => {
        if (faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || faq.a.toLowerCase().includes(searchQuery.toLowerCase())) {
          displayedFaqs.push({ ...faq, _catTitle: cat.title });
        }
      });
    });
  } else {
    const category = currentCategories.find(c => c.id === activeCategory);
    if (category) displayedFaqs = category.faqs;
  }

  // --- Component: FAQ Accordion ---
  const FAQAccordion = ({ faq, isOpen, onClick }) => {
    const contentRef = useRef(null);
    return (
      <div className="border border-white/10 bg-[#111] rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-700 mb-4 group relative">
        <button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onClick={onClick}>
          <div className="pr-8">
            <span className={`block font-black tracking-tight text-lg transition-colors ${isOpen ? 'text-[#a3e635]' : 'text-white'}`}>{faq.q}</span>
            {faq._catTitle && <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 block">In: {faq._catTitle}</span>}
          </div>
          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#a3e635]/20 text-[#a3e635] rotate-180' : 'bg-white/5 text-gray-400'}`}>
            <ChevronDown size={18} />
          </div>
        </button>
        <div ref={contentRef} className="transition-all duration-300 ease-in-out overflow-hidden" style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}>
          <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-white/5 mt-2 pt-4">
            {faq.a}
          </div>
        </div>
        
        {/* Admin Controls overlay */}
        {isAdmin && !searchQuery && (
          <div className="absolute top-4 right-16 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
             <button onClick={(e) => { e.stopPropagation(); setEditingFaq(faq); }} className="p-2 bg-white/10 hover:bg-[#a3e635] hover:text-black text-white rounded-lg transition-colors" title="Edit FAQ"><Pencil size={14}/></button>
             <button onClick={(e) => { e.stopPropagation(); handleDeleteFaq(faq.id); }} className="p-2 bg-white/10 hover:bg-red-500 text-white rounded-lg transition-colors" title="Delete FAQ"><Trash2 size={14}/></button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#0a0a0a] min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black">
      <GlobalStyles />
      <Header />
      
      {isAdmin && (
        <div className="fixed top-[70px] left-0 w-full bg-[#a3e635] text-black text-xs font-black uppercase tracking-widest text-center py-2 z-50 flex items-center justify-center gap-4 shadow-lg shadow-[#a3e635]/20">
          <span>Admin Edit Mode Active</span>
          <button onClick={handleExportData} className="bg-black text-white px-3 py-1 rounded hover:bg-gray-900 flex items-center gap-1.5"><Copy size={12}/> Export Code</button>
          <button onClick={() => setIsAdmin(false)} className="bg-black/10 hover:bg-black/20 text-black px-3 py-1 rounded">Exit</button>
        </div>
      )}

      <main className={`flex-1 w-full relative pt-32 pb-24 ${isAdmin ? 'mt-8' : ''}`}>
        <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-[#111] to-[#0a0a0a] pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#a3e635]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <RevealOnScroll>
              {/* Click this title 3 times to login */}
              <h1 onClick={handleSecretClick} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 select-none cursor-default">
                How can we <span className="text-[#a3e635]">help?</span>
              </h1>
              
              <div className="relative max-w-xl mx-auto mb-10">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Search size={20} />
                </div>
                <input 
                  type="text" 
                  className="w-full bg-[#111] border border-gray-800 focus:border-[#a3e635] text-white rounded-2xl pl-12 pr-4 py-4 font-medium outline-none transition-all placeholder:text-gray-600 shadow-lg"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-center gap-2 bg-gray-900 p-1.5 rounded-full inline-flex border border-gray-800 shadow-lg">
                <button onClick={() => handleModeSwitch('fans')} className={`px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeMode === 'fans' ? 'bg-[#a3e635] text-black shadow-md' : 'text-gray-500 hover:text-white'}`}>
                  For Fans
                </button>
                <button onClick={() => handleModeSwitch('creators')} className={`px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeMode === 'creators' ? 'bg-[#a3e635] text-black shadow-md' : 'text-gray-500 hover:text-white'}`}>
                  For Creators
                </button>
              </div>
            </RevealOnScroll>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative items-start">
            
            {/* LEFT SIDEBAR: CATEGORIES */}
            <div className="w-full md:w-64 lg:w-72 shrink-0 md:sticky md:top-24">
              <RevealOnScroll delay={100}>
                <div className="bg-[#111] border border-gray-800 rounded-3xl p-2 md:p-4 flex flex-row md:flex-col overflow-x-auto no-scrollbar shadow-xl gap-1">
                  
                  {currentCategories.map((category) => {
                    const IconComp = ICON_MAP[category.icon] || HelpCircle;
                    const isActive = activeCategory === category.id && searchQuery === "";
                    return (
                      <div key={category.id} className="relative group flex items-center">
                        <button
                          onClick={() => { setActiveCategory(category.id); setSearchQuery(""); setOpenAccordion(null); }}
                          className={`flex items-center gap-3 w-full text-left px-4 py-3 md:py-4 rounded-xl transition-all duration-200 whitespace-nowrap md:whitespace-normal font-bold text-sm ${isActive ? 'bg-[#1a1a1a] text-[#a3e635] border border-[#a3e635]/30 shadow-sm' : 'text-gray-400 border border-transparent hover:bg-white/5 hover:text-white'}`}
                        >
                          <span className={`${isActive ? 'text-[#a3e635]' : 'text-gray-500'}`}><IconComp size={18}/></span>
                          <span className="truncate flex-1">{category.title}</span>
                        </button>
                        
                        {isAdmin && (
                          <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                            <button onClick={() => handleEditCategory(category.id)} className="p-1.5 bg-black hover:bg-[#a3e635] text-gray-400 hover:text-black rounded border border-white/10"><Pencil size={12}/></button>
                            <button onClick={() => handleDeleteCategory(category.id)} className="p-1.5 bg-black hover:bg-red-500 text-gray-400 hover:text-white rounded border border-white/10"><Trash2 size={12}/></button>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {isAdmin && (
                    <button onClick={handleAddCategory} className="flex items-center justify-center gap-2 mt-2 w-full px-4 py-3 rounded-xl border border-dashed border-[#a3e635]/30 text-[#a3e635] hover:bg-[#a3e635]/10 font-black uppercase text-[10px] tracking-widest transition-all">
                      <Plus size={14} /> Add Category
                    </button>
                  )}
                </div>
              </RevealOnScroll>
            </div>

            {/* RIGHT SIDEBAR: FAQS */}
            <div className="flex-1 w-full min-h-[500px]">
              <RevealOnScroll delay={200}>
                
                {searchQuery !== "" && (
                  <div className="mb-6 text-gray-400 font-medium">
                    Showing results for <span className="text-white font-bold">"{searchQuery}"</span>
                  </div>
                )}

                {isAdmin && searchQuery === "" && (
                  <div className="mb-4 flex justify-end">
                    <button onClick={handleAddFaq} className="flex items-center gap-2 bg-[#a3e635] text-black px-4 py-2.5 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-white transition-colors shadow-lg">
                      <Plus size={14} /> Add New FAQ
                    </button>
                  </div>
                )}

                {displayedFaqs.length > 0 ? (
                  <div className="flex flex-col">
                    {displayedFaqs.map((faq, index) => (
                      <FAQAccordion 
                        key={faq.id} 
                        faq={faq} 
                        isOpen={openAccordion === index}
                        onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[#111] border border-gray-800 rounded-3xl">
                    <MessageCircleQuestion size={48} className="text-gray-700 mb-4" />
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">No results found</h3>
                    <p className="text-gray-400 font-medium">{searchQuery ? "We couldn't find any FAQs matching your search." : "No FAQs added to this category yet."}</p>
                    {searchQuery && (
                        <button onClick={() => setSearchQuery("")} className="mt-6 text-[#a3e635] font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">Clear Search</button>
                    )}
                  </div>
                )}
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* ADMIN EDIT FAQ MODAL */}
      {isAdmin && editingFaq && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#111] border border-gray-800 rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
              <h3 className="text-xl font-black uppercase text-white">{editingFaq.isNew ? 'Add FAQ' : 'Edit FAQ'}</h3>
              <button onClick={() => setEditingFaq(null)} className="text-gray-500 hover:text-white"><X size={20}/></button>
            </div>
            
            <div className="p-6 space-y-5 overflow-y-auto max-h-[60vh]">
              <div>
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2 block">Question</label>
                <input 
                  type="text" 
                  value={editingFaq.q} 
                  onChange={e => setEditingFaq({...editingFaq, q: e.target.value})} 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-bold focus:border-[#a3e635] outline-none" 
                  placeholder="e.g. How much does it cost?"
                />
              </div>
              <div>
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2 block">Answer</label>
                <textarea 
                  rows="6"
                  value={editingFaq.a} 
                  onChange={e => setEditingFaq({...editingFaq, a: e.target.value})} 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:border-[#a3e635] outline-none resize-y" 
                  placeholder="Provide the detailed answer here..."
                />
              </div>
            </div>

            <div className="p-6 border-t border-white/5 flex justify-end gap-3 bg-[#0a0a0a]">
              <button onClick={() => setEditingFaq(null)} className="px-6 py-3 text-gray-400 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors">Cancel</button>
              <button onClick={handleSaveFaq} className="px-8 py-3 bg-[#a3e635] text-black rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-colors flex items-center gap-2"><Save size={14}/> Save FAQ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}