Temporary audio from PC capturing run steps (for Windows 10)

0) Run `npm install` to download dependencies

1) Follow this guide here (https://thegeekpage.com/stereo-mix/) to make sure you have the `Stereo Mix` audio driver as one of the recording audio. You can check that under the Recording tab of the Sound control panel.

2) Open the properties of the `Stereo Mix` and make sure its volume under the Levels tab is maximized

3) Run `node audio_capturing/capture.js` to start recording. For this first run, the program will output all list of sound devices on your computer. Find something like this in the output terminal:
```
    id: [AUDIO_ID],
    name: 'Stereo Mix (Realtek High Defini',
    maxInputChannels: 2,
    maxOutputChannels: 0,
    defaultSampleRate: 44100,
    defaultLowInputLatency: 0,
    defaultLowOutputLatency: 0,
    defaultHighInputLatency: 0,
    defaultHighOutputLatency: 0,
    hostAPIName: 'MME'
```
Make a note of the [AUDIO_ID], which should be a number

5) Open the file `capture.js`, find line 10, which should be like so
```
deviceId: 17, // put [AUDIO_ID] here
```

Replace `17` or whatever number is there with your [AUDIO_ID]

6) Run `node audio_capturing/capture.js` again. This time if nothing is wrong, the end of the terminal output should be something like

```
PortAudio V19.6.0-devel, revision unknown
Input audio options: device 3, sample rate 44100, channels 2, bits per sample 16, max queue 2, frames per buffer 0, close on error true
Input device name is Stereo Mix (Realtek High Defini
```

and not some bullshit error. The program will record the sound output of your PC.

7) Open some random youtube video, or make sure there is something with sound opening to test the recording. The program will record for 10 seconds.

8) After finishing, there should be a resulting `rawAudio.raw` file in the project folder. That is the recording of the output of your computer

(OPTIONAL)
9) If you want to verify the audio from `rawAudio.raw`, download Audacity and import the `rawAudio.raw` file in it. Remember to set `Encoding` to be `Signed 16-bit PCM`, `Channels` to be `2 Channels (Stereo)` and `Sample rate` to be `44100`. Audacity will conver the raw file and let you here what's in it

10) Go in to Sounds, via right clicking the speaker symbol in the lower left corner and go to recording

11) Left click, click on show disabled devices and enable stero mix

12) Double click on stero mix, listen, check listen to this device and set the playback to Cable input

11) To be able to hear, you need to plug in an auxiliary jack output device and set it to default, else stero mix will not record