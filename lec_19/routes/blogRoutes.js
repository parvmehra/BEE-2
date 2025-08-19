import express from "express";
const router = express.Router();
import Blog from "../models/blogModel.js";

// Create a new blog vf
router.post("/add", async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        const blog = new Blog({ title, content, userId });
        await blog.save();
        // Add blog to user's blogs array
        await User.findByIdAndUpdate(userId, { $push: { blogs: blog._id } });
        res.status(201).json({ success: true, message: "Blog created successfully", blog });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find().populate("userId", "name email");
        res.status(200).json({ success: true, blogs });
    } catch (error) {
        console.error({ success: false, message: "Error fetching blogs:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Get a single blog by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id).populate("userId", "name email");
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, blog });
    } catch (error) {
        console.error({ success: false, message: "Error fetching blog:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default router;