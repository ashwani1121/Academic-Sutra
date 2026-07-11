import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { name: "Instagram", href: "https://instagram.com", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M2 9v6a7 7 0 0 0 7 7h6a7 7 0 0 0 7-7V9a7 7 0 0 0-7-7H9a7 7 0 0 0-7 7z" },
    { name: "Twitter", href: "https://twitter.com", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
    { name: "Linkedin", href: "https://linkedin.com", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" },
    { name: "Youtube", href: "https://youtube.com", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48L15.45 11.75z" }
  ];

  return (
    <footer className="bg-black text-gray-300 pt-12 sm:pt-16 pb-6 mt-16 font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT - CONTACT */}
        <div>
          <h2 className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-base sm:text-lg font-bold mb-2 tracking-wide uppercase">
            Quick Contact Info
          </h2>
          <div className="w-10 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 mb-6"></div>
          <p className="text-xs sm:text-sm leading-6 sm:leading-7">
            Nano Communication and <br />
            Networking lab, Department of <br />
            Computer Science and Engineering
          </p>
          <div className="mt-6 space-y-4 text-xs sm:text-sm">
            <a 
              href="https://www.google.com/maps?q=SRM+University+AP+Guntur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-start gap-2 transition duration-300 hover:translate-x-1"
            >
              <MapPin className="text-blue-600 mt-1 group-hover:text-purple-600 transition" size={18} />
              <p className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent transition duration-300">
                SRM University AP, Guntur,<br /> Andhra Pradesh, India, 522 240
              </p>
            </a>
            <a 
              href="mailto:support@academicsutra.com" 
              className="group flex items-center gap-2 transition duration-300 hover:translate-x-1"
            >
              <Mail className="text-blue-600 group-hover:text-purple-600 transition" size={18} />
              <p className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent transition duration-300">
                support@academicsutra.com
              </p>
            </a>
            <a 
              href="tel:+916200998560" 
              className="group flex items-center gap-2 transition duration-300 hover:translate-x-1"
            >
              <Phone className="text-blue-600 group-hover:text-purple-600 transition" size={18} />
              <p className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent transition duration-300">
                +(91) 6200998560
              </p>
            </a>
          </div>
        </div>

        {/* RIGHT - LINKS */}
        <div>
          <h2 className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-base sm:text-lg font-bold mb-2 tracking-wide uppercase">
            Quick Links
          </h2>
          <div className="w-10 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 mb-6"></div>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
            {["No categories", "Conferences", "Upcoming Conferences", "E-Learning", "Global Research Opportunities"].map((item, i) => (
              <li key={i}>
                <Link to="#" className="group flex items-center gap-2 transition duration-300 hover:translate-x-1">
                  <span className="text-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent transition duration-300">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10 mt-10 sm:mt-12 border-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-xs sm:text-sm order-2 md:order-1">
            Copyright © 2025 <span className="text-gray-300 font-semibold">Academic Sutra</span>
          </div>
          <div className="flex items-center gap-5 order-1 md:order-2">
            <span className="text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-widest">
              Follow Us
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 border border-gray-800 transition-all duration-500 hover:scale-110 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  >
                    <path d={social.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;