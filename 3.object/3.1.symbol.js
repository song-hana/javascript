/* symbol: unique identifier */
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id, id1, id2)

console.log(id1 == id2)

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId] = 2

console.log(user)

// 과제: user 를 iterating 해서, key 들을 출력하라.
for(let key in user) console.log(key)

console.log(Object.keys(user))

id1 = Symbol.for('id') // global로 설정할 수 있음
id2 = Symbol.for('id')
console.log(id1 == id2)

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

id1 = Symbol.for('userName')  // global  -userName: key
id2 = Symbol('userName')  // local  -userName: description
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))
