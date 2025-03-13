import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuickAccess from "./components/QuickAccess";
import MonthlyExpensesChart from "./components/MonthlyExpensesChart";
import CategoryWisePieChart from "./components/CategoryWisePieChart";
import BudgetInsights from "./components/BudgetInsights";
import { Menu, X } from "lucide-react"; // Close icon added

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [financialData, setFinancialData] = useState({
    income: 0,
    expenses: 0,
    balance: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch financial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get auth token
        const response = await fetch(
          "https://expense-tracker-82ck.onrender.com/api/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setFinancialData({
            income: data.totalIncome || 0,
            expenses: data.totalExpenses || 0,
            balance: data.balance || 0,
          });
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col md:flex-row">
      
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="md:hidden p-4 bg-gray-800 w-full flex justify-between items-center"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="text-lg font-bold">Expense Tracker</span>
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar (Toggleable) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0`}
      >
        <div className="md:hidden p-4 flex justify-end">
          <X className="w-6 h-6 cursor-pointer" onClick={() => setSidebarOpen(false)} />
        </div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 space-y-6">
        
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : (
            <>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h2 className="text-lg font-semibold">Total Income</h2>
                <p className="text-2xl font-bold text-green-400">
                  ₹{financialData.income.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h2 className="text-lg font-semibold">Total Expenses</h2>
                <p className="text-2xl font-bold text-red-400">
                  ₹{financialData.expenses.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h2 className="text-lg font-semibold">Balance Left</h2>
                <p className="text-2xl font-bold text-yellow-400">
                  ₹{financialData.balance.toLocaleString()}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <MonthlyExpensesChart />
          <CategoryWisePieChart />
        </div>

        {/* Budget Insights */}
        <BudgetInsights />

        {/* Quick Access Section */}
        <QuickAccess />
      </div>
    </div>
  );
}

export default Dashboard;
