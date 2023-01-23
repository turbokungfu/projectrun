const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    const file = fs.createReadStream('./myblog.txt');
    file.pipe(res)
})

server.listen(3000, 'localhost')