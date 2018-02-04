$(document).ready(function() {
    $('.generator').on('mouseenter', () => {
    $('.fa-refresh').addClass('fa-spin');
  }).on('mouseleave', () => {
    $('.fa-refresh').removeClass('fa-spin');
  });

  $(".generator").on("click", function (e) {
    e.preventDefault();
    var wikiUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    $.ajax( {
        url: wikiUrl,
        dataType: 'json',
        success: function(response) {
            //var articlelist = response[1];
            console.log('hi');
        }
    }); 
  }); 
});
