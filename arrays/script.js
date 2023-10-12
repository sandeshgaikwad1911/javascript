const nameArray = ["sandesh", "subodh", "mack", "jack"]
const numArray = [1, 2, 3, 4, 5,]

/* const shallowCopy =[...nameArray]
console.log(shallowCopy) */                        //  [ 'sandesh', 'subodh', 'mack', 'jack' ]

/* const shallowCopy = nameArray.slice()
console.log(shallowCopy)                        //    [ 'sandesh', 'subodh', 'mack', 'jack' ]
 */

//  _________________________________________________________________________________________________________________________ 

/* const subArr = nameArray.slice(1)
console.log(subArr)                             //      [ 'subodh', 'mack', 'jack' ]

const subArr1 = nameArray.slice(-1)
console.log(subArr1)                            // [ 'jack' ]

const subArr2 = nameArray.slice(1,-1)
console.log(subArr2)   */                          //  [ 'subodh', 'mack' ]

//  _________________________________________________________________________________________________________________________________

// splice => method extract part of an array.. and also modify orignal array
// splice method is usually use to delete item from orignal array

// nameArray.splice(-1)
// console.log(nameArray)      //  [ 'sandesh', 'subodh', 'mack' ] ... removed last element from orignal array



//  _______________________________________________________________________________________________________________________________________

// reverse()        ___ // it reverse an orignal Array

/* nameArray.reverse()
console.log(nameArray) */

// ____________________________________________________________________________________________________________________________________________

const newArray = [...nameArray, ...numArray]
// console.log(newArray)                              //[ 'sandesh', 'subodh', 'mack', 'jack', 1, 2, 3, 4, 5 ]

const newArray1 = nameArray.concat(numArray)
console.log(newArray1)                                //    [ 'sandesh', 'subodh', 'mack', 'jack', 1, 2, 3, 4, 5 ]