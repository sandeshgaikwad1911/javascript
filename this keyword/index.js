//console.log(this)                           // window { } object

/* 'use strict'
function greet(){
    
    console.log(this)                           // undefined
}
greet() */

/* function greet(){
    console.log(this)               // window { } object
}
greet() */

/* const john = {
    year: 1991,
    calcAge(){
        console.log(this)
        console.log(2023 - this.year)

        function inner(){                   //  regular function call not on... object call.
            console.log(this)
        }
        inner()       
    }
    
}
john.calcAge() */

/* let greet = ()=>{
    console.log(this)
}
greet() */

/* const obj = {
  year: 1991,
  calAge() {
    console.log(2023 - this.year);
    let x = () => {
      console.log(this);                
    };
    x();
  },
};
obj.calAge(); */



const obj = {
    firstname: 'sandesh',
    hello(){
        console.log(this)

        let greet = ()=>{
            console.log(this)
        }
        greet()
    },
    
}
obj.hello()
