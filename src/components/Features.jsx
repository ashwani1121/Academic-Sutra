import React, { useState } from "react";
import {
  CalendarDays,
  Globe,
  Users,
  FileText,
  Bell,
  Download,
  LayoutDashboard,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Mail,
  BarChart3,
  Award,
  BookOpen,
  Presentation,
  Layers3,
  Sparkles,
  Database,
  Zap,
  Cpu,
  X
} from "lucide-react";

const FlipCardStyles = () => (
  <style>{`
    .features-flip-wrapper {
      perspective: 1000px;
      width: 100%;
      height: 13rem;
    }
    .features-flip-card {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      cursor: pointer;
    }
    .features-flip-wrapper:hover .features-flip-card {
      transform: rotateY(180deg);
    }
    .features-face-front,
    .features-face-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 1.25rem;
      border: 1px solid #e5e7eb;
      overflow: hidden;
      background-color: #ffffff;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }
    .features-face-front {
      display: flex;
      flex-direction: column;
      z-index: 2;
    }
    .features-cover-banner {
      height: 9.5rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      clip-path: polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%);
    }
    .features-face-back {
      transform: rotateY(180deg);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 1;
    }
    .no-underline-btn {
      text-decoration: none !important;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

const features = [
  { icon: CalendarDays, tag: "CORE SYSTEM", title: "Conference Management", desc: "Manage academic conferences, events, and paper workflows with ease.", details: "Includes setup frameworks for multi-day schedules, speaker arrangements, ticket tiers, tracks allocation, and dynamic agenda configuration tables.", gradient: "from-blue-600 to-indigo-600", accent: "text-blue-600", border: "border-blue-600 hover:bg-blue-600" },
  { icon: Globe, tag: "NETWORKING", title: "Global Research Network", desc: "Connect researchers, mentors, and institutions across the world.", details: "Fosters international peer collaborations with secure institution portals, discoverability matrices, and regional community hubs.", gradient: "from-cyan-500 to-blue-600", accent: "text-cyan-600", border: "border-cyan-600 hover:bg-cyan-600" },
  { icon: Users, tag: "EVALUATION", title: "Reviewer Assignment", desc: "Assign reviewers manually or automatically for better evaluation.", details: "Equipped with advanced algorithmic smart-matching that metrics reviewer expertise against submission keywords to eliminate selection bias.", gradient: "from-amber-500 to-orange-600", accent: "text-orange-600", border: "border-orange-600 hover:bg-orange-600" },
  { icon: FileText, tag: "DATA WORKFLOW", title: "Paper Submission", desc: "Upload abstracts, research papers, and supplementary materials securely.", details: "Supports multi-format standard uploads, automated layout validation parsing, version history trees, and immediate author receipts verification.", gradient: "from-emerald-500 to-teal-600", accent: "text-emerald-600", border: "border-emerald-600 hover:bg-emerald-600" },
  { icon: Bell, tag: "AUTOMATION", title: "Smart Notifications", desc: "Send instant updates and reminders to authors and participants.", details: "Features automated dynamic triggers for validation deadlines, review milestone changes, registration updates, and real-time updates.", gradient: "from-purple-500 to-indigo-600", accent: "text-purple-600", border: "border-purple-600 hover:bg-purple-600" },
  { icon: Download, tag: "ANALYTICS", title: "Export Reports", desc: "Export conference reports and submission data in multiple formats.", details: "One-click extractions into formatted PDF sheets, comprehensive CSV matrices, and structured raw JSON data files with custom filters.", gradient: "from-fuchsia-500 to-pink-600", accent: "text-fuchsia-600", border: "border-fuchsia-600 hover:bg-fuchsia-600" },
  { icon: Layers3, tag: "CORE SYSTEM", title: "Multi-Track Systems", desc: "Create and manage multiple conference tracks and categories.", details: "Isolate unique subjects side-by-side inside independent submission channels running concurrent timelines on a unified portal layout.", gradient: "from-blue-600 to-indigo-600", accent: "text-blue-600", border: "border-blue-600 hover:bg-blue-600" },
  { icon: LayoutDashboard, tag: "INTERFACE", title: "Smart Dashboard", desc: "Track submissions, approvals, schedules, and conference activities.", details: "A visual monitoring center complete with dynamic data graphs, real-time checklist track progress steps, and clean operation widgets.", gradient: "from-cyan-500 to-blue-600", accent: "text-cyan-600", border: "border-cyan-600 hover:bg-cyan-600" },
  { icon: Clock3, tag: "AUTOMATION", title: "Session Scheduling", desc: "Manage speaker sessions, timings, and presentation schedules.", details: "Drag-and-drop chronological calendar modules engineered to detect and alert managers of speaker time slot scheduling conflicts instantly.", gradient: "from-amber-500 to-orange-600", accent: "text-orange-600", border: "border-orange-600 hover:bg-orange-600" },
  { icon: MessageCircle, tag: "COMMUNICATION", title: "Discussion System", desc: "Enable communication between authors, reviewers, and organizers.", details: "Double-blind secure comment layers preserving strict structural academic review protocols and internal editorial message history notes.", gradient: "from-emerald-500 to-teal-600", accent: "text-emerald-600", border: "border-emerald-600 hover:bg-emerald-600" },
  { icon: BookOpen, tag: "EDUCATION", title: "E-Learning Support", desc: "Access webinars, workshops, and digital learning resources.", details: "Native system spaces hosting interactive presentation video feeds, static lecture documents archives, and dynamic live QA frameworks.", gradient: "from-purple-500 to-indigo-600", accent: "text-purple-600", border: "border-purple-600 hover:bg-purple-600" },
  { icon: Award, tag: "DOCUMENTATION", title: "Certificate Builder", desc: "Generate participation and presentation certificates instantly.", details: "Dynamic template parser engines embedding block verified authorization numbers, matching institution branding vector layouts, and direct signatures.", gradient: "from-fuchsia-500 to-pink-600", accent: "text-fuchsia-600", border: "border-fuchsia-600 hover:bg-fuchsia-600" },
  { icon: Database, tag: "DATA WORKFLOW", title: "File & Media Support", desc: "Upload PDF, DOCX, PPT, videos, posters, and research files.", details: "Cloud repository file pipelines optimized with chunk upload tech to guarantee stability when moving large media assets safely.", gradient: "from-pink-500 to-rose-600", accent: "text-rose-600", border: "border-rose-600 hover:bg-rose-600" },
  { icon: ShieldCheck, tag: "SECURITY", title: "Secure Authentication", desc: "Role-based login and secure access for all users and organizers.", details: "Enterprise grade authorization blocks with strict session encryptions, explicit role assignments, and robust security firewall protections.", gradient: "from-cyan-500 to-blue-600", accent: "text-cyan-600", border: "border-cyan-600 hover:bg-cyan-600" },
  { icon: Sparkles, tag: "INTELLIGENCE", title: "AI Recommendations", desc: "Get smart suggestions for conferences and research opportunities.", details: "Neural mapping engines tracking local user citation habits to deliver customized alerts matching your operational goals.", gradient: "from-amber-500 to-orange-600", accent: "text-orange-600", border: "border-orange-600 hover:bg-orange-600" },
  { icon: Presentation, tag: "CORE SYSTEM", title: "Presentation Panels", desc: "Organize presentation slots and manage speaker sessions efficiently.", details: "Dedicated dashboard tools supporting presentation deck uploads, strict session timing setups, and direct audio control layers.", gradient: "from-emerald-500 to-teal-600", accent: "text-emerald-600", border: "border-emerald-600 hover:bg-emerald-600" },
  { icon: Mail, tag: "COMMUNICATION", title: "Email Automation", desc: "Send automated emails for approvals, reminders, and updates.", details: "Custom message builder modules running template variable mapping configurations to blast verified transaction emails instantly.", gradient: "from-purple-500 to-indigo-600", accent: "text-purple-600", border: "border-purple-600 hover:bg-purple-600" },
  { icon: BarChart3, tag: "ANALYTICS", title: "Insights & Analytics", desc: "Monitor conference performance and generate detailed insights.", details: "Aggregates overall geographic participant distributions, track drop off metrics, and registration conversion data reports.", gradient: "from-fuchsia-500 to-pink-600", accent: "text-fuchsia-600", border: "border-fuchsia-600 hover:bg-fuchsia-600" },
  { icon: Zap, tag: "INTELLIGENCE", title: "Instant Plagiarism Check", desc: "Scan submissions across indexed databases in real-time.", details: "Automated scan integration mapping text string similarities on international databases to produce explicit similarity percentage score files.", gradient: "from-orange-500 to-red-600", accent: "text-red-600", border: "border-red-600 hover:bg-red-600" },
  { icon: Cpu, tag: "DATA WORKFLOW", title: "Metadata Extraction", desc: "Extract citations and bibliographies automatically using AI.", details: "Deep parsing filters that read references instantly to build standard structured citation lists without tedious data manual tracking inputs.", gradient: "from-teal-500 to-cyan-600", accent: "text-teal-600", border: "border-teal-600 hover:bg-teal-600" }
];

const Features = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <FlipCardStyles />
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            Our Features
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-7">
            Everything you need to manage conferences, research collaborations,
            academic workflows, and learning experiences in one modern platform.
          </p>
        </div>
        {/* One Feature Card Per Swipe on Mobile, Standard Grid Layout on Large Displays */}
        <div className="flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div className="features-flip-wrapper min-w-[calc(100vw-20px)] md:min-w-0 snap-center px-1 md:px-0" key={index}>
                <div className="features-flip-card">
                  {/* 1. FRONT PANEL AREA */}
                  <div className="features-face-front">
                    <div className={`features-cover-banner bg-gradient-to-b ${feature.gradient}`}>
                      <Icon size={28} className="mb-1.5 stroke-[1.5]" />
                      <h3 className="text-xs sm:text-sm font-bold tracking-wide uppercase text-center px-2 line-clamp-2 leading-snug">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-gray-50/50">
                      <span className={`text-[9px] tracking-[0.18em] font-black uppercase ${feature.accent}`}>
                        {feature.tag}
                      </span>
                    </div>
                  </div>
                  {/* 2. REVERSED BACK PANEL AREA */}
                  <div className="features-face-back">
                    <div className="w-full">
                      <h4 className={`text-[9px] font-black uppercase tracking-wider mb-1 ${feature.accent}`}>
                        OVERVIEW
                      </h4>
                      <p className="text-[11px] text-gray-600 font-semibold leading-relaxed line-clamp-4">
                        {feature.desc}
                      </p>
                    </div>
                    <button 
                      onClick={() => setModalData(feature)}
                      className={`w-full bg-transparent border-2 rounded-xl py-1 px-2 text-[10px] font-bold tracking-wider uppercase transition-all duration-300 outline-none cursor-pointer ${feature.accent} ${feature.border} hover:text-white`}
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Detailed Drawer Overlay Sheet */}
      {modalData && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden transform animate-[scaleIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]">
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${modalData.gradient}`} />
            <button 
              onClick={() => setModalData(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors border-none bg-transparent outline-none cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-4 mb-6 mt-2">
              <div className={`p-3.5 rounded-2xl bg-gray-50 ${modalData.accent}`}>
                <modalData.icon size={28} className="stroke-[1.5]" />
              </div>
              <div>
                <span className={`text-[10px] font-black tracking-[0.15em] uppercase ${modalData.accent}`}>
                  {modalData.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                  {modalData.title}
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Functional Focus</h5>
                <p className="text-sm text-gray-700 font-medium leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                  {modalData.desc}
                </p>
              </div>
              <div>
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Architecture Details</h5>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {modalData.details}
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setModalData(null)}
                className={`px-5 py-2.5 rounded-xl text-white text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${modalData.gradient} shadow-lg shadow-indigo-500/10 hover:opacity-90 transition-opacity border-none outline-none cursor-pointer`}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;