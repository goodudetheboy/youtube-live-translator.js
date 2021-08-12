const https = require('https')
const request = require('request');
const fs = require('fs');
require('dotenv').config();

const WIT_AI_TOKEN = process.env.WIT_AI_TOKEN;

request({
    url: 'https://api.wit.ai/speech?v=20200513',
    method: 'POST',
    headers: {
      'Content-type' : 'audio/wav',
      'Authorization' : `Bearer ${ WIT_AI_TOKEN }`
    },
    encoding: null,
    body: fs.createReadStream('./speech-to-text/sample.wav')
    }, (error, response, body) => {
        if (error) {
            // response.json({name : error});
            console.log(response);
        } else {
            console.log(JSON.parse(response.body.toString()));
        }
    });
