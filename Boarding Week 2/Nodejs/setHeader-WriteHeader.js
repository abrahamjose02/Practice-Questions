const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.setHeader('Cache-Control','no-cache');
    res.end('Hello World');
})

server.listen(3000,()=>{
    console.log('Server running on 3000')
})



const http = require('http')

 const server2 = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type' :"text/html",
        'x-Custom-Header' :"MyValue"
    });
    res.end('<h1>Hello World , I am Abraham Jose</h1>')
 });

 server2.listen(3000)