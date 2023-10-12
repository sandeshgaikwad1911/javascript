/* const Person = function(name, gender, birthYear){
    this.name = name
    this.gender = gender
    this.birthYear = birthYear
}
Person.prototype.calcAge = function(){
    let age = new Date().getFullYear() - this.birthYear
    return age
}

const person = new Person('john', 'male',1991)

const Employee = function(name, gender, birthYear, empId, salary){
    // Person(name,gender,birthYear)   //not working...  this is regular function call.. and 'this' variable inside regular function points to global window obj
    // to proved this point type window in console... name , gende, birthYear is there.
    Person.call(this, name, gender, birthYear) // when we instantiate objetct using function constructor... this variable inside constructor
    // points to newly created obj.. so here 'this' belongs to mark obj.
    // call() method to set the value of this keyworod explicitly.
    this.empId = empId
    this.salary = salary
}

Employee.prototype = Person.prototype           // to set prototype methods of parent class
// must define here .. before set prototype of child . if set it after setting prototype of child... then child will only have parents property 

Employee.prototype.calcSalary = function(){
     return this.salary * 10
}
Employee.prototype.empDetails = function(){
    return this.name + " " + this.empId 
}


const mark = new Employee('mark', 'male', 1992, 101, 10000) 
console.log(mark)
console.log(mark.calcSalary())
console.log(mark.empDetails())
console.log(mark.calcAge())

 */

class Person{
    constructor(name, gender, birthYear){
        this.name = name,
        this.gender = gender,
        this.birthYear = birthYear
    }
    calcAge(){
        return new Date().getFullYear() - this.birthYear
    }
}
class Employee extends Person{
    constructor(name, gender, birthYear, empId, salary){
        super(name, gender, birthYear)
        this.empId = empId
        this.salary = salary
    }
    calcSalary(){
        return this.salary * 10
    }
    empDetails(){
        return this.name + " " + this.empId
    }
}
const merry = new Employee('merry','female', 1995, 102, 10000)
console.log(merry)
console.log(merry.calcAge())