const spawn = require("child_process").spawn;
const pythonProcess = spawn('python', ["speech-to-text/request.py"]);

pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
});