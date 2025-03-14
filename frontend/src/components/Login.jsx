import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ React Router for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
  
    try {
      const response = await fetch(
        "https://expense-tracker-82ck.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message || "Login successful!");
  
        // ✅ Ensure `userId` is stored properly
        if (data.user && data.user._id) {
          localStorage.setItem("userId", data.user._id);
          console.log("User ID stored:", data.user._id);
        } else {
          console.error("Error: User ID not found in response.");
        }
  
        // ✅ Store token & user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
  
        // ✅ Redirect using React Router
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
