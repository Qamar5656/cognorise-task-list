//Declared variables
let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}


function setOperator(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

//Function that perform operations

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}
// Funtion to clear screen
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}
//Function to display input entries value
function updateDisplay() {
    display.value = currentOperand;
}
