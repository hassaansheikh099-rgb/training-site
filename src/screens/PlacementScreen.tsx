import React, { useState } from 'react';
import {
  Users,
  Award,
  TrendingUp,
  Building2,
  Terminal,
  Mic,
  Bug,
  PartyPopper,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
  Send,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Store,
  ExternalLink
} from 'lucide-react';
import {
  ALUMNI_STORIES,
  HIRING_PARTNERS,
  SALARY_BENCHMARKS
} from '../data/nexskillData';

interface PlacementScreenProps {
  onOpenApply: () => void;
}

export const PlacementScreen: React.FC<PlacementScreenProps> = ({ onOpenApply }) => {
  // Student registration form state
  const [candName, setCandName] = useState('');
  const [candId, setCandId] = useState('');
  const [candPhone, setCandPhone] = useState('');
  const [candTrack, setCandTrack] = useState('Full Stack AI & Web Development');
  const [candPortfolio, setCandPortfolio] = useState('');
  const [candSubmitted, setCandSubmitted] = useState(false);

  // Recruiter form state
  const [compName, setCompName] = useState('');
  const [compPerson, setCompPerson] = useState('');
  const [compEmail, setCompEmail] = useState('');
  const [compCount, setCompCount] = useState('1 - 3 Developers / Specialists');
  const [compStack, setCompStack] = useState('');
  const [compSubmitted, setCompSubmitted] = useState(false);

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCandSubmitted(true);
    setTimeout(() => {
      setCandSubmitted(false);
      setCandName('');
      setCandId('');
      setCandPhone('');
      setCandPortfolio('');
    }, 6000);
  };

  const handleRecruiterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompSubmitted(true);
    setTimeout(() => {
      setCompSubmitted(false);
      setCompName('');
      setCompPerson('');
      setCompEmail('');
      setCompStack('');
    }, 6000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] bg-[#e11d48]/10 rounded-full blur-[140px] -z-10"></div>
        <div className="pointer-events-none absolute top-1/3 -left-32 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] -z-10"></div>

        {/* =========================================================================
            HERO & TELEMETRY SECTION
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 pb-14 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1f29] text-primary text-xs font-bold uppercase tracking-widest shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
                </span>
                NexTalent Placement Cell • Career Acceleration Command
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                85% Job Placement Rate Across{' '}
                <span className="text-[#e11d48]">200+ Tech Partners</span>
              </h1>
              <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
                We do not just teach syntax—we guarantee structured career facilitation, paid corporate internships, portfolio audits, mock interviews with hiring leads, and direct hiring pipelines into top tech organizations.
              </p>
            </div>

            {/* Quick Dual Action Trigger */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => scrollToSection('student-registration')}
                className="px-6 py-3.5 rounded-lg bg-[#e11d48] text-white text-xs font-bold hover:shadow-[0_0_32px_rgba(225,29,72,0.6)] hover:bg-[#be123c] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Register as Candidate</span>
                <UserCheck className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('hire-talent')}
                className="px-6 py-3.5 rounded-lg bg-[#262a34] hover:bg-[#353943] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Hire NexSkill Talent (Free)</span>
                <Building2 className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>

          {/* High-Density Telemetry Metric Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-[#1c1f29]/70 backdrop-blur-md p-5 rounded-2xl shadow-sm flex flex-col justify-between border border-white/5">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Total Hired
                </span>
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                18,000<span className="text-[#e11d48]">+</span>
              </div>
              <p className="text-[11px] text-text-muted mt-1 uppercase tracking-wider">
                Alumni Placed Worldwide
              </p>
            </div>

            <div className="bg-[#1c1f29]/70 backdrop-blur-md p-5 rounded-2xl shadow-sm flex flex-col justify-between border border-white/5">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Placement Index
                </span>
                <CheckCircle className="w-5 h-5 text-[#10b981]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                85<span className="text-[#e11d48]">%</span>
              </div>
              <p className="text-[11px] text-text-muted mt-1 uppercase tracking-wider">
                Verified First-Quarter Hire
              </p>
            </div>

            <div className="bg-[#1c1f29]/70 backdrop-blur-md p-5 rounded-2xl shadow-sm flex flex-col justify-between border border-white/5">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Hiring Network
                </span>
                <Building2 className="w-5 h-5 text-sky-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                200<span className="text-[#e11d48]">+</span>
              </div>
              <p className="text-[11px] text-text-muted mt-1 uppercase tracking-wider">
                Active Tech MOU Partners
              </p>
            </div>

            <div className="bg-[#1c1f29]/70 backdrop-blur-md p-5 rounded-2xl shadow-sm flex flex-col justify-between border border-white/5">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Starting Range
                </span>
                <TrendingUp className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                85K <span className="text-secondary text-sm font-normal">-</span> 250K
              </div>
              <p className="text-[11px] text-text-muted mt-1 uppercase tracking-wider">
                PKR Avg Starting Packages
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            RECRUITERS & CORPORATE PARTNERS MATRIX
        ========================================================================== */}
        <section className="w-full bg-[#0a0e17] py-12 border-y border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Industry & Academia Ecosystem
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Trusted by 200+ Tech Leaders, Unicorns & Public Agencies
                </h2>
              </div>
              <span className="text-xs text-secondary">Verified MOUs • Direct Referral Pipelines</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {HIRING_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-[#0d1322] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-1 hover:bg-[#131c31] transition-colors shadow-sm min-h-[90px]"
                >
                  <span className={`text-base font-bold ${partner.color}`}>{partner.name}</span>
                  <span className="text-[10px] text-text-muted">{partner.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4-STEP NEXTALENT CAREER ENGINE
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Execution Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 4-Step NexTalent Career Engine
              </h2>
              <p className="text-xs sm:text-sm text-secondary max-w-xl">
                From line one of code to contract negotiation: how we maintain an undisputed 85% placement benchmark across batch graduates.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48] inline-block"></span>
              <span>Zero Commission to Candidate</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stage 1 */}
            <div className="bg-[#0d1322] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:bg-[#131c31] hover:border-white/10 transition-all shadow-md relative overflow-hidden group">
              <div className="absolute -right-3 -top-5 text-[100px] font-black text-white/5 select-none group-hover:text-[#e11d48]/10 transition-colors">
                1
              </div>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f29] flex items-center justify-center text-primary shadow-sm border border-white/5">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                    Stage 01 • Technical Depth
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">Real-World Capstones</h3>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Students build end-to-end production-grade software and AI models with live clients. No boilerplate tutorial code—real deployment environments with CI/CD.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between text-xs">
                <span className="text-secondary">Deliverable:</span>
                <span className="text-primary font-semibold">3 Live Verified Repos</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-[#0d1322] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:bg-[#131c31] hover:border-white/10 transition-all shadow-md relative overflow-hidden group">
              <div className="absolute -right-3 -top-5 text-[100px] font-black text-white/5 select-none group-hover:text-sky-500/10 transition-colors">
                2
              </div>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f29] flex items-center justify-center text-sky-400 shadow-sm border border-white/5">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                    Stage 02 • Presence & Pitch
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">Soft Skills & Profile Polish</h3>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Executive English articulation, global tech communication standards, ATS-optimized CV development, and an algorithm-attracting LinkedIn overhaul.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between text-xs">
                <span className="text-secondary">Deliverable:</span>
                <span className="text-sky-400 font-semibold">All-Star LinkedIn Score</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-[#0d1322] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:bg-[#131c31] hover:border-white/10 transition-all shadow-md relative overflow-hidden group">
              <div className="absolute -right-3 -top-5 text-[100px] font-black text-white/5 select-none group-hover:text-amber-500/10 transition-colors">
                3
              </div>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f29] flex items-center justify-center text-amber-400 shadow-sm border border-white/5">
                  <Bug className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    Stage 03 • Trial by Fire
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">Mock Technical Panels</h3>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Rigorous live whiteboard sessions, architectural design defenses, and algorithmic live coding challenges graded by Senior Staff Engineers from Systems & Remotebase.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between text-xs">
                <span className="text-secondary">Deliverable:</span>
                <span className="text-amber-400 font-semibold">Interview Score 90%+</span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-[#0d1322] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:bg-[#131c31] hover:border-white/10 transition-all shadow-md relative overflow-hidden group">
              <div className="absolute -right-3 -top-5 text-[100px] font-black text-white/5 select-none group-hover:text-[#10b981]/10 transition-colors">
                4
              </div>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f29] flex items-center justify-center text-[#10b981] shadow-sm border border-white/5">
                  <PartyPopper className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-wider">
                    Stage 04 • Direct Offer
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">Job Fest & Direct Intro</h3>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Quarterly on-campus and virtual Job Fests. Graduates pitch directly to HR leaders and Technical CTOs with same-week offers and salary negotiation backing.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between text-xs">
                <span className="text-secondary">Deliverable:</span>
                <span className="text-[#10b981] font-semibold">Written Offer Letter</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            DOCUMENTED SUCCESS STORIES
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                <span>Real Career Transformations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                From Beginners to Lead Engineers
              </h2>
              <p className="text-xs sm:text-sm text-secondary max-w-xl">
                Hear directly from graduates who leveled up their compensation, relocated, or landed high-paying remote roles through NexTalent.
              </p>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#1c1f29] text-secondary text-xs">
              <span className="text-white font-bold">7,000+</span> Verified Career Logs
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALUMNI_STORIES.slice(3, 6).map((story) => (
              <div
                key={story.id}
                className="bg-[#0d1322] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:bg-[#131c31] transition-all shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white/10"
                      />
                      <div>
                        <h4 className="text-base font-bold text-white">{story.name}</h4>
                        <p className="text-[11px] text-secondary uppercase">{story.track}</p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#10b981]/20 text-[#10b981] text-[11px] font-bold">
                      {story.salaryHike}
                    </div>
                  </div>

                  <div className="p-3 bg-[#070a10] rounded-xl flex items-center justify-between text-xs border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-text-muted">HIRED BY</span>
                      <span className="text-white font-bold">{story.company}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-text-muted">ROLE</span>
                      <span className="text-primary font-semibold">{story.role}</span>
                    </div>
                  </div>

                  <p className="text-xs text-secondary italic leading-relaxed">{story.quote}</p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {story.campus}
                  </span>
                  <span>Batch {story.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SALARY BENCHMARKS ACCELERATOR
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-14 w-full">
          <div className="bg-[#0d1322] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1c1f29] text-primary text-xs font-bold uppercase">
                  <TrendingUp className="w-4 h-4" /> Market Wage Benchmarks
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Verified Starting Salaries by Track (2025–2026)
                </h2>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Data compiled directly from verified graduate tax returns and signed corporate offer contracts across Lahore, Karachi, Islamabad, and global remote contracts.
                </p>
                <div className="space-y-2 pt-2 text-xs text-secondary">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981]" />
                    <span>Average 90-day time to hire after graduation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981]" />
                    <span>Includes local tech firm & overseas remote contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981]" />
                    <span>Free lifetime placement cell re-entry for alumni</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {SALARY_BENCHMARKS.map((benchmark, idx) => (
                  <div key={idx} className="space-y-2 bg-[#070a10] p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">{benchmark.track}</span>
                      <span className="text-primary font-bold">{benchmark.range}</span>
                    </div>
                    <div className="w-full bg-[#1c1f29] h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`${benchmark.color} h-full rounded-full transition-all duration-1000`}
                        style={{ width: benchmark.barWidth }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-text-muted">
                      <span>{benchmark.entry}</span>
                      <span>{benchmark.top}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            DUAL ACTION HUB: FOR CANDIDATES & FOR RECRUITERS
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pathway 1: For Students */}
            <div
              className="bg-[#0d1322] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden"
              id="student-registration"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#e11d48]/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                    Candidate Gateway
                  </span>
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Register with NexTalent Placement Cell</h3>
                <p className="text-xs text-secondary">
                  Currently enrolled students and alumni of NexSkill can upload their updated GitHub, portfolio, and CV to enter the direct referral pipeline for this quarter.
                </p>

                <form onSubmit={handleCandidateSubmit} className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={candName}
                        onChange={(e) => setCandName(e.target.value)}
                        placeholder="e.g. Asad Rehman"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        NexSkill Student ID / Roll #
                      </label>
                      <input
                        type="text"
                        required
                        value={candId}
                        onChange={(e) => setCandId(e.target.value)}
                        placeholder="e.g. NX-2025-449"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        WhatsApp Contact
                      </label>
                      <input
                        type="tel"
                        required
                        value={candPhone}
                        onChange={(e) => setCandPhone(e.target.value)}
                        placeholder="0300 1234567"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        Completed Track
                      </label>
                      <select
                        value={candTrack}
                        onChange={(e) => setCandTrack(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48]"
                      >
                        <option>Full Stack AI & Web Development</option>
                        <option>Advance Cyber Security</option>
                        <option>Mobile App Dev with AI</option>
                        <option>Game Development & 3D</option>
                        <option>Digital Growth Marketing</option>
                        <option>Data Science & Big Data</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                      Portfolio or GitHub Link
                    </label>
                    <input
                      type="url"
                      value={candPortfolio}
                      onChange={(e) => setCandPortfolio(e.target.value)}
                      placeholder="https://github.com/your-handle"
                      className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold shadow-[0_0_24px_rgba(225,29,72,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Candidate Dossier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {candSubmitted && (
                    <div className="text-center text-[#10b981] text-xs font-semibold py-2 bg-[#10b981]/15 rounded-lg border border-[#10b981]/30">
                      ✓ Profile received! NexTalent career agent will schedule your technical audit within 24 hours.
                    </div>
                  )}
                </form>
              </div>
              <div className="pt-4 text-center">
                <span className="text-[11px] text-text-muted">
                  Need urgent assistance? Call Admissions Hotline:{' '}
                  <span className="text-white font-bold">+92 309 666 3330</span>
                </span>
              </div>
            </div>

            {/* Pathway 2: For Recruiters / Employers */}
            <div
              className="bg-[#0d1322] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden"
              id="hire-talent"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-wider">
                    For Employers & HR
                  </span>
                  <Building2 className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Hire Top NexSkill Tech Talent</h3>
                <p className="text-xs text-secondary">
                  Save thousands on recruiter fees. Connect directly with pre-vetted, NAVTTC/PSDF certified developers and designers ready for immediate hire on 0% agency placement fee.
                </p>

                <form onSubmit={handleRecruiterSubmit} className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={compName}
                        onChange={(e) => setCompName(e.target.value)}
                        placeholder="e.g. Apex Tech Labs"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        Contact Person & Title
                      </label>
                      <input
                        type="text"
                        required
                        value={compPerson}
                        onChange={(e) => setCompPerson(e.target.value)}
                        placeholder="e.g. Sarah Khan (HR Lead)"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        Official Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={compEmail}
                        onChange={(e) => setCompEmail(e.target.value)}
                        placeholder="hr@company.com"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                        Talent Count Required
                      </label>
                      <select
                        value={compCount}
                        onChange={(e) => setCompCount(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                      >
                        <option>1 - 3 Developers / Specialists</option>
                        <option>4 - 10 Tech Roles (Batch Hire)</option>
                        <option>10+ Cohort / Corporate Incubation</option>
                        <option>Paid Internships Cohort</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-secondary uppercase mb-1">
                      Primary Tech Stack Needed
                    </label>
                    <input
                      type="text"
                      value={compStack}
                      onChange={(e) => setCompStack(e.target.value)}
                      placeholder="e.g. Next.js, Node, Python AI, Flutter, or SOC Analyst"
                      className="w-full h-11 px-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-[0_0_24px_rgba(14,165,233,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Free Pre-Screened Candidates</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {compSubmitted && (
                    <div className="text-center text-[#10b981] text-xs font-semibold py-2 bg-[#10b981]/15 rounded-lg border border-[#10b981]/30">
                      ✓ Request received! NexTalent Corporate Officer will dispatch shortlisted resumes in 2 hours.
                    </div>
                  )}
                </form>
              </div>
              <div className="pt-4 text-center">
                <span className="text-[11px] text-text-muted">
                  Corporate Placement Officer Direct:{' '}
                  <span className="text-white font-bold">trainings@nexskill.com</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INSTRUCTOR & FRANCHISE ACCELERATOR FOOTER CALLOUTS
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Become an Instructor */}
            <div className="bg-[#1c1f29]/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase">
                  <Terminal className="w-4 h-4" /> Industry Mentorship
                </div>
                <h4 className="text-lg font-bold text-white">Become an Instructor</h4>
                <p className="text-xs text-secondary max-w-sm">
                  Join Pakistan’s elite training squad. Lead specialized bootcamps at Arfa Tower, Karachi, or online while earning top honorariums.
                </p>
              </div>
              <button
                onClick={() => onOpenApply()}
                className="px-5 py-2.5 rounded-lg bg-[#0d1322] text-white hover:bg-[#e11d48] hover:text-white text-xs font-bold transition-all shrink-0 cursor-pointer border border-white/10"
              >
                Apply as Trainer
              </button>
            </div>

            {/* Start Franchise */}
            <div className="bg-[#1c1f29]/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase">
                  <Store className="w-4 h-4" /> Entrepreneurship
                </div>
                <h4 className="text-lg font-bold text-white">Start a NexSkill Franchise</h4>
                <p className="text-xs text-secondary max-w-sm">
                  Bring Pakistan’s #1 vocational IT institute to your city with our turnkey curriculum, NAVTTC accreditations, and LMS infrastructure.
                </p>
              </div>
              <a
                href="mailto:franchise@nexskill.com?subject=NexSkill%20Franchise%20Inquiry"
                className="px-5 py-2.5 rounded-lg bg-[#0d1322] text-white hover:bg-amber-500 hover:text-black text-xs font-bold transition-all shrink-0 border border-white/10"
              >
                Franchise Kit
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
