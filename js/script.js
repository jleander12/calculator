let firstNum = 0;
let secondNum = 0;
let calcOperation = ''; //+ for add, - for subtract, * for multiply, / for divide
let solution = 0;

operate(2,5,'+');
operate(2,5,'-');
operate(2,5,'*');
operate(2,5,'/');
operate(2,5,'j');
operate(3,5,'+');
operate(3,5,'-');
operate(3,5,'*');
operate(3,5,'/');
operate(3,5,'j');

function operate(a, b, operation) {
    if (operation === '+') {
        solution = add(a, b);
    } else if (operation === '-') {
        solution = subtract(a, b);
    } else if (operation === '*') {
        solution = multiply(a, b);
    } else if (operation === '/') {
        solution = divide(a, b);
    } else {
        solution = 'ERROR';
    }
    console.log(solution);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b)  {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
