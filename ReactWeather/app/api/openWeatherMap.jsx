var axios = require('axios');

//const variable should be uppercase
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=180fde7c8d00a2f04a31df2c668bcc30&units=imperial';

//

module.exports = {
  getTemp: function(location){
    //template Strings
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){//success
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){//error
      throw new Error(res.data.message);
    });
  }
}
