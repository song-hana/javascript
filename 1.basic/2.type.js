let foo = "I am a string."  // "", '', `` 사용시 String으로 인식
foo = 'So am i'
foo = `back tick`

foo = 'He said, "javascript is awesome"'
foo = "He said, \"javascript is awesome\""

foo = 1
foo = 1.0

console.log(1 / 0)
console.log('a' / 1)  // NaN: Not a Number

foo = 1
console.log(isFinite(foo))
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123'
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2

a = Infinity * NaN
console.log(a, b)

foo = 1n  //  2**53 -1 초과

const okay = true
const fail = false

let val = null

let val2
console.log(val2)  //undefined
val2 = undefined

let id = Symbol('id')
console.log(typeof id)

val = 1
val = String(val)
console.log(typeof val)

val = '6' / '2'
console.log(val)

val = false / true
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))  // 1
console.log(Number(' '), Number(''), Number(null), Number(false)) // 0
console.log(Number('a'), Number(undefined), Number(NaN))  // NaN

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '))
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))