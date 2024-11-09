const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    throw new Error('Something went wrong')
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send({message:err.message})
    next()
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})