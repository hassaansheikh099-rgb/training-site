import React, { useState } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  Download,
  Phone,
  ShieldCheck,
  Send,
  Star,
  CheckCircle2,
  Terminal,
  Smartphone,
  Briefcase,
  Cpu,
  Users,
  MapPin,
  ExternalLink,
  MessageCircle,
  Radio,
  Clock,
  Building2
} from 'lucide-react';
import { COURSES, CAMPUSES, ALUMNI_STORIES, HIRING_PARTNERS, ACCREDITATIONS } from '../data/nexskillData';

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
  onOpenApply: (courseTitle?: string) => void;
  onOpenSyllabus: (courseId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenApply,
  onOpenSyllabus
}) => {
  // Lead form state
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSpecialization, setLeadSpecialization] = useState('');
  const [leadMode, setLeadMode] = useState('oncampus');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Category filter state for courses
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'web' | 'cyber'>('all');

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadName('');
      setLeadPhone('');
      setLeadSpecialization('');
    }, 6000);
  };

  const filteredCourses = COURSES.filter((c) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') return c.category === 'ai' || c.category === 'data';
    if (selectedCategory === 'web') return c.category === 'web' || c.category === 'mobile';
    if (selectedCategory === 'cyber') return c.category === 'cyber';
    return true;
  }).slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          HERO SECTION WITH DUAL-COLUMN CONVERSION ARCHITECTURE
      ========================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#0f131c] py-12 lg:py-16">
        {/* Atmospheric Crimson Radial Glow Elements */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[650px] w-[650px] rounded-full bg-[#e11d48]/10 blur-[130px]"></div>
        <div className="pointer-events-none absolute bottom-0 -left-36 h-[500px] w-[500px] rounded-full bg-rose-500/5 blur-[100px]"></div>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Official Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#262a34] px-4 py-1.5 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ef4444]"></span>
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  🏆 Pakistan's #1 IT Training Institute • NAVTTC | PSDF | TEVTA Approved
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Transform Your Career with <span className="text-[#e11d48]">AI-Powered</span> Tech Education
                </h1>
                <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
                  Master cutting-edge technologies at Pakistan's premier IT institute. Industry-aligned curriculum, hands-on learning, and an 85% verified job placement rate with 200+ global hiring partners.
                </p>
              </div>

              {/* CTA Cluster */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('courses')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e11d48] text-white text-sm font-bold shadow-[0_0_24px_rgba(225,29,72,0.45)] hover:shadow-[0_0_32px_rgba(225,29,72,0.65)] hover:bg-[#be123c] transition-all cursor-pointer"
                >
                  <span>Explore Bootcamps 2026</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('courses')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#262a34] text-white text-sm font-semibold hover:bg-[#353943] transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Course Catalog</span>
                </button>

                <a
                  href="tel:+923096663330"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#1c1f29] text-secondary hover:text-white text-xs font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#10b981]" />
                  <span>+92 309 666 3330</span>
                </a>
              </div>

              {/* Verified Accreditation Proof Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-text-muted uppercase">Authorized By:</span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0e17] border border-white/5 text-secondary text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" /> NAVTTC NATIONAL
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0e17] border border-white/5 text-secondary text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" /> PSDF CERTIFIED
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0e17] border border-white/5 text-secondary text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" /> TEVTA RECOGNIZED
                </div>
              </div>
            </div>

            {/* Right Hero Floating Lead Capture Card (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-[#0d1322]/95 backdrop-blur-xl p-6 sm:p-7 shadow-2xl border border-white/10 relative">
                {/* Quick Badge */}
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#ef4444] animate-pulse"></span>
                    <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                      Admissions Live
                    </span>
                  </div>
                  <span className="text-[11px] text-text-muted bg-[#31353f] px-2.5 py-0.5 rounded font-bold">
                    FAST TRACK
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-bold text-white">Free Career Counseling</h3>
                  <p className="text-xs text-secondary">
                    Connect with our senior technical advisors within 15 minutes.
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-secondary mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="e.g. Hamza Tariq"
                      className="w-full h-11 px-3.5 rounded-lg bg-[#0a0e17] border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-[#e11d48] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-secondary mb-1">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="0309 666 3330"
                      className="w-full h-11 px-3.5 rounded-lg bg-[#0a0e17] border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-[#e11d48] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-secondary mb-1">
                      Target Tech Specialization
                    </label>
                    <select
                      required
                      value={leadSpecialization}
                      onChange={(e) => setLeadSpecialization(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg bg-[#0a0e17] border border-white/10 text-white text-sm focus:outline-none focus:border-[#e11d48] transition-all"
                    >
                      <option value="" disabled>Select Bootcamp Program</option>
                      <option value="fs-ai">Full Stack Artificial Intelligence (Agentic AI)</option>
                      <option value="web-ai">Software Engineering & Web Dev with AI</option>
                      <option value="cyber">Advance Cyber Security & Ethical Hacking</option>
                      <option value="uiux">UI/UX & Creative Product Design with AI</option>
                      <option value="marketing">Digital Growth Marketing & E-Commerce</option>
                      <option value="mobile">Flutter & Mobile App Development with AI</option>
                      <option value="data">Data Science & Big Data Analytics</option>
                      <option value="3d">3D Animation, Game Dev & Cinematic VFX</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-secondary mb-1">
                      Preferred Campus Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <label
                        className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                          leadMode === 'oncampus'
                            ? 'bg-[#1c1f29] border-[#e11d48]/50 text-white'
                            : 'bg-[#0a0e17] border-white/5 text-secondary'
                        }`}
                      >
                        <input
                          type="radio"
                          name="lead-campus-mode"
                          checked={leadMode === 'oncampus'}
                          onChange={() => setLeadMode('oncampus')}
                          className="accent-[#e11d48]"
                        />
                        <span className="text-xs font-medium">Physical Campus</span>
                      </label>
                      <label
                        className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                          leadMode === 'online'
                            ? 'bg-[#1c1f29] border-[#e11d48]/50 text-white'
                            : 'bg-[#0a0e17] border-white/5 text-secondary'
                        }`}
                      >
                        <input
                          type="radio"
                          name="lead-campus-mode"
                          checked={leadMode === 'online'}
                          onChange={() => setLeadMode('online')}
                          className="accent-[#e11d48]"
                        />
                        <span className="text-xs font-medium">Live Online LMS</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 h-12 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all cursor-pointer"
                  >
                    <span>Request Free Counseling & Syllabus</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {leadSubmitted && (
                  <div className="mt-3 p-3 rounded-lg bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981] text-xs font-semibold text-center animate-fadeIn">
                    ✓ Inquiry received! Counselor assigned. Check your WhatsApp shortly.
                  </div>
                )}

                <div className="pt-3 flex items-center justify-center gap-1.5 text-text-muted text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>100% Free • No Commitments • Instant PDF Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          METRIC COUNTERS RIBBON (STAT STRIP)
      ========================================================================== */}
      <section className="w-full bg-[#0a0e17] py-6 border-y border-white/5">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-[#1c1f29]/70 border border-white/5 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline tracking-tight">
                18<span className="text-[#e11d48]">K+</span>
              </div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                Graduated Alumni
              </div>
              <p className="text-[11px] text-text-muted">Working globally across 15+ countries</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1f29]/70 border border-white/5 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline tracking-tight">
                85<span className="text-[#e11d48]">%</span>
              </div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                Placement Rate
              </div>
              <p className="text-[11px] text-text-muted">Direct industry hire within 90 days</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1f29]/70 border border-white/5 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline tracking-tight">
                200<span className="text-[#e11d48]">+</span>
              </div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                Hiring Partners
              </div>
              <p className="text-[11px] text-text-muted">Active tech software houses & banks</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1f29]/70 border border-white/5 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline tracking-tight">
                100<span className="text-[#e11d48]">+</span>
              </div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                Programs & Modules
              </div>
              <p className="text-[11px] text-text-muted">AI, Cloud, Cyber & Growth Tech</p>
            </div>

            <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-[#1c1f29]/70 border border-white/5 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-1 tracking-tight">
                4.8<Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                Verified Reviews
              </div>
              <p className="text-[11px] text-text-muted">Over 7,000+ student testimonials</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RECOGNITION & GOVERNMENT ACCREDITATIONS
      ========================================================================== */}
      <section className="w-full bg-[#0f131c] py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                National Credentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Government Recognized Excellence
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-secondary max-w-md">
              NexSkill micro-degrees and certifications are officially validated by Pakistan's apex technical vocational councils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.code}
                className="p-6 rounded-2xl bg-[#0d1322] border border-white/5 hover:border-white/10 space-y-3 hover:bg-[#131c31] transition-all shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e11d48]/20 text-primary-container font-black text-xl flex items-center justify-center border border-[#e11d48]/30">
                  {acc.code}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {acc.name}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">{acc.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary">
                  <span>{acc.badgeText}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FLAGSHIP BOOTCAMP PROGRAMS (6 Bespoke Course Cards)
      ========================================================================== */}
      <section className="w-full bg-[#0a0e17] py-16" id="flagship-programs">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 space-y-8">
          {/* Section Header with Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase">
                <span className="w-2 h-2 rounded-full bg-[#e11d48]"></span>
                2026 Admissions Open
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Featured Flagship Bootcamps
              </h2>
              <p className="text-sm text-secondary">
                Accelerated, hands-on tracks built directly with industry chief architects.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_12px_rgba(225,29,72,0.4)]'
                    : 'bg-[#262a34] text-secondary hover:text-white'
                }`}
              >
                All Programs
              </button>
              <button
                onClick={() => setSelectedCategory('ai')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  selectedCategory === 'ai'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_12px_rgba(225,29,72,0.4)]'
                    : 'bg-[#262a34] text-secondary hover:text-white'
                }`}
              >
                AI & Machine Learning
              </button>
              <button
                onClick={() => setSelectedCategory('web')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  selectedCategory === 'web'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_12px_rgba(225,29,72,0.4)]'
                    : 'bg-[#262a34] text-secondary hover:text-white'
                }`}
              >
                Software & Cloud
              </button>
              <button
                onClick={() => setSelectedCategory('cyber')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  selectedCategory === 'cyber'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_12px_rgba(225,29,72,0.4)]'
                    : 'bg-[#262a34] text-secondary hover:text-white'
                }`}
              >
                Cyber Security
              </button>
            </div>
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl bg-[#0d1322] border border-white/5 p-6 flex flex-col justify-between space-y-4 shadow-lg group hover:border-[#e11d48]/40 hover:bg-[#131c31] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#e11d48]/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                      {course.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-muted">
                      <Clock className="w-3.5 h-3.5" /> {course.duration}
                    </span>
                  </div>

                  <div className="h-40 rounded-xl overflow-hidden relative bg-[#262a34]">
                    <img
                      src={course.image}
                      alt={course.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#070a10]/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[11px] font-medium text-white border border-white/10">
                      {course.bannerTags}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-secondary line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-[#1c1f29] text-[10px] text-text-muted">
                      {course.modeText}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1c1f29] text-[10px] text-[#10b981] font-semibold">
                      {course.placementRate}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-secondary">
                    <span>Avg Placement Salary:</span>
                    <span className="text-white font-bold">{course.avgPlacementSalary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenSyllabus(course.id)}
                      className="flex-1 py-2 rounded-lg bg-[#1c1f29] hover:bg-[#262a34] text-secondary hover:text-white text-xs font-semibold text-center transition-colors cursor-pointer"
                    >
                      Syllabus
                    </button>
                    <button
                      onClick={() => onOpenApply(course.title)}
                      className="flex-1 py-2 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold text-center shadow-[0_0_14px_rgba(225,29,72,0.4)] transition-all cursor-pointer"
                    >
                      Enroll in Track
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE NEXSKILL BENTO GRID
      ========================================================================== */}
      <section className="w-full bg-[#0f131c] py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              The NexSkill Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Engineered for Rapid Employment
            </h2>
            <p className="text-sm text-secondary">
              We combine real-time industry simulation, executive mentorship, and a direct pipeline to corporate recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Item 1: 100% Industry Driven */}
            <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/5 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#e11d48] text-white flex items-center justify-center shadow-lg">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  100% Industry-Driven Curriculum
                </h3>
                <p className="text-sm text-secondary max-w-xl leading-relaxed">
                  Curriculums are reviewed quarterly with software leads from top tech firms to obsolete deprecated libraries and prioritize tools companies are hiring for right now.
                </p>
              </div>

              <div className="pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#1c1f29] text-center border border-white/5">
                    <span className="text-base text-white block font-bold">120+ Hrs</span>
                    <span className="text-[11px] text-text-muted">Live Lab Coding</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#1c1f29] text-center border border-white/5">
                    <span className="text-base text-white block font-bold">1:1 Desk</span>
                    <span className="text-[11px] text-text-muted">Dedicated Mentors</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#1c1f29] text-center border border-white/5">
                    <span className="text-base text-white block font-bold">Git Verified</span>
                    <span className="text-[11px] text-text-muted">Public Repos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#1c1f29] text-center border border-white/5">
                    <span className="text-base text-white block font-bold">Real Data</span>
                    <span className="text-[11px] text-text-muted">Production CI/CD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Item 2: LMS App & 24/7 Access */}
            <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/5 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#262a34] text-primary flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">NexSkill LMS Mobile App</h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Review lectures, track attendance, complete micro-quizzes, and submit Git homework assignments straight from your phone with 24/7 access.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0e17] border border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs text-white font-bold">Google Play 4.5★</span>
                  <span className="text-[10px] text-text-muted block">1,000+ ACTIVE DOWNLOADS</span>
                </div>
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Bento Item 3: NexTalent Placement Cell */}
            <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/5 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#262a34] text-primary flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">NexTalent Placement Cell</h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Direct talent-bridge pairing graduates directly with HR recruiters, technical interview coaching, and private Job Fests held inside our tech hubs.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-secondary">Placement Success</span>
                  <span className="text-primary font-bold">85% Within 90 Days</span>
                </div>
                <div className="w-full bg-[#0a0e17] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#e11d48] h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Bento Item 4: Hands-on Lab Environment */}
            <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/5 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#262a34] text-primary flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">High-Spec Workstations</h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Campuses in Arfa Tower and Garden Town provide dual-monitor GPU rigs, high-speed optic fiber, uninterrupted power, and collaborative open-huddle rooms.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#10b981]">
                <span>GIGABIT FIBER • NVIDIA RTX WORKSTATIONS</span>
              </div>
            </div>

            {/* Bento Item 5: Lifetime Alumni Network */}
            <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/5 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#262a34] text-primary flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">18,000+ Lifetime Alumni</h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Lifelong access to secret Slack channels, founder roundtables, venture capital pitching sessions, and free access to updated lecture recordings.
                </p>
              </div>
              <div className="flex -space-x-2 overflow-hidden py-1">
                <div className="inline-block h-8 w-8 rounded-full bg-[#e11d48] text-[10px] text-center leading-8 font-bold text-white">
                  AR
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-[#39485a] text-[10px] text-center leading-8 font-bold text-slate-200">
                  ZA
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-[#353943] text-[10px] text-center leading-8 font-bold text-white">
                  MK
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-rose-500/30 text-[10px] text-center leading-8 font-bold text-primary">
                  +18k
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRY HIRING PARTNERS (LOGO WALL)
      ========================================================================== */}
      <section className="w-full bg-[#0a0e17] py-14 overflow-hidden border-y border-white/5">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">
              Direct Industry Pipeline
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Our Alumni Are Hired By Over 200+ Tech Leaders & Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {HIRING_PARTNERS.slice(0, 10).map((partner, idx) => (
              <div
                key={idx}
                className="h-20 rounded-xl bg-[#0d1322] border border-white/5 flex flex-col items-center justify-center p-3 hover:bg-[#131c31] transition-colors"
              >
                <span className={`text-base font-bold tracking-tight ${partner.color}`}>
                  {partner.name}
                </span>
                <span className="text-[10px] text-text-muted mt-0.5">{partner.tag}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => onNavigate('placement')}
              className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold hover:underline cursor-pointer"
            >
              <span>Are you an employer looking to hire vetted engineers? Partner with NexTalent</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MULTI-CAMPUS LOCATIONS SECTION
      ========================================================================== */}
      <section className="w-full bg-[#0f131c] py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Physical Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Find Your Nearest Campus
              </h2>
              <p className="text-sm text-secondary">
                State-of-the-art facilities across Lahore, Karachi, and South Punjab.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#10b981]"></span>
              <span className="text-xs text-white font-semibold">
                All Campuses Open Mon-Sun: 10:00 AM - 9:00 PM
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMPUSES.slice(0, 4).map((campus) => (
              <div
                key={campus.id}
                className="rounded-2xl bg-[#0d1322] border border-white/5 p-5 space-y-4 shadow-md flex flex-col justify-between hover:border-white/15 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#e11d48]/20 text-primary text-[10px] font-bold">
                      {campus.badge}
                    </span>
                    <span className="text-[#10b981] text-[10px] font-bold">● OPEN NOW</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{campus.name}</h3>
                    <p className="text-xs text-secondary pt-1 leading-relaxed">{campus.address}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 text-[10px] text-text-muted">
                    {campus.amenities.slice(0, 3).map((a, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-[#1c1f29]">
                        {a.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  <a
                    href={`tel:${campus.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-white text-xs flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span>{campus.phone}</span>
                  </a>
                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-lg bg-[#262a34] text-white text-xs font-semibold text-center block hover:bg-[#353943] transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDENT SUCCESS STORIES & SALARY HIKE TESTIMONIALS
      ========================================================================== */}
      <section className="w-full bg-[#0a0e17] py-16 border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Verified Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                From NexSkill Labs to High-Paying Tech Jobs
              </h2>
              <p className="text-sm text-secondary">
                Real salary transformations verified through our official NexTalent Job Placement Cell.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#0d1322] border border-white/5 flex items-center gap-3">
              <span className="text-primary text-xl font-extrabold">+210%</span>
              <span className="text-xs text-secondary">
                Average alumni salary hike post-graduation
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALUMNI_STORIES.slice(0, 3).map((story) => (
              <div
                key={story.id}
                className="p-6 rounded-2xl bg-[#0d1322] border border-white/5 space-y-4 flex flex-col justify-between shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-[#10b981]/20 text-[#10b981] text-[11px] font-bold">
                      {story.salaryHike}
                    </span>
                    <span className="text-text-muted text-[11px] font-medium">{story.batch}</span>
                  </div>
                  <p className="text-sm text-slate-200 italic leading-relaxed">{story.quote}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-white">{story.name}</div>
                    <div className="text-xs text-text-muted">
                      {story.role} • {story.company}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#e11d48]/20 text-primary flex items-center justify-center font-bold text-sm">
                    {story.initials}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          READY TO LAUNCH CALL TO ACTION BANNER
      ========================================================================== */}
      <section className="w-full bg-[#0f131c] py-16 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0d1322] via-[#131c31] to-[#0d1322] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            {/* Decorative Ambient Laser Red Flare */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#e11d48]/20 blur-3xl"></div>

            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e11d48]/20 px-3.5 py-1">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-primary uppercase">
                  2026 Batch Enrollment Closing Soon
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Ready to Launch Your IT Career with Pakistan's #1 Tech Academy?
              </h2>

              <p className="text-base text-secondary">
                Join over 18,000+ ambitious graduates who gained market-leading skills. Speak with an admissions advisor today or visit any campus branch.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+923096663330"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#e11d48] text-white text-sm font-bold shadow-[0_0_28px_rgba(225,29,72,0.5)] hover:bg-[#be123c] transition-all"
                >
                  <span>Call Admissions: +92 309 666 3330</span>
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/923096663330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#262a34] text-white text-sm font-semibold hover:bg-[#353943] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#10b981]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Franchise and Instructor mini links */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-text-muted">
                <button
                  onClick={() => onNavigate('placement')}
                  className="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Become an Instructor</span>
                </button>
                <span className="text-white/20">•</span>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Open a NexSkill Franchise</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
