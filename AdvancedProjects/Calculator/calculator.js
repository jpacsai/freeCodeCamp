$( document ).ready(function() {
    let history = "";
    const operations = ["/", "*", "+", "-"];

    /* - - - BUTTON PUSH EFFECT - - - */
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

    /* - - - CALCULATOR FUNCTION - - - */
    $(".button").click(function() {
        let push = $(this).text();
        let input = $(".input").text();
        let isOperation = false;
        if (input.length === 1 && operations.includes(input[0]) === true) {
            isOperation = true;
        }
        console.log(push);

        /* NUMBER IS PUSHED */
        if ($(this).is(".number")) {
            if (push != "0") {
                /* if input is 0 */
                if ($(".input").text() == 0) {
                    $(".input").text(push);
                }
                /* if input is an operation character */
                else if (isOperation === true) {
                    /* add input value to history line */
                    history += input;
                    $(".history").text(history);
                    $(".input").text(push);
                }
                /* add number to end of input field */
                else {
                    $(".input").text(input + push); 
                }
            }
        }

        /* IF DOT IS PUSHED */
        if ($(this).is(".btn-dot")) {
            /* if input is not an operation */
            let isDot = input.split("").includes(".");
            console.log(isDot);
            
        }

        /* OPERATION IS PUSHED */
        else if ($(this).is(".operation")) {
            /* IF INPUT IS 0 AND / OR * IS PUSHED */
            if ((push == "/" || push == "*") && input == "0") {
            }
            else {
                /* if input is already an operation
                    just update input field with new operation */                
                if (isOperation === true) {
                    $(".input").text(push);
                }
                /* move input field value to history line */
                else {
                    history += input;
                    $(".history").text(history);
                    $(".input").text(push);
                }
            }
        }

        /* IF PLUS-MINUS IS PUSHED */
        else if ($(this).is(".btn-plusminus")) {
            /* if input is not an operation */
            if (isOperation === false && input != "0") {
                let temp = input.split("");
                /* add or remove - */
                if (temp[0] == "-") {
                    temp.shift();
                }
                else {
                    temp.unshift("-");
                }
                $(".input").text(temp.join(""));
            }
        }

        /* IF ALL-CLEAR IS PUSHED */
        else if ($(this).is(".btn-ac")) {
            /* update input field to 0, clear history line */
            $(".input").text("0");
            $(".history").text("");
            history = "";
        }

        /* IF CLEAR IS PUSHED */
        else if ($(this).is(".btn-c")) {
            /* update input field to 0 */
            $(".input").text("0");
        }

        /* IF EQUAL IS PUSHED */
        else if ($(this).is(".btn-equal")) {
            /* if input is not an operation */
            if (isOperation === false) {
                history += input;
                $(".history").text(history); 
            } 
            /* move input field to history, calculate it,
               display in input field and clear history */
            let result = eval(history);
            $(".history").text("");
            history = "";
            $(".input").text(result);
        }
    });
});