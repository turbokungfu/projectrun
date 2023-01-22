'use strict'
const express = require('express')
const app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.post('/submit-student-data', function (req, res) {
    console.log(req.body)
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

app.listen(5000, ()=> {
    console.log('server is running')
})