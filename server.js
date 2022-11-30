const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
let tip= require('./calcTip')

//Defining a root route
app.get('/', function(req, res){
    res.send('<h1>Nothing to see here...</h1>');
});
//Defining greeting route
app.get('/greeting/:name', function(req, res){
    res.send('Hello, '+ req.params.name+ ' nice to see you here!');
});
app.get('/tip/:total/:tipPercentage', function(req, res){
    res.send('You should tip: '+ tip.totalAmount(req.params.total, req.params.tipPercentage));
});

//app listening on port
app.listen(port, ()=>{
    console.log("listeting on port "+port);
})