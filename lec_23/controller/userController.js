import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const mySecret = "secret";

// Register user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ success: true, message: "User created successfully", user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};

// Get single user
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};

// Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists || userExists.password !== password) {
        return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ userid: email }, mySecret);
    res.setHeader("Authorization", token);
    res.json({ success: true, message: "Login successful", token });
};
