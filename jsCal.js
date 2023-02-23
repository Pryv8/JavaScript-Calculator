$(document).ready(function(){
let operArr = [];
let tooManyZeros = /^[0]{1}/;
let trap = /\W{2,}/g;
let inputStr = [];
let outputStr = [];



$("button").on("click",function (event){

    if(event.target.value ==="clear"){
    inputStr = [];
    outputStr = [];
    $("#display").text("0");
    $("#decimal").prop("disabled", false)
    }
    else if(event.target.value == "+" || event.target.value == "*" || event.target.value == "/"){
        operArr.push(event.target.value)
        if(trap.test(inputStr)){
            inputStr = inputStr.join("").replace(trap,"").split("")
            inputStr.push(event.target.value)
            $("#display").text(inputStr.join(""));
            $("#decimal").prop("disabled", false)
        }

        else if(inputStr[inputStr.length - 1] == event.target.value){
            inputStr.push(event.target.value)
            $("#display").text(inputStr.join(""));
            $("#decimal").prop("disabled", false)
        }
        else{
            inputStr.push(event.target.value)
            $("#display").text(inputStr.join(""));
            $("#decimal").prop("disabled", false)
        }
        
    }
    
    // End of 1st set of ...args for ahy input being rendered

    else if(event.target.value == "-"){
        inputStr.push(event.target.value)
        $("#display").text(inputStr.join(""));
        $("#decimal").prop("disabled", false)
    }
    else if(event.target.value == '='){
        if(operArr.length > 1){
            outputStr.push(eval(inputStr.join("").replace(trap, operArr[operArr.length - 1])));
            inputStr = outputStr;
            $("#display").text(eval(inputStr.join("").replace(trap, operArr[operArr.length - 1])));
        }
        else{
            $("#display").text(eval(inputStr.join("")));
            outputStr.push(eval(inputStr.join("")));
            inputStr = outputStr;
        }
            operArr = [];
            $("#decimal").prop("disabled", false)
        }
        // End of logic for you Equal $ign operator & the 2nd else if statement

            else if(tooManyZeros.test(inputStr.join(""))){
                $("#decimal").prop("disabled", false);
                $(".oper").prop("disabled", false);    

            }
            else if(event.target.value == "."){
                inputStr.push(event.target.value);
               $("#display").text(inputStr.join(""));
               $("#decimal").prop("disabled", true);
                $(".oper").prop("disabled", true);

            }
            else{
                inputStr.push(event.target.value);
                $("#display").text(inputStr.join(""));
                $(".oper").prop("disabled", false);

            }

    
}) // close of the button function
}) // close of the document.ready function