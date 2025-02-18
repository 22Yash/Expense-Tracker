import React from "react";
import Sidebar from "./components/Sidebar";

import QuickAccess from "./components/QuickAccess";
import TeamSpendingChart from "./components/TeamSpendingChart";
import ExpensesChart from "./components/ExpensesChart";
import MonthlyExpensesChart from "./components/MonthlyExpensesChart";
import CategoryWisePieChart from "./components/CategoryWisePieChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MonthlyExpensesChart/>
          <CategoryWisePieChart/>
          
        </div>

        <QuickAccess />

        
      </div>
    </div>
  );
}

export default Dashboard;
