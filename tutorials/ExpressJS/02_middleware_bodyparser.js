const express = require('express'),
app = express(),
urlencoded = require('body-parser').urlencoded({extended: false}),
PORT = 3000

app.use(urlencoded)

app.get('/', (req, res) => {
    const name = req.query.name,
    surname = req.query.surname

    res.send(`<p>Name: ${name}</p>
              <p>Surname: ${surname}</p>`)
})

app.listen(PORT, () => console.log(`Server has been initialized... port: ${PORT}`))