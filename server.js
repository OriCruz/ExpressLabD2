const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

//Defining a root route
app.get('/', function(req, res){
    res.send('<h1>Nothing to see here...</h1>');
});
//Defining greeting route
app.get('/greeting/:name', function(req, res){
    res.send('Hello, '+ req.params.name+ ' nice to see you here!')
});

//app listening on port
app.listen(port, ()=>{
    console.log("listeting on port "+port);
})