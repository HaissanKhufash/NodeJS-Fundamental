const fs = require('fs'),
retrieveElements = (err, data) => {
    if(err) throw err

    console.log(data)
}

fs.readdir('./', {encoding: 'UTF-8'}, retrieveElements)