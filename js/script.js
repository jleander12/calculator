let firstNum = '';
let secondNum = '';
let calcOperation = ''; //+ for add, - for subtract, * for multiply, / for divide
let solution = '';

function operate(a, b, operation) {
    a = Number(a);
    b = Number(b);
    if (typeof a != 'number' || typeof b != 'number') {
        solution = 'ERROR: only numbers allowed';
    } else if (operation === '+') {
        solution = add(a, b);
    } else if (operation === '-') {
        solution = subtract(a, b);
    } else if (operation === '*') {
        solution = multiply(a, b);
    } else if (operation === '/') {
        solution = divide(a, b);
    } else {
        solution = 'ERROR: not a valid operation';
    }
    updateDisplay(solution);
    firstNum = '';
    secondNum = '';
    calcOperation = '';
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

function getChar(e) {
    console.log(this.innerHTML);
    if (this.id == '=') {
        console.log('test');
        operate(firstNum, secondNum, calcOperation);
        return;
    } else if (this.innerHTML === '+' || this.innerHTML === '-' || 
        this.innerHTML === '*' || this.innerHTML === '/') {
        calcOperation = this.innerHTML;
    } else if (calcOperation === '') {
        firstNum += this.innerHTML;
    } else if (calcOperation != '' && calcOperation != '=') {
        secondNum += this.innerHTML;
    } else {
        console.log('ERROR');
    }
    updateDisplay(`${firstNum} ${calcOperation} ${secondNum}`);
}

function updateDisplay(string) {
    display.value = string;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getChar));

const display = document.getElementById('display');