const axios = require('axios');
const { wit_api_key } = require('./config.json');
axios({
    method: 'post',
    url: 'myurl',
    body: "@sample.wav",
    headers: {
        'Authorization': `Bearer ${ wit_api_key }`,
        'Content-Type': 'audio/wav'
    }
    })
.then(function (response) {
    //handle success
    console.log(response);
})
.catch(function (response) {
    //handle error
    console.log(response);
});