const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users.js");
const app = express();
const userRoutes = require("./routes/userRoutes.js");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/users", userRoutes);
app.listen(3000, () => {
    console.log("server started at 3000");
});




mongoose.connect("mongodb://localhost:27017/lec_21" )
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
