const EE = new require('events').EventEmitter

class Person extends EE{
    constructor(name, age, sport){
        super() // To inherit all methods and properties of EventEmitter
        this.name = name
        this.age = age
        this.sport = sport
    }
}

const person = new Person('Haissan', 19),
emittedMessage = () => {
    (typeof person.sport === 'undefined')
    ? console.log(`Hi ${person.name}, you're ${person.age} years`)
    : console.log(`Hi ${person.name}, you're ${person.age} years. \nYour favourite sport is ${person.sport}`)
}

person.on('message', emittedMessage)
if(typeof person === 'object') person.emit('message')