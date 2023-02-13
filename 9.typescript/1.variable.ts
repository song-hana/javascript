let msg: string = 'hello'
// msg = 1

let val: number = 1
let nullableStr: string | null = null
nullableStr = 'Hi'
// nullableStr = undefined

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

// 자동으로 변환시켜 js처럼 사용가능하지만 굳이
let a = 1
let b = 'b'
let c = true