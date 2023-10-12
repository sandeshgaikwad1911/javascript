const john = {
  name: "john",
  occuption: 'developer',

  greeting(style, timeOffDay) {
    switch(style){
        case 'formal' :
            return (`Good ${timeOffDay} ladies and gentelmen, my name is ${this.name}. I'm a ${this.occuption}.`)
            break;
        case 'friendly' :
            return (`Good ${timeOffDay} friends i'm ${this.name}, I'm a ${this.occuption}.`)
            break;
        default:
            return ('send valid value')
    }
  },
};
// console.log(john.greeting("friendly", "morning")) 


const merry = {
    name: 'merry',
    age: 28,
    occuption: 'designer'
}


// console.log(john.greeting.call(merry, 'friendly', 'morning'))

//  console.log(john.greeting.apply(merry, ['formal', 'after noon']))

const result = john.greeting.bind(merry, 'formal', 'after noon')
console.log(result())




