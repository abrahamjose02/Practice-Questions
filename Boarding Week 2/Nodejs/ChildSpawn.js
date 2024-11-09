const { spawn } = require("child_process")

const num1 = 6;
const num2 = 7;

const childProcess = spawn('node',['calculate.js',num1,num2])

childProcess.stdout.on('data',(data)=>{
    console.log(`Output ${data}`)
})

childProcess.stdout.on('data',(data)=>{
    console.log(`Error:${data}`)
})

childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
});