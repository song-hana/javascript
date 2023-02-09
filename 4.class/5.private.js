class CoffeeMachine {
    #waterAmount

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype)

let machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)

// machine.#waterAmount = 1