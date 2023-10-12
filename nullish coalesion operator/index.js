let a 
let b = 20
let result 

// result = (a == null || a == undefined) ? b : a
// console.log(result)                                     // 20

// we can achieve same thing using nullish coalescing operator..

result = a ?? b                 // if first value is not null or undefine first value is return otherwise second value is return.
console.log(result)
