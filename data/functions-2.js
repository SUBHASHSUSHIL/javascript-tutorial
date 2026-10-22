/**
 * function:
 * function is a building block on any program by which we can divide
 * our large program into small parts
 * or
 * function is group of statements
 * or function is a self contained statement block
 * 
 * Advantages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability
 
Note1: a function can't access variables defined in other function
       directly to do so we have to use concept of arguments and
       return value
Note2: a function can access variables defines in global scope
       and vice versa not true


 * types of functions on basis of arguments and return value
 * 1. function without return value without parameter
 * 2. function with return value without parameter
 * 3. function without return value with parameter
 * 4. function with return value with parameter

syntax:
    function functionName(paramerters){
        --------
        --------
        number of Statements
        --------
        --------
        return value
    }
    functionName(arguments)
*/

//sample function
// function sample(){
//     console.log("In sample function")
// }
// console.log("In Global scope")
// sample()
// sample()
// sample()
// sample()
// sample()
// console.log("Back to Global scope")



//function call within function
function fun1(){
    console.log("In fun1 function")
    fun2()
    console.log("Back to fun1 function")
}
function fun2(){
    console.log("In fun2 function")
    fun3()
    console.log("Back to fun2 function")
}
function fun3(){
    console.log("In fun3 function")
}
console.log("In Main Global Scope")
fun1()
console.log("Back to Main Global Scope")




// 1. function without return value without parameter


// 2. function with return value without parameter

// 3. function without return value with parameter

// 4. function with return value with parameter


//default parameters


//function returing an Array



//anonymous function

//arraow function or fat arrow function


//storage class
/**     
var             function level
let             block level
const           block level
no keyword      global
 */

//Recursion: when function call itself
