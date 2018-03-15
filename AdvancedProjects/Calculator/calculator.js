$( document ).ready(function() {
    let history = $(".history").text();
    $(".button").mousedown(function(){
        if ($(this).is(".position")) {
            $(this).toggleClass("pushPosition"); 
        }
        else {
            $(this).toggleClass("push"); 
        }
    });
    $(".button").mouseup(function(){
        if ($(this).is(".position")) {
            $(this).toggleClass("pushPosition"); 
        }
        else {
            $(this).toggleClass("push");  
        }
    });
    $(".").click(function() {
        
    })
});