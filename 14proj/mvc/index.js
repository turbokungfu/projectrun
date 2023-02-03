const express= require('express');
const mongoose= require('mongoose');
require("dotenv").config({ path: "./.env" });
const app=express();

const url= process.env.URL;
mongoose.set('strictQuery', false);
mongoose.connect(url,
    {useNewUrlParser: true});
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

const studentrouter= require("./routes/students");
app.use('/students',studentrouter)

const port=9000;
app.listen(port, () =>{
    console.log('Server started');
})