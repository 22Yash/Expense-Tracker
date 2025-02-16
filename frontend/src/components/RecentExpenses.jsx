import React from "react";

const expenses = [
  {
    subject: "Office Supplies",
    employee: "John Smith",
    team: "Marketing",
    amount: "€150.00",
  },
  {
    subject: "Business Lunch",
    employee: "Sarah Jade",
    team: "Sales",
    amount: "€75.50",
  },
  {
    subject: "Travel Expenses",
    employee: "Mike Brown",
    team: "Operations",
    amount: "€450.25",
  },
  {
    subject: "Client Dinner",
    employee: "Jennifer Lee",
    team: "Marketing",
    amount: "€120.00",
  },
  {
    subject: "Hotel",
    employee: "David Wilson",
    team: "Finance",
    amount: "€275.75",
  },
];

function TeamBadge({ team }) {
  const teamColors = {
    Marketing: "bg-purple-600",
    Sales: "bg-blue-600",
    Operations: "bg-green-600",
    Finance: "bg-orange-600",
  };

  return (
    <span className={`px-2 py-1 rounded text-white text-xs ${teamColors[team] || "bg-gray-600"}`}>
      {team}
    </span>
  );
}

function RecentExpenses() {
  return (
    <div className="bg-[#242424] border-0 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Expenses</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-4 text-sm text-gray-400 pb-2">
          <span>Subject</span>
          <span>Employee</span>
          <span>Team</span>
          <span>Amount</span>
        </div>
        <div className="space-y-3">
          {expenses.map((expense) => (
            <div key={`${expense.subject}-${expense.employee}`} className="grid grid-cols-4 items-center">
              <span>{expense.subject}</span>
              <span className="text-gray-400">{expense.employee}</span>
              <TeamBadge team={expense.team} />
              <span>{expense.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentExpenses;
