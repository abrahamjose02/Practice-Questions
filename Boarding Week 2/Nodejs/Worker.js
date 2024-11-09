const {parentPort} = require('worker_threads')

parentPort.on('message' ,(message)=>{
    console.log(`Message from main Thread:${message}`)
})

parentPort.postMessage('Hello message from worker thread')