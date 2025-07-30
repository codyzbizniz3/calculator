const inputField = document.getElementById('input-field');
const numberButtons = document.querySelectorAll('.number-btn');
const clearButton = document.getElementById('clear-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const decimalButton = document.getElementById('decimal-btn')

let currentInput = '';//Change this to an empty field
let awaitingNewNumber = false;

function updateDisplay() {
    inputField.value = currentInput;
}

function clearField() {
    currentInput = '';
    updateDisplay();
}

function numberClick() {
    const digit = this.textContent;

    if (currentInput === '' || awaitingNewNumber) {
        currentInput = digit;
        awaitingNewNumber = false;
    } else {
        currentInput += digit;
    }
    updateDisplay()
}

//Handle initial input of 0 here

function operatorClick() {
    const operator = this.textContent;

    if (currentInput !== '') {
        currentInput += ` ${operator} `;
    }
    updateDisplay();
}

function decimalClick() {
    const decimal = this.textContent;
    currentInput += decimal;
    updateDisplay();
}

numberButtons.forEach(button => {
    button.addEventListener("click", numberClick)
});

clearButton.addEventListener('click', clearField);

operatorButtons.forEach(button => {
    button.addEventListener('click', operatorClick)
});

decimalButton.addEventListener('click', decimalClick);