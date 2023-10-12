/* console.log(`
One data type is converted into another data type is called tye conversion.
`)

console.log(`two types of converison..

1. Implicit type conversion  --- automatically done by js compiler

2. Explicit type convesion  --- manually done by user. is reffered as 'typecastin' in js.
`)

console.log(`primitive or non-primitive both data type can be converted into following three types

1. to String
2. to Number
3. to Boolean
`) */



/* 
console.log('5' + 3)    // 53 ... Number converted to string

console.log('5' - 3)    // 2 ... String converted to number
 */


/* console.log(`
with  -  *  / operators String converted to number .
with + operator Number converted to String.`)
 */




console.log(false == 0)     // true
console.log(true == 1)      // true

console.log(false === 0)    // false

console.log(null == 1)      // false
console.log(null == 0)      // false



/* 
// when result is not a number
console.log('25' - 23)          // 2
console.log('hello' - 23)       // NaN 
console.log(typeof(NaN))        // number
 */


/* 
console.log(23 - true)      // 22 ... true converts to 1

console.log(23 - false)     // 23 ... false converts to 0

console.log(23 - null)      // 23... null converts to 0

console.log(23 + undefined)   // NaN ...    undefined converts to NaN

const arr = []
if(arr){
    console.log('hello')    // hello ... empty array converted to boolean.
}

 */

//  prompt( ) function  always gives us String result.. sometime it lead to error

/* let borrowed_Pens = prompt('enter no of pens you want to borrow.')   // 20
let penIn_Hand = 10;
let total_Pens = borrowed_Pens + penIn_Hand;
console.log(total_Pens);  */                           // 2010

// here we need to explicitly convert it to number

// Number()

/* let borrowed_Pens = Number(prompt('enter no of pens you want to borrow.'))     //20.5
let penIn_Hand = 10;
let total_Pens = borrowed_Pens + penIn_Hand;
console.log(total_Pens); */                         // 30.5


// parseInt()

/* let borrowed_Pens = parseInt(prompt('enter no of pens you want to borrow.'))     // 20.5
let penIn_Hand = 10;
let total_Pens = borrowed_Pens + penIn_Hand;
console.log(total_Pens); */                         // 30


/* 
console.log(null == null);          // true
console.log(null == undefined)      // true

console.log(null == 1)          // false
console.log(null == 0)          // false */


/* console.log(Number(null))               // 0
console.log(Number(true))               //  1
console.log(Number(false))              // 0
console.log(Number('sandesh'))          // NaN 
console.log(Number(undefined))          // NaN
*/

/* console.log(Boolean(1))             // true
console.log(Boolean(2))             // true
console.log(Boolean(-2))            // true
console.log(Boolean(true))          // true
console.log(Boolean(0))             // false
// and all other also false. */

// console.log(3 + null)