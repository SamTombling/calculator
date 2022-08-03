function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (a =='0' || b == '0') {
        return 'Nice try!';
    }
    let answer = parseFloat(a) / parseFloat(b);
    return answer.toPrecision(10);
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

const buttons = document.querySelectorAll('.visible');
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

const operators = document.querySelectorAll('.operator');

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (first) {
            a += number.textContent;
            console.log(a);
        } else {
            b += number.textContent;
            console.log(b);
            operators.forEach((operator) => operator.removeAttribute('disabled'));
        }        
    });
});



operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (first == false) {            
            a = operate(op, a, b);
            display.textContent = a + operator.textContent;
            b = "";
            op = operator.textContent;
            operators.forEach((operator) => {
                operator.removeAttribute('disabled');});
        } else {
        first = false;
        op = operator.textContent;
        operators.forEach((operator) => {
            operator.setAttribute('disabled', 'true');
        });
        };
    });
});

const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    a = operate(op, a, b);
    display.textContent = a;
    b = "";
    operators.forEach((operator) => {
        operator.removeAttribute('disabled');
    })
    first = true;
})



const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    a = "";
    b = "";
    op = "";
    first = true;
    display.textContent = "";
    operators.forEach((operator) => {
        operator.removeAttribute('disabled');
    })
})

const deleteButton = document.querySelector('#del');

deleteButton.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
})