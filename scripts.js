function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    if (a =='0' || b == '0') {
        return 'Nice try!';
    }
    return parseInt(a) / parseInt(b);
}

function operate(operator, a, b)
{
    switch (operator) {
        case '+':
            answer = add(a, b);
            break;
        case '-':
            answer = subtract(a, b);
            break;
        case 'x':
            answer = multiply(a, b);
            break;
        case '/':
            answer = divide(a, b);
            break;
    }

    return answer;
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
let a = "";
let b = "";
let op = "";
let first = true;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (first) {
            a += number.textContent;
            console.log(a);
        } else {
            b += number.textContent;
            console.log(b);
        }        
    });
});

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        first = false;
        op = operator.textContent;
    })
})

const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    a = operate(op, a, b);
    display.textContent = a;
    b = "";
})



const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    a = "";
    b = "";
    op = "";
    first = true;
    display.textContent = "";
})