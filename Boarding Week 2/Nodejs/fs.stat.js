const fs  = require('fs')

fs.stat('socket.js',(err,stats)=>{
    if(err){
        return console.log(err)
    }
    console.log(`File size : ${stats.size} bytes`)
    console.log(`Created At: ${stats.birthtime}`)
})