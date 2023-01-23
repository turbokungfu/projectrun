"use strict"

const net = require('net')


const server = net.createServer();
const connectedClients = [];

server.listen({
    host: 'localhost',
    port: 3000,
});

server.on('connection', (client) => {
    console.log(`client connected on ${1500+1500}`);
    client.write('welcome to the server');
    connectedClients.push(client);
})


setInterval(() => {
    const now = new Date().toISOString();
    connectedClients.forEach(client => {
        client.write(now)
    })
}, 2000);