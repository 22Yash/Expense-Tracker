import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import QuickAccess from "./components/QuickAccess";
import MonthlyExpensesChart from "./components/MonthlyExpensesChart";
import CategoryWisePieChart from "./components/CategoryWisePieChart";
import BudgetInsights from "./components/BudgetInsights"; // New Component
import { Menu } from "lucide-react"; // Mobile sidebar toggle button

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col md:flex-row">
      
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="md:hidden p-4 bg-gray-800 w-full flex justify-between items-center"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="text-lg font-bold">Expense Tracker</span>
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar (Hidden on Mobile, Toggleable) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 space-y-6">
        
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold">Total Income</h2>
            <p className="text-2xl font-bold text-green-400">₹50,000</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold">Total Expenses</h2>
            <p className="text-2xl font-bold text-red-400">₹30,000</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold">Balance Left</h2>
            <p className="text-2xl font-bold text-yellow-400">₹20,000</p>
          </div>
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
