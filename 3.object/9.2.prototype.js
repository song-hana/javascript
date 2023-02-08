let obj = {}

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object() // 첫번째 줄의 원형
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)

console.log(obj.toString())

let arr1 = [1, 2]
let arr2 = new Array(1, 2) // 위의 코드는 아래의 코드를 줄여 쓴 것
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString())

let one = new Number(1)
console.log(one.toString())

function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString())