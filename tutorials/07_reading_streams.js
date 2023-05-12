let data = ''

const fs = require('fs'),
//                WITH STREAM: 1320898 in 0.0326892ms
carryReadingOut = chunk => {
    data += chunk
},
readable = fs.createReadStream('../log_file.log')

readable.on('data', carryReadingOut)

readable.on('end', () => {
    readable.close()
    console.log(data.length)
})

//                WITHOUT STREAM: 1320898 data in 0.0585678ms
/*carryReadingOut = (err, data) => {
    if(err) throw err
    console.log(data.length)
}
fs.readFile('../log_file.log', carryReadingOut)
*/

console.log(process.uptime())