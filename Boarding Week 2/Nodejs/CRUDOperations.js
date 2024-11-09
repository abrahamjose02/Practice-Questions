const express = require('express');
const send = require('send');
const app = express()

app.use(express.json()); //is a built-in middleware in Express that is used for parsing incoming requests with JSON payload

let items = [];

//create

app.post('/items',(req,res)=>{
    const item = {id:Date.now(),name:req.body.name};
    items.push(item)
    res.status(201).send(item);
})

app.get('/items',(req,res)=>{
    res.send(items)
})

app.get('/items/:id',(req,res)=>{
    const id = req.params.id
    const item = items.find(i=>i.id === id);
    if(!item) return res.status(404).send('Item not found');
})

app.put('/items/:id',(req,res)=>{
    const id = req.params.id
    const item = items.find(i=>i.id === id)
    if(!item) return res.status(404).send('Item not found');

    item.name = req.body.name
    res.send(item);
})

app.delete('/items/:id',(req,res)=>{
    const id = req.params.id
    const index = items.findIndex(i=>i.id === id);
    if(index === -1) return res.status(404).send('Item not found')

        const deletdItem = items.splice(index,1);
        res.send(deletdItem);
})

app.listen(3000, () => console.log('Server started on port 3000'));