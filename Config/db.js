const mongobd = require('mongoose')

const config = require('./config')

const dbUrl = config.db.url;

mongobd.connect(dbUrl)

.then(()=>{
    console.log('Mongobd is connect')
})

.catch((error)=>{
console.log(error)
process.exit(1);
})