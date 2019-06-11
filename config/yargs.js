const argv = require('yargs').options({
    address: {
        demanded: true,
        alias: 'd',
        description: 'Addres of the city for get the actual weather'
    }
}).argv;

module.exports = {
    argv
}