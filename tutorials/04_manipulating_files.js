const fs = require('fs'),
FILE_NAME = 'myFile.txt',
TEXT = 'This is a text',
createFile = err => {
    if(err) throw err
    
    console.log(`File ${FILE_NAME} has been created`)
},
corroborateFile = err => {
    if(err) fs.writeFile(FILE_NAME, TEXT, 'UTF-8', createFile)
    
    else console.log(`File ${FILE_NAME} already exists`)
},
appendContent = err => {
    if(err) console.log(`The file doesn't exist`)

    else console.log('Content has been appended')
}

// readFile = (err, data) => {
//     if(err) throw err

//     console.log(data)
// },
// myPath = '../notes/09_manipulate_files.txt'

// fs.readFile(myPath, 'UTF-8', readFile)

// fs.access(FILE_NAME, fs.constants.F_OK, corroborateFile)

let anotherText = 'This is another text.'
fs.appendFile(FILE_NAME, anotherText, appendContent)