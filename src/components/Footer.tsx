import React from 'react';
import { Building2, Phone, ShieldCheck, ExternalLink, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApply }) => {
  return (
    <footer className="w-full bg-[#0a0e17] border-t border-white/10 pt-16 pb-12 text-sm text-secondary">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full ring-1 ring-[#e11d48]/40 bg-[#0d1322]">
                <img
                  src="/assets/aistudio/Image_1_3d6c4153.jpeg"
                  alt="NexSkill Brandmark"
                  className="w-8 h-8 rounded-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Nex<span className="text-[#e11d48]">Skill</span>
              </span>
            </div>
            <p className="text-sm text-secondary leading-relaxed max-w-sm">
              Pakistan's #1 IT Training Institute empowering ambitious learners with market-validated skills in Software, AI, and Next-Gen Cyber Technologies. Approved by NAVTTC, PSDF, and TEVTA.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1 rounded bg-[#1c1f29] border border-white/5 text-white text-[11px] font-bold tracking-wider uppercase">
                18,000+ GRADUATES
              </div>
              <div className="px-3 py-1 rounded bg-[#1c1f29] border border-white/5 text-primary text-[11px] font-bold tracking-wider uppercase">
                85% PLACEMENT RATE
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why NexSkill
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placement')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Job Placement Cell
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placement')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Corporate Trainings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placement')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Become an Instructor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Start Franchise
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Programs */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">Popular Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Full Stack AI Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Web Dev with AI (Next.js)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Advance Cyber Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Digital Growth Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mobile App with Flutter
                </button>
              </li>
            </ul>
          </div>

          {/* Campus Helplines */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">Campus Helplines</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Lahore: Arfa Software Tech Park</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Lahore: New Garden Town</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Lahore: Bahria Town</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Karachi: PARSA Tower, PECHS</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Mian Channu: Sanaullah Complex</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation Ribbons */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-secondary font-semibold uppercase tracking-wider">Accredited & Recognized By:</span>
            <span className="px-3 py-1 rounded bg-[#1c1f29] border border-white/5 text-white font-bold tracking-wider">
              NAVTTC APPROVED
            </span>
            <span className="px-3 py-1 rounded bg-[#1c1f29] border border-white/5 text-white font-bold tracking-wider">
              PSDF CERTIFIED
            </span>
            <span className="px-3 py-1 rounded bg-[#1c1f29] border border-white/5 text-white font-bold tracking-wider">
              TEVTA RECOGNIZED
            </span>
          </div>
          <div className="text-white font-semibold flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>UAN: +92 309 666 3330</span>
          </div>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>© 2026 NexSkill EdTech. Powered by P2P Clouds. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenApply()}
              className="hover:text-primary transition-colors flex items-center gap-1 font-semibold text-rose-400"
            >
              <span>Verification Portal</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
