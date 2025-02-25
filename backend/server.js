import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import expenseRoutes from './routes/expenseRoutes.js';
import AuthRoutes from './routes/AuthRoutes.js';
import './models/db.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // You missed adding the parentheses here
app.use(express.json());
app.use(cors());

// Simple Route
app.get("/", (req, res) => res.send("Finance Backend Running"));

// Routes
app.use("/api/expenses", expenseRoutes);
app.use("/auth", AuthRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
