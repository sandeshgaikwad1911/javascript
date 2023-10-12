// let str = 'javascript is the best'

//  first word -------------------------------------------------------------------------------------------------------------

/* let subString = str.indexOf(" ")
let firstWord = str.slice(0, subString)

console.log('firstword :',firstWord) */ // javascript

// last word --------------------------------------------------------------------------------------------------------------

/* let subString = str.lastIndexOf(" ") + 1
let lastWord = str.slice(subString)

console.log('lastWord :' , lastWord)    */ // best

// ----------------------------------------------------------------------------------------------------------------------------

/* let emp1 = {name: 'sandesh', empCode: 'BLR1122P', gender: 'Male'}
let emp2 = {name: 'mow', empCode: 'NY1133C', gender: 'Female'}

// empCode: 'BLR1122p'  =>  .. BLR is cityCode,  .. 1122 is Id, .. P is permanent.

let getLocation = (locationCode)=>{

    let location = ""

    switch(locationCode){

        case  'BLR' :
            location = "Banglore"
            break;

        case  'LON' :
            location = "London"
            break;

        default : 
            location = 'Unknown location'    
        
    }

    return location
}

let printDetails = (emp)=>{

    let empLocation = getLocation(emp.empCode.slice(0,3))                   // invoke getLocation() function.
    let empType = emp.empCode.slice(-1) === 'P' ? 'Permanant' : 'Temporary'
    let gender = emp.gender === "Male" ? 'he' : 'she'

    console.log(`${emp.name} is working from ${empLocation} office, ${gender} is ${empType} employee.`)
}

printDetails(emp1)         // Banglore

printDetails(emp2)         // Unknown location */

// --------------------------------------------------------------------------------------------------------------------------

/* let fun = (myStr)=>{

let firstSpace = myStr.indexOf(" ")             // 7

let firstWord = myStr.slice(0, firstSpace)      // sandesh

let flCapital = firstWord[0].toUpperCase() + myStr.slice(1, firstSpace)
// console.log(flCapital)                     // Sandesh

let secondWordfirstLetterIndex = flCapital.length + 1       // 8

let lastSpace = myStr.lastIndexOf(" ")              // 14

let secondWord = myStr.slice(secondWordfirstLetterIndex, lastSpace)     // jairam

let mCapital = secondWord[0].toUpperCase() + myStr.slice(secondWordfirstLetterIndex + 1,lastSpace)       
// console.log(mCapital)                                                   // Jairam

let lastWord = myStr.slice(lastSpace + 1)   // gaikwad

let indexOfLastWord = myStr.indexOf(lastWord)       // 15

let lastWordFirstLetterCapital = lastWord[0].toUpperCase() + myStr.slice(indexOfLastWord + 1)   // Gaikwad
// console.log(lastWordFirstLetterCapital)


let fullName = flCapital.concat(" ").concat(mCapital).concat(" ").concat(lastWordFirstLetterCapital)
// console.log(fullName)

return fullName;

}

const fullNameFunction = fun("sandesh jairam gaikwad");

console.log(fullNameFunction) */

// -----------------------------------------------------------------------------------------------------------------------------

/* let emailinDb = 'sandesh.gaikwad1911@gmail.com'
let userTypedEmail = 'Sandesh.Gaikwad1911@gmail.com'

if(emailinDb === userTypedEmail.toLowerCase()){
    console.log('login success')
}
else{
    console.log('login failed')
} */

// trimming spaces ---------------------------------------------------------------------------------------------------------------

/* let na = "  sandesh   "
console.log(na.trimStart())
console.log(na.trimEnd())
console.log(na.trimStart().trimEnd())
console.log(na.trim()) */

// -------------------------------------------------------------------------------------------------------------------------------

/* let string = "hey there. how are you today."
console.log(string.replaceAll('.', '!')) */

// -------------------------------------------------------------------------------------------------------------------------------

/* let string = 'hey there, how are you today'

// console.log(string.includes('t'))           // .. true

// console.log(string.startsWith('h'))         // true

console.log(string.endsWith('ay'))  */ // true

// ------------------------------------------------------------------------------------------------------------------------

// split() => convert string into multiple string based on devider ... and return array..----------------------------------

/* let str = 'javascript is the best'

let arr = str.split(" ")            // here devider is space.
// console.log(arr)        // [ 'javascript', 'is', 'the', 'best' ]

// --------------------------------------------------------------------------------------------------

let printName = (fullName)=>{

    const [fName, mName, lName] = fullName.split(" ")

    console.log(fName)
    console.log(mName)
    console.log(lName)
}

printName("sandesh jairam gaikwad") */

// ----------------------------------------------------------------------------------------------------------------

/* // join()   => convert  String Array into single String based on devider

let strArray = ["javascript", "is", "the", "best"]

let str = strArray.join(" ")
console.log(str)                //      javascript is the best

 */

// ----------------------------------------------------------------------------------------------------------------------

//  split() .. slice() .. join()

/* let formatName = (fullName) => {

  let formatedNameArray = [];

  let nameArray = fullName.split(" "); //  [ 'sandesh', 'jairam', 'gaikwad' ]

  for (let name of nameArray) {

    let names = name[0].toUpperCase() + name.slice(1);
    formatedNameArray.push(names);
  }

  let fullNameString = formatedNameArray.join(" ");

  return fullNameString;

};

let fullName = formatName("subodh siddharth bhalerao");
console.log(fullName);      // Subodh Siddharth Bhalerao
 */


// ---------------------------------------------------------------------------------------------------------------------

//  padStart()  .. padEnd()      add number of char to string untill String has desired length

/* let myString = "1234567"
console.log(myString.length)
console.log(myString.padEnd(10, "*"))       // 1234567***
console.log(myString.padStart(10, '*'))  */    //  ***1234567


let maskCardNumber = (cardNumber)=>{
    let cardStr = cardNumber.toString()

    let lastFour = cardStr.slice(-4)        // 1991

    let maskedCard = lastFour.padStart(cardStr.length, '*')
    console.log(maskedCard)   
}
maskCardNumber(19111991)        //  ****1991
maskCardNumber('190607')        //  **0607
