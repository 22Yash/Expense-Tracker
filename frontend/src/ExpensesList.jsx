import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function ExpensesList() {
  const [expenses, setExpenses] = useState([]);

  // Fetch Expenses from Backend
  useEffect(() => {
    fetch("http://localhost:4000/api/expenses")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Expenses:", data); // Log the entire array
        data.forEach((expense, index) => {
          console.log(`Expense ${index}:`, expense);  // Log each expense
        });
        setExpenses(data);
      })
      .catch((error) => console.error("Error fetching expenses:", error));
  }, []);

  return (
    <div className="flex h-screen bg-[#242424] gap-[30px] text-gray-300">
      <Sidebar />
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
                  <th className="p-3">Category</th>
                </tr>
              </thead>
              <tbody>
  {expenses.map((expense) => (
    <tr key={expense._id} className="border-t border-gray-600">
      <td className="p-3">{expense.name}</td> {/* If the name is actually in 'name' */}
      <td className="p-3 text-teal-400">${expense.amount}</td> {/* If the amount is in 'amount' */}
      <td className="p-3">{expense.date}</td>
      <td className="p-3">{expense.category}</td>
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
