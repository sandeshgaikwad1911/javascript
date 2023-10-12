/* const birthYears = [1991, 1995, 1993, 2007]
function getResut(arr, func){
    let result = []
    for(let i=0; i < arr.length; i++){
        let val = func(arr[i])
        result.push(val)
    }
    return result 
}
function checkAges(bornYear){
    return new Date().getFullYear() - bornYear
}

const ages = getResut(birthYears, checkAges)
console.log(ages)

function isIlligible(age){
    return age > 18
    
}
const legelAge = getResut(ages, isIlligible)
console.log(legelAge) */

// ****************************************************************************************************************************************

/* function outer(eng,math){

    let internal = 17;

    return function(practical){
        return eng + math + internal + practical
    }

}
    const result = outer(90,95)
    console.log(result)

   const finalResult = result(45)
   console.log(finalResult)

   const result1 = outer(90,95)(45)
   console.log(result1) */

// ************************************************************************************************************************************

   /* function abc(designation){
    switch(designation){
        case 'teacher':
            return function(name,gender){
                if(gender == 'female')return(`what subject do you teach miss. ${name}`)
                else return (`what subject do you teach mr. ${name}`)
            }
        case 'developer':
            return function(name, gender){
                if(gender == 'female')return(`Can you please explain what is UX desing is? miss. ${name}`)
                else return (`Can you please explain what is UX desing is? mr. ${name}`)
            }
        default:
            return function(name){
                return(`what is your name`)
            }      
    }
   }
  const result = abc('developer')('manoj', 'male')
  console.log(result) */
  
//   **************************************************************************************************************************************

