const express = require('express')
const app = express()

app.get('/users/:userId/orders/:orderId',(req,res)=>{
    const userId = req.params.userId
    const orderId = req.params.orderId
    console.log(`${userId} and ${orderId}`)
})

app.get('/search',(req,res)=>{
    const category = req.query.category
    const author = req.query.author
    console.log(`${category} and ${author}`)
})

app.listen(3000,()=>{
    console.log('Server running on 3000')
})