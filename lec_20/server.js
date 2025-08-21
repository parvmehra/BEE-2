const express = require('express');
const {m1, m2, checkAdmin} = require('./middleware/middleware.js');
const app = express();

const PORT = 3069;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.use(m1);


app.get('/home',(req,res,next)=>{
    console.log("running controller home")
    res.json({
        succes : true,
        message : "welcome to the home page"
    })
    next();
});
app.use(m2);

app.get('/dashboard',checkAdmin,(req,res)=>{
    if(req.isAdmin){
       return res.json({
            success : true,
            message : "welcome to the dashboard",
        })
    }
})
app.listen(PORT,()=>{
    console.log("server is running on port", PORT);
    
})