const express = require('express')
const app = express()

function loggerFunction(req,res,next){
    console.log(`Logged value:${req.method} ${req.url}`)
    next()
}


app.use(loggerFunction)

app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.listen(3000,()=>{
    console.log('Server started on port 3000')
})