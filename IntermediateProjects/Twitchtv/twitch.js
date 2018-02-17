$(document).ready(function(){
    getStream(); 
})

let users = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getStream() {
    users.forEach(function(channel){
        let url = "https://wind-bow.glitch.me/twitch-api/streams/" + channel + "?callback=?";

        $.getJSON(url, function(data) {
            let streaming;
            let logo = 'https://futurelab.my/assets/avatar_placeholder-63d9ca2db5e126c93c693cab7cef208821184bffe117e38944a0f6d5e5cc3a8d.png';
            let streamUrl = '#';

            // check if streaming or not
            if (data.stream == null) {
                streaming = 'OFFLINE';
                $('.content').append('<div class="channel"><img class="channelImg" src="' + logo +'" alt="channel thumbnail"><p class="channelTitle">' + channel + 'freeCodeCamp</p><p class="activity">' + streaming + '</p></div>');

            }
            else {
                streaming = data.stream.channel.status;
                logo = data.stream.channel.logo;
                streamUrl = data.stream.channel.url;
                $('.content').prepend('<div class="channel streaming"><img class="channelImg" src="' + logo +'" alt="channel thumbnail"><p class="channelTitle">' + channel + 'freeCodeCamp</p><p class="activity">' + streaming + '</p><a class="streamLink" href="' + streamUrl +'" target="_blank"><i class="fa fas fa-play fa-2x"></i></a></div>');
            }
        });
    })
}