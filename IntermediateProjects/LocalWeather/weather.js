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

    function weather(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        const weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
        $.get(
            weatherUrl,
            function(data) {
                console.log(data);

                $location.text(data.name + ", " + data.sys.country);

                let weatherMain = [];
                let w = Object.keys(data.weather);
                for (let i = 0; i < w.length; i++) {
                    weatherMain.push((data.weather[w[i]].main + " ").trim());
                }    
                $weatherText.text(weatherMain);

                $degree.prepend(data.main.temp + " °" + "<span class='degreeType'>C</span>");
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
                }
                $('body').addClass(backgClass);
                    
            }
        );

    }
    
});
