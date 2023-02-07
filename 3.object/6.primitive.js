let date1 = new Date(2023, 2, 7)
let date2 = new Date(2023, 2, 6)

console.log(date1 - date2)

let user = {
    userName: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.userName : this.age
    }
}

let user2 = {
    age: 30,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`)
console.log(user > user2)
console.log(user + 50)
console.log(user2 + 50)

user = {
    userName: 'neo',
    age: 11,
    toString() {
        return this.userName
    }
}

console.log(user + '')

user.valueOf = function() {
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user)
console.log(userStr)
console.log(typeof userStr)