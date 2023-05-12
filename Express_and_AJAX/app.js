const express = require('express'),
bodyParser = require('body-parser'),
fs = require('fs'),
app = express(),
PORT = 3000

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/get-films', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const file = fs.readFileSync('./public/assets/db/logged_films.json', 'utf-8')
    res.send(file)
})

app.post('/new', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')

    const filmName = req.body.film_name,
    rate = req.body.rate
    
    let file = fs.readFileSync('./public/assets/db/logged_films.json', 'utf-8'),
    json = JSON.parse(file)

    json.films.push({film: filmName, rating: rate})

    file = fs.writeFileSync('./public/assets/db/logged_films.json', JSON.stringify(json))

    res.send('Data has been send successfully')
})

app.listen(PORT, () => console.log(`Server has been initialized... port: ${PORT}`))