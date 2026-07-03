import React from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyConferences = ({ conferences, darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-yellow-50 via-blue-50 to-purple-50">
          <tr>
            <th className="px-4 py-4 text-left font-semibold text-gray-800">
              Name
            </th>

            <th className="px-4 py-4 text-left font-semibold text-gray-800">
              Start Date
            </th>

            <th className="px-4 py-4 text-left font-semibold text-gray-800">
              Location
            </th>

            <th className="px-4 py-4 text-left font-semibold text-gray-800">
              External URL
            </th>

            <th className="px-4 py-4 text-left font-semibold text-gray-800">
              Contact
            </th>
          </tr>
        </thead>

        <tbody>
          {conferences.length > 0 ? (
            conferences.map((conference, index) => (
              <tr
                key={index}
                className="border-t hover:bg-blue-50 transition"
              >
                {/* Clickable Conference Name */}
                <td
                  className="
                    px-4 py-4
                    text-blue-700
                    font-medium
                    cursor-pointer
                    hover:underline
                    transition
                  "
                  onClick={() =>
                    navigate(`/conference/${conference.id || index + 1}`)
                  }
                >
                  {conference.name}
                </td>

                <td className="px-4 py-4">
                  {conference.date}
                </td>

                <td className="px-4 py-4">
                  {conference.location}
                </td>

                <td className="px-4 py-4">
                  <a
                    href={conference.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 hover:underline"
                  >
                    Visit
                  </a>
                </td>

                <td className="px-4 py-4">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-purple-600">
                    <Mail size={16} />
                    Email
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center py-10 text-gray-500"
              >
                No Conferences Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyConferences;