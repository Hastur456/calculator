const calculatorButtons = document.querySelector('.calculator_buttons')
const setField = document.querySelector('.set_field')
const reset = document.querySelector('.reset')

let firstNumber = '';
let secondNumber = '';
let operator = '';

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.']
const action = ['+', '-', '*', '/']

function clearField(event) {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    setField.textContent = '0';
};

let finish = false

calculatorButtons.addEventListener('click', (event) => {
    if (!event.target.closest('.calculator_button')) {
        return
    };

    const value = event.target.textContent;

    if (value === 'C') {
        clearField();
        return
    };

    if (digit.includes(value)) {
        if (secondNumber === '' &&  operator === '') {
            firstNumber += value;
            setField.textContent = firstNumber;
        }

        if (firstNumber !== '' && operator !== '') {
            secondNumber += value;
            setField.textContent = secondNumber;
        }

        if (firstNumber !== '' && secondNumber !== '' ) {
            secondNumber += value;
            secondNumber = setField.textContent;
        }
    }

    if (action.includes(value)) {
        operator = value;
        setField.textContent = operator;
    }

    if (value === '=') {
        if (operator === '+') {
            firstNumber = (+firstNumber) + (+secondNumber)
        } else if (operator === '-') {
            firstNumber = firstNumber - secondNumber
        } else if (operator === '*') {
            firstNumber = firstNumber * secondNumber
        } else if (operator === '/') {
            firstNumber = firstNumber / secondNumber
        }

        setField.textContent = firstNumber;
        secondNumber = '';
    }
}); 