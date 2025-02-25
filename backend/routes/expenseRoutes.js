import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// Add a new expense
router.post("/", async (req, res) => {  // Changed from "/add" to "/"
    try {
        console.log("Incoming Data:", req.body); // Log the incoming data to verify
    
        const newExpense = new Expense(req.body);
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (err) {
        console.error("Error saving expense:", err);
        res.status(500).json({ error: err.message });
    }
});

// Get all expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        console.log("Fetched Expenses:", expenses); // Log expenses before sending
        res.json(expenses);
    } catch (err) {
        console.error("Error fetching expenses:", err);
        res.status(500).json({ error: err.message });
    }
});

export default router;
