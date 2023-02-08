let animal = {
    animalName: 'animal'
}

animal = new Object()
animal.animalName = 'animal'  // 상단 두개 코드는 같은 뜻

// 과제: 토끼를 object literal 및 constructor로 만들어라.
//       토끼는 age = 3, property를 갖고 있다.
let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(rabbit.animalName, rabbit.age)

animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = {
    __proto__: animal
}

rabbit.walk()

let user = {
    userName: 'user'
}

let administrator = {
    __proto__:user
}

console.log(administrator.userName)

administrator.userName = 'jonadan'
console.log(administrator.userName)

animal = {
    animalName: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.animalName} eat.`)
    }
}

rabbit = {
    rabbitName: 'rabbit',
    __proto__: animal
}

let lion = {
    lionName: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat()

console.log(Object.keys(rabbit))

for(let key in rabbit)
    console.log(key)

let msg
for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    msg = isOwn ? `child's key: ${key}` : `parent's key: ${key}`
    console.log(msg)
}