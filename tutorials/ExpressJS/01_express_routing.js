const express = require('express'),
app = express(),
PORT = 3000

app.get('/', (req, res) => {
    res.send("You're in home section")
})

app.get('/about', (req, res) => {
    res.send("You're in about section")
})

app.get('/contact', (req, res) => {
    res.send("You're in contact section")
})

app.listen(PORT, () => console.log(`Server has been initialized... port: ${PORT}`))