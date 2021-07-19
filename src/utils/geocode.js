const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3RlcGhlbmpvaG5zb25jYSIsImEiOiJja3IyOTRwZHgwcDFuMnVyejB6OThsNDE5In0.FswF7E9pQZJ3uggBtagEGg&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0){
            callback('Unable to find location, try another search')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode