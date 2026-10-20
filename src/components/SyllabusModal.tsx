import React, { useState } from 'react';
import { X, Download, CheckCircle, BookOpen, Clock, Calendar, Laptop, Award } from 'lucide-react';
import { Course } from '../data/nexskillData';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (courseTitle: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ course, onClose, onApply }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!course) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0d1322] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Glow Header */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-primary to-sky-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#1c1f29] text-secondary hover:text-white hover:bg-[#262a34] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">
          {/* Header Title */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#e11d48]/20 border border-[#e11d48]/30 text-primary text-[11px] font-bold uppercase tracking-wider">
                {course.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white/5 text-secondary text-[11px]">
                {course.duration}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-bold">
                {course.placementRate}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {course.title}
            </h2>
            <p className="text-sm text-secondary mt-1">{course.description}</p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#070a10] border border-white/5 text-xs">
            <div>
              <span className="text-text-muted block">Duration</span>
              <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-primary" /> {course.duration}
              </span>
            </div>
            <div>
              <span className="text-text-muted block">Starts On</span>
              <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-primary" /> {course.startDate}
              </span>
            </div>
            <div>
              <span className="text-text-muted block">Campus Venue</span>
              <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                <Laptop className="w-3.5 h-3.5 text-sky-400" /> {course.campusesAvailable}
              </span>
            </div>
            <div>
              <span className="text-text-muted block">Avg Starting Pay</span>
              <span className="text-emerald-400 font-bold block mt-0.5">
                {course.avgPlacementSalary}
              </span>
            </div>
          </div>

          {/* Instructor Block */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1f29]/60 border border-white/5">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.avatarAlt}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-rose-500/30"
            />
            <div>
              <span className="text-xs text-primary font-bold uppercase tracking-wider block">
                Lead Course Instructor & Mentor
              </span>
              <h4 className="text-base font-bold text-white">{course.instructor.name}</h4>
              <p className="text-xs text-secondary">{course.instructor.role}</p>
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
              Technologies & Production Tools Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#070a10] border border-white/10 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Module by Module Syllabus */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Full Curriculum Structure (4 Comprehensive Modules)</span>
            </h4>
            <div className="space-y-3">
              {course.syllabusModules.map((mod) => (
                <div
                  key={mod.number}
                  className="p-4 rounded-xl bg-[#070a10] border border-white/5 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-[#e11d48]/20 text-primary font-bold text-xs flex items-center justify-center">
                      M{mod.number}
                    </span>
                    <h5 className="text-sm font-bold text-white">{mod.title}</h5>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-8 text-xs text-secondary">
                    {mod.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full sm:w-auto flex-1 py-3 px-4 rounded-lg bg-[#1c1f29] hover:bg-[#262a34] border border-white/10 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {downloading ? (
                <>
                  <span className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></span>
                  <span>Generating Complete Syllabus PDF...</span>
                </>
              ) : downloaded ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Downloaded Official PDF!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-primary" />
                  <span>Download Complete Syllabus (PDF)</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onClose();
                onApply(course.title);
              }}
              className="w-full sm:w-auto flex-1 py-3 px-4 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-xs shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply for this Batch</span>
              <Award className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
