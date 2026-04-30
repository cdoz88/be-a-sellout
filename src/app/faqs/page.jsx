"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  ChevronDown, MessageCircleQuestion, Search, Users, ShieldAlert, Zap, 
  LayoutDashboard, CreditCard, MonitorPlay, HelpCircle, 
  Plus, Trash2, Pencil, Save, X, Bold, Italic, Link2, GripVertical, ChevronUp, Loader2,
  Star, Settings, Globe, Mail, Phone, ShoppingBag, Award, Info, FileText, Video, Camera
} from "lucide-react";
import { GlobalStyles, Header, Footer, RevealOnScroll } from "../../components/SharedUI";

// We map string names to the actual components so we can safely save them as text in your JSON
const ICON_MAP = {
  MessageCircleQuestion, Users, ShieldAlert, Zap, LayoutDashboard, CreditCard, MonitorPlay, HelpCircle,
  Star, Settings, Globe, Mail, Phone, ShoppingBag, Award, Info, FileText, Video, Camera
};

export default function FAQsPage() {
  const [data, setData] = useState({ fans: [], creators: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [activeMode, setActiveMode] = useState("fans"); 
  const [activeCategory, setActiveCategory] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [secretClickCount, setSecretClickCount] = useState(0);
  
  // Modals state
  const [editingFaq, setEditingFaq] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [draggedFaqIndex, setDraggedFaqIndex] = useState(null);

  // 1. Fetch data from our API route on load
  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(json => {
        setData(json);
        if (json.fans && json.fans.length > 0) {
          setActiveCategory(json.fans[0].id);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load FAQs", err);
        setIsLoading(false);
      });
  }, []);

  // 2. Save data to our API route
  const saveToServer = async (newData) => {
    setIsSaving(true);
    try {
      await fetch('/api/faqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
      });
      setData(newData);
    } catch (e) {
      alert("Failed to save changes to the server.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSecretClick = () => {
    const newCount = secretClickCount + 1;
    setSecretClickCount(newCount);
    if (newCount === 3) {
      setSecretClickCount(0);
      const pwd = window.prompt("Enter Admin Password:");
      if (pwd === "sellout2026") {
        setIsAdmin(true);
      } else if (pwd !== null) {
        alert("Incorrect password.");
      }
    }
  };

  // --- Category Management ---
  const handleAddCategory = () => {
    setEditingCategory({
      id: "cat_" + Date.now(),
      title: "",
      icon: "HelpCircle", // Default icon
      isNew: true
    });
  };

  const handleEditCategory = (id) => {
    const cat = data[activeMode].find(c => c.id === id);
    setEditingCategory({ ...cat, isNew: false });
  };

  const handleSaveCategory = () => {
    if (!editingCategory.title) { alert("Please enter a category title."); return; }
    
    const currentModeData = [...data[activeMode]];
    
    if (editingCategory.isNew) {
      const { isNew, ...rest } = editingCategory;
      rest.faqs = []; // New categories start with no faqs
      currentModeData.push(rest);
      saveToServer({ ...data, [activeMode]: currentModeData });
      setActiveCategory(rest.id);
    } else {
      const index = currentModeData.findIndex(c => c.id === editingCategory.id);
      currentModeData[index] = { ...currentModeData[index], title: editingCategory.title, icon: editingCategory.icon };
      saveToServer({ ...data, [activeMode]: currentModeData });
    }
    setEditingCategory(null);
  };

  const handleDeleteCategory = (id) => {
    if (!window.confirm("Are you sure you want to delete this category AND all its questions?")) return;
    const newData = { ...data, [activeMode]: data[activeMode].filter(c => c.id !== id) };
    saveToServer(newData);
    if (activeCategory === id) setActiveCategory(newData[activeMode][0] ? newData[activeMode][0].id : null);
  };

  const moveCatUp = (index) => {
    if (index === 0) return;
    const currentCats = [...data[activeMode]];
    [currentCats[index - 1], currentCats[index]] = [currentCats[index], currentCats[index - 1]];
    saveToServer({ ...data, [activeMode]: currentCats });
  };

  const moveCatDown = (index) => {
    const currentCats = [...data[activeMode]];
    if (index === currentCats.length - 1) return;
    [currentCats[index + 1], currentCats[index]] = [currentCats[index], currentCats[index + 1]];
    saveToServer({ ...data, [activeMode]: currentCats });
  };

  // --- FAQ Management ---
  const handleAddFaq = () => {
    setEditingFaq({ id: "faq_" + Date.now(), q: "", a: "", isNew: true });
  };

  const handleSaveFaq = () => {
    if (!editingFaq.q || !editingFaq.a) { alert("Please fill out both Question and Answer."); return; }
    const currentCats = [...data[activeMode]];
    const catIndex = currentCats.findIndex(c => c.id === activeCategory);
    if (editingFaq.isNew) {
      const { isNew, ...rest } = editingFaq;
      currentCats[catIndex].faqs.push(rest);
    } else {
      currentCats[catIndex].faqs = currentCats[catIndex].faqs.map(f => f.id === editingFaq.id ? editingFaq : f);
    }
    saveToServer({ ...data, [activeMode]: currentCats });
    setEditingFaq(null);
  };

  const handleDeleteFaq = (faqId) => {
    if (!window.confirm("Delete this FAQ?")) return;
    const currentCats = [...data[activeMode]];
    const catIndex = currentCats.findIndex(c => c.id === activeCategory);
    currentCats[catIndex].faqs = currentCats[catIndex].faqs.filter(f => f.id !== faqId);
    saveToServer({ ...data, [activeMode]: currentCats });
  };

  // --- Drag and Drop Logic ---
  const handleFaqDragStart = (e, index) => {
    setDraggedFaqIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleFaqDragOver = (e, index) => {
    e.preventDefault();
    if (draggedFaqIndex === null || draggedFaqIndex === index) return;
    
    const currentCats = [...data[activeMode]];
    const catIndex = currentCats.findIndex(c => c.id === activeCategory);
    const faqs = [...currentCats[catIndex].faqs];
    
    const draggedItem = faqs[draggedFaqIndex];
    faqs.splice(draggedFaqIndex, 1);
    faqs.splice(index, 0, draggedItem);
    
    currentCats[catIndex].faqs = faqs;
    setData({ ...data, [activeMode]: currentCats });
    setDraggedFaqIndex(index);
  };

  const handleFaqDragEnd = () => {
    setDraggedFaqIndex(null);
    saveToServer(data); // Save the new order to the backend!
  };

  const handleModeSwitch = (mode) => {
    setActiveMode(mode);
    setActiveCategory(data[mode][0] ? data[mode][0].id : null);
    setOpenAccordion(null);
    setSearchQuery("");
  };

  const insertTag = (prefix, suffix) => {
    const textarea = document.getElementById("faq-answer-editor");
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = editingFaq.a || "";
    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);
    setEditingFaq({ ...editingFaq, a: before + prefix + selected + suffix + after });
    setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#a3e635] animate-spin" />
      </div>
    );
  }

  const currentCategories = data[activeMode] || [];
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

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#0a0a0a] min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black">
      <GlobalStyles />
      <Header />
      
      {isAdmin && (
        <div className="fixed top-[70px] left-0 w-full bg-[#a3e635] text-black text-xs font-black uppercase tracking-widest text-center py-2 z-50 flex items-center justify-center gap-4 shadow-lg shadow-[#a3e635]/20">
          <span className="flex items-center gap-2">
            Admin Mode {isSaving && <Loader2 size={12} className="animate-spin" />}
          </span>
          <button onClick={() => setIsAdmin(false)} className="bg-black/10 hover:bg-black/20 text-black px-3 py-1 rounded">Exit</button>
        </div>
      )}

      <main className={"flex-1 w-full relative pt-32 pb-24 " + (isAdmin ? "mt-8" : "")}>
        <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-[#111] to-[#0a0a0a] pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#a3e635]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <RevealOnScroll>
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
                <button onClick={() => handleModeSwitch("fans")} className={"px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 " + (activeMode === "fans" ? "bg-[#a3e635] text-black shadow-md" : "text-gray-500 hover:text-white")}>
                  For Fans
                </button>
                <button onClick={() => handleModeSwitch("creators")} className={"px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 " + (activeMode === "creators" ? "bg-[#a3e635] text-black shadow-md" : "text-gray-500 hover:text-white")}>
                  For Creators
                </button>
              </div>
            </RevealOnScroll>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative items-start">
            
            {/* CATEGORIES SIDEBAR */}
            <div className="w-full md:w-64 lg:w-72 shrink-0 md:sticky md:top-24">
              <RevealOnScroll delay={100}>
                <div className="bg-[#111] border border-gray-800 rounded-3xl p-2 md:p-4 flex flex-row md:flex-col overflow-x-auto no-scrollbar shadow-xl gap-2">
                  
                  {currentCategories.map((category, index) => {
                    const IconComp = ICON_MAP[category.icon] || HelpCircle;
                    const isActive = activeCategory === category.id && searchQuery === "";
                    return (
                      <div key={category.id} className="relative group flex items-center">
                        <button
                          onClick={() => { setActiveCategory(category.id); setSearchQuery(""); setOpenAccordion(null); }}
                          className={"flex items-center gap-3 w-full text-left px-4 py-3 md:py-4 rounded-xl transition-all duration-200 whitespace-nowrap md:whitespace-normal font-bold text-sm " + (isActive ? "bg-[#1a1a1a] text-[#a3e635] border border-[#a3e635]/30 shadow-sm" : "text-gray-400 border border-transparent hover:bg-white/5 hover:text-white")}
                        >
                          <span className={isActive ? "text-[#a3e635]" : "text-gray-500"}><IconComp size={18}/></span>
                          <span className="truncate flex-1">{category.title}</span>
                        </button>
                        
                        {isAdmin && (
                          <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-[#1a1a1a] p-1 rounded-lg border border-white/10 shadow-xl z-10">
                            <div className="flex flex-col gap-0.5 border-r border-white/10 pr-1">
                                <button onClick={() => moveCatUp(index)} disabled={index===0} className={`p-1 rounded ${index===0 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}><ChevronUp size={10}/></button>
                                <button onClick={() => moveCatDown(index)} disabled={index===currentCategories.length-1} className={`p-1 rounded ${index===currentCategories.length-1 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}><ChevronDown size={10}/></button>
                            </div>
                            <button onClick={() => handleEditCategory(category.id)} className="p-1 hover:text-[#a3e635] text-gray-400 rounded"><Pencil size={12}/></button>
                            <button onClick={() => handleDeleteCategory(category.id)} className="p-1 hover:text-red-500 text-gray-400 rounded"><Trash2 size={12}/></button>
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

            {/* FAQS LIST */}
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
                    {displayedFaqs.map((faq, index) => {
                      const isOpen = openAccordion === index;
                      const isDragged = draggedFaqIndex === index;
                      
                      return (
                        <div 
                          key={faq.id} 
                          draggable={isAdmin && !searchQuery} 
                          onDragStart={(e) => handleFaqDragStart(e, index)} 
                          onDragOver={(e) => handleFaqDragOver(e, index)} 
                          onDragEnd={handleFaqDragEnd}
                          className={`border bg-[#111] rounded-2xl overflow-hidden transition-all duration-300 mb-4 group relative ${isDragged ? 'opacity-50 border-[#a3e635]' : 'border-white/10 hover:border-gray-700'}`}
                        >
                          <div className="flex">
                            {isAdmin && !searchQuery && (
                              <div className="w-8 flex items-center justify-center border-r border-white/5 bg-black/20 text-gray-600 cursor-grab hover:text-white">
                                <GripVertical size={16} />
                              </div>
                            )}
                            <div className="flex-1">
                              <button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onClick={() => setOpenAccordion(isOpen ? null : index)}>
                                <div className="pr-8">
                                  <span className={"block font-black tracking-tight text-lg transition-colors " + (isOpen ? "text-[#a3e635]" : "text-white")}>{faq.q}</span>
                                  {faq._catTitle && <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 block">In: {faq._catTitle}</span>}
                                </div>
                                <div className={"shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 " + (isOpen ? "bg-[#a3e635]/20 text-[#a3e635] rotate-180" : "bg-white/5 text-gray-400")}>
                                  <ChevronDown size={18} />
                                </div>
                              </button>
                              
                              {isOpen && (
                                <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-white/5 mt-2 pt-4 whitespace-pre-wrap animate-in slide-in-from-top-2" dangerouslySetInnerHTML={{ __html: faq.a || "" }} />
                              )}
                            </div>
                          </div>

                          {isAdmin && !searchQuery && (
                            <div className="absolute top-4 right-16 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                               <button onClick={(e) => { e.stopPropagation(); setEditingFaq(faq); }} className="p-2 bg-black hover:bg-[#a3e635] hover:text-black text-white rounded-lg border border-white/10 shadow-xl transition-colors" title="Edit FAQ"><Pencil size={14}/></button>
                               <button onClick={(e) => { e.stopPropagation(); handleDeleteFaq(faq.id); }} className="p-2 bg-black hover:bg-red-500 text-white rounded-lg border border-white/10 shadow-xl transition-colors" title="Delete FAQ"><Trash2 size={14}/></button>
                            </div>
                          )}
                        </div>
                      );
                    })}
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

      {/* ADMIN EDIT CATEGORY MODAL */}
      {isAdmin && editingCategory && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#111] border border-gray-800 rounded-3xl w-full max-w-lg shadow-2xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
              <h3 className="text-xl font-black uppercase text-white">{editingCategory.isNew ? "Add Category" : "Edit Category"}</h3>
              <button onClick={() => setEditingCategory(null)} className="text-gray-500 hover:text-white"><X size={20}/></button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2 block">Category Title</label>
                <input 
                  type="text" 
                  value={editingCategory.title} 
                  onChange={e => setEditingCategory({...editingCategory, title: e.target.value})} 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-bold focus:border-[#a3e635] outline-none" 
                  placeholder="e.g. Monetization & Stripe"
                />
              </div>
              
              <div>
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-3 block">Select an Icon</label>
                <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
                  {Object.keys(ICON_MAP).map(iconName => {
                    const IconComp = ICON_MAP[iconName];
                    const isSelected = editingCategory.icon === iconName;
                    return (
                      <button
                        key={iconName}
                        onClick={() => setEditingCategory({...editingCategory, icon: iconName})}
                        className={`flex items-center justify-center p-3 rounded-xl border transition-all ${isSelected ? 'bg-[#a3e635] text-black border-[#a3e635] shadow-lg shadow-[#a3e635]/20 scale-110 z-10' : 'bg-black border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
                        title={iconName}
                      >
                        <IconComp size={20} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-white/5 flex justify-end gap-3 bg-[#0a0a0a]">
              <button onClick={() => setEditingCategory(null)} className="px-6 py-3 text-gray-400 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors">Cancel</button>
              <button onClick={handleSaveCategory} className="px-8 py-3 bg-[#a3e635] text-black rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-colors flex items-center gap-2"><Save size={14}/> Save Category</button>
            </div>
          </div>
        </div>
      )}

      {/* ADMIN EDIT FAQ MODAL */}
      {isAdmin && editingFaq && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#111] border border-gray-800 rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
              <h3 className="text-xl font-black uppercase text-white">{editingFaq.isNew ? "Add FAQ" : "Edit FAQ"}</h3>
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
                <div className="flex items-center justify-between mb-2">
                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest block">Answer</label>
                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                        <button onClick={() => insertTag("<b>", "</b>")} className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Bold"><Bold size={14}/></button>
                        <button onClick={() => insertTag("<i>", "</i>")} className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Italic"><Italic size={14}/></button>
                        <button onClick={() => { const url = window.prompt("Enter Link URL:"); if(url) insertTag('<a href="' + url + '" target="_blank" class="text-[#a3e635] hover:underline">', '</a>'); }} className="p-1.5 text-gray-400 hover:text-[#a3e635] hover:bg-white/10 rounded transition-colors" title="Link"><Link2 size={14}/></button>
                    </div>
                </div>
                <textarea 
                  id="faq-answer-editor"
                  rows="8"
                  value={editingFaq.a} 
                  onChange={e => setEditingFaq({...editingFaq, a: e.target.value})} 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:border-[#a3e635] outline-none resize-y" 
                  placeholder="Provide the detailed answer here. HTML tags allowed."
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