const axios = require('axios');

axios({
    method: 'post',
    url: 'myurl',
    body: "@sample.wav",
    headers: {
        'Authorization': 'Bearer WSECDWIXZH2Q4TJOFFD227KZO53NMFOO',
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