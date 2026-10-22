/*
Event Propagation mode determines in which order the element
receive the event

1. Event Capturing: first parent to last child
2. Event Bubbling(default) : from last child to first parent
*/


/*
function currying : it is a technique of evaluating function
                    with mutliple argumnets into sequance of
                    function with single argument

                    i.e when a function,instead of taking all 
                    argumemnts at one time,it takes the first 
                    argument and return a new function which 
                    takes the second argument and return a new
                    function which takes the third one and so on
*/
// function sum(num1){
//     return function(num2){
//         return function(num3){
//             return function(num4){
//                 return function(num5){
//                     return num1+num2+num3+num4+num5
//                 }
//             }
//         }
//     }
// }

// var sum = (num1)=>(num2)=>(num3)=>(num4)=>(num5)=>num1+num2+num3+num4+num5
// console.log(sum(100)(200)(300)(400)(500))


/*
higher order functions and callback functions:
higher order function : a fuction is called higher order 
                        function which takes a function
                        as an arguments
callback function :     a fuction is called callback 
                        function which is passed as an argument
                        into another function
*/
// function callBackFunction(){
//     console.log("In callback function")
// }
// function higherOrderFunction(callback){
//     console.log("In higher order function")
//     callback()
//     console.log("Back to higher order function")
// }
// higherOrderFunction(callBackFunction)


/*
here find() findIndex() map() and filter() function are
higher Order function and check function is a callback function
*/

var a = [12,14,13,17,18,15,65,45,65,25,20,65,12,47,48,84,81,9,93,15,46,6]

// function test(item){
//     return item%5==0
// }
function myFindFun(arr,fun){
    for(let item of arr){
        if(fun(item))
        return item
    }
    return undefined
}
function myFindIndexFun(arr,fun){
    for(let index in arr){
        if(fun(arr[index]))
        return index
    }
    return -1
}
function myMapFun(arr,fun){
    var output = []
    for(let item of arr){
        output.push(fun(item))
    }
    return output
}
function myFilterFun(arr,fun){
    var output = []
    for(let item of arr){
        if(fun(item))
        output.push(item)
    }
    return output
}
// console.log(a.find(test))
// console.log(myFindFun(a,test))

// console.log(a.findIndex(test))
// console.log(myFindIndexFun(a,test))

// console.log(a.map(test))
// console.log(myMapFun(a,test))

// console.log(a.filter(test))
// console.log(myFilterFun(a,test))

console.log(a.find((item)=>item%5==0))
console.log(myFindFun(a,(item)=>item%5==0))

console.log(a.findIndex((item)=>item%5==0))
console.log(myFindIndexFun(a,(item)=>item%5==0))

console.log(a.map((item)=>item%5==0))
console.log(myMapFun(a,(item)=>item%5==0))

console.log(a.filter((item)=>item%5==0))
console.log(myFilterFun(a,(item)=>item%5==0))

/*
Event Loop 
How do Event loops work?
Call Stack:
JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution).
Callback Queue:
Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
Event Loop:
The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.
Execution:
The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.
Callback Execution:
When an asynchronous operation is complete, its callback is placed in the callback queue.
Repeat:
The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.
*/


/*
JSON and AJAX

AJAX: Asynchronous JavaScript and XML

it is just a combination of XMLHttpRequest object and HTML DOM

XMLHttpResquest : an object which helps us to communicate 
                  websites to transfer data

How AJAX Works:
1. An Event Occur like button click or form submit etc
2. XMLHttpRequest object is created by JS
3. XMLHttpRequest send a request to a server
4. Server process the request
5. server send back response
6. response read by js
7. Proper action taken by js

XMLHttpRequest object methods:
1. new XMLHttpRequest() : to create a new XMLHttpRequest object
2. abort()              : cancel the current request
3. getAllResponseHeaders() : return all reponse headers
4. getResponeHeader()      : return any particular header
5. open()               : it generate a request
                            paramters:
                            1. method : get post put patch delete etc
                            2. url
                            3. async
                            4. user     (optional)
                            5. password (optional)
6. send()               :   it send a request to the server
                            and use get method by default
7. send(string)         :   it send a request to the server
                            and use post method by default

Response Text:
    1. XML data             :   responseXML
    2. json data/text data  :   responseText
 
JSON(JavScript Object Notation):
        it is a text format to transport the data

XML:
<employee>
    <eid>1011</eid>
    <name>Nitin Chauhan</name>
    <dsg>Trainer</dsg>
    <salary>50000</salary>
    <city>Noida</city>
    <state>UP</state>
</employee>

JSON:
    employee={
        "id":1011,
        "name":"Nitin Chauhan",
        "dsg":"Trainer",
        "salary":50000,
        "city":"Noida",
        "State":"UP"
    }

Python:
    employee={
        'id':1011,
        'name':'Nitin Chauhan',
        'dsg':'Trainer',
        'salary':50000,
        'city':'Noida',
        'State':'UP'
    }

JSON Datatype:
    1. boolean
    2. array
    3. number
    4. string
    5. object
    6. null

datatype we can't use in JSON:
    1. undefined
    2. date


1. how to convert JSON into JS object

    JSON.parse() is used to convert JSON data into JS object

syntax:
    jsObject = JSON.parse(jsonData)

2. how to convert JS object into JSON
    JSON.stringify()
syntax:
    jSOnData = JSON.stringify(jsData)
*/


/*
CallBack Hell : Callback hell is a phenomenon where a Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function. If you look at the design of the code, it seems just like a pyramid. Thus the Callback hell is also referred to as the 'Pyramid of Doom'
Why is callback hell bad?
What is the concept of callback hell, and how can it be ...
Callback hell is a term used to describe a situation in JavaScript where multiple asynchronous operations are nested within each other as callbacks. This can result in code that is difficult to read, understand, and maintain.
solution: promise
*/


/*
promise :  ->   a js object which link producing code with
                consuming code
           ->   promises are used to handle asynchronous operations
                in JS.
           ->   they are easy to manage when dealing with multiple
                asynchronous operations where callback can create
                call back hell leading to unmanagable code
producing Code : a code that can tak some time to execute
consuming Code : a code that must wait for the result

promise State:
    1. Promise Produce
    2. Panding
    3. Resolve/Reject
*/

//producing code
//consuming code
//async\await and exception handling

/*
The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
 */