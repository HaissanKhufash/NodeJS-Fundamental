const express = require('express'),
app = express()

app.set('view engine', 'pug')

app
    .get('/', (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.render('index', {pageTitle: 'Params and queries', message: 'this is being rendered with Express using pug as a template engine.'})
    })

    .get('/user/:id-:name', (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.render('params', {pageTitle: 'Working with params', name: req.params.name, id: req.params.id})
        // http://localhost:3001/user/30537204-Haissan ==> params path
    })
    
    .get('/search/', (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.render('queries', {pageTitle: 'Working with queries', toSearch: req.query.s})
        // http://localhost:3001/search/?s=Hi,%20what%27s%20your%20name? ==> query path
    })

    // Bonus: redirect

    .get('/d1g1t4l1z4d0s', (req, res) => {
        res.redirect(301, 'http://localhost:3000/')
    })

    // Bonus: JSON

    .get('/json-info', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        const user = {name: 'Username', id: 'user_id', description: 'user_desc'}
        res.json(user) // ==> Send an object as a JSON document and display it in the web.
    })

    .listen(3001, () => console.log('Server has been initialized... Port 3001'))