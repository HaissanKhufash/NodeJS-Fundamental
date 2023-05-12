function getArg(arg){
    try {
        const INDEX = process.argv.indexOf(arg),
        ARG_KEY = process.argv[INDEX],
        ARG_VALUE = process.argv[INDEX + 1]

        if(typeof ARG_KEY === 'undefined') throw {errorMessage: `${arg} doesn't exist`}

        console.log(`Retrieved on args is: ${ARG_VALUE}`)

    } catch (err) {
        console.log(err.errorMessage)
    }
}

getArg('--name_arg')