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
// function fun1(){
//     console.log("In fun1 function")
//     fun2()
//     console.log("Back to fun1 function")
// }
// function fun2(){
//     console.log("In fun2 function")
//     fun3()
//     console.log("Back to fun2 function")
// }
// function fun3(){
//     console.log("In fun3 function")
// }
// console.log("In Main Global Scope")
// fun1()
// console.log("Back to Main Global Scope")




// 1. function without return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     console.log(`sum = ${sum}`)
// }
// function sample(){
//     add()
// }
// sample()


// 2. function with return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function sample(){
//     var s = add()
//     console.log(`sum = ${s}`)
// }
// sample()


// 3. function without return value with parameter
// function add(x,y){          //parameters or formal Parameters
//     var sum = x+y
//     console.log(`sum = ${sum}`)
// }
// function sample(){
//     var a = 10
//     var b = 20
//     add(a,b)                //Arguments or actual Parameter
// }
// sample()


// 4. function with return value with parameter
// function add(x,y){          //parameters or formal Parameters
//     var sum = x+y
//     return sum
// }
// function sample(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)                //Arguments or actual Parameter
//     console.log(`sum = ${s}`)
// }
// sample()


// function isPalindrome(n){
//     var num = n
//     var rev = 0
//     while(num!=0){
//         rev = rev*10+num%10
//         num = parseInt(num/10)
//     }
//     if(rev==n)
//     return `${n} is Palindrome`
//     else
//     return `${n} is not Palindrome`
// }
// console.log(isPalindrome(12321))
// console.log(isPalindrome(123421))
// console.log(isPalindrome(123521))
// console.log(isPalindrome(1235321))

//default parameters
// function sample(a=0,b=0,c=0){
//     console.log(`a = ${a} b = ${b} c = ${c}`)
// }
// sample(10,20,30)
// sample(10,20)
// sample(10)
// sample()

// //function returing an Array
// function test(){
//     return [10,20,30,40,50]
// }
// console.log(test())

//function returing an Objed
function test(){
    return {a:10,b:20,c:30,d:40,e:50}
}
console.log(test())



//anonymous function

//arrow function or fat arrow function


//storage class
/**     
var             function level
let             block level
const           block level
no keyword      global
 */

//Recursion: when function call itself
