let num1;
let num2;
let operator;

function operate (a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Added: " + operate(7, 7, '+'));
console.log("Subtracted: " + operate(7,7,'-'));
console.log("Multiplied: " + multiply(7,7,'*'));
console.log("Divided: " + divide(7,7,'/'));