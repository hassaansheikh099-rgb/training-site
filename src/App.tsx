/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { SyllabusModal } from './components/SyllabusModal';
import { HomeScreen } from './screens/HomeScreen';
import { CoursesScreen } from './screens/CoursesScreen';
import { CampusesScreen } from './screens/CampusesScreen';
import { PlacementScreen } from './screens/PlacementScreen';
import { AboutScreen } from './screens/AboutScreen';
import { COURSES, Course } from './data/nexskillData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'courses' | 'campuses' | 'placement' | 'about'>('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState<string | undefined>(undefined);
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState<Course | null>(null);

  // Sync with browser hash if any
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'courses', 'campuses', 'placement', 'about'].includes(hash)) {
        setCurrentTab(hash as any);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab as any);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApply = (courseTitle?: string) => {
    setSelectedCourseForApply(courseTitle);
    setApplyModalOpen(true);
  };

  const handleOpenSyllabus = (courseId: string) => {
    const course = COURSES.find((c) => c.id === courseId) || null;
    setSelectedSyllabusCourse(course);
  };

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ef] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col selection:bg-[#e11d48] selection:text-white">
      {/* Top Fixed Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleNavigate}
        onOpenApply={handleOpenApply}
      />

      {/* Main View Area with Top Padding for Fixed Nav */}
      <main className="w-full pt-[112px] bg-[#0f131c] flex-1">
        {currentTab === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
            onOpenSyllabus={handleOpenSyllabus}
          />
        )}

        {currentTab === 'courses' && (
          <CoursesScreen
            onOpenApply={handleOpenApply}
            onOpenSyllabus={handleOpenSyllabus}
          />
        )}

        {currentTab === 'campuses' && (
          <CampusesScreen onOpenApply={handleOpenApply} />
        )}

        {currentTab === 'placement' && (
          <PlacementScreen onOpenApply={() => handleOpenApply()} />
        )}

        {currentTab === 'about' && (
          <AboutScreen
            onOpenApply={() => handleOpenApply()}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenApply={() => handleOpenApply()} />

      {/* Modals */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        initialCourseTitle={selectedCourseForApply}
      />

      <SyllabusModal
        course={selectedSyllabusCourse}
        onClose={() => setSelectedSyllabusCourse(null)}
        onApply={(title) => handleOpenApply(title)}
      />

      {/* Floating Speed Dial WhatsApp Action */}
      <aside aria-label="Support Floating Triggers" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/923096663330?text=Hi%20NexSkill,%20I%20would%20like%20to%20learn%20more%20about%20your%20IT%20Bootcamps."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3.5 bg-[#10b981] hover:bg-[#059669] text-white rounded-full shadow-[0_4px_24px_rgba(16,185,129,0.5)] transition-all hover:scale-105"
          aria-label="Direct WhatsApp Consultation"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-1">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
