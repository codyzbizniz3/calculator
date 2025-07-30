const inputField = document.getElementById('input-field');
const numberButtons = document.querySelectorAll('.number-btn');
const clearButton = document.getElementById('clear-btn');
const operatorButtons = document.querySelectorAll('.operator-btn')

let currentInput = '0';
let awaitingNewNumber = false;

function updateDisplay() {
    inputField.value = currentInput;
}

function clearField() {
    currentInput = '0';
    updateDisplay();
}

function numberClick() {
    const digit = this.textContent;

    if (currentInput === '0' || awaitingNewNumber) {
        currentInput = digit;
        awaitingNewNumber = false;
    } else {
        currentInput += digit;
    }
    updateDisplay()
}

function currentOperator() {

}

numberButtons.forEach(button => {
    button.addEventListener("click", numberClick)
});

clearButton.addEventListener('click', clearField);
