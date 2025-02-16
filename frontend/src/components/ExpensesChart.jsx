"use client";

import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Accommodation", value: 45 },
  { name: "Comms", value: 20 },
  { name: "Services", value: 85 },
  { name: "Food", value: 65 },
  { name: "Fuel", value: 35 },
];

function ExpensesChart() {
  return (
    <div className="bg-[#242424] p-4 rounded-lg">
      <h3 className="text-sm font-medium text-gray-400 mb-4">Day-to-Day Expenses</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              content={({ active, payload }) =>
                active && payload ? (
                  <div className="bg-black text-white p-2 rounded-md text-xs">
                    {`${payload[0].payload.name}: ${payload[0].value}%`}
                  </div>
                ) : null
              }
            />
            <Bar dataKey="value" fill="hsl(250, 80%, 60%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpensesChart;
