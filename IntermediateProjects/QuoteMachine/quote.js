$(document).ready(function() {
    $('.generator').on('mouseenter', () => {
    $('.fa-refresh').addClass('fa-spin');
  }).on('mouseleave', () => {
    $('.fa-refresh').removeClass('fa-spin');
  });
  var quoteUrl = "https://random-quote-generator.herokuapp.com/api/quotes/";
  $.ajax( {
    url: quoteUrl,
    dataType: 'json',
    success: function(response) {
        var max = response.length;
        var random = Math.floor(Math.random() * (max - 0 + 1));
        $('#quote-content').text(response[random].quote);
        if ( typeof response[random].author !== 'undefined') {
          $( '#quote-source' ).html( '/' + response[random].author + '/');
        } else {
          $( '#quote-source' ).text( '' );
        }
      }
    })
  $(".generator").on("click", function (e) {
    e.preventDefault();
    $.ajax( {
        url: quoteUrl,
        dataType: 'json',
        success: function(response) {
            var max = response.length;
            var random = Math.floor(Math.random() * (max - 0 + 1));
            $('#quote-content').text(response[random].quote);
            if ( typeof response[random].author !== 'undefined') {
              $( '#quote-source' ).html( '/' + response[random].author + '/');
            } else {
              $( '#quote-source' ).text( '' );
            }
          }
        })
  })
});
