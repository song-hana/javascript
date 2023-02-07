let user1 = {
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

let user2 = {
    userName: 'jade',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user1.greet()
user2.greet()

//
let userName = 'morpheus'

function greet() {
    console.log(`I am ${this.userName}.`)
}

greet()  // global.생략
greet.call(user1)
greet.call(user2)

//
user2 = {
    userName: 'colin'
}

user1.greet()
// user2.greet()

// 과제: user1.greet 을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2)
