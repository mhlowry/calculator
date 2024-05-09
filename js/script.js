let num1;
let num2;
let op;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b != 0)
        a / b;
    else
        return undefined;
};

const operater = (num1, op, num2) => {
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

