const http = require('http')
const socketIO = require('socket.io')
const server =  http.createServer(app)
const io = socketIO(server)

io.on('connection',(socket)=>{
    console.log('New Connection');
    socket.on('message',(msg)=>{
        console.log(msg)
    })
})

server.listen(3000)