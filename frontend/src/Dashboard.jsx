import React from "react";
import Sidebar from "./components/Sidebar";
import PendingTasks from "./components/PendingTasks";
import RecentExpenses from "./components/RecentExpenses";
import QuickAccess from "./components/QuickAccess";
import TeamSpendingChart from "./components/TeamSpendingChart";
import ExpensesChart from "./components/ExpensesChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PendingTasks />
          <RecentExpenses />
        </div>

        <QuickAccess />

        <div className="bg-[#242424] border-0 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-6">Monthly Report</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TeamSpendingChart />
            <ExpensesChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
