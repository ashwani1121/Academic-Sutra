import React from "react";
// 1. Keep useNavigate hook to safely prevent 404 errors on routing
import { useNavigate } from "react-router-dom"; 
import cmpImage from "../assets/cmp.png";
import lmsImage from "../assets/lms.png";
import cmfImage from "../assets/cmf.png";

// Inline CSS to handle custom color transitions and eliminate hover text links decorations
const ServiceAnimationStyles = () => (
  <style>{`
    /* Global programmatic underline suppression layers */
    .no-line-decor, .no-line-decor *, .no-line-decor *:hover {
      text-decoration: none !important;
      text-decoration-line: none !important;
      border-bottom: none !important;
      box-shadow: none !important;
    }
    /* Skewed Background Element Panel Mask Setup */
    .skew-animated-card {
      position: relative;
      z-index: 1;
      overflow: hidden;
      background: transparent !important; /* Managed via pseudo-elements */
      transition: all 0.4s ease-in-out;
    }
    .skew-animated-card::before {
      content: "";
      position: absolute;
      width: 140%;
      height: 140%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) skew(-20deg, 0deg);
      z-index: -1;
      transition: all 0.4s ease-in-out;
    }
    /* Assign distinct background themes matching card metrics data instances */
    .card-slant-1::before { background: linear-gradient(135deg, #334155, #0f172a); }
    .card-slant-2::before { background: linear-gradient(135deg, #1d4ed8, #312e81); }
    .card-slant-3::before { background: linear-gradient(135deg, #374151, #111827); }
    /* Morph backdrops into high-contrast highlighted accent states on hover */
    .card-slant-1:hover::before { background: linear-gradient(135deg, #06b6d4, #0891b2); }
    .card-slant-2:hover::before { background: linear-gradient(135deg, #2563eb, #1d4ed8); }
    .card-slant-3:hover::before { background: linear-gradient(135deg, #7c3aed, #6d28d9); }
    /* Skewed Graphic Outer Frame Container block */
    .skew-graphic-box {
      position: relative;
      width: 100%;
      height: 11rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
    }
    .skew-graphic-box::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255, 255, 255, 0.15);
      background: rgba(255, 255, 255, 0.03);
      transform: skew(-15deg, 0deg);
      border-radius: 1rem;
      transition: all 0.4s ease-in-out;
      z-index: 0;
    }
    /* Illuminate border mask box when parent card is active */
    .skew-animated-card:hover .skew-graphic-box::before {
      background: rgba(255, 255, 255, 0.12);
      border-color: #ffffff;
      transform: skew(-15deg, 0deg) scale(1.02);
    }
    /* Slide Entrance animation configuration tracking for Read More trigger */
    .sliding-arrow-cta {
      transform: translateX(-6px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .skew-animated-card:hover .sliding-arrow-cta {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
    
    /* Native global fallbacks to ensure production rendering mirrors localhost exactly */
    .fallback-clamp-1 {
      display: -webkit-box !important;
      -webkit-line-clamp: 1 !important;
      -webkit-box-orient: vertical !important;
      overflow: hidden !important;
    }
    .fallback-clamp-2 {
      display: -webkit-box !important;
      -webkit-line-clamp: 2 !important;
      -webkit-box-orient: vertical !important;
      overflow: hidden !important;
    }
  `}</style>
);

const services = [
  {
    title: "Conference Paper Submission",
    img: cmpImage,
    link: "/login",
    slantClass: "card-slant-1",
  },
  {
    title: "LMS Moodle Integration",
    img: lmsImage,
    link: "/login",
    slantClass: "card-slant-2",
  },
  {
    title: "Conference Management",
    img: cmfImage,
    link: "/login",
    slantClass: "card-slant-3",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardNavigation = (url) => {
    navigate(url);
  };

  return (
    <section className="text-black pt-6 sm:pt-10 pb-6 mt-8 no-line-decor">
      <ServiceAnimationStyles />
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-900 bg-clip-text text-transparent">
            Conference Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl leading-7">
            Academic Sutra provides a complete platform for conference
            paper submission, research collaboration, peer review,
            and academic event management.
          </p>
        </div>
        {/* Cards Structural Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              onClick={() => handleCardNavigation(item.link)}
              className={`skew-animated-card ${item.slantClass} p-6 rounded-3xl text-white hover:shadow-2xl flex flex-col justify-between h-[360px] group cursor-pointer no-line-decor`}
            >
              {/* Inner Layout Container */}
              <div className="relative z-10 w-full flex flex-col">
                {/* Skewed Graphic Image Box Element */}
                <div className="skew-graphic-box">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative z-10 w-auto h-[80%] max-h-36 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Card Header Title */}
                {/* CHANGED: Added fallback-clamp-1 to protect heading heights in production */}
                <h3 className="text-xl font-bold mb-2 text-white tracking-wide transition-colors duration-300 line-clamp-1 fallback-clamp-1 !mt-2">
                  {item.title}
                </h3>
                {/* Description Copy */}
                {/* CHANGED: Added fallback-clamp-2 to protect paragraph spacing in production */}
                <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white/90 leading-relaxed line-clamp-2 fallback-clamp-2">
                  Submit research papers, abstracts, and academic articles for conferences.
                </p>
              </div>
              {/* Read More Action Button */}
              <div className="relative z-10 pt-3 border-t border-white/10 mt-auto w-full flex justify-start items-center no-line-decor">
                <span className="text-[11px] uppercase tracking-widest font-black text-white inline-flex items-center">
                  Read More
                  <span className="sliding-arrow-cta text-sm text-white font-bold ml-2 inline-block">
                    &rarr;
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;