const fs = require('fs'),
http = require('http'),
path = require('path'),
webServer = (req, res) => {
    console.log(`${req.method} =======> ${req.url}`)
    if(req.url === '/'){
        const readHTML = (err, data) => {
            try{
                if(err) throw {message: 'An error has happened when server tries to read the file.'}
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end(data)
            }
            catch (err){
                console.log(err.message)
            }
        }
        fs.readFile('../public/index.html', readHTML)
    }
    else if(req.url.match(/.css$/)){
        const reqPath = path.join('../public', 'assets', req.url),
        fileStream = fs.createReadStream(reqPath, 'UTF-8')

        res.writeHead(200, {'Content-Type' : 'text/css'})
        fileStream.pipe(res)
    }
    else if(req.url.match(/.js$/)){
        const reqPath = path.join('../public', 'assets', req.url),
        fileStream = fs.createReadStream(reqPath)

        res.writeHead(200, {'Content-Type' : 'application/javascript'})
        fileStream.pipe(res)
    }
    else if(req.url.match(/.png$/)){
        const reqPath = path.join('../public', 'assets', req.url),
        fileStream = fs.createReadStream(reqPath)

        res.writeHead(200, {'Content-Type' : 'image/png'})
        fileStream.pipe(res)
    }
    else{
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('404 ERROR: not found URL')        
    }
}

http
    .createServer(webServer)
    .listen(3000, () => console.log('This server has been initialized.'))