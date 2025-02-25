import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is already logged in, redirect to Dashboard
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-4xl font-extrabold mb-4 text-center">
        Take Control of Your <span className="text-blue-400">Expenses</span> 🚀
      </h1>
      <p className="mb-6 text-lg text-center">
        Track your spending, set budgets, and save more—all in one place!
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button 
          className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-600 transition"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button 
          className="bg-green-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-green-600 transition"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button 
          className="bg-yellow-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-yellow-600 transition"
          onClick={() => navigate("/dashboard")}
        >
          Try Demo
        </button>
      </div>

      {/* Key Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">📊 Track Expenses</h2>
          <p className="text-gray-300 text-sm mt-2">Monitor your daily, weekly, and monthly spending with ease.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">💰 Set Budgets</h2>
          <p className="text-gray-300 text-sm mt-2">Create and manage budgets to stay on top of your finances.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">📉 Get Insights</h2>
          <p className="text-gray-300 text-sm mt-2">Analyze spending patterns with charts and reports.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
