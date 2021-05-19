const fs = require('fs');
const portAudio = require('naudiodon');

// Use this to find out the device id for soundflower
console.log(portAudio.getDevices());

// create audio io instance
const ai = new portAudio.AudioIO({
  inOptions: {
    channelCount: 2, 
    sampleFormat: portAudio.SampleFormat16Bit,
    sampleRate: 44100,
    deviceId: 12, // put [AUDIO_ID] here
    closeOnError: true,
  }
});
const ws = fs.createWriteStream('rawAudio.raw');
ai.pipe(ws);
ai.start();
// Wait a while as you record the audio in -- check your sound levels in SoundflowerBed, etc.
// When you are done...
setTimeout(function(){ ai.quit() }, 10000);