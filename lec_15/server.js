const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/adduser',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    let newUser={
        email: email,
        password: password
    }
    console.log(email,password);

    res.json({
        success: true, 
        message: "User added successfully",
        data : newUser
    })
 
    

})
app.listen(3100,()=>{
    console.log('Server is running on port 3100');
})