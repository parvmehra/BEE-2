import express from "express";
import mongoose from "mongoose";
import User from "./models/userModel.js";
import Blog from "./models/blogModel.js";
import jwt from "jsonwebtoken";
const mySecret = "secret";
const app = express();

app.use(express.json());
// User registration
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
// Get all users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error({ success: false, message: "Error fetching users:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Get a single user by ID
app.get("/api/users/:id", async (req, res) => {
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


//login route 
app.post("/api/users/login",async (req,res)=>{
    const {email,password} = req.body;
    const userexists = await  User.findOne({email});
    console.log({userexists})
    if(!userexists || userexists.password!=password){
        return res.json({success:false,message:"Invalid credentials"});
    }
    const token = jwt.sign({userid:email},mySecret);
    res.setHeader("Authorization", token);
    return res.json({success:true,message:"Login successful",token});
})


// middleware
const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    jwt.verify(token, mySecret, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: "Forbidden" });
        }
        req.user = user;
        next();
    });
};
app.use(authenticateToken);

// Create a new blog
app.post("/api/blogs", async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        const blog = new Blog({ title, content, userId });
        await blog.save();
        await User.findByIdAndUpdate(userId, { $push: { blogs: blog._id } });
        res.status(201).json({ success: true, message: "Blog created successfully", blog });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Get all blogs
app.get("/api/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find().populate("userId", "name email");
        res.status(200).json({ success: true, blogs });
    } catch (error) {
        console.error({ success: false, message: "Error fetching blogs:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Get a single blog by ID
app.get("/api/blogs/:id", async (req, res) => {
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