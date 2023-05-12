let a = 1000,
b = 80

const exec = require('child_process').exec,
path = require('path'),
carryProcessOut = (err, stdout) => {
    if(err) throw err

    console.log(stdout)
    process.exit
},
accommodate = require('./accommodating_paths'),
myPath = accommodate(path.join(__dirname, '..', 'bat_code')),
operation = `operation.bat ${a} ${b}`

exec(path.join(myPath, operation), carryProcessOut)