const request = require('request')

const forecast = (lat, long, callback)  =>
{
  const url = 
 'https://api.darksky.net/forecast/e06a3247d85301185a8b11ce39dde252/' + lat + ',' + long + '?units=us'

request({ url, json: true}, (error, {body}) => //url:url has been shorthanded to url,
{
    if(error)
    {
        callback('unable to connect to weather service', undefined)
    }

    else if (body.error)
    {
        callback('unable to find location', undefined)
    }

    else
    {   
        
        callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out.  The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of '+ body.daily.data[0].temperatureLow +'. There is a ' + body.currently.precipProbability + '% chance of rain.' )

    }
})
}

module.exports = forecast