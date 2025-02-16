import React from "react";

const teamColors = {
  Marketing: { bg: "bg-purple-900", text: "text-purple-200" },
  Sales: { bg: "bg-red-900", text: "text-red-200" },
  Operations: { bg: "bg-pink-900", text: "text-pink-200" },
  Finance: { bg: "bg-teal-900", text: "text-teal-200" },
};

function TeamBadge({ team }) {
  const colors = teamColors[team] || { bg: "bg-gray-900", text: "text-gray-200" };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-md ${colors.bg} ${colors.text}`}>
      {team}
    </span>
  );
}

export default TeamBadge;
