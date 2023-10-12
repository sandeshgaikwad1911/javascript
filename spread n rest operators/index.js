/* const arr1 = [10, 20, 30]
console.log(...arr1)   

//  copy array into newArray.

const newArray = [90, 80, ...arr1]
console.log(newArray)


// passing elements of an array as an arguments.

const num = [1,2,3]

function abc(n1, n2, n3){
    return n1 + n2 + n3
}
const result = abc(...num)
console.log(result)

 */


// **************       rest operator   **********************************************************************************

/* const numbers = [10, 20, 30, 40, 50]
const [a, b, others] = numbers
console.log(others)                 // 30

const [A, B, ...Others] = numbers
console.log(Others) */                 // [30,40,50]

// **********************************************************************************************************************

/* const num ={
    x: 10, y: 20, z:30, u: 19, v: 20
}
// const { x, y, remain} = num
// console.log(remain)         // undefined

const { x, y, ...remaining} = num
console.log(remaining)              // {z:30, u: 19, v: 20}
 */


// *********************            rest parameter         ******************************************************

/* function add(n1, n2){
    return n1 + n2
}
console.log(add(10, 20))

console.log(add(10,20,30,40))  */          // 30 ... only takes first two arguments.. because we have only two parameter


// ********************************************************************************************************************

/* function add(...nums){
    let sum = 0
    for(let i=0; i<nums.length; i++){
        sum = sum + nums[i]
    }
    return sum
}
console.log(add(10,20))             // 30
console.log(add(10,20,30,40))       // 100 */

function add(num1, num2, ...others){
    let sum = num1 + num2
    for(let i=0; i<others.length; i++){
        sum = sum + others[i]
    }
    return sum
}
console.log(add(10,10))                     // 20
console.log(add(10,20,40,50,60))            // 180

