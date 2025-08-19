
import express from "express";
import mongoose from "mongoose";
import User from "./models/userModel.js";
const app = express();

app.use(express.json());

app.post("/api/users", async (req, res) => {
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








mongoose.connect("mongodb://localhost:27017/lec17" )
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });



app.listen(3333,()=>{
    console.log("started on port 3333")
})
