import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewExpenseForm from "./NewExpenseForm";
import ExpensesList from "./ExpensesList";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<ExpensesList/>} />
        <Route path="/new-expense" element={<NewExpenseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
