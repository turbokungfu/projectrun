const express= require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv')
const app=express();

const url= process.env.URL;
mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const port=9000;
app.listen(port, () =>{
    console.log('Server started');
})