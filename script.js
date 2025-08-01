const performCalculation = {
    '÷': (firstNum, secondNum) => firstNum / secondNum,
    'X': (firstNum, secondNum) => firstNum * secondNum,
    '+': (firstNum, secondNum) => firstNum + secondNum,
    '-': (firstNum, secondNum) => firstNum - secondNum,
};

const calculator = {

    displayValue: '0',

    firstNum: null,
    operator: null,
    awaitingNum: false,

    inputField: document.getElementById('input-field'),
    numberButtons: document.querySelectorAll('.number-btn'),
    clearButton: document.getElementById('clear-btn'),
    operatorButtons: document.querySelectorAll('.operator-btn'),
    decimalButton: document.getElementById('decimal-btn'),
    equalButton: document.getElementById('equal-btn'),

    updateDisplay() {
        this.inputField.value = this.displayValue;
    },

    clearField() {
        this.displayValue = '0';
        this.firstNum = null;
        this.operator = null;
        this.awaitingNum = false;
        this.updateDisplay();
    },

    numberClick(event) {
        const digit = event.target.textContent;
        const { displayValue, awaitingNum } = this;

        if (awaitingNum) {
            this.displayValue = digit;
            this.awaitingNum = false;
        } else {
            this.displayValue = displayValue === '0' ?
                digit : displayValue + digit;
        }
        this.updateDisplay();
    },

    operatorClick(event) {
        const operator = event.target.textContent;
        const inputValue = parseFloat(this.displayValue);

        if (this.operator && this.awaitingNum) {
            this.operator = operator;
            return;
        }

        if (this.firstNum === null && this.displayValue !== '0') {
            this.firstNum = inputValue;
        } else if (this.firstNum === null && this.displayValue === '0') {
            return;
        }

        this.awaitingNum = true;
        this.operator = operator;
    },

    decimalClick(event) {
        if (this.awaitingNum) return;
        if (!this.displayValue.includes('.')) {
            this.displayValue += '.';
        }
        this.updateDisplay();
    },

    round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    },

    equalsClick(event) {
        const { firstNum, displayValue, operator } = this;
        const secondNum = parseFloat(displayValue);

        if (operator && firstNum !== null) {

            const result = performCalculation[operator](firstNum, secondNum);

            if (operator === '÷' && secondNum === 0) {
                this.displayValue = 'NOPE!';
                this.firstNum = null;
                this.operator = null;
                this.awaitingNum = false;
                this.updateDisplay();
                return;
            }
            const roundedResult = this.round(result, 8);

            this.displayValue = String(roundedResult);
            this.firstNum = roundedResult;
            this.operator = null;
            this.awaitingNum = false;
        }
        this.updateDisplay();
    },


    init() {
        this.numberButtons.forEach(button => {
            button.addEventListener('click', this.numberClick.bind(this));
        });

        this.clearButton.addEventListener('click', this.clearField.bind(this));

        this.operatorButtons.forEach(button => {
            button.addEventListener('click', this.operatorClick.bind(this));
        });

        this.decimalButton.addEventListener('click', this.decimalClick.bind(this));

        this.equalButton.addEventListener('click', this.equalsClick.bind(this));

        this.updateDisplay();
    }
};

calculator.init();








