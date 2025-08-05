const express = require('express');
const fs = require('fs');
const app = express()

app.use(express.static('public'));

app.get('/users',(req,res)=>{
    fs.readFile('users.json', 'utf8', (err, data) => {
        if(err) return res.send(err);
        let users = JSON.parse(data);
        res.json(users);
    });
})

app.listen(3900,() => {
    console.log('Server is running on port 3900');
});