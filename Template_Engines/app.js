const express = require('express'),
bodyParser = require('body-parser'),
app = express(),
PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {pageTitle: 'First time using pug', message: `it's simple`})
})

app.listen(PORT, () => console.log(`Server has been initialized... port: ${PORT}`))