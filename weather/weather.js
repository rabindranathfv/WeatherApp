const axios = require('axios');

const getWeather = async(lat, lon) => {

    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metrics&appid=1e79485cbc7f10f30898936aaef8acc2');
    /* console.log(resp.data); */
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}