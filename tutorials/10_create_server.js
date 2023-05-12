const fs = require('fs'),
webServer = (req, res) => {
    let readable = fs.createReadStream('../json/league.json'),
    data = ''

    res.writeHead(200, {'Content-Type' : 'text/plain'})
    readable.on('data', chunk => {
        data += chunk
    })
    readable.on('end', () => res.end(data))
},
http = require('http').createServer(webServer)

http.listen(3000, 'localhost', () => console.log('Server has been initialized'))