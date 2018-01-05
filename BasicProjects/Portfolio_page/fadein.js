$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tag = $(".introHeaders")
  
    if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    
  })


  //https://www.superhi.com/blog/how-to-add-web-design-elements-that-fade-in-and-out-on-scroll