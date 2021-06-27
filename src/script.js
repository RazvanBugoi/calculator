const buttons = document.querySelectorAll('.button')
const displayNumbers = document.getElementById('current-numbers')
const history = document.getElementById('calculator-history')
const operators = document.querySelectorAll('.operator')
const result = document.getElementById('equal')
let displayOutput
let historyOutput
let currentOperatorSelected;

buttons.forEach((el) => el.addEventListener('click', function(){
    displayNumbers.textContent += el.textContent
    displayOutput = displayNumbers.textContent;
}))

operators.forEach((el) => el.addEventListener('click', function() {
    if (!displayNumbers.textContent) {
        displayNumbers.textContent = 'You need to select a number first!'
    }
    history.textContent = displayOutput;
    displayNumbers.textContent = '';
    currentOperatorSelected = el.textContent;
    historyOutput = displayOutput;
}))


window.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        const no1 = Number(displayOutput.match(/\d/g).join(''));
        const no2 = Number(historyOutput.match(/\d/g).join(''))
        history.textContent = operate(currentOperatorSelected, no1, no2)
        displayNumbers.textContent = ''
    }
    return
  }, true);

result.addEventListener('keydown', function(event) {
    console.log(event.code)
})

const add = function(a, b) {
	return a + b;
};

const substract = function(a, b) {
	return a - b;
};

const divide = function(a, b) {
	return a / b;
};

const multiply = function(a, b) {
  return a * b;
};

const operate = function(operator, no1, no2) {
    switch (operator) {
        case '+': return add(no1, no2);
        case '-': return substract(no1, no2);
        case '*': return multiply(no1, no2);
        case '/' : return divide(no1, no2);
        default: 
        return 'I don\'t recognize that operator'
    }
}
