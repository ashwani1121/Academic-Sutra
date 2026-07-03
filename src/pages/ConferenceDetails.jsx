import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  User,
  LogOut,
  Settings,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ConferenceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [showHelp, setShowHelp] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <section className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="bg-gradient-to-r from-yellow-400 via-blue-600 to-purple-700 text-white shadow-lg">

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
                onClick={() => setShowHelp(!showHelp)}
                className="flex items-center gap-2 hover:text-yellow-200"
              >
                <HelpCircle size={18} />
                Help Center
              </button>

              {showHelp && (
                <div className="absolute right-0 mt-3 w-72 bg-white text-black rounded-xl shadow-xl p-4 z-50">
                  <h3 className="font-bold mb-3">
                    Help Center
                  </h3>

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
                onClick={() => setShowAuthor(!showAuthor)}
                className="flex items-center gap-1"
              >
                Author
                <ChevronDown size={16} />
              </button>

              {showAuthor && (
                <div className="absolute right-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 overflow-hidden">
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    My Submissions
                  </button>

                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    Author Dashboard
                  </button>
                </div>
              )}

            </div>

            {/* CMTSRM */}
            <div className="relative">

              <button
                onClick={() => setShowSystem(!showSystem)}
                className="flex items-center gap-1"
              >
                CMTSRM
                <ChevronDown size={16} />
              </button>

              {showSystem && (
                <div className="absolute right-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 overflow-hidden">
                  <button
                    onClick={() =>
                      navigate("/conference-dashboard")
                    }
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    Conference List
                  </button>

                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    System Settings
                  </button>
                </div>
              )}

            </div>

            {/* PROFILE */}
            <div className="relative">

              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-semibold">
                  AG
                </div>

                <span className="hidden md:block">
                  Ashwani Gupta
                </span>

                <ChevronDown size={16} />
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-3 bg-white text-black rounded-xl shadow-xl w-64 overflow-hidden">

                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                  >
                    <User size={18} />
                    Profile
                  </button>

                  <button
                    onClick={() => navigate("/settings")}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                  >
                    <Settings size={18} />
                    Settings
                  </button>

                  <button
                    onClick={() => navigate("/login")}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* PAGE CONTENT */}
      <div className="max-w-[1440px] mx-auto px-3 py-8">

        <h1 className="text-4xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 via-blue-600 to-purple-700 bg-clip-text text-transparent mb-4">
          Author Console
        </h1>

        {/* ACTION BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">

          {/* LEFT */}
          <button
            className="
      bg-white
      border
      border-gray-400
      px-4 py-2
      text-sm
      hover:bg-gray-50
      transition
    "
          >
            + Create New Site Request
          </button>

          {/* RIGHT */}
          <div className="flex flex-wrap items-center gap-3">

            <span className="text-sm text-gray-700">
              0 - 0 of 0
            </span>

            {/* Pagination */}
            <div className="flex">

              <button className="border px-3 py-1 bg-white hover:bg-gray-100">
                &laquo;
              </button>

              <button className="border-t border-b border-r px-3 py-1 bg-white hover:bg-gray-100">
                &lsaquo;
              </button>

              <button className="border-t border-b border-r px-3 py-1 bg-blue-600 text-white">
                1
              </button>

              <button className="border-t border-b border-r px-3 py-1 bg-white hover:bg-gray-100">
                &rsaquo;
              </button>

              <button className="border-t border-b border-r px-3 py-1 bg-white hover:bg-gray-100">
                &raquo;
              </button>

            </div>

            <span className="text-sm font-medium">
              Show:
            </span>

            <select className="border px-3 py-1 bg-white">
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
              <option>All</option>
            </select>

            <button
              className="
        border
        px-3 py-1
        bg-white
        hover:bg-gray-100
      "
            >
              Clear All Filters
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-300">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1100px] border-collapse">

              <thead>

                {/* HEADER ROW */}
                <tr className="bg-gray-100">

                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-[140px]">
                    Request ID
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Title
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-[180px]">
                    Files
                  </th>

                  <th
                    className="
              border border-gray-300
              px-4 py-3
              text-left
              font-semibold
              w-[180px]
              cursor-pointer
              hover:bg-gray-200
              select-none
            "
                  >
                    Status ▲▼
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-[180px]">
                    Actions
                  </th>

                </tr>

                {/* FILTER ROW */}
                <tr className="bg-white">

                  {/* REQUEST ID FILTER */}
                  <td className="border border-gray-300 p-2 align-top">

                    <input
                      type="text"
                      className="
                w-full
                border
                border-gray-400
                px-2
                py-1
                text-sm
              "
                    />

                    <div className="mt-2">
                      <button className="text-blue-600 text-sm hover:underline">
                        Clear
                      </button>
                    </div>

                  </td>

                  {/* TITLE FILTER */}
                  <td className="border border-gray-300 p-2 align-top">

                    <input
                      type="text"
                      className="
                w-full
                border
                border-gray-400
                px-2
                py-1
                text-sm
              "
                    />

                    <div className="mt-2">
                      <button className="text-blue-600 text-sm hover:underline">
                        Clear
                      </button>
                    </div>

                  </td>

                  {/* FILES + STATUS + ACTIONS */}
                  <td
                    colSpan="3"
                    className="
              border border-gray-300
              align-top
              p-2
            "
                  >

                    <div className="h-[60px] flex items-end">

                      <button
                        className="
                  text-blue-600
                  text-sm
                  hover:underline
                "
                      >
                        Clear
                      </button>

                    </div>

                  </td>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td
                    colSpan="5"
                    className="
    border border-gray-300
    h-[350px]
    text-center
    text-gray-500
    align-middle
  "
                  >
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