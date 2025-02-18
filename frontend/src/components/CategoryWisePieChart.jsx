import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#d62728"];

function CategoryWisePieChart() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://expense-tracker-82ck.onrender.com/api/expenses")
      .then((res) => res.json())
      .then((data) => {
        const groupedData = data.reduce((acc, expense) => {
          acc[expense.category] = (acc[expense.category] || 0) + expense.total;
          return acc;
        }, {});

        const chartData = Object.keys(groupedData).map((category, index) => ({
          name: category,
          value: groupedData[category],
          color: COLORS[index % COLORS.length],
        }));

        setCategoryData(chartData);
      })
      .catch((error) => console.error("Error fetching expenses:", error));
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-white">Expenses by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryWisePieChart;
