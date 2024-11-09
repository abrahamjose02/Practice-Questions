const express = require('express');
const app = express()

app.route('/user')
    .get((req,res)=>{
        res.send('Get all users');
    })
    .post((req,res)=>{
        res.send('Create a new user')
    })
    .put((req,res)=>{
        res.send("Update a user")
    });



app.listen(3000)