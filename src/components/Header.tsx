import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenApply: (courseTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, onOpenApply }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses & Bootcamps' },
    { id: 'campuses', label: 'Campuses & Branches' },
    { id: 'placement', label: 'Job Placement & NexTalent' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070a10]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      {/* Top Ticker / Notification Bar */}
      <div className="bg-[#0a0e17] py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between text-xs text-secondary font-medium">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
            </span>
            <span className="text-white font-bold tracking-wide shrink-0">LIVE</span>
            <span className="truncate text-secondary">Job Ready Bootcamps 2026 Admissions Open!</span>
            <span className="hidden md:inline text-white/30">|</span>
            <a href="tel:+923096663330" className="hidden md:inline text-white hover:text-primary transition-colors">
              Call: +92 309 666 3330
            </a>
            <span className="hidden lg:inline text-white/30">|</span>
            <span className="hidden lg:inline text-secondary">trainings@nexskill.com</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('campuses')}
              className="text-secondary hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Branches</span>
            </button>
            <a
              href="https://wa.me/923096663330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10b981] hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 xl:gap-8">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="p-1 rounded-full ring-2 ring-[#e11d48]/50 bg-[#0d1322] shadow-[0_0_16px_rgba(225,29,72,0.35)] group-hover:scale-105 transition-transform">
              <img
                src="/assets/aistudio/Image_1_3d6c4153.jpeg"
                alt="NexSkill Brand Logo"
                className="w-8 h-8 rounded-full object-contain"
                onError={(e) => {
                  // Fallback to high quality vector if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<div class="w-8 h-8 flex items-center justify-center font-bold text-rose-500 text-lg">▲</div>';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl text-white tracking-tight leading-none group-hover:text-white/90">
                Nex<span className="text-[#e11d48]">Skill</span>
              </span>
              <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold mt-0.5">
                Tech Institute
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm transition-all cursor-pointer font-medium ${
                    isActive
                      ? 'bg-[#e11d48] text-white font-bold shadow-[0_0_20px_rgba(225,29,72,0.45)]'
                      : 'text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1f29] border border-white/5 text-xs text-secondary">
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span className="text-white font-semibold">Hotline:</span>
            <span>+92 309 6663330</span>
          </div>

          <button
            onClick={() => onOpenApply()}
            className="px-4 sm:px-5 py-2.5 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-sm font-bold shadow-[0_0_24px_rgba(225,29,72,0.5)] hover:shadow-[0_0_32px_rgba(225,29,72,0.7)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#1c1f29] text-white hover:bg-[#262a34] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d1322] border-b border-white/10 px-4 py-4 space-y-2 animate-fadeIn shadow-2xl">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-[#e11d48] text-white'
                    : 'text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <ArrowRight className="w-4 h-4" />}
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+923096663330"
              className="flex items-center gap-2 p-3 rounded-lg bg-[#1c1f29] text-white text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call Hotline: +92 309 666 3330</span>
            </a>
            <a
              href="https://wa.me/923096663330"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 rounded-lg bg-[#10b981]/20 border border-[#10b981]/30 text-[#10b981] text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
