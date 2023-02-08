class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, 'run')
    }

    stop() {
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)

animal.stop()
console.log(animal)

class Rabbit extends Animal {
    /*
    constructor(...args) {
        super(...args)
    }
    */ // 생략된 코드
    hide() {
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.stop()
rabbit.hide()

Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(this.color, this.name, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()