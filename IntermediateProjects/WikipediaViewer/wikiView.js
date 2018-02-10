$(document).ready(function() {
    const $input = $('.inputBox');
    const $icon = $('.searchIcon');


    $('form').click(function () {
        if ($input.val() == "Search Wikipedia") {
            $input.val("");
            $input.toggleClass('normalColor');
        }
    });
    $input.blur(function () {
        if ($input.val() === "") {
            $input.val("Search Wikipedia");
            $input.toggleClass('normalColor');
        }
    })

    
    $input.keyup(function () {
        if ($input.val().length === 1 && $input.attr('src') == "https://i.imgur.com/1lnRvZm.png") {  
            $icon.fadeOut('fast',function () {
                $icon.attr('src','https://i.imgur.com/5skiAlK.png');
            });     
            $icon.fadeIn('fast');
        }
        if ($input.val().length === 0 && $input.attr('src') == "https://i.imgur.com/5skiAlK.png") { 
            $icon.fadeOut('fast',function () {
                $icon.attr('src','https://i.imgur.com/1lnRvZm.png');
            });     
            $icon.fadeIn('fast');
        }
    })

    $icon.click(function() {
        if ($input.val() != "" && $input.val() != "Search Wikipedia") {

        }
    })

    
});