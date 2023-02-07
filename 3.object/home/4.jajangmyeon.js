/*
2. function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라.
*/

/*  실패 ㅠ
function Food(foodName) {
    this.foodName = foodName
}

function Chef(recipe) {
    this.recipe = recipe
    this.cook = foodName => new Food(foodName)
    return recipe + Food
}

function Waiter() {
    this.request = (foodName) => console.log(Chef.cook(foodName))
}

let chef1 = new Chef('달콤한')
let waiter = new Waiter()

waiter.request(chef1.cook('짜장면'))
*/

function Food(taste, foodName) {
    this.taste = taste
    this.foodName = foodName
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

console.log(waiter.order('짜장면', chef1))
waiter.order('짬뽕', chef2)