const express = require('express'),
      router = express.Router();

userStats = (req, res, next) => {
    res.setHeader('Content-Type', 'text/html')
    const locals = {title: 'User stats', user_id: req.params.id, user_name: req.params.name}
    res.render( 'user-stats', locals )
    next()
}

error404 = (req, res, next) => {
    res.setHeader('Content-Type', 'text/html')
    const error = new Error()
          locals = {title: 'Error 404', description: 'Resource has not been found', error: error}
    res.render( 'error', locals )
    next()
}


router
    .get( '/', (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        const locals = {title: 'My server', contentTitle: 'Hi, this a rendered page by pug and express'}
        res.render( 'index', locals )
    } )
    
    .get('/user-stats/:id-:name', userStats)

    .use(error404)

module.exports = router