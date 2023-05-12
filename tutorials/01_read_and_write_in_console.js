const MY_QUESTIONS = [`What's your name? `, `How old are you? `, `Do you like programming? `]
let userAnswers = [],
throwQuestion = index => {
    process.stdout.write(MY_QUESTIONS[index])
},
manipulateData = data => {
    userAnswers.push(data.toString().trim()) // Answer to the before question
    if(userAnswers.length < MY_QUESTIONS.length){ // While quantify of answers is lesser than questions, there are more questions
        throwQuestion(userAnswers.length)
    }
    else{
        process.exit()
    }
}

process.stdin.on('data', manipulateData)

throwQuestion(0) // Throw the first question