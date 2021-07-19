const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=97ec3957bacb92881319b0c6141e82df&query=' + latitude + ',' + longitude +'&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.error){
            callback('Unable to find location, try another search')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '.  It is currently ' + body.current.temperature + ' degrees.  It feels like ' + body.current.feelslike + ' degrees.  The humidity is ' + body.current.humidity + ".")
        }
    })
}

module.exports = forecast