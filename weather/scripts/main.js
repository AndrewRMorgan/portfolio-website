$(document).ready(function() {

    $.getJSON("http://ip-api.com/json", function(json) {
      var lat = json.lat;
      var lon = json.lon;
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=ee2a4970e97477e222db6b2ecaaf95ca'

    $.getJSON(url, function(result) {

      $('#city').text(result.name + ', ' + result.sys.country);
      $('#weather').text(result.weather[0].main);
      $('#temp').text(Math.round(result.main.temp - 273.15));

      var toggle = 0;
      $('#temp-button').click(function() {
        if (toggle === 1) {
          $('#temp').text(Math.round(result.main.temp - 273.15));
          $('#temp-button').text('C');
          toggle = 0;
        } else {
          $('#temp').text(Math.round(result.main.temp * 9 / 5 - 459.67));
          $('#temp-button').text('F');
          toggle = 1;
        }
      });

      if (result.weather[0].main === 'Clear') {
        $('#icon').css('background-image', 'url("images/clear.png")');
      } else if (result.weather[0].main === 'Rain') {
        $('#icon').css('background-image', 'url("images/rain.svg")');
      } else if (result.weather[0].main === 'Thunderstorm') {
        $('#icon').css('background-image', 'url("images/storm.png")');
      } else if (result.weather[0].main === 'Drizzle') {
        $('#icon').css('background-image', 'url("images/drizzle.png")');
      } else if (result.weather[0].main === 'Snow') {
        $('#icon').css('background-image', 'url("images/snow.png")');
      } else if (result.weather[0].main === 'Atmosphere') {
        $('#icon').css('background-image', 'url("images/atmosphere.png")');
      } else if (result.weather[0].main === 'Clouds') {
        $('#icon').css('background-image', 'url("images/cloud.png")');
      } else if (result.weather[0].main === 'Extreme') {
        $('#icon').css('background-image', 'url("images/extreme.png")');
      }
    });
    });
});
