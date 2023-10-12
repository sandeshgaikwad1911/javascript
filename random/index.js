const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsturwxyz";

let result = Math.floor(Math.random() * str.length );

const char = str.charAt(result)
console.log(char)