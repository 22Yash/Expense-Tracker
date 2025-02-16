import React, { useState } from "react";

import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const dummyExpenses = [
  { id: 1, name: "Groceries", amount: 50, date: "2025-02-10" },
  { id: 2, name: "Transport", amount: 20, date: "2025-02-12" },
  { id: 3, name: "Dining", amount: 35, date: "2025-02-14" },
];

function ExpensesList() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  return (
    <div className="flex h-screen bg-[#242424] gap-[30px    ] text-gray-300">
   <Sidebar/>

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-teal-400 mb-6">Previous Expenses</h1>

        {expenses.length === 0 ? (
          <p className="text-gray-400">No expenses recorded yet.</p>
        ) : (
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <table className="w-full text-left text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Amount ($)</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id} className="border-t border-gray-600">
                    <td className="p-3">{expense.name}</td>
                    <td className="p-3 text-teal-400">${expense.amount}</td>
                    <td className="p-3">{expense.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Button to Add New Expense */}
        <div className="mt-6">
          <Link
            to="/new-expense"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            + Add New Expense
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExpensesList;
