$(document).ready(function() {
    $('.generator').on('mouseenter', () => {
    $('.fa-refresh').addClass('fa-spin');
  }).on('mouseleave', () => {
    $('.fa-refresh').removeClass('fa-spin');
  });

  $(".generator").on("click", function() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("#quote-content").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
    });
  });
});

// https://quotesondesign.com/api-v4-0/