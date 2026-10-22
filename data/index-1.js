// console.log("Hello World")
/*
to enable running script
1. open power shell as administrator
2. Set-ExecutionPolicy RemoteSigned
3. enter
4. y
5. exit

to disable running script
1. open power shell as administrator
2. Set-ExecutionPolicy Restricted
3. enter
4. y
5. exit

*/
//Type Annotation
// var a:number = 10
// console.log(a)
// a = "Nitin Chauhan"
// console.log(a)
// var a = 10
// console.log(a)
// a = "Nitin Chauhan"
// console.log(a)
// var a
// a = 10
// console.log(a)
// a = "Nitin Chauhan"
// console.log(a)
// var a:number
// a = 10
// console.log(a)
// a = "Nitin Chauhan"
// console.log(a)
// var a:number = Number(prompt("Enter the First Number : "))
// var b:number = Number(prompt("Enter the Second Number : "))
// var sum = a+b
// document.write(`${a} + ${b} = ${sum}`)
//if else
// var num:number = Number(prompt("Enter the Number : "))
// if(num%2==0)
// document.write(`${num} is Even`)
// else
// document.write(`${num} is Odd`)
// var num:number = Number(prompt("Enter the Number : "))
// if(num&1)
// document.write(`${num} is Odd`)
// else
// document.write(`${num} is Even`)
//nested if else
// var num:number = Number(prompt("Enter the Year : "))
// if(num%100==0){
//     if(num%400==0)
//     document.write(`${num} is Leap Year`)
//     else
//     document.write(`${num} is not a Leap Year`)
// }
// else{
//     if(num%4==0)
//     document.write(`${num} is Leap Year`)
//     else
//     document.write(`${num} is not a Leap Year`)
// }
//if else if ladder
// var a:number = Number(prompt("Enter the First Number : "))
// var b:number = Number(prompt("Enter the Second Number : "))
// var c:number = Number(prompt("Enter the Third Number : "))
// var d:number = Number(prompt("Enter the Fourth Number : "))
// var e:number = Number(prompt("Enter the Fifth Number : "))
// if(a>=b && a>=c && a>=d && a>=e)
// document.write(`${a} is Greatest`)
// else if(b>=c && b>=d && b>=e)
// document.write(`${b} is Greatest`)
// else if(c>=d && c>=e)
// document.write(`${c} is Greatest`)
// else if(d>=e)
// document.write(`${d} is Greatest`)
// else
// document.write(`${e} is Greatest`)
//switch case
// var a: number = Number(prompt("Enter the First Number : "))
// var b: number = Number(prompt("Enter the Second Number : "))
// var ch: string = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Mulitplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
// switch (ch) {
//     case "+":
//         document.write(`${a} + ${b} = ${a + b}`)
//         break
//     case "-":
//         document.write(`${a} - ${b} = ${a - b}`)
//         break
//     case "*":
//         document.write(`${a} * ${b} = ${a * b}`)
//         break
//     case "/":
//         document.write(`${a} / ${b} = ${a / b}`)
//         break
//     case "%":
//         document.write(`${a} % ${b} = ${a % b}`)
//         break
//     case "**":
//         document.write(`${a} ** ${b} = ${a ** b}`)
//         break
//     default:
//         document.write("Invalid Choice")
// }
//For Loop
var start = Number(prompt("Enter the Range\nStart From : "));
var end = Number(prompt("To : "));
var even = 0;
var odd = 0;
for (var i = start; i <= end; i++) {
    if (i % 2 == 0)
        even = even + i;
    else
        odd = odd + i;
}
document.write("sum of Even Numbers = ".concat(even, "<br>"));
document.write("sum of Odd Numbers = ".concat(odd));
