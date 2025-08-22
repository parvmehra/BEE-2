const User = require("../models/users.js");



async function registerFunc(req,res) {
    let user = new User({
        name : req.body.name,
        email: req.body.email,
        password : req.body.password    
    })

    if(!user.name || !user.email || !user.password){
        return res.json({
            success: false,
            message: "no field should be empty"
        })
    }

   

   await user.save();
   console.log(user);
    return res.json({
        success: true,
        message: "user registered"
    })

   ;
}



async function loginFunc(req,res) {
    const { email, password } = req.body;  
    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        });
    }

    const userExists = await User.findOne({ email, password });
    if (!userExists) {
        return res.json({
            success: false,
            message: "Invalid email or password"
        });
    }

    return res.json({
        success: true,
        message: "Login successful",
        user: userExists
    });
}
module.exports.registerFunc = registerFunc;
module.exports.loginFunc = loginFunc;