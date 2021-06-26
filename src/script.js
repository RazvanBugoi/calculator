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

// const operate = function(operator, no1, no2) {
//     let obj = {
//         '+': add(no1, no2),
//         '-': subtract(no1, no2),
//         '/': divide(no1, no2),
//         '*': multiply(no1, no2)
//     };
//     obj[operator]();
// }