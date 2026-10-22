/*
JavaScript:1995

ECMA Script:
    ES2 :   1997
    ES3 :   1998
    ES4 :   1999
    ES5 :   2009
    ---------------------------
    ES6 :   2015
    ECMA Script 2016
    ECMA Script 2017
    ECMA Script 2018
    ECMA Script 2019
    ECMA Script 2020
    ECMA Script 2021
*/
/*
ES6 new Features:
    1. let
    2. const
    3. Arrow function
    4. MAP
    5. SET
    6. FOR OF
    7. classes
    8. Promises
    9. Default Parameters
    10. string.include()
    11. string.startswith()
    12. string.endswith()
    13. Destructuring
    14. rest and spread operator(...)
    15. Template Literals String
        `a = ${a}`
    16. Generators
    17. Async/await
    18. Array.from()
    19. Array.keys(),Array.values(),Array.entries()
    20. Array.find()
    21. Array.findIndex()
    22. New Math Methods
    23. Number Properties
    24. New Number Methods
    25. New Global Methods
    26. Iterables Object.entries
    27. JavaScript Modules
    28. use strict
 */

/*
    Rest Operator: allows a function to accept an indefinte
    number of arguments as an array
*/
// function test(x,y,...z){
//     // console.log(`x = ${x} y = ${y} and z = ${z}`)
//     console.log(x,y,z)
// }
// test(10,20)
// test(10,20,30)
// test(10,20,30,40)
// test(10,20,30,40,50)
// test(10,20,30,40,50,60)
// test(10,20,30,40,50,60,70)
// test(10,20,30,40,50,60,70,80)
// test(10,20,30,40,50,60,70,80,90)
// test(10,20,30,40,50,60,70,80,90,100)




/*
    spread operator:Spread operator allows an iterable to expand
    in places where 0+ arguments are expected. It is mostly used
    in the variable array where there is more than 1 values are 
    expected. It allows us the privilege to obtain a list of
    parameters from an array. Syntax of Spread operator is same as 
    Rest parameter but it works completely opposite of it.
*/

// function test(a,b,c,d,e){
//     console.log(`a = ${a} b = ${b} c = ${c} d = ${d} e = ${e}`)
// }
// var arr = [10,20,30,40,50]
// test(...arr)


// var emp1 = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer"
// }
// // var emp2 = emp1 //shallow copy
// var emp2 = {...emp1} //deep copy

// console.log(emp1)
// console.log(emp2)

// emp2.dsg  = "Manager"
// console.log(emp1)
// console.log(emp2)

/*
Generators : 
What is a generator JavaScript?
In ECMAScript 2015, generators were introduced to the JavaScript language. A generator is a process that can be paused and resumed and can yield multiple values. A generator in JavaScript consists of a generator function, which returns an iterable Generator object
*/

// function* test() {
//     console.log("Hello World1")
//     yield 1
//     console.log("Hello World2")
//     yield 2
//     console.log("Hello World3")
//     yield 3
//     console.log("Hello World4")
//     yield 4
//     console.log("Hello World5")
//     yield 5
// }
// for(let item of test()){
//     console.log(item)
// }



//Array.keys(),Array.values(),Array.entries()
// var a = [10,20,30,40,50,60,70,80,90,100]
// for(let key of a.keys()){
//     console.log(key)
// }

// for(let value of a.values()){
//     console.log(value)
// }

// for(let item of a.entries()){
//     console.log(item)
// }


// console.log(Number.EPSILON)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
/*
New Math Methods
ES6 added the following methods to the Math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()


New Number Properties
ES6 added the following properties to the Number object:

EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER

New Number Methods
ES6 added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()

New Global Methods
ES6 added 2 new global number methods:

isFinite()
isNaN()
 */

/*
    ECMAScript 2016:
    JavaScript Exponentiation (**)
    JavaScript Exponentiation assignment (**=)
    JavaScript Array.prototype.includes
 */


/*
    ECMAScript 2017:
    JavaScript String padding
    JavaScript Object.entries
    JavaScript Object.values
    JavaScript Object.keys
    JavaScript async functions
    JavaScript shared memory
 */

// JavaScript String padding
// var a = "Ducat Education Noida"
// console.log(a.padStart(50,"-"))
// console.log(a.padEnd(50,"-"))

// var emp = [
//     { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 135000, city: "Faridabad", state: "Haryana"  },
//     { id: 1002, name: "Deepak Singh Gusain", dsg: "Trainer", salary: 235000, city: "Faridabad", state: "Haryana" },
//     { id: 1003, name: "Deepak Gupta", dsg: "Trainer", salary: 335000, city: "Noida", state: "UP" },
//     { id: 1004, name: "Binay", dsg: "Manager", salary: 435000, city: "Noida", state: "UP" },
//     { id: 1005, name: "Satyam Dixit", dsg: "CEO", salary: 535000, city: "Faridabad", state: "Haryana" }
// ]
// console.log("Id    Name                 Designation  Salary     City       State")
// for(let item of emp){
//     console.log(`${item.id.toString().padEnd(5," ")} ${item.name.padEnd(20," ")} ${item.dsg.padEnd(12," ")} ${item.salary.toString().padEnd(10," ")} ${item.city.padEnd(10," ")} ${item.state} `)
// }

//Object keys(),values(),enteries()
// var emp = { 
//     id: 1001, 
//     name: "Nitin Chauhan", 
//     dsg: "Trainer", 
//     salary: 135000, 
//     city: "Faridabad", 
//     state: "Haryana" 
// }
// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))

/*
    ECMAScript 2018
    Asynchronous Iteration
    Promise Finally
    Object Rest Properties
    New RegExp Features
*/

//Asynchronous Iterations
// async function* test(){
//     setTimeout(()=>{
//         console.log("Hello World1")
//     },2000)
//     yield 1
//     setTimeout(()=>{
//         console.log("Hello World2")
//     },2000)
//     yield 2
//     setTimeout(()=>{
//         console.log("Hello World3")
//     },2000)
//     yield 3
//     setTimeout(()=>{
//         console.log("Hello World4")
//     },2000)
//     yield 4
//     setTimeout(()=>{
//         console.log("Hello World5")
//     },2000)
//     yield 5
// }
// async function sample(){
//     for await(let itr of test()){
//         console.log(itr)
//     }
// }
// sample()

//Promise finally
// var p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("Promise is Resolved")
//         rej("Promise is Rejected")
//     },1000)
// })
// p
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Finally Called")
// })

//Object Rest Properties
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:135000,
//     city:"Noida",
//     state:"UP"
// }
// var {id,name,...x} = emp
// console.log(id)
// console.log(name)
// console.log(x)


/*
    ECMAScript 2019
    Array.prototype.{flat,flatMap}
    Object.fromEntries
    String.prototype.{trimStart, trimEnd}
    Well-formed JSON.stringify
    Function.prototype.toString
    Symbol.prototype.description
*/
//Array Flat
// var a = [[10,20,30],[40,50,60],70,[80,90,100]]
// console.log(a)
// console.log(a.flat(1))
// console.log(a.flat(1).map((x)=>x*5))

// var a = [[[10,20,30],[40,50,60]],[70,[80,90,100]]]
// console.log(a)
// console.log(a.flat(2))
// console.log(a.flat(2).map((x)=>x*5))

// var a = [[[[10,20,30],[40,50,60]],[70,[80,90,100]]]]
// console.log(a)
// console.log(a.flat(3))
// console.log(a.flat(3).map((x)=>x*5))

// var a = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[10,20,30],[40,50,60]],[70,[80,90,100]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// while(true){
//     let flag = false
//     for(let item of a){
//         if(Number.isNaN(item*5)){
//             a = a.flat(1)
//             flag = true
//             break
//         }
//     }
//     if(flag === false)
//     break
// }
// console.log(a)

//flatMap()

// let a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a.map((x)=>[x*5]))
// console.log(a.flatMap((x)=>[x*5]))

// console.log(a.map((x)=>[[x*5]]))
// console.log(a.flatMap((x)=>[[x*5]]))

//Object.fromEnteries()
// var empMap = new Map([
//     ["id",1001],
//     ["name","Nitin Chauhan"],
//     ["dsg","Trainer"],
//     ["salary",135000],
//     ["city","Noida"],
//     ["state","UP"]
// ])
// var obj = Object.fromEntries(empMap)
// console.log(obj)

/*

 ECMAScript 2020
 BigInt
 Nullish Coalescing
 Optional Chaining
 Promise.allSettled

 global This
 String#matchAll        //regex
 Module Namespace Exports
 import.meta
 Dynamic import

 Well defined for-in order
 */

//BigInt
// console.log(Number.MAX_SAFE_INTEGER)

// var a = 1234567891011121314151617181920n
// console.log(a)


// var num = 5000n
// var f = 1n
// for(let i=num;i>=1;i--){
//     f=f*i
// }
// console.log(f)

/*
 Nullish Coalescing(??)
    syntax:
        statement1??statemnet2

    this operator execute second statement only if first statement result is undefined or null else only first statement will execute
*/
// true||console.log("Hello World1")
// false||console.log("Hello World2")
// ""||console.log("Hello World3")
// undefined||console.log("Hello World4")
// null||console.log("Hello World5")
// 10||console.log("Hello World6")

// true??console.log("Hello World1")
// false??console.log("Hello World2")
// ""??console.log("Hello World3")
// undefined??console.log("Hello World4")
// null??console.log("Hello World5")
// 10??console.log("Hello World6")

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:135000,
//     active:false
// }
// console.log(emp.id??"N/A")
// console.log(emp.name??"N/A")
// console.log(emp.dsg??"N/A")
// console.log(emp.salary??"N/A")
// console.log(emp.active??"N/A")
// console.log(emp.email??"N/A")

//Optional Chaining
// var emp = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     salary: 135000,
//     active: false
// }
// console.log(emp.address?.city)

// Promise.allSettled
// var p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise1 is Resolved")
//         rej("Promise1 is Rejected")
//     },2000)
// })

// var p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise2 is Resolved")
//         rej("Promise2 is Rejected")
//     },1000)
// })

// var p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("Promise3 is Resolved")
//         rej("Promise3 is Rejected")
//     },4000)
// })
// Promise.allSettled([p1,p2,p3])
// .then((data)=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

// async function getPromise(){
//     try {
//         console.log(await Promise.allSettled([p1,p2,p3]))
//     } catch (error) {
//         console.log(error)
//     }
// }
// getPromise()

//ECMA 2021
// String replaceAll()
//Promise any
// var p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise1 is Resolved")
//         rej("Promise1 is Rejected")
//     },2000)
// })

// var p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise2 is Resolved")
//         rej("Promise2 is Rejected")
//     },1000)
// })

// var p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("Promise3 is Resolved")
//         rej("Promise3 is Rejected")
//     },4000)
// })
// Promise.any([p1,p2,p3])
// .then((data)=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

// async function getPromise(){
//     try {
//         console.log(await Promise.any([p1,p2,p3]))
//     } catch (error) {
//         console.log(error)
//     }
// }
// getPromise()

//logical short Hand Operator i.e a=a&&b i.e a&&=b

//numeric separation    i. 1_000_000
// var a = 1_00_00_000
// console.log(a)

//Private class methods
// class Test{
//     #show(){
//         console.log("In show() of Test Class")
//     }
//     display(){
//         this.#show()
//         console.log("In display() of Test Class")
//     }
// }
// var x = new Test()
// x.display()



//Private Getters and Setters

//ECMA 2022
/*
Array at()
String at()
RegExp /d
Object.hasOwn()
error.cause
await import
Class field declarations
Private methods and fields
*/

// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a.at(4))
// console.log(a[4])

// var a = "Ducat"
// console.log(a[2])
// console.log(a.at(2))

// //Error cause
// try {
//     // eval("alert('Hello)")
//     var sum = a+b
//     console.log(sum)
// }
// catch (err) {
//     console.log(err.name)
// }

// Object.hasOwnProperty()

// var emp = {
//     id:1001,
//     name:"Nitin Chahan"
// }
// console.log(emp.hasOwnProperty('id'))
// console.log(emp.hasOwnProperty('name'))
// console.log(emp.hasOwnProperty('salary'))

//ECMA 2023
/*
Array findLast()
Array findLastIndex()
Array toReversed()
Array toSorted()
Array toSpliced()
Array with()
#! (Shebang)
 */

// var a = [12,13,14,15,65,15,25,65,85,95,75,84,85,54,65,15,25,20,21,23,24]
// console.log(a.findLast((x)=>x%5==0))
// console.log(a.findLastIndex((x)=>x%5==0))

// var a = [10,20,30,40,50,60,70,80,90,100]
// // a.reverse()
// var b = a.toReversed()
// console.log(a)
// console.log(b)

// var a = [1,2,3,4,51,51,65,4,2,15,4,6,58,48,8,4,8,95,15,5]
// // a.sort((x,y)=>x-y)
// var b = a.toSorted((x,y)=>x-y)
// console.log(a)
// console.log(b)

// var a = [10,20,30,40,50,60,70,80,90,100]
// // a.splice(5,3)
// var b = a.toSpliced(5,3)
// console.log(a)
// console.log(b)

// var a = [10,20,30,40,50]
// var b = a.with(2,100)
// console.log(a)
// console.log(b)