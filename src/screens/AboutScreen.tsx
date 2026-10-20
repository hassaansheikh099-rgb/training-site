import React from 'react';
import {
  Award,
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { ACCREDITATIONS } from '../data/nexskillData';

interface AboutScreenProps {
  onOpenApply: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenApply, onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 bg-[#e11d48]/15 rounded-full blur-[128px] -z-10"></div>
        <div className="pointer-events-none absolute top-1/3 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] -z-10"></div>

        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 pb-14 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1f29] text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Pakistan's Next 100,000 Tech Leaders
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              About <span className="text-[#e11d48]">NexSkill</span> Tech Institute
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              Founded under the technological leadership of P2P Clouds, NexSkill has grown to become Pakistan's apex vocational and advanced IT training powerhouse. We exist to bridge the gap between academic theory and high-paying engineering careers.
            </p>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/5 space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#e11d48]/20 text-primary flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Our Mission</h3>
              <p className="text-xs text-secondary leading-relaxed">
                To equip Pakistani youth with globally competitive AI, software, cyber security, and creative technology competencies, fostering high-value employment and remote freelancing economies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/5 space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Our Pedagogy</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Zero boring slides. 100% interactive lab coding, real-time bug bounty environments, and production-grade client software deployment from week one.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/5 space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/20 text-[#10b981] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Apex Accreditations</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Recognized officially by the National Vocational and Technical Training Commission (NAVTTC), Punjab Skills Development Fund (PSDF), and TEVTA.
              </p>
            </div>
          </div>
        </section>

        {/* Milestone Statistics */}
        <section className="w-full bg-[#0a0e17] py-12 border-y border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-4xl font-black text-white">
                  18,000<span className="text-[#e11d48]">+</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Engineers Graduated
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-white">
                  85<span className="text-[#e11d48]">%</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Verified Placement
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-white">
                  5<span className="text-[#e11d48]">+</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Physical Technology Hubs
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-white">
                  200<span className="text-[#e11d48]">+</span>
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Corporate Hiring Partners
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations Detailed */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16 w-full space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Institutional Authority
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Approved by Pakistan's Apex Educational Councils
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.code}
                className="p-6 rounded-2xl bg-[#0d1322] border border-white/5 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#e11d48]/20 text-primary font-bold text-base flex items-center justify-center">
                  {acc.code}
                </div>
                <h3 className="text-base font-bold text-white">{acc.name}</h3>
                <p className="text-xs text-secondary leading-relaxed">{acc.description}</p>
                <div className="pt-2 text-[11px] font-bold text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>{acc.council}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-8 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0d1322] via-[#1c1f29] to-[#0d1322] border border-white/10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-xl font-bold text-white">Start Your Learning Journey Today</h3>
              <p className="text-xs text-secondary">
                Join our next batch starting at Arfa Software Tech Park, Garden Town, Karachi, or online.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onOpenApply}
                  className="px-6 py-2.5 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] cursor-pointer"
                >
                  Apply for Admission
                </button>
                <button
                  onClick={() => onNavigate('courses')}
                  className="px-6 py-2.5 rounded-lg bg-[#262a34] text-white text-xs font-semibold hover:bg-[#353943] transition-colors cursor-pointer"
                >
                  Explore Course Catalog
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
