const exec = require('child_process').exec,
fs = require('fs')

exec('node 05_use_directories.js')

function renamingFile(){
    const file = `./my_new_directory/test.txt`,
    renameValue = `./my_new_directory/file.txt`
    carryRenamingOut = err => {
        if(err) throw err
        console.log('File has been renamed')
    }

    fs.rename(file, renameValue, carryRenamingOut)
}

function movingFile(){
    const file = `./my_new_directory/file.txt`,
    movingValue = `./file.txt`,
    carryMovingOut = err => {
        if(err) throw err
        console.log('File has been moved')
    }

    fs.rename(file, movingValue, carryMovingOut)
}

setTimeout(movingFile, 2000)