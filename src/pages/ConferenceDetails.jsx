import React, { useState } from "react";
import { HelpCircle, ChevronDown, User, LogOut, Settings, Bell, Moon, Lock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ConferenceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showHelp, setShowHelp] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleHelp = (e) => {
    e.stopPropagation();
    setShowHelp(!showHelp);
    setShowAuthor(false);
    setShowSystem(false);
    setShowProfile(false);
  };

  const toggleAuthor = (e) => {
    e.stopPropagation();
    setShowAuthor(!showAuthor);
    setShowHelp(false);
    setShowSystem(false);
    setShowProfile(false);
  };

  const toggleSystem = (e) => {
    e.stopPropagation();
    setShowSystem(!showSystem);
    setShowHelp(false);
    setShowAuthor(false);
    setShowProfile(false);
  };

  const toggleProfile = (e) => {
    e.stopPropagation();
    setShowProfile(!showProfile);
    setShowHelp(false);
    setShowAuthor(false);
    setShowSystem(false);
  };

  const closeAllMenus = () => {
    setShowHelp(false);
    setShowAuthor(false);
    setShowSystem(false);
    setShowProfile(false);
  };

  return (
    <section className="min-h-screen bg-gray-100" onClick={closeAllMenus}>
      {/* NAVBAR */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* LOGO */}
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/conference-dashboard")}
          >
            Submissions
          </h1>
          {/* RIGHT SIDE */}
          <div className="flex flex-wrap items-center gap-4">
            {/* HELP CENTER */}
            <div className="relative">
              <button
                onClick={toggleHelp}
                /* CHANGED: Swapped hover:text-yellow-200 with theme matching hover:text-purple-200 */
                className="flex items-center gap-2 hover:text-purple-200 transition-colors"
              >
                <HelpCircle size={18} />
                Help Center
              </button>
              {showHelp && (
                <div className="absolute right-0 mt-3 w-72 bg-white text-black rounded-xl shadow-xl p-4 z-50" onClick={(e) => e.stopPropagation()}>
                  <h3 className="font-bold mb-3">Help Center</h3>
                  <div className="space-y-3 text-sm">
                    <p>How do I create a submission?</p>
                    <p>How do I check submission status?</p>
                    <p>How do I edit my submission?</p>
                  </div>
                </div>
              )}
            </div>
            {/* AUTHOR */}
            <div className="relative">
              <button
                onClick={toggleAuthor}
                className="flex items-center gap-1 hover:text-purple-200 transition-colors"
              >
                Author
                <ChevronDown size={16} />
              </button>
              {showAuthor && (
                <div className="absolute right-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 overflow-hidden z-50" onClick={(e) => e.stopPropagation()}>
                  <button className="w-full text-left px-4 py-3 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700">
                    My Submissions
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700">
                    Author Dashboard
                  </button>
                </div>
              )}
            </div>
            {/* CMTSRM */}
            <div className="relative">
              <button
                onClick={toggleSystem}
                className="flex items-center gap-1 hover:text-purple-200 transition-colors"
              >
                CMTSRM
                <ChevronDown size={16} />
              </button>
              {showSystem && (
                <div className="absolute right-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 overflow-hidden z-50" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => navigate("/conference-dashboard")}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700"
                  >
                    Conference List
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-blue-50/60 hover:text-purple-700 transition-all duration-200 text-gray-700">
                    System Settings
                  </button>
                </div>
              )}
            </div>
            {/* USER PROFILE */}
            <div className="relative">
              <button
                onClick={toggleProfile}
                /* CHANGED: Swapped hover:text-yellow-200 out for theme matching hover:text-purple-200 */
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
                <ChevronDown size={18} className={`transition-transform duration-300 ${showProfile ? "rotate-180" : ""}`} />
              </button>
              {/* DROPDOWN */}
              {showProfile && (
                <div className="absolute right-0 mt-4 w-[92vw] sm:w-[320px] rounded-3xl shadow-2xl overflow-hidden z-50 animate-fadeIn bg-white text-black" onClick={(e) => e.stopPropagation()}>
                  {/* TOP PROFILE CARD */}
                  {/* CHANGED: Replaced to-yellow-500 with to-indigo-900 for the blue, purple, and indigo theme flow */}
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
                      /* CHANGED: Swapped hover:bg-gray-100 out for blue-purple theme hover styling */
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
                      /* CHANGED: Swapped hover:bg-gray-100 out for blue-purple theme hover styling */
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
                      /* CHANGED: Swapped hover:bg-gray-100 out for blue-purple theme hover styling */
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
                      onClick={() => alert("Dark mode toggle logic")}
                      /* CHANGED: Swapped hover:bg-gray-100 out for blue-purple theme hover styling */
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
                      /* CHANGED: Swapped hover:bg-gray-100 out for blue-purple theme hover styling */
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
                      onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}
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

      {/* PAGE CONTENT */}
      <div className="max-w-[1440px] mx-auto px-3 py-8">
        <h1 className="text-4xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-4">
          Author Console
        </h1>
        {/* ACTION BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          {/* LEFT */}
          <button className="bg-white border border-gray-400 px-4 py-2 text-sm hover:bg-gray-50 transition">
            + Create New Site Request
          </button>
          {/* RIGHT */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-700">0 - 0 of 0</span>
            {/* Pagination */}
            <div className="flex">
              <button className="border px-3 py-1 bg-white hover:bg-gray-100">&laquo;</button>
              <button className="border-t border-b border-r px-3 py-1 bg-white hover:bg-gray-100">&lsaquo;</button>
              <button className="border-t border-b border-r px-3 py-1 bg-blue-600 text-white">1</button>
              <button className="border-t border-b border-r px-3 py-1 bg-white hover:bg-gray-100">&rsaquo;</button>
              <button className="border-t border-b border-r px-3 py-1 bg-white hover:bg-gray-100">&raquo;</button>
            </div>
            <span className="text-sm font-medium">Show:</span>
            <select className="border px-3 py-1 bg-white">
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
              <option>All</option>
            </select>
            <button className="border px-3 py-1 bg-white hover:bg-gray-100">Clear All Filters</button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-300">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse">
              <thead>
                {/* HEADER ROW */}
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-[140px]">Request ID</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Title</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-[180px]">Files</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-[180px] cursor-pointer hover:bg-gray-200 select-none">Status ▲▼</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-[180px]">Actions</th>
                </tr>
                {/* FILTER ROW */}
                <tr className="bg-white">
                  {/* REQUEST ID FILTER */}
                  <td className="border border-gray-300 p-2 align-top">
                    <input type="text" className="w-full border border-gray-400 px-2 py-1 text-sm" />
                    <div className="mt-2">
                      <button className="text-blue-600 text-sm hover:underline">Clear</button>
                    </div>
                  </td>
                  {/* TITLE FILTER */}
                  <td className="border border-gray-300 p-2 align-top">
                    <input type="text" className="w-full border border-gray-400 px-2 py-1 text-sm" />
                    <div className="mt-2">
                      <button className="text-blue-600 text-sm hover:underline">Clear</button>
                    </div>
                  </td>
                  {/* FILES + STATUS + ACTIONS */}
                  <td colSpan="3" className="border border-gray-300 align-top p-2">
                    <div className="h-[60px] flex items-end">
                      <button className="text-blue-600 text-sm hover:underline">Clear</button>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="border border-gray-300 h-[350px] text-center text-gray-500 align-middle">
                    No Requests Found For Conference #{id}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetails;