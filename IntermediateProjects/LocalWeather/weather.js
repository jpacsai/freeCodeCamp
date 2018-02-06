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
                $weatherText.text(data.weather[0].main);
                $degree.prepend(data.main.temp + " ");
                let backgClass;
                switch (data.weather[0].main) {
                    case "Clouds":
                        backgClass = "clouds";
                        break;
                    case "Rain":
                        backgClass = "rain";
                        break;
                }
                $('body').addClass(backgClass);
                    
            }
        );

    }
    
});
