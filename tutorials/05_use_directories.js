const fs = require('fs'),
buffer = require('buffer')
path = 'my_new_directory',
file = `./${path}/test.txt`,
corroborateDirectory = err => {
    (err) ? fs.mkdir(path, err => {if(err) throw err}) : console.log(`${path} already exists`)
},
corroborateFile = err => {
    (err) ? fs.writeFile(file, 'test file', 'UTF-8',err => {if(err) throw err}) : console.log(`file already exists`)
}

fs.access(path, fs.constants.F_OK, corroborateDirectory)

fs.access(file, fs.constants.F_OK, corroborateFile)