$(document).ready(function() {
    let latitude = "";
    let longitude = "";
    let $location = $('.location');
    let $weatherText = $('.weatherText');
    let $weatherIcon = $('.weatherIcon');
    let $degree = $('.degree');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weather);
    } else {
        $('.location').text("Geolocation is not supported by this browser.");
    }
    let celsius;
    function weather(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        const weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
        $.get(
            weatherUrl,
            function(data) {
                $location.text(data.name + ", " + data.sys.country);

                let weatherMain = [];
                let w = Object.keys(data.weather);
                for (let i = 0; i < w.length; i++) {
                    weatherMain.push((data.weather[w[i]].main + " ").trim());
                }    
                $weatherText.text(weatherMain);
                celsius = Math.round(data.main.temp);
                $degree.text(celsius + " °");
                $('.degreeType').addClass('visible');
                $weatherIcon.append("<img src=" + data.weather[0].icon + ">");
                
                let backgClass;
                switch (data.weather[0].main) {
                    case "Clouds":
                        backgClass = "clouds";
                        break;
                    case "Rain":
                        backgClass = "rain";
                        break;
                    case "Mist":
                        backgClass = "mist";
                        break;
                    case "Snow":
                        backgClass = "snow";
                        break;
                    case "Clear sky":
                        backgClass = "clearSky";
                        break;
                    case "Few clouds":
                        backgClass = "fewClouds";
                        break;
                    case "Scattered clouds":
                        backgClass = "scatteredClouds";
                        break;
                    case "Broken clouds":
                        backgClass = "brokenClouds";
                        break;
                    case "Shower rain":
                        backgClass = "showerRain";
                        break;
                    case "Thunderstorm":
                        backgClass = "thunderstorm";
                }
                $('body').addClass(backgClass);
            }
        );
        
        $('.degreeType').click( function () {

            let farenheit = celsius * 9/5 + 32;

            $(this).text($(this).text() == 'C' ? 'F' : 'C');
            ($('.degreeType').text() == 'C') ? 
                $('.degree').text(celsius + " °") :
                $('.degree').text(farenheit + " °");
            
        });
    }
    
    
});
