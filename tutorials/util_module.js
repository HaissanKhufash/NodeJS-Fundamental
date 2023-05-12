const util = require('util'),
MY_OBJECT = {
    name: 'Haissan',
    surname: 'Khufash',
    info: function(){
        console.log(util.format('Hi %s, %s. Nice to meet you', this.surname, this.name))
    }
}

MY_OBJECT.info()