import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function MonthlyExpensesChart() {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetch("https://expense-tracker-82ck.onrender.com/api/expenses")
      .then((res) => res.json())
      .then((data) => {
        const groupedData = data.reduce((acc, expense) => {
          const month = new Date(expense.date).toLocaleString("default", { month: "short" });
          acc[month] = (acc[month] || 0) + expense.total;
          return acc;
        }, {});

        const chartData = Object.keys(groupedData).map((month) => ({
          month,
          total: groupedData[month],
        }));

        setMonthlyData(chartData);
      })
      .catch((error) => console.error("Error fetching expenses:", error));
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-white">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyData}>
          <XAxis dataKey="month" stroke="#ddd" />
          <YAxis stroke="#ddd" />
          <Tooltip />
          <Bar dataKey="total" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyExpensesChart;
