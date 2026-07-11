import React from "react";
import {
  ShieldCheck,
  Globe2,
  Users,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";
import whyUsImage from "../assets/whyus.png";

const whyUsData = [
  {
    icon: Award,
    title: "Professional Conference Management",
    desc: "Simplify paper submissions, reviewer assignments, scheduling, and event coordination.",
    bgHover: "hover:bg-blue-600",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: Globe2,
    title: "Global Research Network",
    desc: "Connect researchers, institutions, and academic communities from around the world.",
    bgHover: "hover:bg-purple-600",
    iconBg: "bg-purple-50 text-purple-600",
  },
  {
    icon: Users,
    title: "Expert Collaboration",
    desc: "Enable smooth communication between organizers, reviewers, speakers, and participants.",
    bgHover: "hover:bg-indigo-600",
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Learning & Innovation",
    desc: "Provide access to workshops, webinars, research opportunities, and e-learning resources.",
    bgHover: "hover:bg-purple-700",
    iconBg: "bg-purple-50 text-purple-700",
  },
];

const WhyUs = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-7">
            Academic Sutra provides a modern and reliable platform designed
            to simplify conference management, research collaboration,
            and digital learning experiences.
          </p>
        </div>

        {/* Content Box Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side Image Frame */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-purple-800/20 blur-3xl rounded-full"></div>
            <img
              src={whyUsImage}
              alt="Why Choose Us"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 ${item.bgHover} transition-all duration-500 ease-in-out`}
                >
                  {/* Icon Wrapper */}
                  <div className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center shadow-md ${item.iconBg} group-hover:bg-white group-hover:scale-110 transition-all duration-500 mb-5`}>
                    <Icon size={28} className="transition-colors duration-500 text-inherit" />
                  </div>
                  {/* Title Segment */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500 mb-3">
                    {item.title}
                  </h3>
                  {/* Description Paragraph */}
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-6">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;