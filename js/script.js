let firstNum = '';
let secondNum = '';
let calcOperation = ''; //+ for add, - for subtract, * for multiply, / for divide
let solution = '';

function operate(a, b, operation) {
    a = Number(a);
    b = Number(b);
    if (typeof a != 'number' || typeof b != 'number') {
        console.log('ERROR: only numbers allowed');
        return;
    } else if (operation === '+') {
        solution = add(a, b);
    } else if (operation === '-') {
        solution = subtract(a, b);
    } else if (operation === '*') {
        solution = multiply(a, b);
    } else if (operation === '/') {
        solution = divide(a, b);
    } else {
        console.log('ERROR: not a valid operation');
        return;
    }
    if (Number.isInteger(solution) === false) {
        solution = solution.toFixed(2);
    }
    firstNum = solution;
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
    if (this.innerHTML === 'C') {
        clearCalc();
        return;
    }
    if (this.innerHTML === "Del") {
        deleteLast();
        return;
    }

    if (this.id === 'equals' && secondNum != '') {
        operate(firstNum, secondNum, calcOperation);
    } else if (this.id === 'equals' && secondNum === '') {
        return;
    } else if (this.innerHTML === '+' || this.innerHTML === '-' || 
        this.innerHTML === '*' || this.innerHTML === '/') {
        if (calcOperation != '' && secondNum != '') {
            operate(firstNum, secondNum, calcOperation);
        }
        calcOperation = this.innerHTML;
    } else if (calcOperation === '') {
        firstNum += this.innerHTML;
    } else if (calcOperation != '' && calcOperation != '=') {
        secondNum += this.innerHTML;
    } else {
        console.log('ERROR');
        return;
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = `${firstNum} ${calcOperation} ${secondNum}`;
}

function clearCalc() {
    firstNum = '';
    secondNum = '';
    calcOperation = '';
    solution = '';
    updateDisplay();
}

function deleteLast() {
    if (secondNum != '') {
        secondNum = secondNum.substring(0, secondNum.length - 1);
    } else if (calcOperation != '') {
        calcOperation = calcOperation.substring(0, calcOperation.length - 1);
    } else if (firstNum != '') {
        firstNum = firstNum.substring(0, firstNum.length - 1);
    }
    updateDisplay();
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', getChar));

const display = document.getElementById('display');