import React from "react";
import { Link } from "react-router-dom";
import cmpImage from "../assets/cmp.png";
import lmsImage from "../assets/lms.png";
import cmfImage from "../assets/cmf.png";

const services = [
  {
    title: "Conference Paper Submission",
    img: cmpImage,
    desc: "Submit research papers, abstracts, and academic articles for conferences.",
    link: "/login",
    gradient: "from-slate-700 to-slate-900",
  },

  {
    title: "LMS Moodle Integration",
    img: lmsImage,
    desc: "Manage reviewer assignments and peer review workflows efficiently.",
    link: "/login",
    gradient: "from-blue-700 to-indigo-900",
  },

  {
    title: "Conference Management",
    img: cmfImage,
    desc: "Organize schedules, sessions, tracks, and participant activities.",
    link: "/login",
    gradient: "from-gray-700 to-gray-900",
  },
];

const Services = () => {
  return (
    <section className="text-black pt-6 sm:pt-10 pb-6 mt-8">

      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12">
          
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold mb-4
              bg-gradient-to-r from-blue-700 to-indigo-900
              bg-clip-text text-transparent
            "
          >
            Conference Services
          </h2>

          <p
            className="
              text-sm sm:text-base md:text-lg
              text-gray-600
              max-w-3xl
              leading-7
            "
          >
            Academic Sutra provides a complete platform for conference
            paper submission, research collaboration, peer review,
            and academic event management.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, i) => (
            <Link to={item.link} key={i}>

              <div
                className={`
                  p-6 rounded-3xl text-white
                  bg-gradient-to-br ${item.gradient}
                  hover:-translate-y-2 hover:shadow-2xl
                  transition-all duration-500
                  group overflow-hidden
                  relative
                `}
              >

                {/* Background Glow */}
                <div
                  className="
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-white/5
                  "
                ></div>

                {/* Image */}
                <div className="relative z-10 overflow-hidden rounded-xl mb-5">
                  
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-full h-44 object-contain
                      group-hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative z-10
                    text-xl sm:text-2xl
                    font-bold mb-3
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative z-10
                    text-sm sm:text-base
                    text-gray-300
                    leading-7
                  "
                >
                  {item.desc}
                </p>

                {/* Bottom Line */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-1 w-0
                    bg-blue-400
                    group-hover:w-full
                    transition-all duration-500
                  "
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;