const express = require('express');
const read = require('./IO/io.js').read;
const write = require('./IO/io.js').write;
const app = express();
app.use(express.urlencoded({extended : true })); //this is for the form data 

app.use(express.static(__dirname+"/public"));  //this is used to send all the static files at once to the browser 

//the public folder needs to have index.html bcs thats the first file which runs

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/index.html");  //__dirnname is the path of the currrent directory 
// })

// app.get('/about.html',(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })
app.post("/adduser",async(req,res)=>{
   let data = req.body;

    let prevData = await read("users.json").catch(() => []);
    let userFound = null;
    for(let i = 0 ; i<prevData.length; i++){
        if(prevData[i].username === data.username){
            userFound = prevData[i];
            break;
        }
    }

    if(userFound){
        res.send("user already exists");
        return;
    }
    else{
        prevData.push(data);
    }
    
    await write("users.json",JSON.stringify(prevData,null,2));
    res.send("user added successfully");
})


app.post("/loginuser",async(req,res)=>{
    let username = req.body.username;
    let password  = req.body.password;
    let prevData = await read("users.json").catch(() => []);
    let userFound = null;
    for(let i=0;i<prevData.length;i++){
        if(prevData[i].username === username){
            if(prevData[i].password === password){
                userFound = prevData[i];
                break;
            }
        }

    }

    if(userFound){
        res.send("login successful "+ userFound.username);
    }
    else{
        res.send("user not found");
    }
})
app.listen(3010,()=>{
    console.log("server started on port 3010");
})