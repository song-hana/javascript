function greet() {
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
}

salute()
console.log(salute)

let sayHello = function(user, greeing) {
    return `${greeing}, ${user}`
}
console.log(sayHello('rebecca', 'hello'))

// 과제: HI 라고 인사하는 function 을 정의하고 실행하라.
/*
let sayHi = function() {
    console.log('Hi')
}
sayHi()
*/
const sayHi =function() {
    console.log('HI')
}
const say = sayHi
say()

let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}

let speak = shout()
speak();

(function() {
    console.log('earth')
})()

let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'start'
}
myFn(argFn)

let showMsg = function(from, msg='no message') {
    console.log(`${from}: ${msg}`)
}

showMsg('trinity', 'follow rabbit')
showMsg('trinity')