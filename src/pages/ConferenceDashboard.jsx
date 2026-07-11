import React, { useState, useRef, useEffect } from "react";
import MyConferences from "./MyConferences";
import AllConferences from "./AllConferences";
import {
  Search,
  Mail,
  ChevronDown,
  LogOut,
  Lock,
  User,
  HelpCircle,
  Settings,
  Bell,
  Moon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const myConferences = [
  {
    name: "Academic Sutra AI & Research Conference 2026",
    date: "10/22/2026",
    location: "Delhi, India",
    url: "https://academicsutra.com",
  },
  {
    name: "International Conference on Data Science",
    date: "11/12/2026",
    location: "Bangalore, India",
    url: "https://datascienceconf.com",
  },
];

const allConferences = [
  {
    name: "4th International Conference on Automation and Computation",
    date: "10/22/2026",
    location: "Dehradun, India",
    url: "https://autocom.org.in",
  },
  {
    name: "International Conference on AI & Machine Learning",
    date: "12/26/2025",
    location: "Greater Noida, India",
    url: "https://icaaaiml.com",
  },
  {
    name: "Conference on Networks & Cryptology",
    date: "10/08/2026",
    location: "New Delhi, India",
    url: "https://netcrypt.org.in",
  },
];

const faqs = [
  {
    question: "How can I submit a paper?",
    answer: "You can submit papers through the paper submission section after login.",
  },
  {
    question: "Can I track paper status?",
    answer: "Yes, Academic Sutra allows authors to track review and acceptance status.",
  },
  {
    question: "How do reviewers access papers?",
    answer: "Assigned reviewers can access papers from their reviewer dashboard.",
  },
];

const ConferenceDashboard = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("my");
  const [showHelp, setShowHelp] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notificationCount] = useState();
  const helpRef = useRef();
  const userRef = useRef();

  // CLOSE DROPDOWN WHEN CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setShowHelp(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const conferences = activeTab === "my" ? myConferences : allConferences;
  const filteredConferences = conferences.filter((conference) =>
    conference.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={`min-h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* NAVBAR */}
      <div className={`text-white shadow-lg ${darkMode ? "bg-gray-955 border-b border-gray-800" : "bg-gradient-to-r from-blue-600 to-purple-700"}`}>
        <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* LOGO */}
          <h1 className="text-2xl font-bold">Conferences</h1>
          {/* RIGHT SIDE */}
          <div className="flex items-center justify-end gap-4 flex-wrap">
            {/* HELP CENTER */}
            <div className="relative" ref={helpRef}>
              <button
                onClick={() => {
                  setShowHelp(!showHelp);
                  setShowUserMenu(false);
                }}
                /* CHANGED: Swapped hover:text-yellow-200 with theme matching hover:text-purple-200 */
                className="flex items-center gap-2 hover:text-purple-200 transition"
              >
                <HelpCircle size={20} />
                <span className="hidden sm:block">Help Center</span>
              </button>
              {showHelp && (
                <div className={`absolute right-0 mt-3 w-[95vw] sm:w-[360px] rounded-2xl shadow-2xl p-5 z-50 animate-fadeIn ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4 max-h-[350px] overflow-y-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-3">
                        <h4 className="font-semibold text-blue-700 mb-1">{faq.question}</h4>
                        <p className="text-sm text-gray-600 leading-6">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* USER PROFILE */}
            <div className="relative" ref={userRef}>
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowHelp(false);
                }}
                /* CHANGED: Match the updated hover token text properties */
                className="flex items-center gap-2 hover:text-purple-200 transition-all duration-300"
              >
                {/* PROFILE IMAGE */}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-semibold text-lg border border-white/30">
                  AG
                </div>
                {/* NAME */}
                <div className="hidden md:flex flex-col items-start">
                  <span className="font-medium leading-4">Ashwani Gupta</span>
                </div>
                {/* ARROW */}
                <ChevronDown size={18} className={`transition-transform duration-300 ${showUserMenu ? "rotate-180" : ""}`} />
              </button>
              {/* DROPDOWN */}
              {showUserMenu && (
                <div className={`absolute right-0 mt-4 w-[92vw] sm:w-[320px] rounded-3xl shadow-2xl overflow-hidden z-50 animate-fadeIn bg-white text-black`}>
                  {/* TOP PROFILE CARD */}
                  {/* CHANGED: Replaced to-yellow-500 with to-indigo-900 to give the blue/purple combo match */}
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-900 p-5 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold border border-white/30">
                        AG
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Ashwani Gupta</h3>
                        <p className="text-sm text-white/90">admin@academicsutra.com</p>
                        <span className="inline-block mt-2 text-xs bg-white/20 px-3 py-1 rounded-full">Super Admin</span>
                      </div>
                    </div>
                  </div>
                  {/* MENU ITEMS */}
                  <div className="py-2">
                    {/* PROFILE */}
                    <button
                      onClick={() => navigate("/profile")}
                      /* CHANGED: Swapped hover styles to match the layout buttons exactly */
                      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700"
                    >
                      <User size={20} />
                      <div className="text-left">
                        <p className="font-medium">My Profile</p>
                        <p className="text-xs text-gray-500">View profile information</p>
                      </div>
                    </button>
                    {/* SETTINGS */}
                    <button
                      onClick={() => navigate("/settings")}
                      /* CHANGED: Swapped hover styles to match the layout buttons exactly */
                      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700"
                    >
                      <Settings size={20} />
                      <div className="text-left">
                        <p className="font-medium">Settings</p>
                        <p className="text-xs text-gray-500">Manage your account settings</p>
                      </div>
                    </button>
                    {/* NOTIFICATIONS */}
                    <button
                      onClick={() => navigate("/notifications")}
                      /* CHANGED: Swapped hover styles to match the layout buttons exactly */
                      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700"
                    >
                      <Bell size={20} />
                      <div className="text-left">
                        <p className="font-medium">Notifications</p>
                        <p className="text-xs text-gray-500">Check latest updates</p>
                      </div>
                    </button>
                    {/* DARK MODE */}
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      /* CHANGED: Swapped hover styles to match the layout buttons exactly */
                      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700"
                    >
                      <Moon size={20} />
                      <div className="text-left">
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-xs text-gray-500">Switch appearance mode</p>
                      </div>
                    </button>
                    {/* CHANGE PASSWORD */}
                    <button
                      onClick={() => navigate("/change-password")}
                      /* CHANGED: Swapped hover styles to match the layout buttons exactly */
                      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700"
                    >
                      <Lock size={20} />
                      <div className="text-left">
                        <p className="font-medium">Change Password</p>
                        <p className="text-xs text-gray-500">Update your password securely</p>
                      </div>
                    </button>
                    {/* DIVIDER */}
                    <div className="my-2 border-t"></div>
                    {/* LOGOUT */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-red-50 transition-all duration-200 text-red-600"
                    >
                      <LogOut size={20} />
                      <div className="text-left">
                        <p className="font-medium">Logout</p>
                        <p className="text-xs text-red-400">Securely sign out account</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* HEADING */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-5">
              Conference List
            </h2>
            {/* TABS */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab("my")}
                className={`px-5 py-3 rounded-lg font-medium transition ${activeTab === "my" ? "bg-blue-600 text-white" : "bg-white border border-gray-300 text-gray-700"}`}
              >
                My Conferences ({myConferences.length})
              </button>
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-3 rounded-lg font-medium transition ${activeTab === "all" ? "bg-blue-600 text-white" : "bg-white border border-gray-300 text-gray-700"}`}
              >
                All Conferences ({allConferences.length})
              </button>
            </div>
          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-[320px]">
            <input
              type="text"
              placeholder="type to filter..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full lg:w-72 px-8 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* TABLE */}
        {activeTab === "my" ? (
          <MyConferences conferences={filteredConferences} darkMode={darkMode} />
        ) : (
          <AllConferences conferences={filteredConferences} darkMode={darkMode} />
        )}
      </div>
    </section>
  );
};

export default ConferenceDashboard;