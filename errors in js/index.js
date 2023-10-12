/* 
    javascript has built-in error object that provides error information when error occurs.

    it has three poweful properties.. name  message and stack
*/

/* 
    try => statement define code  run or ( to try )
    catch => statem define code to handle error
    finally => statement define code to run regardless of the result
    throw => statement define custom error message. and also stop further execution.

     but with the help of try catch block... we continue flow we.. see.. hello is executed even error occours.

     if we remove try catch .. block... hello.. will not executed
*/

// eg 1

try {

    let a = 0;

    if(a !=1){

        // throw "any custom message"

        // throw('any custom error message.');

        // throw(new Error('any custom Error message here'))
          // if this syntax is used then inside catch block we have custom error message as well other info..
         //  with this syntax.. used error.message.... inside catch block

        //  throw Error('any custom error message here')

         throw new Error('any custom error message here')

        //   throw new Error () .... is more reliable and consistent
    }
    else{
        //code for successfull execution
        console.log('have fun');
    }
} catch (error) {
    console.log(error.message);
}
finally{
    console.log('it is going to execute, even if error occurs');
}
console.log('hello')


/* 
    we have ... Reference Error, Syntax Error, Type Error, Range Error
*/




   /*  try {
       let num = 1
       num.toPrecision(200)
       console.log(num)                    
    } catch (error) {
        console.log(error.name)             // Range Error
        console.log(error.message)         // toPrecision() argument must be between 1 and 100
    } */

    /* try {
        let x = 99
        let ans = y + x
        console.log(ans)
    } catch (error) {
        console.log(error.name)          // ReferenceError   
        console.log(error.message)       // y is not defined
    } */

   /*  try {
        let x = 99
        let ans = x.toUpperCase();
        console.log(ans)
    } catch (error) {
        console.log(error.name)         // TypeError
        console.log(error.message)      // x.toUpperCase is not a function
        console.log(error.stack)
    } */


    

