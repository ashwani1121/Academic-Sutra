import React from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllConferences = ({ conferences, darkMode }) => {

  const navigate = useNavigate(); 
    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

            <table className="w-full">
                <thead className="bg-gray-50 border-b">
                    <tr>
                        <th className="px-4 py-4 text-left font-semibold">
                            Name
                        </th>

                        <th className="px-4 py-4 text-left font-semibold">
                            Start Date
                        </th>

                        <th className="px-4 py-4 text-left font-semibold">
                            Location
                        </th>

                        <th className="px-4 py-4 text-left font-semibold">
                            External URL
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {conferences.map((conference, index) => (
                        <tr
                            key={index}
                            className={`
                border-b
                ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                hover:bg-blue-50
              `}
                        >
                            <td
                                className="
    px-5 py-5
    text-blue-700
    font-medium
    cursor-pointer
    hover:underline
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
                                    className="text-blue-600 hover:underline"
                                >
                                    {conference.url}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default AllConferences;