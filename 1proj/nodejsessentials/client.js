const net = require('net');

const client = net.createConnection({
    port: 3000,
})

client.on('data', (data) => {
    console.log(`Message ceceived from ${data}`)
})