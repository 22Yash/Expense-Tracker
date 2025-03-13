import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import dotenv from 'dotenv';
import verifyToken from "../middlewares/auth.js";

const router = express.Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// 🔹 Register Route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existUser = await UserModel.findOne({ email });
        if (existUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 🔹 Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) return res.status(400).json({ message: "User not found!" });

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ 
            success: true, 
            message: "Login successful!", 
            token, 
            user: { id: user._id, name: user.name, email: user.email } // Only send necessary user data
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// 🔹 Protected Route Example


router.get('/protected', verifyToken, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select("-password"); // Exclude password
        res.json({ message: "Protected route accessed", user });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
