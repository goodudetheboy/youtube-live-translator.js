"# YoutubeLiveTranslator" 


This program runs using Electron.js, so make sure to download Node.js first

Run instruction:
1) Run `npm install` to download Electron.js and other dependencies
2) Run `npm start` in terminal to run a simple Electron.js app.

You can test stuff on this, but make sure to fork or create another branch


NOTE: This project is being developed according to the following pipeline (the name next to it is the name of the branch that is currently working on that part of the pipeline):

Audio receiving system: audio-receiver
        V
    To text
        V
    Translate
        V
    Display

Each part is developed separately and the output of the previous one will serve as the input of the next.