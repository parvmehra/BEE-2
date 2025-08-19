import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/blogs",blogRoutes);





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