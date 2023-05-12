const path = require('path'),
resolvedOperationPath = [],
accommodate = function(pathToSolve){
    pathToSolve.split(path.sep).map(item => {
        if(item.includes(" ")){
            let brokeUpWord = item.split(" ")
            item = '"'
            brokeUpWord.forEach(value => {
                if(brokeUpWord[brokeUpWord.length-1] === value){
                    item += value
                }else{
                    item += value + ' '
                }
            })
            item += '"'
        }
        resolvedOperationPath.push(item)
    })
    return path.join(...resolvedOperationPath).replaceAll(/\\/g, '/')
}

module.exports = accommodate