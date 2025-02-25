import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;// Change this to a strong secret key

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

        res.json({ success: true, message: "Login successful!", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// 🔹 Protected Route Example
router.get('/protected', async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied! No token provided." });
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        res.json({ message: "Protected route accessed", user: verified });
    } catch (error) {
        res.status(403).json({ message: "Invalid token!" });
    }
});

export default router;
