const buttons = document.querySelectorAll("button");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let dotCount = 0;
const result = document.querySelector(".result");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.className == "operator"){
            if(secondNumber != ""){
                firstNumber = operation(firstNumber,operator,secondNumber);
                secondNumber = "";
                operator = btn.id;
                result.textContent = firstNumber+operator;
            }else{
                operator = btn.id;
                result.textContent += btn.id;
                dotCount = 0;
            }

        }else if(btn.className == "clear"){
            firstNumber = "";
            operator = "";
            secondNumber = "";
            result.textContent = "";

        }else if(btn.className == "enter"){
            if(firstNumber == ""){
                alert("no ingresaste nada");
            }else if(firstNumber != "" && operator == ""){
                alert("no ingresaste ningun operador y todavia te falta otro numero para realizar la operacion");
            }else if(secondNumber == ""){
                alert("te falta otro numero para realizar la operacion");
            }else{
                result.textContent = operation(firstNumber,operator,secondNumber);
                firstNumber = "";
                operator = "";
                secondNumber = "";
            }  
        
        }else if(btn.className == "backspace"){    
            if(operator == ""){
                firstNumber = firstNumber.substring(0,firstNumber.length - 1);
                result.textContent = result.textContent.substring(0,result.textContent.length - 1);
            }else if(operator != "" && secondNumber == ""){
                operator = "";
                result.textContent = result.textContent.substring(0,result.textContent.length - 1);
            }else{
                secondNumber = secondNumber.substring(0,secondNumber.length - 1);
                result.textContent = result.textContent.substring(0,result.textContent.length - 1);
            }

        }else if(operator != ""){
            secondNumber += btn.id;
            result.textContent += btn.id;

        }else if(btn.className == "dot" && dotCount == 0){ 
            if(operator == ""){
                firstNumber += btn.id;
                result.textContent += btn.id;
                dotCount = 1;
            }else{
                secondNumber += btn.id;
                result.textContent += btn.id;
                dotCount = 1;
            }

        }else if(btn.className == "number"){
            firstNumber += btn.id;
            result.textContent += btn.id;
        }
    })
})

function operation(firstNumber,operator,secondNumber){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch(operator){
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;          
    }
}