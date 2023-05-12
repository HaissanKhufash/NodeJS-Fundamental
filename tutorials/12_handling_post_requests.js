const fs = require('fs'),
http = require('http')

webServer = (req, res) => {
    switch(req.method){
        case 'GET':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            fs.createReadStream('../form/form.html', 'UTF-8').pipe(res)
            break;
        case 'POST':
            let body = ''
            req.on('data', chunk => body += chunk)
            req.on('end', () => {
                res.end(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Form HTML</title>
                    </head>
                    <body>
                        <h1>Data has just been send, thanks for information</h1>
                        <p>${body}</p>
                    </body>
                    </html>
                `)
            })
            break;
        default:
            res.writeHead(200, {'Content-Type' : 'text/plain'})
            res.end('404 not found')
            break;    
    }
}

http
    .createServer(webServer)
    .listen(3000, () => console.log('This server has been initialized.'))