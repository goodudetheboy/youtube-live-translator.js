Temporary audio from PC capturing run steps (for Windows 10)

0) Run `npm install` to download dependencies

1) Download Virtual Audio Cable from here: https://vb-audio.com/Cable/index.htm 

2) Install Virtual Audio Cable according to provided readme in installation file

3) Once finished installing, the program will install one input channel and one output channel (you can check Sound in Control Panel for more details), which is named, respectively Cable Input (Playback section) and Cable Output (Recording section). If the driver is there, then you are in a good spot

5) Switch your default output device to "Cable Input". For Windows 10, look at the Volume icon in the lower left corner of your screen, click on it, click the up ^ arrow, and change audio device to Cable Input

4) Run `node audio_capturing/capture.js` to start recording. For this first run, the program will output all list of sound devices on your computer. Find something like this in the output terminal:
```
id: [AUDIO_ID],
    name: 'CABLE Output (VB-Audio Virtual Cable)',
    maxInputChannels: 2,
    maxOutputChannels: 0,
    defaultSampleRate: 44100,
    defaultLowInputLatency: 0,
    defaultLowOutputLatency: 0,
    defaultHighInputLatency: 0,
    defaultHighOutputLatency: 0,
    hostAPIName: 'Windows WASAPI'
```
Make a note of the [AUDIO_ID]

5) Open the file `capture.js`, find line 10, which should be like so
```
deviceId: 17, // put [AUDIO_ID] here
```

Replace `17` with your [AUDIO_ID]

6) Run `node audio_capturing/capture.js` again. This time if nothing is wrong, the end of the terminal output should be something like

```
PortAudio V19.6.0-devel, revision unknown
Input audio options: device 17, sample rate 44100, channels 2, bits per sample 16, max queue 2, frames per buffer 0, close on error true
Input device name is CABLE Output (VB-Audio Virtual Cable)
```

and not some bullshit error

7) Open some random youtube video, or make sure there is something with sound opening to test the recording. The program will record for 10 seconds.

8) After finishing, there should be a resulting `rawAudio.raw` file in the project folder. That is the recording of the output of your computer

(OPTIONAL)
9) If you want to verify the audio from `rawAudio.raw`, download Audacity and import the `rawAudio.raw` file in it. Remember to set `Encoding` to be `Signed 16-bit PCM`, `Channels` to be `2 Channels (Stereo)` and `Sample rate` to be `44100`. Audacity will conver the raw file and let you here what's in it