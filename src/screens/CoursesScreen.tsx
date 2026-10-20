import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle,
  Clock,
  Calendar,
  Building,
  TrendingUp,
  Download,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Award,
  Phone,
  MessageCircle,
  Play,
  Star,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { COURSES, Course } from '../data/nexskillData';

interface CoursesScreenProps {
  onOpenApply: (courseTitle?: string) => void;
  onOpenSyllabus: (courseId: string) => void;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({ onOpenApply, onOpenSyllabus }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  // Category options
  const categories = [
    { id: 'all', label: 'All Courses (100+)' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'web', label: 'Full Stack Development' },
    { id: 'cyber', label: 'Cyber Security' },
    { id: 'design', label: 'Creative & UI/UX Design' },
    { id: 'mobile', label: 'Mobile App Dev' },
    { id: 'marketing', label: 'Digital Marketing & E-Com' },
    { id: 'data', label: 'Data Analytics' },
    { id: '3d', label: '3D Game & VFX' },
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Category match
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false;
      }
      // Duration match
      if (selectedDuration !== 'all' && course.durationCategory !== selectedDuration) {
        return false;
      }
      // Mode match
      if (selectedMode !== 'all') {
        if (selectedMode === 'campus' && course.deliveryMode === 'online') return false;
        if (selectedMode === 'online' && course.deliveryMode === 'campus') return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        const matchesTech = course.techStack.some((t) => t.toLowerCase().includes(query));
        const matchesInstructor = course.instructor.name.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTech && !matchesInstructor) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedMode, selectedDuration]);

  const handleQuickDownload = (courseId: string) => {
    setDownloadSuccessId(courseId);
    setTimeout(() => {
      setDownloadSuccessId(null);
    }, 2500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          HEADER SECTION
      ========================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#0f131c] pt-8 pb-10">
        {/* Ambient Glow */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#e11d48]/15 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-6">
          {/* Live Badge & Accreditation Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1f29] border border-white/5 text-white">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Future-Ready Tech Programs 2026
              </span>
            </div>

            <div className="flex items-center gap-3 text-secondary text-xs">
              <span className="inline-flex items-center gap-1 text-[#10b981] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> NAVTTC Approved
              </span>
              <span className="text-white/20">•</span>
              <span>PSDF Certified</span>
              <span className="text-white/20">•</span>
              <span>TEVTA Recognized</span>
            </div>
          </div>

          {/* Headline & Subhead */}
          <div className="max-w-4xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Industry-Aligned IT Bootcamps &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-primary to-[#ff2056]">
                Micro-Degree
              </span>{' '}
              Certifications
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              Browse 100+ accredited diploma and bootcamp programs designed with tech giants to get you hired within 90 days of graduation. Master high-demand stacks at Arfa Software Tech Park or Live Online.
            </p>
          </div>

          {/* Metric Strips Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0d1322]/90 backdrop-blur-md border border-white/5 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none">
                85<span className="text-[#e11d48]">%</span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-text-muted mt-2 font-bold">
                Placement Rate Within 90 Days
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1322]/90 backdrop-blur-md border border-white/5 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none">
                18<span className="text-[#e11d48]">K+</span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-text-muted mt-2 font-bold">
                Engineers & Tech Alumni
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1322]/90 backdrop-blur-md border border-white/5 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none">
                200<span className="text-[#e11d48]">+</span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-text-muted mt-2 font-bold">
                Hiring Corporate Partners
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1322]/90 backdrop-blur-md border border-white/5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="text-xl font-bold text-white">4.8 / 5</span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-text-muted mt-2 font-bold">
                Student Rating Across Campuses
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEARCH & FILTER CONTROLS
      ========================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-8 w-full">
        <div className="bg-[#0d1322]/90 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, frameworks (e.g., Python, LangChain, Flutter, Kali Linux, Next.js)..."
                className="w-full h-12 pl-12 pr-4 bg-[#070a10] rounded-xl border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-secondary hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dropdowns */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              {/* Delivery Mode */}
              <div className="relative min-w-[160px] flex-1 sm:flex-initial">
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="w-full h-12 px-3.5 pr-8 bg-[#070a10] rounded-xl border border-white/10 text-white text-xs font-semibold appearance-none focus:outline-none focus:border-[#e11d48]"
                >
                  <option value="all">All Delivery Modes</option>
                  <option value="campus">On-Campus Arfa Tower</option>
                  <option value="online">Online Live Interactive</option>
                </select>
                <ChevronDown className="w-4 h-4 text-secondary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Duration */}
              <div className="relative min-w-[160px] flex-1 sm:flex-initial">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full h-12 px-3.5 pr-8 bg-[#070a10] rounded-xl border border-white/10 text-white text-xs font-semibold appearance-none focus:outline-none focus:border-[#e11d48]"
                >
                  <option value="all">All Durations</option>
                  <option value="fast-track">Fast-Track (6 Weeks)</option>
                  <option value="bootcamp">Bootcamp (3-4 Months)</option>
                  <option value="micro-degree">Micro-Degree (6 Months)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-secondary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#e11d48] text-white shadow-[0_0_12px_rgba(225,29,72,0.4)]'
                      : 'bg-[#1c1f29] hover:bg-[#262a34] text-secondary hover:text-white border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          COURSE GRID (8 DETAILED CARDS)
      ========================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Featured Flagship Bootcamps
            </h2>
            <span className="px-2.5 py-0.5 rounded bg-[#262a34] text-primary text-xs font-bold">
              Batch: March 2026
            </span>
          </div>
          <span className="text-secondary text-xs hidden sm:inline">
            Showing {filteredCourses.length} High-Demand Programs
          </span>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center bg-[#0d1322] border border-white/5 rounded-2xl">
            <p className="text-secondary text-sm">No courses found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedMode('all');
                setSelectedDuration('all');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-[#e11d48] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                className="group relative flex flex-col justify-between bg-[#0d1322]/90 backdrop-blur-md rounded-2xl border border-white/5 hover:border-[#e11d48]/40 hover:shadow-[0_12px_32px_-8px_rgba(225,29,72,0.25)] transition-all duration-300 p-6 shadow-xl"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#e11d48]/20 border border-[#e11d48]/40 text-primary text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{course.badge}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#ef4444]/15 border border-[#ef4444]/30 text-[#ef4444] text-[11px] font-bold flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-ping"></span>
                      <span>{course.seatsLeftText}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-secondary mt-2 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {course.techStack.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#070a10] text-secondary text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Syllabus Preview Accordion */}
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <details className="group/det text-secondary text-xs">
                      <summary className="cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:text-primary transition-colors">
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span>Syllabus Breakdown (4 Modules)</span>
                        </span>
                        <ChevronDown className="w-4 h-4 text-secondary group-open/det:rotate-180 transition-transform" />
                      </summary>
                      <div className="mt-2.5 space-y-1 pl-2 border-l border-white/10 text-text-muted text-[11px]">
                        {course.syllabusModules.map((mod) => (
                          <div key={mod.number} className="truncate">
                            • Mod {mod.number}: {mod.title}
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>

                  {/* Instructor Preview */}
                  <div className="mt-4 flex items-center gap-3 p-2.5 rounded-xl bg-[#070a10]/70 border border-white/5">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.avatarAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-white font-bold truncate">
                        {course.instructor.name}
                      </span>
                      <span className="text-[10px] text-text-muted truncate">
                        {course.instructor.role}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Info */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-secondary text-xs">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-primary" />
                      <span className="truncate">{course.campusesAvailable}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-white font-semibold">{course.placementRate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>Starts {course.startDate}</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-3">
                  <button
                    onClick={() => handleQuickDownload(course.id)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#1c1f29] hover:bg-[#262a34] border border-white/5 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {downloadSuccessId === course.id ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-[#10b981]" />
                        <span className="text-[#10b981]">Downloaded PDF</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-primary" />
                        <span>Syllabus</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenApply(course.title)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold transition-all shadow-[0_0_16px_rgba(225,29,72,0.35)] flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Apply Batch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          MICRO-DEGREE VS FAST-TRACK COMPARISON MATRIX
      ========================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <div className="p-6 sm:p-10 bg-gradient-to-b from-[#0d1322] to-[#070a10] rounded-3xl border border-white/10 shadow-2xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e11d48]/15 border border-[#e11d48]/30 text-primary text-[11px] font-bold uppercase">
              Curriculum Path Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Micro-Degree vs Fast-Track vs Bootcamps
            </h2>
            <p className="text-sm text-secondary">
              Choose the trajectory suited to your commitments. Whether you need rapid market entry or deep architectural authority, each pathway comes with certified NexTalent placement support.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-secondary text-xs uppercase font-semibold">
                  <th className="py-4 px-4 text-white">Program Parameters</th>
                  <th className="py-4 px-4 text-primary">Fast-Track (6 Weeks)</th>
                  <th className="py-4 px-4 text-white">Job-Ready Bootcamp (3 Mo)</th>
                  <th className="py-4 px-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500 font-bold">
                    Micro-Degree (6 Months)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-secondary">
                <tr>
                  <td className="py-4 px-4 text-white font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" /> Weekly Commitment
                  </td>
                  <td className="py-4 px-4">8–10 Hours / Week</td>
                  <td className="py-4 px-4">15–20 Hours / Week</td>
                  <td className="py-4 px-4 text-white font-semibold">25–30 Hours (Intensive)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" /> Placement Commitment
                  </td>
                  <td className="py-4 px-4">Freelancing Mentorship & Profile Setup</td>
                  <td className="py-4 px-4">Direct Interview Referrals (85% Placement)</td>
                  <td className="py-4 px-4 text-white font-semibold">
                    Guaranteed Job Hunt Support & Incubator Access
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" /> Real-World Projects
                  </td>
                  <td className="py-4 px-4">2 Client-Ready Projects</td>
                  <td className="py-4 px-4">4 Full-Stack Production Deployments</td>
                  <td className="py-4 px-4 text-white font-semibold">
                    8 Enterprise Projects + 1 Capstone Patent Project
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" /> Official Credential
                  </td>
                  <td className="py-4 px-4">NexSkill Skill Completion Award</td>
                  <td className="py-4 px-4">NAVTTC / PSDF / NexSkill Bootcamp Cert</td>
                  <td className="py-4 px-4 text-primary font-semibold">
                    Gold-Standard Micro-Degree & Global Industry MOU
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> 1-on-1 Code Reviews
                  </td>
                  <td className="py-4 px-4">Weekly TA Group Office Hours</td>
                  <td className="py-4 px-4">Bi-Weekly 1-on-1 Tech Reviews</td>
                  <td className="py-4 px-4 text-white font-semibold">
                    Dedicated Industry Tech Mentor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LMS MOBILE APP CALLOUT SECTION
      ========================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0d1322] via-[#1c1f29] to-[#070a10] rounded-3xl border border-white/10 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e11d48]/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex-1 space-y-3 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262a34] border border-white/5 text-white text-xs">
              <Download className="w-3.5 h-3.5 text-primary" />
              <span>NexSkill Mobile LMS v3.0</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Learn Anywhere. Download the NexSkill Android App.
            </h2>
            <p className="text-sm text-secondary max-w-xl leading-relaxed">
              Never miss a lecture. Download course videos for offline viewing, complete daily coding quizzes, track your placement roadmap, and chat live with instructors from anywhere across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-white text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Offline Lecture Sync
              </div>
              <div className="flex items-center gap-2 text-white text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Automated Progress Tracking
              </div>
              <div className="flex items-center gap-2 text-white text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> 24/7 TA Community Chat
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.p2pclouds.nexskill_lms"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-black text-xs font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Google Play Store</span>
              </a>
              <div className="flex items-center gap-2 text-secondary text-xs">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-white font-bold">4.5★</span> Rating • 1,000+ Active Students
              </div>
            </div>
          </div>

          {/* Interactive QR Code Visual Component */}
          <div className="relative shrink-0 p-6 bg-[#070a10]/95 rounded-2xl border border-white/10 text-center shadow-xl z-10 flex flex-col items-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary mb-3">
              Instant Mobile Access
            </span>
            <div className="p-3 bg-white rounded-xl shadow-inner">
              <svg className="w-32 h-32 text-black" fill="currentColor" viewBox="0 0 100 100">
                <rect x="5" y="5" width="26" height="26" rx="4" fill="currentColor" />
                <rect x="9" y="9" width="18" height="18" rx="2" fill="white" />
                <rect x="13" y="13" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="69" y="5" width="26" height="26" rx="4" fill="currentColor" />
                <rect x="73" y="9" width="18" height="18" rx="2" fill="white" />
                <rect x="77" y="13" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="5" y="69" width="26" height="26" rx="4" fill="currentColor" />
                <rect x="9" y="73" width="18" height="18" rx="2" fill="white" />
                <rect x="13" y="77" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="36" y="8" width="6" height="6" fill="currentColor" />
                <rect x="46" y="8" width="8" height="6" fill="currentColor" />
                <rect x="58" y="16" width="6" height="8" fill="currentColor" />
                <rect x="36" y="24" width="8" height="6" fill="currentColor" />
                <rect x="48" y="24" width="6" height="6" fill="currentColor" />
                <rect x="8" y="38" width="6" height="8" fill="currentColor" />
                <rect x="20" y="44" width="12" height="6" fill="currentColor" />
                <rect x="38" y="38" width="16" height="16" rx="2" fill="#E11D48" />
                <rect x="60" y="38" width="6" height="8" fill="currentColor" />
                <rect x="72" y="44" width="8" height="6" fill="currentColor" />
                <rect x="86" y="38" width="6" height="12" fill="currentColor" />
                <rect x="36" y="62" width="8" height="6" fill="currentColor" />
                <rect x="50" y="62" width="6" height="10" fill="currentColor" />
                <rect x="64" y="62" width="10" height="6" fill="currentColor" />
                <rect x="80" y="62" width="12" height="6" fill="currentColor" />
                <rect x="36" y="76" width="6" height="14" fill="currentColor" />
                <rect x="48" y="80" width="14" height="6" fill="currentColor" />
                <rect x="68" y="76" width="8" height="6" fill="currentColor" />
                <rect x="82" y="82" width="8" height="8" fill="currentColor" />
              </svg>
            </div>
            <p className="text-xs text-white font-semibold mt-3">Scan to Download LMS</p>
            <span className="text-[10px] text-secondary">Android 9.0+ Supported</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSION ADVISORY BAR
      ========================================================================== */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e11d48]/20 border border-[#e11d48]/30 flex items-center justify-center shrink-0 text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Need Career Counseling or Batch Selection Guidance?
              </h4>
              <p className="text-xs text-secondary">
                Our technical career advisors at Arfa Tower & Garden Town are available 7 days a week.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:+923096663330"
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-lg bg-[#1c1f29] hover:bg-[#262a34] border border-white/5 text-white text-xs font-semibold text-center transition-colors"
            >
              Call +92 309 666 3330
            </a>
            <a
              href="https://wa.me/923096663330"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-lg bg-[#10b981]/20 border border-[#10b981]/40 text-[#10b981] hover:bg-[#10b981]/30 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Advisor</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
