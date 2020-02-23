const request = require('request')


const geocode = (address, callback) => 
{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWFzczEyMzAiLCJhIjoiY2s2YWNuY2p5MG1ldDNwbzNxdWltcmtwaiJ9.YF5sakC1N-so7uMA0V_m0A&limit=1'

    request({ url, json: true}, (error, {body}) => //url:url has been shorthanded to url
    {
        if(error)
        {
            callback('Unable to connect to location services!', undefined)
        }
        else if (body.features.length === 0)
        {
            callback('unable to find location. try another search', undefined)
        }
        else
        {
            callback(undefined, 
                {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
        }

    })
}


  

module.exports = geocode
































// console.log('Starting')

// setTimeout( () => 
// {
//     console.log('2 seconds timer')
// }, 2000



// setTimeout( () => 
// {
//     console.log('2nd 0 seconds timer')
// }, 0)

// console.log('Stopping')


