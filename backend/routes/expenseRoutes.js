import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// Add a new expense
router.post("/", async (req, res) => {
    try {
        const { userId, subject, merchant, date, total, currency, reimbursable, category, description, employee, addToReport } = req.body;

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const newExpense = new Expense({ 
            userId, subject, merchant, date, total, currency, reimbursable, category, description, employee, addToReport
        });

        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Get all expenses
router.get("/", async (req, res) => {
    try {
        const { userId } = req.query; // Get userId from request query

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const expenses = await Expense.find({ userId }); // Fetch expenses for the user
        res.json(expenses);
    } catch (err) {
        console.error("Error fetching expenses:", err);
        res.status(500).json({ error: err.message });
    }
});


export default router;
