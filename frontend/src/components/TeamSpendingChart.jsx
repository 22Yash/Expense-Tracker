"use client";

import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function TeamSpendingChart() {
  const data = [
    { name: "PJ", value: 60 },
    { name: "SJ", value: 30 },
    { name: "MB", value: 55 },
    { name: "IS", value: 45 },
    { name: "DW", value: 25 },
    { name: "NJ", value: 35 },
    { name: "BS", value: 65 },
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-sm font-medium text-gray-400 mb-4">Team Spending Trend</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}K`}
            />
            <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TeamSpendingChart;
