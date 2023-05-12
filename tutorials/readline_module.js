const readline = require('readline'),
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}),
util = require('util'),
person = {
    name: '',
    feedbacks: []
},
setName = response => {
    person.name = response.toString().trim()
    rl.setPrompt('Send a feedback: ')
    rl.prompt()
},
addFeedbacks = input => {
    if(input.toString().trim() === 'exit'){
        console.log(util.format('%s leaves the following feedbacks: %j', person.name, person.feedbacks))
        process.exit()
    }    

    person.feedbacks.push(input.toString().trim())
    rl.prompt()
}

rl.question(`What's your name? `, setName)

rl.on('line', addFeedbacks)