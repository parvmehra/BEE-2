const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/user', (req, res) => {
    const {email,password} = req.body;

    console.log(email,password);
    try {
        res.json({
        success:true,
        message:'user added successfully',
        data:{
            email:email,
            password:password 
        }
    })
    } catch (error) {
        res.json({
            success: false,
            message:error.message
        })
    }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})