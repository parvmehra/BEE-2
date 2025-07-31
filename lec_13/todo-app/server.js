const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.get('/todos', (req, res) => {
    
});

app.listen(3333,()=>{
    console.log('Server is running on port 3333');
})