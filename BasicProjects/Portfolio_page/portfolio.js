$(document).ready(function() {
    // intro fadein animation on page load
    $('.introHeaders').delay(300).animate({ opacity: 1 }, 800);

    // scroll effect
    $('.nav_arrow').click(function() {
        $('html,body').animate({scrollTop: $('#parallax1').offset().top},1000);
    })

    $('#about-btn').click(function() {
        $('html,body').animate({scrollTop: $('#about').offset().top},1000);
    });
    $('#portfolio-btn').click(function() {
        $('html,body').animate({scrollTop: $('#portfolio').offset().top},1000);
    });
    $('#contact-btn').click(function() {
        $('html,body').animate({scrollTop: $('#contact').offset().top},1000);
    });
});