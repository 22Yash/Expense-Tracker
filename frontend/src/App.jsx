import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewExpenseForm from "./NewExpenseForm";
import ExpensesList from "./ExpensesList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expenses" element={<ExpensesList/>} />
        <Route path="/new-expense" element={<NewExpenseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
