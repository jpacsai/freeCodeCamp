$(document).ready(function() {
    $('.generator').on('mouseenter', () => {
    $('.fa-refresh').addClass('fa-spin');
  }).on('mouseleave', () => {
    $('.fa-refresh').removeClass('fa-spin');
  });

  //var quoteUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback";
  $(".generator").on("click", function (e) {
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function ( data ) {
        
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        
        console.log(post);
        
        $( '#quote-content' ).html( post.content );

        // If the Source is available, use it. Otherwise hide it.
        if ( typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined' ) {
          $( '#quote-source' ).html('/ ' + post.title + ' / ');
        } else {
          $( '#quote-source' ).text( '' );
        }
      },
      cache: false
    });
  });
});