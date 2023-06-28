const http = require('http')

const server = http.createServer((req, res) => {
    res.end('ça marche')
})

server.listen(3000)