/*
4.class/home/2.jajangmyeon.js 를 promise 로 refactoring 하라.
*/

class Food {
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName
    }
    
    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.foodName}.`
    }
}

class Chef {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    }
    async cook2(foodName) {
        return await Promise.resolve(
            setTimeout(this.cook, 1000))
    }
}

class Waiter {
    order(foodName, chef) {
        return chef.cook2(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1).then(console.log)