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
    if (b === 0) {
        alert('Nice try, Einstein! Dividing by zero? What do you think this is, a black hole simulator? Try again.');
        clear();
        return 0;
    }

    else {
        return a / b;
    }
}

function formatNumber(num) {
    if (num.toString().length > 7) {
        return num.toFixed(5);
    }
    else {
        return num;
    } 
}

function clear() {
    display.textContent = '0';
    num1 = 0;
    num2 = 0;
    operator = '';
    currentNum = '';
}

function operatorClicked(symbol) {
    // If an operator has already been chosen, treat this button click as '='
    if (operator) {
        num2 = +currentNum;
        answer = operate(num1, num2, operator);
        display.textContent = answer;
        currentNum = answer;
        num2 = 0;
        operator = ''
    }

    num1 = +currentNum;
    currentNum = num2;
    operator = symbol;

}

function populate(input) {

    if (currentNum.toString().length >= 7) {
        return;
    }

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
            clear();
            break;

        case '+/-':
            currentNum *= -1;
            display.textContent = formatNumber(currentNum);
            break;

        case '%':
            currentNum /= 100;
            display.textContent = formatNumber(currentNum);
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
            operatorClicked('/');
            break;

        case '−':
            operatorClicked('-');
            break;

        case '+':
            operatorClicked('+');
            break;

        case '×':
            operatorClicked('*');
            break;

        case '.':
            while (!currentNum.toString().includes('.')) {
                currentNum += '.';
            }
            display.textContent = currentNum;
            break;

        case '=':
            if (operator === '') {
                display.textContent = 0;
                break;
            }

            num2 = +currentNum;
            answer = operate(num1, num2, operator);
            display.textContent = formatNumber(answer);
            currentNum = answer;
            num2 = 0;
            operator = '';


    };
});
