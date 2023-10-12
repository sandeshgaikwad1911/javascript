/* 
    1   just like object , data stored in maps in key-value pair
    2   but difference is that key in Object is always string, but in map key is any data type. key can be obj, arr, or map  
*/


const map = new Map()

map.set('question', 'in which year es6 was introduced?')
map.set(1, 2015)

console.log(map)                    // Map(2) { 'question' => 'in which year es6 was introduced?', 1 => 2015 }

const get = map.get(1)
console.log(get)                    // in which year es6 was introduced?
