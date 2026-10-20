import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Building, Calendar, Phone, Mail, User, BookOpen } from 'lucide-react';
import { COURSES, CAMPUSES } from '../data/nexskillData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseTitle?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, initialCourseTitle }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(initialCourseTitle || COURSES[0].title);
  const [selectedCampus, setSelectedCampus] = useState(CAMPUSES[0].name);
  const [mode, setMode] = useState<'oncampus' | 'online'>('oncampus');
  const [shift, setShift] = useState('Evening (6:00 PM - 8:30 PM)');
  const [scholarshipOptIn, setScholarshipOptIn] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `NX-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRegId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0d1322] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Glow Accent Header */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-primary to-rose-600"></div>

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#1c1f29] text-secondary hover:text-white hover:bg-[#262a34] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#e11d48]/20 border border-[#e11d48]/40 text-primary text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Fast Track Admissions 2026
                </span>
                <span className="text-secondary text-xs">● Instant Merit Counseling</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Apply for NexSkill Tech Bootcamp
              </h2>
              <p className="text-sm text-secondary mt-1 mb-6">
                Reserve your workstation or virtual seat. Government certified (NAVTTC / PSDF / TEVTA) with 85% verified job placement.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Hamza Tariq"
                        className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0309 666 3330"
                        className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-secondary uppercase mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-[#070a10] border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-secondary uppercase mb-1.5">
                    Select Bootcamp Program *
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white text-sm focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase mb-1.5">
                      Campus Location *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                      <select
                        value={selectedCampus}
                        onChange={(e) => setSelectedCampus(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white text-sm focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all"
                      >
                        {CAMPUSES.map((camp) => (
                          <option key={camp.id} value={camp.name}>
                            {camp.name} ({camp.cityName})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-secondary uppercase mb-1.5">
                      Shift Preference
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                      <select
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white text-sm focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening (6:00 PM - 8:30 PM)">Evening (6:00 PM - 8:30 PM)</option>
                        <option value="Weekend (Sat & Sun Intensive)">Weekend (Sat & Sun Intensive)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Campus Mode Selection */}
                <div>
                  <label className="block text-xs font-semibold text-secondary uppercase mb-1.5">
                    Delivery Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setMode('oncampus')}
                      className={`p-3 rounded-lg border text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        mode === 'oncampus'
                          ? 'border-[#e11d48] bg-[#e11d48]/15 text-white'
                          : 'border-white/10 bg-[#070a10] text-secondary hover:text-white'
                      }`}
                    >
                      <Building className="w-4 h-4 text-primary" />
                      <span>Physical Campus Lab</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('online')}
                      className={`p-3 rounded-lg border text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        mode === 'online'
                          ? 'border-[#e11d48] bg-[#e11d48]/15 text-white'
                          : 'border-white/10 bg-[#070a10] text-secondary hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-sky-400" />
                      <span>Live Online Interactive</span>
                    </button>
                  </div>
                </div>

                {/* Scholarship Checkbox */}
                <label className="flex items-start gap-2.5 p-3 rounded-lg bg-[#070a10] border border-white/5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={scholarshipOptIn}
                    onChange={(e) => setScholarshipOptIn(e.target.checked)}
                    className="mt-0.5 accent-[#e11d48]"
                  />
                  <div className="text-xs">
                    <span className="text-white font-semibold block">
                      Include me in PSDF/NAVTTC Merit Scholarship & Early-Bird Discount Assessment
                    </span>
                    <span className="text-secondary">
                      Eligible students receive up to 30% tuition subsidy based on evaluation quiz.
                    </span>
                  </div>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-sm shadow-[0_0_24px_rgba(225,29,72,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Application & Claim Fast-Track Seat</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase inline-block">
                Application Received!
              </span>
              <h3 className="text-2xl font-extrabold text-white">Welcome to NexSkill!</h3>
              <p className="text-sm text-secondary max-w-md mx-auto">
                Thank you <strong className="text-white">{fullName}</strong>! Your application for{' '}
                <strong className="text-primary">{selectedCourse}</strong> has been registered into the 2026 Batch queue.
              </p>

              <div className="p-4 rounded-xl bg-[#070a10] border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-secondary">Registration ID:</span>
                  <span className="text-white font-mono font-bold text-sm text-rose-400">{regId}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-secondary">Selected Venue:</span>
                  <span className="text-white font-semibold">{selectedCampus}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-secondary">Delivery Mode:</span>
                  <span className="text-white font-semibold">
                    {mode === 'oncampus' ? 'Physical Campus Lab' : 'Live Online LMS'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Next Step:</span>
                  <span className="text-emerald-400 font-semibold">WhatsApp Verification within 15 mins</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/923096663330?text=Hi%20NexSkill,%20I%20just%20applied%20with%20Reg%20ID%20${regId}%20for%20${encodeURIComponent(selectedCourse)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 hover:bg-emerald-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Open WhatsApp Directly</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg bg-[#1c1f29] text-white font-semibold text-xs hover:bg-[#262a34] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
