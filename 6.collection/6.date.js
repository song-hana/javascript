console.log(Date())
console.log(typeof Date())

let date = new Date()
console.log(date)
console.log(typeof date)
console.log(date.toLocaleDateString())

date = new Date('2023-02-10T01:37:30.999Z') // UTC 시간
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(
    date.getFullYear(),
    date.getMonth(), // 0부터 시작 2월은 1
    date.getDate(),
    date.getUTCHours(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getDay()  // 0부터 시작 금요일 5
)
// timestamp // millisecond로 표시
console.log(date.getTime())  
console.log(Date.now())

date = new Date(0)  // 1970-01-01부터 시작된 기준값
console.log(date)

date = new Date(1000 * 60 * 60 * 24)
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date)
