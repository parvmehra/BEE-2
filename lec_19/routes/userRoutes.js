import express from "express";
const router = express.Router();
import User from "../models/userModel.js";

router.post("/add", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({success: true, message: "User created successfully", user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error({ success: false, message: "Error fetching users:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error({ success: false, message: "Error fetching user:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});



export default router;