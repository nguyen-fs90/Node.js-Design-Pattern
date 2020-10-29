const { count } = require('./counter.cjs')
const counter = require('./counter.cjs')

console.log(counter.count)
counter.increment()
console.log(counter.count)
counter.count++
console.log(counter.count)
counter.increment()
console.log(counter.count)