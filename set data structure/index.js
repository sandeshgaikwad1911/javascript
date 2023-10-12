/* 
    set is collection of unique values;
    order of elements is irrelevant
    use set when want unique values... otherwise array is good

    we can also have values of different data types;


*/

/* const cities = ["mumbai", "pune", "delhi", "nashik", "nagpur", "mumbai"];
const citiesSet = new Set(cities) */

/* const set = new Set(cities)
console.log(citiesSet) */                     // { 'mumbai', 'delhi', 'pune', 'nashik', 'nagpur' }         ... only unique values

const str = "hello world";

/* const stringSet = new Set(str);
console.log(stringSet);  */                //  { 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' }   ... only unique characters



/* console.log(citiesSet.size)             // 5 like length.

console.log(citiesSet.has('mumbai'))     // true

citiesSet.add('tokyo')
console.log(citiesSet)                  //  Set(6)  { 'mumbai', 'pune', 'delhi', 'nashik', 'nagpur', 'Tokyo' }

citiesSet.delete('delhi')
console.log(citiesSet)                  // Set(5) { 'mumbai', 'pune', 'nashik', 'nagpur', 'tokyo' }

citiesSet.clear();
console.log(citiesSet)  */                 //  Set(0) {}



/* for(let city of citiesSet){              // set is also iterable ,,, but we want result to be array and not set
    console.log(city)
} */



const cities = ["mumbai", "pune", "delhi", "nashik", "nagpur", "mumbai", "pune"];
const citiesSet = new Set(cities)
console.log(citiesSet)                  // Set(5) { 'mumbai', 'pune', 'delhi', 'nashik', 'nagpur' }

// convert set into array
const uqCityArray = [...citiesSet]
console.log(uqCityArray)                // [ 'mumbai', 'pune', 'delhi', 'nashik', 'nagpur' ]

