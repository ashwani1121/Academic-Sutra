import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const dropdownRef = useRef(null);
  const navItems = ["HOME", "ABOUT", "SERVICES", "FEATURES", "WHY US", "CONTACT"];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowContact(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleItemAction = (item, sectionId) => {
    if (item === "CONTACT") {
      setShowContact(!showContact);
    } else {
      setShowContact(false);
      setOpen(false);
      if (item === "HOME") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setShowContact(false);
            }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold text-xs sm:text-sm">
              AS
            </div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Academic Sutra
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base font-medium text-gray-800">
            {navItems.map((item, i) => {
              const sectionId = item === "HOME" ? "/" : `#${item.toLowerCase().replace(" ", "")}`;
              if (item === "CONTACT") {
                return (
                  <div key={i} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => handleItemAction(item, sectionId)}
                      className="relative border-none bg-transparent font-medium text-sm lg:text-base text-gray-800 cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-700 after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:bg-clip-text hover:text-transparent focus:outline-none"
                    >
                      {item}
                    </button>
                    {/* Floating Contact Card */}
                    {showContact && (
                      <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-50 transform origin-top-right transition-all duration-200">
                        <div className="space-y-4 text-left">
                          <a href="tel:+916200998560" className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition duration-200 group block" style={{ textDecoration: 'none' }}>
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                              <Phone size={16} />
                            </div>
                            <div>
                              <span className="text-[10px] font-black text-gray-600 tracking-wider block uppercase mb-0.5">Call Hotline</span>
                              <span className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors">+(91) 6200998560</span>
                            </div>
                          </a>
                          <a href="mailto:support@academicsutra.com" className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition duration-200 group block" style={{ textDecoration: 'none' }}>
                            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                              <Mail size={16} />
                            </div>
                            <div>
                              <span className="text-[10px] font-black text-gray-600 tracking-wider block uppercase mb-0.5">Support Desk</span>
                              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">support@academicsutra.com</span>
                            </div>
                          </a>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                              <MapPin size={16} />
                            </div>
                            <div>
                              <span className="text-[10px] font-black text-gray-600 tracking-wider block uppercase">Lab Facility</span>
                              <span className="text-xs text-gray-600 font-medium leading-relaxed block mt-1">
                                Nano Communication Lab, Department of CSE, SRM University AP, India.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return item === "HOME" ? (
                <button
                  key={i}
                  onClick={() => handleItemAction(item, sectionId)}
                  className="relative border-none bg-transparent font-medium text-sm lg:text-base text-gray-800 cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-700 after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:bg-clip-text hover:text-transparent"
                >
                  {item}
                </button>
              ) : (
                <a
                  key={i}
                  href={sectionId}
                  onClick={() => setShowContact(false)}
                  className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-700 after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:bg-clip-text hover:text-transparent"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" onClick={() => setShowContact(false)}>
              <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-900 hover:text-white transition">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={() => setShowContact(false)}>
              <button className="px-4 py-2 text-white rounded font-medium text-sm bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 hover:shadow-lg transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => { setOpen(!open); setShowContact(false); }} className="text-gray-800 focus:outline-none">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white border-t px-[10px] sm:px-6 py-4 space-y-4 text-gray-800">
          {navItems.map((item, i) => {
            const sectionId = item === "HOME" ? "/" : `#${item.toLowerCase().replace(" ", "")}`;
            if (item === "CONTACT") {
              return (
                <div key={i} className="space-y-2">
                  <button
                    onClick={() => handleItemAction(item, sectionId)}
                    className="block text-sm font-medium text-gray-800 hover:text-blue-500 text-left w-full border-none bg-transparent focus:outline-none"
                  >
                    {item}
                  </button>
                  {showContact && (
                    <div className="pl-3 border-l-2 border-gray-100 space-y-3 pt-1 pb-2">
                      <a href="tel:+916200998560" className="flex items-center gap-2.5 text-xs font-semibold text-gray-700" style={{ textDecoration: 'none' }}>
                        <Phone size={14} className="text-blue-600" />
                        <span>+(91) 6200998560</span>
                      </a>
                      <a href="mailto:support@academicsutra.com" className="flex items-center gap-2.5 text-xs font-semibold text-gray-700" style={{ textDecoration: 'none' }}>
                        <Mail size={14} className="text-purple-600" />
                        <span>support@academicsutra.com</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            }
            return item === "HOME" ? (
              <button
                key={i}
                onClick={() => handleItemAction(item, sectionId)}
                className="block text-sm font-medium hover:text-blue-500 text-left w-full border-none bg-transparent focus:outline-none"
              >
                {item}
              </button>
            ) : (
              <a
                key={i}
                href={sectionId}
                className="block text-sm font-medium hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            );
          })}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="w-full border py-2 rounded text-sm font-medium">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={() => setOpen(false)}>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 rounded font-medium text-sm">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;