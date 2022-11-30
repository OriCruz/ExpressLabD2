const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
let tip= require('./calcTip');
let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
let magicMsg = require('./getMessage');

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
app.get('/magic/:question', function(req,res){
    res.send('This was your initial question:'+ req.params.question + '<h1>'+'Here is your answer: '+magicMsg.getMessage(responses)+'</h1>');

});
//add a tag
//res.send(req.params.numberOfBottles + " Bottles of beer on the wall, <a href = '" + (req.params.numberOfBottles-1)+ "'>take one down, pass it around</a>")
 
//app listening on port
app.listen(port, ()=>{
    console.log("listeting on port "+port);
})