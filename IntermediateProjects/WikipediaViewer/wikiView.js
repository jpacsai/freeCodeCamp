$(document).ready(function() {
    const $input = $('.inputBox');
    const $icon = $('.searchIcon');

///////////////// INPUT SEARCH ////////////////////

    $('form').click(function () { // clicking into input field
        // delete placeholder text, set back normal opacity text color
        if ($input.val() == "Search Wikipedia") {
            $input.val("");
            $input.toggleClass('normalColor');
        }
    });
    $input.blur(function () { // clicking out of input field without text input
        // placeholder text with 0.5 opacity text color 
        if ($input.val() === "") {
            $input.val("Search Wikipedia");
            $input.toggleClass('normalColor');
        }
    })

    // ENTER after text input in input form
    $(document).keypress(function(e) {
        if(e.which == 13) {
            if ($input.val() != "" && $input.val() != "Search Wikipedia") {             
                searching();
            }
        }
    });
    

    // click on search icon after inputting text
    $icon.click(function() {        
        // click on x
        if ($icon.attr('src') == "https://i.imgur.com/5skiAlK.png") {
            // re-set placeholder text
            $input.val("Search Wikipedia");
            $input.toggleClass('normalColor');
            // change back icon from x to search
            $icon.fadeOut('fast',function () {
                $icon.attr('src','https://i.imgur.com/1lnRvZm.png');
            });     
            $icon.fadeIn('fast');
            // delete search results
            $('.resultContainer').remove();
        }
        else if ($input.val() != "" && $input.val() != "Search Wikipedia") {
            event.preventDefault();
            searching();
        }
    })

    function searching(){
        
        //$('.resultContainer').removeClass('scroll');
        $('.resultContainer').remove();
        // change icon from search to x
        if ($icon.attr('src') == "https://i.imgur.com/1lnRvZm.png") {
            $icon.fadeOut('fast',function () {
                $icon.attr('src','https://i.imgur.com/5skiAlK.png');
            });   
            $icon.fadeIn('fast');
        }  
        // API
        var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $input.val() + "&format=json&callback=wikiCallback";
        event.preventDefault();
        $.ajax( {
            
            url: wikiUrl,
            dataType: 'jsonp',
            success: function(response) {
                console.log(response);
                $('body').append('<div class="resultContainer"></div>');

                var articlelist = response[1];

                for (let j = 0; j < articlelist.length; j++) {
                    let title = response[1][j];
                    let content = response[2][j];
                    let url = response[3][j];
                    $('.resultContainer').append('\<div class="result smallText darkColor"\>\<a class="resultLink" href="' + url + '" target="_blank"\>\<span class="articleTitle">' + title + '</span\>\<span class="articleContent articleText"\>' + content + '\</span\>\</a\>\</div\>');
                }
                $('.resultContainer').addClass('scroll');
            }
        }); 
    }
    
});