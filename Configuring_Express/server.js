'use strict'
const app = require('./app')

app.listen(app.get('port'), () => console.log(`Running server at ${app.get('port')} port...`))