/*

while writing js program we may come across a situation where we have to loop over object. 

objectcts are not iterable like arrays and strings. so we can't loop over object directly.

we can loop over arrays or string using for or for-of loop.

we can loop over object depending on what we need object property or value or both

*/

const user = {
    name: 'sandesh',
    age: 31, 
    occuption: 'developer'
}
// console.log(user)

/* let properties = Object.keys(user)
console.log(properties)   */                  // [ 'name', 'age', 'occuption' ]

for (let props of properties){
    console.log(props)                      // name  age occuption .... single values
}

/* for (let props in properties){
    console.log(props)                      // 0 1 2 .... single values...
} */

/* let values = Object.values(user)
console.log(values)   */                       //  [ 'sandesh', 31, 'developer' ]

let entries = Object.entries(user)
// console.log(entries)                        //  [ [ 'name', 'sandesh' ], [ 'age', 31 ], [ 'occuption', 'developer' ] ]

/* 
for(let entry of entries){
    console.log(`${entry[0]} ${entry[1]}`)
}
name sandesh       
age 31
occuption developer */

for(let [key,val] of entries){
    console.log(val)
}

