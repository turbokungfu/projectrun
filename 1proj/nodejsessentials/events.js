"use strict"
const events = require('events');

let usersLoggedIn = 0;
const EventEmitter = new events.EventEmitter();

EventEmitter.on('usersLoggedIn', ()=> {
    usersLoggedIn++;
    console.log(`there are ${usersLoggedIn} users logged in`)
})

EventEmitter.emit('usersLoggedIn')