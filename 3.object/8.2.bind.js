let user = {
    userName: 'leo'
}

function greet() {
    console.log(`I am ${this.userName}.`)
}

greet()

let fn = greet.bind(user)
fn()

setTimeout(fn, 100)

user = {
    userName: 'john',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

// fn 에 user.greet을 할당하라.
//       greet의 this 에 user가 담겨있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)