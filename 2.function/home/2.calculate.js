/*
1.calculate.js 를 callback으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.
*/
/*
function minus(a, b) {
    console.log(a - b)
}

function multi(a, b) {
    console.log(a * b)
}

function division(a, b) {
    console.log(a / b)
}

function calculate(a, b, op=multi) {
    return op(a, b);
}
*/

function minus(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function calculate(a, b, op=multiply) {
    return op(a, b)
}

console.log(calculate(1, 2, divide))