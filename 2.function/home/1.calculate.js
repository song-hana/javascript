/*
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자)가 parameter 이다.
2. parameter value 등은 string type 이다.
3. 연산자는 -, *, / 로 한정한다.
4. client가 연산자를 안 정하면, * 를 연산자로 쓴다.
5. 연산 결과값을 return 한다.
*/
/*
function calculate(value1, value2, oper) {
    let result
    
    switch(oper) {
        case '-' : result = value1 - value2; break
        case '/' : result = value1 / value2; break
        default : result = value1 * value2
    }

    return result
}
*/
let calculate = function(a, b, op='*') {
    let result

    switch(op) {
        case '-' : result = a - b; break
        case '*' : result = a * b; break
        case '/' : result = a / b
    }

    return result
}

console.log(calculate('1', '2', '-'))
console.log(calculate('2', '2'))