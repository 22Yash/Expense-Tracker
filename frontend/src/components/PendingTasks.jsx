import React from "react";
import { CheckSquare, CreditCard, FileText, Plane, Receipt } from "lucide-react";

const tasks = [
  {
    icon: CheckSquare,
    label: "Pending Approvals",
    value: "5",
    color: "text-purple-500",
  },
  {
    icon: Plane,
    label: "New Trips Registered",
    value: "1",
    color: "text-blue-500",
  },
  {
    icon: Receipt,
    label: "Unreported Expenses",
    value: "4",
    color: "text-pink-500",
  },
  {
    icon: CreditCard,
    label: "Upcoming Expenses",
    value: "0",
    color: "text-teal-500",
  },
  {
    icon: FileText,
    label: "Unreported Advances",
    value: "€0.00",
    color: "text-orange-500",
  },
];

function PendingTasks() {
  return (
    <div className="bg-[#242424] border-0 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Pending Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.label} className="flex justify-between items-center text-gray-300">
            <div className="flex items-center gap-2">
              <task.icon className={`w-5 h-5 ${task.color}`} />
              <span>{task.label}</span>
            </div>
            <span>{task.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingTasks;
