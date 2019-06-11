const argv = require('./config/yargs').argv;
const axios = require('axios');

// encodeUri add special character for safety use with nodejs
const encodeUrl = encodeURI(argv.address);

console.log(encodeUrl);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: { 'X-RapidAPI-Key': '09361c6843msh4cdfa7663e8191bp1cc01bjsnf225f6d88e10' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('**** Error ***', err);
    });