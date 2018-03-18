$( document ).ready(function() {
    let history = "";
    const operations = ["/", "*", "+", "-"];
    let isEqual = false;

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
        if (isEqual === true || $(".history").text() == "error") {
            history = "";
            $(".history").text("");
        }

        if (input.length <= 7) {
 
            /* NUMBER IS PUSHED */
            if ($(this).is(".number")) {
                number();                
            }

            /* IF DOT IS PUSHED */
            if ($(this).is(".btn-dot")) {
                dot();                
            }
        }

        /* OPERATION IS PUSHED */
        if ($(this).is(".operation")) {
            operation();
        }

        /* IF PLUS-MINUS IS PUSHED */
        else if ($(this).is(".btn-plusminus")) {
            plusMinus();
        }

        /* IF ALL-CLEAR IS PUSHED */
        else if ($(this).is(".btn-ac")) {
            ac();
        }

        /* IF CLEAR IS PUSHED */
        else if ($(this).is(".btn-c")) {
            clear();
        }

        /* IF EQUAL IS PUSHED */
        else if ($(this).is(".btn-equal")) {
            equal();
        }  
        
        /* - - - FUNCTIONS - - - */

        function dot() {
            let isDot = input.split("").includes(".");
            /* if input is not an operation */
            if (isOperation === false && isDot === false) {
                $(".input").text(input + push);
            }
            else if (isOperation === true && isDot === false) {
                history += input;
                $(".history").text(history);
                $(".input").text("0" + push); 
            }
        }

        function plusMinus() {
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

        function ac() {
            /* update input field to 0, clear history line */
            $(".input").text("0");
            $(".history").text("");
            history = "";
            isEqual = false;
        }

        function clear() {
            /* update input field to 0 */
            $(".input").text("0");
        }

        function operation() {
            /* IF INPUT IS 0 AND / OR * IS PUSHED */
            if (!((push == "/" || push == "*") && input == "0")) {
                isEqual = false;
                /* if input is already an operation
                    just update input field with new operation */
                if (isOperation === true) {
                    $(".input").text(push);
                }
                /* move input field value to history line */
                else {
                    history += input;
                    if (history.length > 18) {
                        $(".history").text("error");
                    }
                    else {
                        $(".history").text(history);
                        $(".input").text(push);
                    }
                }
            }
        }

        function number() {
            /* if input is 0 */
            if (input.length === 1 && $(".input").text() == 0) {
                $(".input").text(push);
            }
            /* if input is an operation character */
            else if (isOperation === true) {
                /* add input value to history line */
                history += input;
                if (history.toString().length > 15) {
                    $(".history").text("error");
                    $(".input").text("0");
                }
                $(".history").text(history);
                $(".input").text(push);
                }
            /* add number to end of input field */
            else {
                if (isEqual === true) {
                    $(".input").text(push);
                    isEqual === false; 
                }
                else {
                    $(".input").text(input + push);
                }
            }
        }

        function equal() {
            if (!(history[history.length-1] == "/" && input == "0" || input == "0.")) {
                /* if input is not an operation */
                if (isOperation === false) {
                    history += input;
                    $(".history").text(history); 
                } 
            
                /* move input field to history, calculate it,
                    display in input field and clear history */
                let result = eval(history);
                if (Number.isInteger(result) === false) {
                    let temp = Number(result.toFixed(2));
                    result = temp;
                }

                if (result.toString().length > 8) {
                    $(".input").text("0");
                    $(".history").text("error");
                    isEqual = false;
                    history = "";
                }
                else {
                    $(".history").text(history + push + result);
                    $(".input").text(result);
                    isEqual = true;
                }
            }
        }
    });
});

