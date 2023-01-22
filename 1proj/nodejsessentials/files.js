"use strict"
const fs = require('fs');

const data = fs.readFileSync('commands.js')

console.log(data.toString())

fs.appendFileSync('data.txt', ' another Hello World!')

const dir = fs.readdirSync(__dirname)
console.log(dir)