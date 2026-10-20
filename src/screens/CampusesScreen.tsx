import React, { useState, useRef } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ArrowRight,
  Globe,
  Calendar,
  User,
  CheckCircle2,
  Terminal,
  Zap,
  ShieldCheck,
  Building,
  Check,
  ExternalLink,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { CAMPUSES, Campus } from '../data/nexskillData';

interface CampusesScreenProps {
  onOpenApply: (courseTitle?: string) => void;
}

export const CampusesScreen: React.FC<CampusesScreenProps> = ({ onOpenApply }) => {
  const [cityFilter, setCityFilter] = useState<'all' | 'lahore' | 'karachi' | 'khanewal'>('all');
  
  // Tour Booking Form State
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('Arfa Software Tech Park, Lahore');
  const [tourDate, setTourDate] = useState('');
  const [tourSlot, setTourSlot] = useState('Afternoon: 2:00 PM - 4:00 PM');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Full Stack AI']);
  const [tourSubmitted, setTourSubmitted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const handleSelectCampusForTour = (campusName: string) => {
    setSelectedCampus(campusName);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTourSubmitted(true);
    setTimeout(() => {
      setTourSubmitted(false);
      setVisitorName('');
      setVisitorPhone('');
      setTourDate('');
    }, 6000);
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const filteredCampuses = CAMPUSES.filter((c) => {
    if (cityFilter === 'all') return true;
    return c.city === cityFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Atmospheric Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#e11d48]/15 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* =========================================================================
            HEADER & CITY TOGGLE
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 pb-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1f29] text-primary text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                State-of-the-Art Learning Spaces
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Find a NexSkill Campus <span className="text-[#e11d48]">Near You</span>
              </h1>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                Experience high-speed computer labs, mentor-led practical studios, and tech community hubs across Pakistan's major tech corridors.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="p-4 rounded-xl bg-[#0d1322]/80 backdrop-blur-md border border-white/10">
                <div className="text-3xl font-extrabold text-white">
                  5<span className="text-[#e11d48]">+</span>
                </div>
                <div className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">
                  Physical Hubs
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0d1322]/80 backdrop-blur-md border border-white/10">
                <div className="text-3xl font-extrabold text-white">
                  100<span className="text-[#e11d48]">%</span>
                </div>
                <div className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">
                  Lab Uptime
                </div>
              </div>
            </div>
          </div>

          {/* Campus Filter Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <div className="inline-flex p-1 rounded-xl bg-[#0a0e17] border border-white/10">
              <button
                onClick={() => setCityFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  cityFilter === 'all'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_16px_rgba(225,29,72,0.4)]'
                    : 'text-secondary hover:text-white'
                }`}
              >
                All Campuses (5)
              </button>
              <button
                onClick={() => setCityFilter('lahore')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  cityFilter === 'lahore'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_16px_rgba(225,29,72,0.4)]'
                    : 'text-secondary hover:text-white'
                }`}
              >
                Lahore (3)
              </button>
              <button
                onClick={() => setCityFilter('karachi')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  cityFilter === 'karachi'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_16px_rgba(225,29,72,0.4)]'
                    : 'text-secondary hover:text-white'
                }`}
              >
                Karachi (1)
              </button>
              <button
                onClick={() => setCityFilter('khanewal')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  cityFilter === 'khanewal'
                    ? 'bg-[#e11d48] text-white shadow-[0_0_16px_rgba(225,29,72,0.4)]'
                    : 'text-secondary hover:text-white'
                }`}
              >
                Mian Channu (1)
              </button>
            </div>

            <div className="flex items-center gap-2 text-secondary text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>NAVTTC & PSDF Accredited Facilities</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CAMPUS SHOWCASE GRID
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {filteredCampuses.map((campus) => {
              const isFlagship = campus.isFlagship;
              return (
                <article
                  key={campus.id}
                  className={`${
                    isFlagship ? 'lg:col-span-8' : 'lg:col-span-4'
                  } bg-[#0d1322]/90 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-[#e11d48]/40 transition-all group overflow-hidden shadow-xl flex flex-col justify-between`}
                >
                  {isFlagship ? (
                    // Large Flagship Grid Layout
                    <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                      <div className="md:col-span-5 relative min-h-[260px] md:min-h-full overflow-hidden">
                        <img
                          src={campus.image}
                          alt={campus.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#070a10]/90 via-[#070a10]/40 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#e11d48] text-white text-[10px] tracking-wider uppercase font-bold flex items-center gap-1 shadow-lg">
                            <Sparkles className="w-3 h-3" /> FLAGSHIP CAMPUS
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40 text-[#ef4444] text-[10px] tracking-wide uppercase flex items-center gap-1.5 backdrop-blur-md font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-ping"></span>
                            OPEN NOW • COUNSELING ACTIVE
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="text-[10px] text-primary uppercase tracking-widest font-semibold block">
                            {campus.cityName}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold">{campus.name}</h3>
                        </div>
                      </div>

                      <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2 text-secondary text-xs">
                            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{campus.address}</span>
                          </div>

                          <div className="pt-1">
                            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                              CAMPUS AMENITIES & INFRASTRUCTURE
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {campus.amenities.map((amenity, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 rounded-lg bg-[#1c1f29] text-slate-200 text-xs flex items-center gap-1.5 border border-white/5"
                                >
                                  <span>{amenity.label}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-1">
                            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1.5">
                              Specialized Bootcamps Hosted
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {campus.hostedBootcamps.map((boot, bi) => (
                                <span
                                  key={bi}
                                  className="px-2.5 py-0.5 rounded text-primary text-xs bg-[#e11d48]/10 border border-[#e11d48]/30 font-medium"
                                >
                                  {boot}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                          <div className="space-y-0.5 text-xs text-secondary">
                            <div className="flex items-center gap-1.5 text-white font-bold">
                              <Phone className="w-3.5 h-3.5 text-primary" />
                              <span>{campus.phone}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-text-muted text-[11px]">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{campus.timings}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href={campus.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 rounded-lg bg-[#1c1f29] hover:bg-[#262a34] text-white text-xs font-semibold transition-colors flex items-center gap-1"
                            >
                              <Navigation className="w-3.5 h-3.5" />
                              <span>Map</span>
                            </a>
                            <button
                              onClick={() => handleSelectCampusForTour(campus.name)}
                              className="px-4 py-2 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold transition-all shadow-[0_0_16px_rgba(225,29,72,0.35)] flex items-center gap-1 cursor-pointer"
                            >
                              <span>Book Tour</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular Campus Card Layout
                    <>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={campus.image}
                          alt={campus.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#070a10]/80 backdrop-blur-md border border-white/10 text-primary text-[10px] tracking-wider uppercase font-bold">
                            {campus.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-4">
                          <span className="text-[10px] text-primary uppercase tracking-wider font-semibold block">
                            {campus.cityName}
                          </span>
                          <h3 className="text-lg font-bold text-white">{campus.name}</h3>
                        </div>
                      </div>

                      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2 text-secondary text-xs">
                            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{campus.address}</span>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {campus.amenities.slice(0, 3).map((a, ai) => (
                              <span
                                key={ai}
                                className="px-2 py-0.5 rounded bg-[#1c1f29] text-slate-200 text-[11px]"
                              >
                                {a.label}
                              </span>
                            ))}
                          </div>

                          <div className="text-xs text-text-muted flex items-center gap-1.5 pt-1">
                            <Phone className="w-3.5 h-3.5 text-primary" />
                            <span className="text-white font-semibold">{campus.phone}</span>
                            <span className="mx-1">•</span>
                            <span>{campus.timings.replace('Mon-Sun: ', '')}</span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                          <a
                            href={campus.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-[#1c1f29] hover:bg-[#262a34] text-white text-xs font-semibold transition-colors flex items-center gap-1"
                          >
                            <Navigation className="w-3 h-3" />
                            <span>Directions</span>
                          </a>
                          <button
                            onClick={() => handleSelectCampusForTour(campus.name)}
                            className="px-3.5 py-1.5 rounded-lg bg-[#e11d48] text-white text-xs font-bold hover:shadow-[0_0_16px_rgba(225,29,72,0.4)] transition-all cursor-pointer"
                          >
                            Schedule Visit
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            ONLINE CAMPUS BANNER
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-4 w-full">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d1322] via-[#1c1f29] to-[#0d1322] border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#e11d48]/20 border border-[#e11d48]/40 flex items-center justify-center shrink-0 text-primary">
                <Globe className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest">
                  <span>NexSkill Online Global Campus</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-ping"></span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Can't visit in person? Learn from anywhere.
                </h3>
                <p className="text-xs sm:text-sm text-secondary max-w-2xl leading-relaxed">
                  Join our live interactive virtual classrooms with recorded LMS lectures, project reviews, cloud-hosted remote GPU environments, and 1-on-1 mentor support across Pakistan and worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenApply('NexSkill Online Global LMS')}
                className="px-4 py-2.5 rounded-lg bg-[#e11d48] text-white text-xs font-bold shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:bg-[#be123c] transition-all cursor-pointer"
              >
                Join Online Batch
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CAMPUS TOUR BOOKING + AMENITIES SECTION
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16 w-full" ref={formRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Booking Form Card */}
            <div className="lg:col-span-7 bg-[#0d1322]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 rounded bg-[#e11d48] text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Free 1-on-1 Career Session
                </span>
              </div>

              <div className="space-y-1 mb-6 pt-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Book Campus Visit & Counseling Tour
                </h2>
                <p className="text-xs sm:text-sm text-secondary">
                  Meet our senior instructors, experience high-spec computing labs firsthand, and get personalized course alignment before enrolling.
                </p>
              </div>

              <form onSubmit={handleTourSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-secondary uppercase block mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-text-muted absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="e.g. Hamza Ali"
                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white placeholder:text-text-muted text-xs focus:outline-none focus:border-[#e11d48] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-secondary uppercase block mb-1">
                      WhatsApp Contact *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-text-muted absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        placeholder="0309 6663330"
                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white placeholder:text-text-muted text-xs focus:outline-none focus:border-[#e11d48] transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-secondary uppercase block mb-1">
                    Select Campus Location *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-text-muted absolute left-3 top-3.5" />
                    <select
                      value={selectedCampus}
                      onChange={(e) => setSelectedCampus(e.target.value)}
                      className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48] transition-all"
                    >
                      <option value="Arfa Software Tech Park, Lahore">
                        Lahore: Arfa Software Technology Park (Flagship)
                      </option>
                      <option value="New Garden Town Campus, Lahore">
                        Lahore: New Garden Town Campus (14 Baber Block)
                      </option>
                      <option value="Bahria Town Campus, Lahore">
                        Lahore: Bahria Town Tech Campus
                      </option>
                      <option value="PARSA Tower Karachi">
                        Karachi: PARSA Tower Hub, Main Shahra-e-Faisal
                      </option>
                      <option value="Mian Channu Campus, Khanewal">
                        Mian Channu: Sanaullah Educational Complex
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-secondary uppercase block mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-text-muted absolute left-3 top-3.5" />
                      <input
                        type="date"
                        required
                        value={tourDate}
                        onChange={(e) => setTourDate(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-secondary uppercase block mb-1">
                      Preferred Time Slot *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-text-muted absolute left-3 top-3.5" />
                      <select
                        value={tourSlot}
                        onChange={(e) => setTourSlot(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#070a10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e11d48] transition-all"
                      >
                        <option value="Morning: 11:00 AM - 1:00 PM">Morning: 11:00 AM - 1:00 PM</option>
                        <option value="Afternoon: 2:00 PM - 4:00 PM">Afternoon: 2:00 PM - 4:00 PM</option>
                        <option value="Evening: 5:00 PM - 7:00 PM">Evening: 5:00 PM - 7:00 PM</option>
                        <option value="Night: 7:00 PM - 8:30 PM">Night: 7:00 PM - 8:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-secondary uppercase block mb-1">
                    Area of Career Interest
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Full Stack AI',
                      'Web Dev with AI',
                      'Cyber Security',
                      'Design & VFX',
                      'Growth Marketing',
                      'Flutter App Dev',
                    ].map((interest) => {
                      const isSelected = selectedInterests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer text-left ${
                            isSelected
                              ? 'border-[#e11d48] bg-[#e11d48]/15 text-white'
                              : 'border-white/5 bg-[#070a10] text-secondary hover:text-white'
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#e11d48] text-white' : 'border border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </div>
                          <span className="truncate">{interest}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold shadow-[0_0_24px_rgba(225,29,72,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Free Campus Tour Booking</span>
                    <ShieldCheck className="w-4 h-4" />
                  </button>
                </div>

                {tourSubmitted && (
                  <div className="text-center text-[#10b981] text-xs font-semibold py-2.5 bg-[#10b981]/15 rounded-lg border border-[#10b981]/30 animate-fadeIn">
                    ✓ Appointment request received! Our campus admissions coordinator will confirm via WhatsApp within 15 minutes.
                  </div>
                )}
              </form>
            </div>

            {/* Benchmarks & Ecosystem */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Standardized National Ecosystem
                </span>
                <h2 className="text-2xl font-extrabold text-white">
                  Built for Professional Intensity
                </h2>
                <p className="text-xs sm:text-sm text-secondary">
                  Every NexSkill branch adheres to strict technical lab prerequisites to support deep learning model training, live bug bounties, and production deployment cycles.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#0d1322] border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#e11d48]/20 text-primary shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white">Core i7 & i9 AI Rig Workstations</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Equipped with 32GB/64GB RAM and dedicated NVIDIA RTX GPUs for real-time model fine-tuning and 3D render pipelines.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0d1322] border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white">Dual-Ring Optical Fiber WAN</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Gigabit throughput with low latency peering to GitHub, AWS, HuggingFace, and Azure cloud computing regions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0d1322] border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white">Zero-Downtime Solar & Heavy Gen Power</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Instant automated power backup ensures students and instructors never face power interruption during practical sessions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0d1322] border border-white/5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#e11d48]/20 text-primary shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white">NexTalent On-Site Placement Hubs</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Direct walk-in mock interview studios and recruiter pods connected with 200+ technology hiring partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            GEOGRAPHIC MAP PREVIEW
        ========================================================================== */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
          <div className="bg-[#0d1322] rounded-2xl border border-white/10 overflow-hidden p-6 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Interactive Geo Directory
                </span>
                <h3 className="text-xl font-bold text-white">National Campus Footprint</h3>
              </div>
              <div className="flex items-center gap-4 text-secondary text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span> Active Branch
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Co-Working Incubator
                </span>
              </div>
            </div>

            {/* Map Preview Element */}
            <div className="w-full h-80 rounded-xl bg-[#070a10] border border-white/10 relative overflow-hidden flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgAuTjcdY9dig-D3NdFg3UKSEAR1RkjfybiQ9FWO6Zth0fQ23xzgAcgPahT3ZW3NcwTKY8oBMMD4gUiB3ZVZNJGfTBsYvkzvbU-9H8FwEycODYOYf9hEw6JozK9KNrI4A54e90xp1j2ao9fC5bU_cUPyK-bOiIk0e6DNpWTHGM-628Sbrn43ewPBQ92ZbWTCSSslu3_nhuzm8UWEYM5j0xAwGFQOjsVCqiYFSnJiqkrd-povzk7jdk"
                alt="Map of Pakistan tech hubs"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-[#070a10]/50 backdrop-blur-xs"></div>

              <div className="relative z-10 text-center space-y-3 max-w-md p-6 bg-[#0d1322]/95 rounded-2xl border border-white/15 shadow-2xl">
                <div className="flex items-center justify-center text-[#e11d48]">
                  <MapPin className="w-10 h-10 animate-bounce" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Explore All Locations on Google Maps
                  </h4>
                  <p className="text-xs text-secondary">
                    Get driving directions, real-time public transit routes, and parking instructions to any NexSkill regional hub.
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/eScw8ScfL5m1ojsY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#e11d48] text-white text-xs font-bold hover:shadow-[0_0_16px_rgba(225,29,72,0.4)] transition-all"
                >
                  <span>Open Google Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Central Helpline Callout */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
          <div className="p-6 rounded-2xl bg-[#1c1f29]/70 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need Instant Campus Assistance?</h4>
                <p className="text-xs text-secondary">
                  Our centralized admission officers are reachable every day from 10:00 AM to 9:00 PM PST.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="tel:+923096663330"
                className="flex-1 md:flex-initial px-4 py-2.5 rounded-lg bg-[#0d1322] hover:bg-[#131c31] text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>+92 309 666 3330</span>
              </a>
              <a
                href="https://wa.me/923096663330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial px-4 py-2.5 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
