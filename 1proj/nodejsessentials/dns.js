"use strict"
const dns = require('dns');

dns.resolve('google.com', 'MX', (err, value)=> {
    if (err){
        console.log(err);
        return
    }
    console.log(value)
})