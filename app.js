const argv = require('./config/yargs').argv;
const axios = require('axios');


const getInfoCity = async(address) => {
    // encodeUri add special character for safety use with nodejs
    const encodeUrl = encodeURI(address);
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '09361c6843msh4cdfa7663e8191bp1cc01bjsnf225f6d88e10' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No info  of the city ${address}`);
    }

    const data = [...response.data.Results];
    const cityName = data[0].name;
    const latitude = data[0].lat;
    const longitude = data[0].lon;

    return {
        address,
        cityName,
        latitude,
        longitude
    }


}

console.log(getInfoCity(argv.address));