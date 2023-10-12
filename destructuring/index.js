/* const person = ['john', 31, 'developer', ['mumbai', 'india']]

const [name, age, designation, [city, country]] = person

console.log(designation)
console.log(city) */

// *******************************************************************************************************************

/* const [fname, , desig] = person             // we ommit second value here  ... ,  ,
console.log(fname)
console.log(desig) */

// *******************************************************************************************************************

/* function abc(){
    return ['sandesh', 31, 'developer']
}
const [nav, vay, pad ] = abc()          // destructure array return by an function

console.log(nav) */

// *********************            Destructure object              ************************************************



/* const employee = {
    name: 'sandesh',
    age: 31,
    area: ['mumbai', 'india'],
    work: {experience : 5, company: 'google'}
}

const { name, age, area:[city, country], work:{experience: exp, company}} = employee
console.log(city)
console.log(company)

console.log(exp) */

 // **********           destructure obj by function        ***********************************************

function abc(){
    return{id: 101, name: 'sandesh', designation: 'developer'}
}
const { id, designation} = abc()
console.log(designation)