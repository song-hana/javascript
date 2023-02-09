class CoffeeMachine {
    waterAmount = 0

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeeMachine)
console.log(Object.keys(CoffeeMachine))
console.log(Object.keys(CoffeeMachine.prototype))

let machine = new CoffeeMachine(220)
console.log(machine)
console.log(Object.keys(machine))

//
CoffeeMachine = class {
    _waterAmount

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    } 
}

machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)

machine._waterAmount = 11
console.log(machine._waterAmount)