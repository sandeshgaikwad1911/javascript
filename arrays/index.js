const numbers = [1, 3, 4, 2, 9, 6, 5, 8, 7, 'sandesh'];

 /* const valOfLastIndex = numbers[numbers.length - 1]; // return value of last index
console.log(valOfLastIndex);  */     //  'sandesh 

/* const valOfIndex = numbers[5]    
console.log(valOfIndex)     // 6 */

/* const a = numbers.push('sandesh')
console.log(a)  */ 
// 10 ( returned length ), that measn we cant add value in separete variable, that we going to push.


/* numbers.push('sandesh')      // add new element at last 
console.log(numbers) */

// That means push method dosen't return new array.. add element at last index in existing array.

// pop()  removes last element from array.
/* const removedElementFromLastIndex = numbers.pop()
console.log(removedElementFromLastIndex)  */           //  7

/* numbers.unshift('sandesh')      // add new element at begining or 0th index
console.log(numbers) */

/* const removedElement = numbers.shift()     // removes first element
console.log(removedElement)     // 1 */

/* let reverseArray = numbers.reverse()       // reverse an array
console.log(reverseArray) */

/* let ascendingOrder = numbers.sort()          // sort array in ascendeing
console.log('ascendingOrder : ',ascendingOrder) */


/* const a = numbers[0] = {roll : 80}          // modify 0th index
console.log(a)              // {roll : 80}
console.log(typeof a)       // object

console.log(Array.isArray(numbers))    // true
console.log(Array.isArray(a))           // false */


const names = ["sandesh", "subodh", "shubham", "surekha", "subodh"];

/* console.log(typeof names)   // object
console.log(Array.isArray(names)) */     // true

const a = names.indexOf('shubham')
console.log(a)                      // 1


// console.log(names.lastIndexOf('subodh'))    //  4

/* console.log(names.includes('sandesh'))           // true
// include method only works on primitive data types. */

/* const slc = names.slice(3)      // removes values before index 3
console.log(slc) */

/* const slc = names.slice(1,3)      // removes values before index 1 and after index 3 including index 3 
console.log(slc) */ // ['subodh', 'shubham']

// **************************************************************************************************************************************8

const social = [
  {
    name: "youtube",
    subscribers: 100000,
  },
  {
    name: "facebook",
    subscribers: 55000,
  },
  {
    name: "instagram",
    subscribers: 225000,
  },
];

/* console.log(social.includes({   // false ... but it exists.. so includes() works only on primitive data types.
    name: 'youtube',
    subscribers: 1000
})) */

/* const a = social.some((element)=>{              // true ... if some element passes given condition 
    // return element.subscribers > 200000     
    // return element.name === 'insta'          // false
})
console.log(a) */

/* const a = social.every((element)=>{         // true ... if every element passes given condition 
    // return element.subscribers > 1
    return element.name === 'facebook'      // false
})
console.log(a) */

/* const a = social.find((element)=>{     
    return element.subscribers > 5000      
    // return element.subscribers < 1      // undefined ... if not found
})
console.log(a) */
//  return only first element that pass given condition... 
// if other elements also passes given conditions that will not be considered


/* const a = numbers.find((element)=>{      
    return  element > 0
})
console.log(a)          
// return index of element that pass the condition because numbers in primitive data type. */


/* const a = social.filter((element)=>{     // return all the element that pass the given condition
    return element.subscribers > 99000
})
console.log(a) */

/* const a = social.map((element)=>{       // return new array
    return element
})
console.log(a) */

/* const b = social.forEach((element)=>{   // undefined.... dosen't return new array.
    return element
})
console.log(b) */

// ******************************************************************************************************************************************


const characters = [
  {
    name: "Tarak Mehta",
    gender: "male",
    mass: 77,
    height: 170,
    eye_color: "brown",
  },
  {
    name: "Jethalal",
    gender: "male",
    mass: 136,
    height: 142,
    eye_color: "black",
  },
  {
    name: "Babita ji",
    gender: "female",
    mass: 49,
    height: 150,
    eye_color: "grey",
  },
  {
    name: "krishna ayyer",
    gender: "male",
    mass: 101,
    height: 168,
    eye_color: "brown",
  },
];

// return  array of all names
const arrayOfAllNames = characters.map((ch) => {
  return ch.name;
});
// console.log(arrayOfAllNames);     //  [ 'Tarak Mehta', 'Jethalal', 'Babita ji', 'krishna ayyer' ]

// get an array of object with name and gender
const allNamesAndGender = characters.map((ch) => {
  return{
    name: ch.name,
    gender: ch.gender,
  }
});
// console.log(allNamesAndGender)

//get total height of all characters.
const totalHeight = characters.reduce((prevValue, ch) => {
  return prevValue + ch.height;
}, 0);    // 0 is initialValue
// console.log(totalHeight)

//get character with mass greater than 100
const maxMass = characters.filter((ch) => {
  return ch.mass > 100;
});
// console.log(maxMass)

// get all male characters
const maleCharacters = characters.filter((ch)=>{
  return ch.gender === 'male'
})
// console.log(maleCharacters)

// sort by gender
const sortedGender = characters.sort((a, b) => {
  let nameA = a.gender.toUpperCase(); // ignore case
  let nameB = b.gender.toUpperCase(); // ignore case

  if (nameA < nameB) {
    // ascending order gender
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
// console.log(sortedGender)

//sort by name

const sortedName = characters.sort((a, b) => {
  let nameA = a.name.toUpperCase(); // ignore case
  let nameB = b.name.toUpperCase(); // ignore case

  if (nameA < nameB) {
    // ascending order name
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
// console.log(sortedName)

// Does evey character have mass more than 100
const mass = characters.every((ch) => {
  return ch.mass > 100;
});
// console.log(mass)       // false

// does any char is taller than 180
const taller = characters.some((ch) => {
  return ch.height > 180;
});
// console.log(taller)    // false

