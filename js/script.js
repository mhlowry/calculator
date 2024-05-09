let num1;
let num2;
let op;

//buttons and display selectors
let buttonC = document.querySelector(".C");
let display = document.querySelector(".display");

let button7 = document.querySelector("#7");
let button8 = document.querySelector("#8");
let button9 = document.querySelector("#9");
let buttonDivision = document.querySelector("#division");

let button4 = document.querySelector("#4");
let button5 = document.querySelector("#5");
let button6 = document.querySelector("#6");
let buttonMultiplication = document.querySelector("#multiplication");

let button1 = document.querySelector("#1");
let button2 = document.querySelector("#2");
let button3 = document.querySelector("#3");
let buttonSubtraction = document.querySelector("#subtraction");

let button0 = document.querySelector("#0");
let buttonDecimal = document.querySelector("#decimal");
let buttonAddition = document.querySelector("#addition");
let buttonEquals = document.querySelector("#equals");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b != 0)
        a / b;
    else
        return undefined;
};

const operate = (num1, op, num2) => {
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
            console.error("Something has gone very wrong.");
            break;
    }
};

