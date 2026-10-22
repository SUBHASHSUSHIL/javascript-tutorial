/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */

// if(true){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if(false){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if (false)
// console.log("Hello World1")
// console.log("Hello World2")
// console.log("Hello World3")
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if (true)
// console.log("Hello World1")
// console.log("Hello World2")
// console.log("Hello World3")
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

/*
if else Statement: used when execution of one Statement Block out of two Statement block depend on a condition

syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */

// var num = Number(prompt("Enter the Number : "))
// if(num%2==0)
// document.write(`${num} is Even`)
// else
// document.write(`${num} is Odd`)

/*
1. WAP to check whether two numbers are equal or not
2. WAP to check whether a person can vote or not
3. WAP to check whether a number is perfect square number of not
*/

/*
Nested if Else: if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */
// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var c = Number(prompt("Enter the Third Number : "))
// if(a<b){
//     if(a<c)
//     document.write(`${a} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }
// else{
//     if(b<c)
//     document.write(`${b} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }

/*
    WAP to check whether a year is leap year or not
 */



/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */
// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var c = Number(prompt("Enter the Third Number : "))
// var d = Number(prompt("Enter the Fourth Number : "))
// var e = Number(prompt("Enter the Fifth Number : "))
// if (a >= b && a >= c && a >= d && a >= e)
//     document.write(`${a} is Greatest`)
// else if (b >= c && b >= d && b >= e)
//     document.write(`${b} is Greatest`)
// else if (c >= d && c >= e)
//     document.write(`${c} is Greatest`)
// else if (d >= e)
//     document.write(`${d} is Greatest`)
// else
//     document.write(`${e} is Greatest`)

// var year = Number(prompt("Enter the Year Number : "))
// if(year%100==0){
//     if(year%400==0)
//     document.write(`${year} is a Leap Year`)
//     else
//     document.write(`${year} is not a Leap Year`)
// }
// else{
//     if(year%4==0)
//     document.write(`${year} is a Leap Year`)
//     else
//     document.write(`${year} is not a Leap Year`)
// }

// var year = Number(prompt("Enter the Year Number : "))
// if (year % 400 == 0)
//     document.write(`${year} is a Leap Year`)
// else if (year % 4 == 0 && year%100!=0)
//     document.write(`${year} is a Leap Year`)
// else
//     document.write(`${year} is not a Leap Year`)

// var year = Number(prompt("Enter the Year Number : "))
// if (year % 400 == 0 || year % 4 == 0 && year%100!=0)
//     document.write(`${year} is a Leap Year`)
// else
//     document.write(`${year} is not a Leap Year`)


/*
1. WAP to print day name when user enter day number
2. WAP to print number of days in a month when user enter a month number
3. WAP to make a simple calculator
4. WAP to read a single character from user and check whether this character is lower case vowel, lower case consonant, upper case vowel, upper case consonant, digit, space or any special character
 */

// var ch = prompt("Enter the Single Character")
// if (ch.length !== 1)
//     document.write(`'${ch}' is Invalid Input`)
// else if (ch >= 'a' && ch <= 'z') {
//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//         document.write(`'${ch}' is Lower Case Vowel`)
//     else
//         document.write(`'${ch}' is Lower Case Consonant`)
// }
// else if (ch >= 'A' && ch <= 'Z') {
//     if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//         document.write(`'${ch}' is Upper Case Vowel`)
//     else
//         document.write(`'${ch}' is Upper Case Consonant`)
// }
// else if (ch >= '0' && ch <= '9')
//     document.write(`'${ch}' is a Digit`)
// else if (ch == " ")
//     document.write(`Space`)
// else
//     document.write(`'${ch}' is a Special Character`)


/*
Switch Case Statement:
    used to make a menu based program
syntax:
    switch(input){
        case constant1:
            ------
            ------
            break
        case constant2:
            ------
            ------
            break
        case constant3:
            ------
            ------
            break
        -
        -
        case constantN:
            ------
            ------
            break
        default:
            ------
            ------
    }
 */

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var ch = prompt("Press + for Addition\nPress - for Subraction\nPress * for Mulitplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
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
//         document.write(`Invalid Choice`)
// }

/*
1. WAP to print day name when user enter day number
2. WAP to print number of days in a month when user enter a month number
 */


/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation)
    {
        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */
// for (var i = 1; i <= 10; i++) {
//     console.log(`Hello World ${i}`)
// }


// for (var i = 1; i <= 10; ++i) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i <= 10; i = ++i) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i <= 10; i = i++) {
//     console.log(`Hello World ${i}`)
// }

// var i = 1
// for (;;) {
//     if(i>10)
//     break
//     console.log(`Hello World ${i}`)
//     i++
// }

// for (var i = 10; i >= 1; i--) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 10; i ; i--) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i <= 10; i++); 
// {
//     console.log(`Hello World ${i}`)
// }

// for (let i = 1; i <= 10; i++); 
// {
//     console.log(`Hello World ${i}`)
// }

// var num = Number(prompt("Enter the Number : "))
// for (let i = 1; i <= 10; i++) {
//     document.write(`${num} * ${i} = ${num*i}<br>`)
// }

// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var sum = 0
// for(let i=start;i<=end;i++){
//     sum = sum+i
// }
// document.write(`sum = ${sum}`)

/*
start   =   1
end     =   10
i       =   1       2       3       4       5       6       7       8       9       10
sum     =   0+1=1   1+2=3   3+3=6   6+4=10  10+5=15 15+6=21 21+7=28 28+8=36 36+9=45 45+10=55
 */



/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
*/

// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// for(let i=1;i<=num/2;i++){
//     if(num%i==0){
//         sum = sum+i
//     }
// }
// if(sum==num)
// document.write(`${num} is Perfect Number`)
// else
// document.write(`${num} is not a Perfect Number`)

// var num = Number(prompt("Enter the Number : "))
// var flag = false
// for(let i=2;i<=num**0.5;i++){
//     if(num%i==0){
//         flag = true
//         break
//     }
// }
// if(flag==false && num>=2)
// document.write(`${num} is Prime`)
// else
// document.write(`${num} is not Prime`)

/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition){
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */

// var i = 1
// while(i<=10){
//     console.log(`Hello World ${i}`)
//     i++
// }

//Fibonacci Series : 0  1   1   2   3   5   8   13  21  34  55  89  144....
// var a = 0
// var b = 1
// var sum = a+b
// var num = Number(prompt("Enter the Last Term Range of Fibonacci Series : "))
// document.write(`${a} ${b} `)
// while(sum<=num){
//     document.write(`${sum} `)
//     a=b
//     b=sum
//     sum=a+b
// }
/*
num =   100
a   =   0   1   1   2   3   5   8   13  21  34  55
b   =   1   1   2   3   5   8   13  21  34  55  89
sum =   1   2   3   5   8   13  21  34  55  89  144
op:0  1 1   2   3   5   8   13  21  34  55  89
 */

// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// while(num!=0){          //14923     1492    149     14      1       0
//     let r = num%10      //3         2       9       4       1
//     sum = sum+r         //0+3=3     3+2=5   5+9=14  14+4=18 18+1=19
//     num = parseInt(num/10)//1492    149     14      1       0
// }
// document.write(`sum = ${sum}`)


// var num = Number(prompt("Enter the Number : "))
// let rev = 0
// while(num!=0){              //1578      157         15          1               0
//     let r = num%10          //8         7           5           1
//     rev = rev*10+r          //0*10+8=8  8*10+7=87   87*10+5=875 875*10+1=8751
//     num = parseInt(num/10)  //157       15          1           0
// }
// document.write(`Reverse = ${rev}`)

/*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)
*/

// var num = prompt("Enter the Number :  ")
// var d = num.length
// let n = num = Number(num)
// var sum = 0
// while(num!=0){              //1634      163         16              1           0
//     let r = num%10          //4         3           6               1
//     sum = sum+r**d          //0+256=256 256+81=337  337+1296=1633   1633+1=1634
//     num = parseInt(num/10)  //163       16          1               0
// }
// if(sum==n)
// document.write(`${n} is Armstrong Number`)
// else
// document.write(`${n} is not an Armstrong Number`)


// var num = Number(prompt("Enter the Number :  "))
// let n = num
// var d = 0
// while(num!=0){
//     d++
//     num = parseInt(num/10)
// }
// num = n
// var sum = 0
// while(num!=0){              //1634      163         16              1           0
//     let r = num%10          //4         3           6               1
//     sum = sum+r**d          //0+256=256 256+81=337  337+1296=1633   1633+1=1634
//     num = parseInt(num/10)  //163       16          1               0
// }
// if(sum==n)
// document.write(`${n} is Armstrong Number`)
// else
// document.write(`${n} is not an Armstrong Number`)


// var num = Number(prompt("Enter the Number : "))
// var rev = 0
// var n = num
// while(num!=0){          //1551      155         15          1               0
//     let r = num%10      //1         5           5           1
//     rev = rev*10+r      //0*10+1=1  1*10+5=15   15*10+5=155 155*10+1=1551
//     num = parseInt(num/10)//155     15          1           0
// }
// if(rev == n)
// document.write(`${n} is Palindrome Number`)
// else
// document.write(`${n} is not a Palindrome Number`)

// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// var rev = 0
// var n = num
// while(num!=0){          //1458  145     14      1       0  
//     let r = num%10      //8     5       4       1
//     sum = sum+r         //0+8=8 8+5=13  13+4=17 17+1=18
//     num = parseInt(num/10)//145 14      1       0
// }
// num = sum
// while(num!=0){          //18        1           0
//     let r = num%10      //8         8*10+1=81
//     rev = rev*10+r      //0*10+8=8  0
//     num = parseInt(num/10)//1
// }
// if(sum*rev==n)
// document.write(`${n} is a Magical Number`)
// else
// document.write(`${n} is not a Magical Number`)

/*
do while Loop:
used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
 */

// let i = 1
// do{
//     console.log(`Hello World ${i}`)
//     i++
// }while(i<=10)


// do {
//     var a = Number(prompt("Enter the First Number : "))
//     var b = Number(prompt("Enter the Second Number : "))
//     var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
//     switch (ch) {
//         case "+":
//             console.log(`${a} + ${b} = ${a + b}`)
//             break
//         case "-":
//             console.log(`${a} - ${b} = ${a - b}`)
//             break
//         case "*":
//             console.log(`${a} * ${b} = ${a * b}`)
//             break
//         case "/":
//             console.log(`${a} / ${b} = ${a / b}`)
//             break
//         case "%":
//             console.log(`${a} % ${b} = ${a % b}`)
//             break
//         case "**":
//             console.log(`${a} ** ${b} = ${a ** b}`)
//             break
//         default:
//             console.log("Invalid Choice")
//     }
//     ch = prompt("Press n to Exit\nPress any other Key to Continue : ")
// }while(ch!='n')

/*
Nested loops:
    Loops within Loops:
*/

// for (let num = 1; num <= 20; num++) {
//     console.log(`Table of ${num} is`)
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }

// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var count = 0
// for (let num = start; num <= end; num++) {
//     let flag = false
//     for(let i=2;i<=num**0.5;i++){
//         if(num%i==0){
//             flag = true
//             break
//         }
//     }
//     if(flag==false && num>=2){
//         count++
//         document.write(`${num} `)
//     }
// }
// document.write(`<br>Total Prime Number =  ${count}`)


// var num = Number(prompt("Enter the Number : "))
// var n = num
// while(num>=10){
//     let sum = 0
//     while(num!=0){
//         let r = num%10
//         sum = sum+r
//         num = parseInt(num/10)
//     }
//     num = sum
// }
// if(num==1)
// document.write(`${n} is a Magical Number`)
// else
// document.write(`${n} is not a Magical Number`)

// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var count = 0
// for (let i = start; i <= end; i++) {
//     let num = i
//     while (num >= 10) {
//         let sum = 0
//         while (num != 0) {
//             let r = num % 10
//             sum = sum + r
//             num = parseInt(num / 10)
//         }
//         num = sum
//     }
//     if (num == 1){
//         document.write(`${i} `)
//         count++
//     }
// }
// document.write(`<br>Total Magical Numbers = ${count}`)

//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)

/*
Patterns

*****
*****
*****
*****
*****
 */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

/*
12345
12345
12345
12345
12345
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
ABCDE
ABCDE
ABCDE
ABCDE
ABCDE
*/  
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${String.fromCharCode(j+64)}`)
//     }
//     console.log()
// }


// /*
// 12345
// 23456
// 34567
// 45678
// 56789
// */
// for(let i=1;i<=5;i++){
//     for(let j=i;j<=i+4;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
12345
23456
34567
45678
56789
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${i+j-1}`)
//     }
//     console.log()
// }

/*
11111
*****
33333
*****
55555
 */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(i%2==0?"*":`${i}`)
//     }
//     console.log()
// }

/*
1*3*5
1*3*5
1*3*5
1*3*5
1*3*5
 */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(j%2==0?"*":`${j}`)
//     }
//     console.log()
// }

/*
1*3*5
*3*5*
3*5*7
*5*7*
5*7*9
 */


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write((i+j-1)%2==0?"*":`${(i+j-1)}`)
//     }
//     console.log()
// }


// /*
// *
// **
// ***
// ****
// *****
//  */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


// /*
// 1
// 22
// 333
// 4444
// 55555
//  */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i}`)
//     }
//     console.log()
// }

// /*
// 1
// 12
// 123
// 1234
// 12345
//  */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }


// /*
// 1
// 23
// 345
// 4567
// 56789
// */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i+j-1}`)
//     }
//     console.log()
// }


/*
1
01
101
0101
10101
*/

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${(i+j-1)%2}`)
//     }
//     console.log()
// }


/*
* 
*_
*_*
*_*_
*_*_*
*/

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j%2==0?"_":"*")
//     }
//     console.log()
// }