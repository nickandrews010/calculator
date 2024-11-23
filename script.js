let num1 = 0;
let num2 = 0;
let operator = '';
let answer = 0;
let currentNum = num1;

function operate(a, b, operator) {
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

function populate(input) {

    // If the current number is 0, set the inputted number to currentNumber
    if (currentNum === 0) {
        currentNum = input;
    }

    // If it isnt, concatenate the input to the number 
    else {
        currentNum = currentNum.toString();
        currentNum += input;
    }

    display.textContent = currentNum;
}

const buttonContainer = document.getElementById('buttonContainer');
const display = document.getElementById('input');

display.textContent = currentNum;

buttonContainer.addEventListener("click", (event) => {
    let pressedButton = event.target.textContent;
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    console.log(operator == true);

    switch (pressedButton) {
        case 'C':
            display.textContent = '';
            num1 = 0;
            num2 = 0;
            operator = '';
            currentNum = '';
            break;

        case '+/-':
            currentNum *= -1;
            display.textContent = currentNum;
            break;

        case '%':
            break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            populate(pressedButton);
            break;

        case '÷':
            num1 = +currentNum;
            currentNum = num2;
            operator = '/';

            console.log('Num1: ' + num1);
            console.log('Num2: ' + num2);
            console.log('Operator: ' + operator);

            break;
        case '−':
            num1 = +currentNum;
            currentNum = num2;
            operator = '-';

            console.log('Num1: ' + num1);
            console.log('Num2: ' + num2);
            console.log('Operator: ' + operator);

            break;
        case '+':
            num1 = +currentNum;
            currentNum = num2;
            operator = '+';

            console.log('Num1: ' + num1);
            console.log('Num2: ' + num2);
            console.log('Operator: ' + operator);

            break;
        case '×':
            if (operator) {
                num2 = +currentNum;
                answer = operate(num1, num2, operator);
                display.textContent = answer;
                currentNum = answer;
                num2 = 0;
                operator = ''
                break;
            }
            num1 = +currentNum;
            currentNum = num2;
            operator = '*';


            console.log('Num1: ' + num1);
            console.log('Num2: ' + num2);
            console.log('Operator: ' + operator);

            break;

        case '.':
            while (!currentNum.toString().includes('.')) {
                currentNum += '.';
            }
            display.textContent = currentNum;
            break;

        case '=':
            num2 = +currentNum;
            answer = operate(num1, num2, operator);
            display.textContent = answer;
            currentNum = answer;
            console.log('Num2: ' + num2);
            console.log('Operator: ' + operator);
            num2 = 0;
            operator = '';

            console.log('Num1: ' + num1);

            console.log('Answer: ' + answer);

    };
});