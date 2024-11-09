const {exec,execFile} = require('child_process')

exec('dir',(error,stdout,stderr)=>{
    if(error){
        console.log(error)
    }
    console.log(stdout)
    console.log(stderr)
})


const {execFile} = require('child_process')

execFile('node',['calculate.js',10,20],(error,stdout,stderr)=>{
    if(error){
        console.log(`Exec error ${error}`)
    }
    console.log(`stdout:${stdout}`)
    console.log(`stderr:${stderr}`)
})