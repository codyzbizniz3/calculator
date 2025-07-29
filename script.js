const inputField = document.getElementById('input-field');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-btn');

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonText = this.textContent;
        if (inputField.value === '0') {
            inputField.value = buttonText;
        } else {
            inputField.value += buttonText;
        }
    });

});

clearButton.addEventListener('click', function () {
    inputField.value = '0';
});