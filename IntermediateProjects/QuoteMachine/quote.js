$(document).ready(function() {
  $('.generator').on('mouseenter', () => {
      $('.fa-refresh').addClass('fa-spin');
    }).on('mouseleave', () => {
      $('.fa-refresh').removeClass('fa-spin');
  });

  var quoteUrl = "https://random-quote-generator.herokuapp.com/api/quotes/";
  var twitterUrl = "https://twitter.com/intent/tweet?text=";
  $.ajax( {
    url: quoteUrl,
    dataType: 'json',
    success: function (response) {
        var max = response.length;
        var random = Math.floor(Math.random() * (max - 0 + 1));
        $('#quote-content').text(response[random].quote);
        if ( typeof response[random].author !== 'undefined') {
          $( '#quote-source' ).html( '/' + response[random].author + '/');
        } else {
          $( '#quote-source' ).text( '' );
        }
        $('#twitter').prop('href', twitterUrl + response[random].quote + ' (' + response[random].author + ')' + ' - via RandomQuoteMachine')
      }
    })

  $(".generator").on("click", function (e) {
    e.preventDefault();
    $.ajax( {
        url: quoteUrl,
        dataType: 'json',
        success: function (response) {
          var max = response.length;
          var random = Math.floor(Math.random() * (max - 0 + 1));
          $('#quote-content').text(response[random].quote);
          if ( typeof response[random].author !== 'undefined') {
            $( '#quote-source' ).html( '/' + response[random].author + '/');
          } else {
            $( '#quote-source' ).text( '' );
          }

          $('#twitter').prop('href',twitterUrl + response[random].quote + ' (' + response[random].author + ')' + ' - via RandomQuoteMachine')
          $('#twitter')
        }
      })
  })
});