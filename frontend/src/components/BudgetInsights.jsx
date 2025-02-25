import React, { useState } from "react";

function BudgetInsights({ totalExpenses }) {
  const [income, setIncome] = useState(""); // Default to empty for better UX
  const remaining = income ? income - totalExpenses : 0;
  
  // Calculate progress percentage safely
  const progressPercentage = income ? (totalExpenses / income) * 100 : 0;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-lg font-semibold mb-4">Budget Insights</h2>

      {/* User Input for Total Income */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Enter Your Total Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value) || "")}
          className="w-full p-2 bg-gray-700 rounded outline-none text-white"
          placeholder="₹ Enter your income"
        />
      </div>

      {/* Display Budget Details */}
      <p>Total Income: <span className="text-green-400">₹{income || 0}</span></p>
      <p>Spent: <span className="text-red-400">₹{totalExpenses}</span></p>
      <p>Remaining: 
        <span className={remaining < 0 ? "text-red-400" : "text-yellow-400"}>
          ₹{remaining}
        </span>
      </p>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-700 h-4 rounded-full overflow-hidden">
        <div
          className={`h-4 rounded-full transition-all ${
            remaining < 0 ? "bg-red-500" : "bg-green-400"
          }`}
          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BudgetInsights;
    