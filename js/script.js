let displayValue = '';
let input = [0, '+', 0];
const operators = ['+', '-', '*', '/'];

//buttons and display selectors
let buttonC = document.querySelector("#C");
let display = document.querySelector("#display");

let button7 = document.querySelector("#seven");
let button8 = document.querySelector("#eight");
let button9 = document.querySelector("#nine");
let buttonDivision = document.querySelector("#division");

let button4 = document.querySelector("#four");
let button5 = document.querySelector("#five");
let button6 = document.querySelector("#six");
let buttonMultiplication = document.querySelector("#multiplication");

let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");
let buttonSubtraction = document.querySelector("#subtraction");

let button0 = document.querySelector("#zero");
//let buttonDecimal = document.querySelector("#decimal");
let buttonAddition = document.querySelector("#addition");
let buttonEquals = document.querySelector("#equals");

// button listeners
buttonC.addEventListener("click", () => clearDisplay());

button7.addEventListener("click", () => updateDisplay('7'));
button8.addEventListener("click", () => updateDisplay('8'));
button9.addEventListener("click", () => updateDisplay('9'));
buttonDivision.addEventListener("click", () => updateDisplay('/'));

button4.addEventListener("click", () => updateDisplay('4'));
button5.addEventListener("click", () => updateDisplay('5'));
button6.addEventListener("click", () => updateDisplay('6'));
buttonMultiplication.addEventListener("click", () => updateDisplay('*'));

button1.addEventListener("click", () => updateDisplay('1'));
button2.addEventListener("click", () => updateDisplay('2'));
button3.addEventListener("click", () => updateDisplay('3'));
buttonSubtraction.addEventListener("click", () => updateDisplay('-'));

button0.addEventListener("click", () => updateDisplay('0'));
//buttonDecimal.addEventListener("click", () => updateDisplay('.'));
buttonAddition.addEventListener("click", () => updateDisplay('+'));
//buttonEquals.addEventListener("click", () => updateDisplay('*'));


// Arithmatic methods
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b != 0)
        return a / b;
    else
        return undefined;
};

const operate = (num1=0, op, num2=0) => {
    switch (op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return num1;
            break;
    }
};

function updateDisplay(string) {
    if (operators.includes(string))
    {
        if (displayValue.length > 0)
        {
            // an operator hasn't been inputted yet
            if (!operatorAlreadyExists())
            {
                displayValue += string;
                display.innerText = displayValue;
                updateInputArray(string, true);
                console.log(input);
            }
            // an operator has been inputted BUT it was the previous input
            else if (operators.includes(displayValue.slice(-1)))
            {
                displayValue = displayValue.substring(0, displayValue.length - 1) + string;
                display.innerText = displayValue;
                updateInputArray(string, true);
                console.log(input);
            }
        }
        return;
    }
    
    displayValue += string;
    display.innerText = displayValue;
    updateInputArray(string);
    console.log(input);
}

function updateInputArray(string, isOperator=false) {
    // the number is the operator
    if (isOperator)
    {
        input[1] = string;
    }
    else
    {
        // the number is num1
        if (!operatorAlreadyExists())
            input[0] = parseInt(input[0] + string);
        // the number is num2
        else
            input[2] = parseInt(input[2] + string);
    }
}

function operatorAlreadyExists()
{
    for (let operator of operators)
    {
        if (displayValue.includes(operator))
            return true;
    }
    return false;
}

function clearDisplay() {
    displayValue = ''
    display.innerText = displayValue;
    input = [0, '+', 0];
}

