const express = require('express');   //this will run the index file in the express module
const app = express();

app.get('/',(req,res)=>{      //request object has all the information about the request 
    console.log(req);                       //response object contains all the methods to send a response
    // res.send("response");        text response
    // res.send("<h1>HELLO</h1>");   html response
    res.json({                      //json response
        name: "John",
        age: 30,
        city: "New York"
    }); 
});
 
//path param/variable
//1.params
app.get("/user/:id",(req,res)=>{        //id will be a variable in the url
    console.log(req.params.id);   //this will give the parameters in the url
    let id = req.params.id;
    res.send(id);
})

//2. query parameters
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    console.log(req.query.desc);

    res.send("got it");
})

app.listen(3033,()=>{           //this callback function will run when the server starts
    console.log("server started");
})
