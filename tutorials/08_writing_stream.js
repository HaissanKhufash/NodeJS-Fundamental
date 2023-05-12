console.log(process.uptime())
const fs = require('fs'),
readline = require('readline'),
rl = readline.createInterface({input: process.stdin, output: process.stdout})
carryQuestionOut = name => {
    writable = fs.createWriteStream(`../${name}.txt`)
    rl.setPrompt("What do you like to append in your text file? \n")
    rl.prompt()
},
carryAppendingDataOut = input => {
    if(input.toLowerCase() === 'exit'){
        writable.end()
        rl.close()
    }
    else {
        writable.write(`${input.trim()}\n`, 'UTF-8')
    }
}
let writable = {}

rl.question("What's your name? ", carryQuestionOut)

rl.on('line', carryAppendingDataOut)
