// Steps are similar to HTTPS protocol 

const http = require('http'),
fs = require('fs'),
options = {host: 'localhost', port: '5500', path: '/national'},
CHROME_USER_AGENT =  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
req = http.request(options)

req.setHeader('user-agent', CHROME_USER_AGENT)

req.on('response', res => {
    let writeable = fs.createWriteStream('../json/national.json')
    res.on('data', chunk => {
        writeable.write(chunk.toString())
    })
})

req.on('error', err => {throw err} )

req.end()