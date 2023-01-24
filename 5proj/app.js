const express = require('express');
const app = express()

app.get('/', (req, res)=> res.send('<h1>hello woorld<h1>'));
app.get('/login', (req, res)=> res.send('<h1>hello LOGIN<h1>'));
app.get('/register', (req, res)=> res.send('<h1>hello Reigister<h1>'));


app.listen(3000, ()=> console.log('app is listening'))