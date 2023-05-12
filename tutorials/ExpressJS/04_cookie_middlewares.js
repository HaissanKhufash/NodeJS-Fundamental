const express = require('express'),
cookieParser = require('cookie-parser'),
cookieSession = require('cookie-session'),
app = express()

app
    .set('view engine', 'pug')
    
    .use( cookieParser() )
    
    .use( cookieSession({secret: 'secret', maxAge: 2000}) )

    .get('/', (req, res) => {
        res.setHeader('Content-Type', 'text/html')

        req.session.visit || (req.session.visit = 0)

        let n = req.session.visit ++

        res.render('cookie', {pageTitle: 'Cookie middlewares', times: n})
    })

    .listen(3001, () => console.log('Server has been initialized... Port 3001'))