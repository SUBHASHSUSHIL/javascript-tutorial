/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power

    Category: Binary
    Precedence: L to R
    Priority: 
                1. Brackets
                2. **
                3. * / %
                4. + -
 */
// console.log(15+6)               //21
// console.log(15+"6")             //156
// console.log("15"+6)             //156
// console.log(15+"Hello World")   //15Hello World

// console.log(15-6)               //9
// console.log(15-"6")             //9
// console.log("15"-6)             //9
// console.log(15-"Hello World")   //NaN

// console.log(15*6)               //90
// console.log(15*"6")             //90
// console.log("15"*6)             //90
// console.log(15*"Hello World")   //NaN

// console.log(15/6)               //2.5
// console.log(15/"6")             //2.5
// console.log("15"/6)             //2.5
// console.log(15/"Hello World")   //NaN

// console.log(15%6)               //3
// console.log(15%"6")             //3
// console.log("15"%6)             //3
// console.log(15%"Hello World")   //NaN

// console.log(15**6)               //11390625
// console.log(15**"6")             //11390625
// console.log("15"**6)             //11390625
// console.log(15**"Hello World")   //NaN

// var a = 10*3%40/10*15%55/9*10-4*10%25*3/5*3+5*(5*2**5)
// console.log(a)

/*
10*3%40/10*15%55/9*10-4*10%25*3/5*3+5*(5*2**5)
10*3%40/10*15%55/9*10-4*10%25*3/5*3+5*(5*32)
10*3%40/10*15%55/9*10-4*10%25*3/5*3+5*160
30%40/10*15%55/9*10-4*10%25*3/5*3+5*160
30/10*15%55/9*10-4*10%25*3/5*3+5*160
3*15%55/9*10-4*10%25*3/5*3+5*160
45%55/9*10-4*10%25*3/5*3+5*160
45/9*10-4*10%25*3/5*3+5*160
5*10-4*10%25*3/5*3+5*160
50-4*10%25*3/5*3+5*160
50-40%25*3/5*3+5*160
50-15*3/5*3+5*160
50-45/5*3+5*160
50-9*3+5*160
50-27+5*160
50-27+800
23+800
823
 */

// var a = 20*5%65/10*10%55/7*10-14*3%25*3%20*3%41+5*(5*2**5%220)
// console.log(a)

/*
20*5%65/10*10%55/7*10-14*3%25*3%20*3%41+5*(5*2**5%220)
20*5%65/10*10%55/7*10-14*3%25*3%20*3%41+5*(5*32%220)
20*5%65/10*10%55/7*10-14*3%25*3%20*3%41+5*(160%220)
20*5%65/10*10%55/7*10-14*3%25*3%20*3%41+5*160
100%65/10*10%55/7*10-14*3%25*3%20*3%41+5*160
35/10*10%55/7*10-14*3%25*3%20*3%41+5*160
3.5*10%55/7*10-14*3%25*3%20*3%41+5*160
35%55/7*10-14*3%25*3%20*3%41+5*160
35/7*10-14*3%25*3%20*3%41+5*160
5*10-14*3%25*3%20*3%41+5*160
50-14*3%25*3%20*3%41+5*160
50-42%25*3%20*3%41+5*160
50-17*3%20*3%41+5*160
50-51%20*3%41+5*160
50-11*3%41+5*160
50-33%41+5*160
50-33+5*160
50-33+800
17+800
817
*/
/*
Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

Category: Binary
Precedence: R to L
 */

/* Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other 
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/

/*
    Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than 
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check valye and data type both)
 */
// console.log(10<20)      //true
// console.log(10<=20)     //true
// console.log(10<=10)     //true
// console.log(10<=5)      //false

// console.log(10>20)      //false
// console.log(10>=20)     //false
// console.log(10>=10)     //true
// console.log(10>=5)      //true

// console.log(10==10)        //true
// console.log(10=="10")      //true
// console.log(10==20)        //flase
// console.log(10===10)       //true
// console.log(10==="10")     //false

// console.log(10!=10)         //false
// console.log(10!=20)         //true
// console.log(10!="10")       //false
// console.log(10!==10)        //false
// console.log(10!=="20")      //true
// console.log(10!=="10")      //true

/*
    Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return 
                        false if condition is 
                        true
 */
// console.log(10 && 20)   //true i.e 20
// console.log(10 && 0)    //false i.e 0
// console.log(0 && 20)    //false i.e 0
// console.log(0 && 0)     //false i.e 0

// console.log(10 || 20)   //true i.e 10
// console.log(10 || 0)    //true i.e 10
// console.log(0 || 20)    //true i.e 20
// console.log(0 || 0)     //false i.e 0

// console.log(!10)            //false
// console.log(!0)             //true

/*
0 null undefined empty string are false
 */

/*
Bitwise Operator:
Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0
 */

// var a = 33
// var b = 55
// var c = a&b
// var d = a|b
// var e = a^b
// console.log(c,d,e)

/*
a = 78  :   1   0   0   1   1   1   0
b = 65  :   1   0   0   0   0   0   1
-------------------------------------
c=a&b   :   1   0   0   0   0   0   0
            64  32  16  8   4   2   1
            -------------------------
            64  0   0   0   0   0   0   =>64
---------------------------------------------
d=a|b   :   1   0   0   1   1   1   1
            64  32  16  8   4   2   1
            -------------------------
            64  0   0   8   4   2   1   =>79
---------------------------------------------
e=a^b   :   0   0   0   1   1   1   1
            64  32  16  8   4   2   1
            -------------------------
            0   0   0   8   4   2   1   =>15
 */

/*
a = 118 :   0   1   1   1   0   1   1   0
b = 137 :   1   0   0   0   1   0   0   1
------------------------------------------
c=a&b   :   0   0   0   0   0   0   0   0   
            128 64  32  16  8   4   2   1
            -----------------------------
            0   0   0   0   0   0   0   0   =>0
-----------------------------------------------
d=a|b   :   1   1   1   1   1   1   1   1
            128 64  32  16  8   4   2   1
            -----------------------------
            128 64  32  16  8   4   2   1=>255
-----------------------------------------------
e=a^b   :   1   1   1   1   1   1   1   1   
            128 64  32  16  8   4   2   1
            -----------------------------
            128 64  32  16  8   4   2   1=>255
*/
/*
Bitwise Left Shift and Right Shift
Biwise Left Shift
        num<<n
    i.e num*2**n
    eg. 25<<10
    eg. 25*2**10
    i.e 25*1024
    i.e 25600

Bitwise Right Shift
        num>>n
    i.e num/2**n
    eg. 2500>>5
    eg. 2500/2**5
    i.e 2500/32
    i.e 78
 */
// console.log(25<<5)
// console.log(250<<7)
// console.log(50<<8)

// console.log(1700>>5)

/*
Bitwise Negation Operator:
                    ~
                    (-x-1)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        -1  -1                     -1   -1
        ----------------------------------
            -21                         29
                    -
                    (-x)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        ----------------------------------
            -20                         30
*/
// var a = 25
// var b = -39
// console.log(~a)
// console.log(~b)
// console.log(-a)
// console.log(-b)
/*

Conditional Operator or Ternary Operator(?:)
used when we have to execute a statement out of
two statements according to a condition
syntax:
condition?Statement1:Statement2;
            True      False
 */
// var num = Number(prompt("Enter the Number : "))
// num%2==0?document.write(`${num} is Even`):document.write(`${num} is Odd`)

/*
1. WAP to check whether two numbers are equal or not
2. WAP to check whether a person can vote or not
3. WAP to check whether a number is perfect square number of not

Math.sqrt() : used to get sqrt of any specific number
eg. Math.sqrt(25)   i.e 5  
eg. Math.sqrt(50)   i.e 7.07

or use ** operator
eg. 25**0.5 i.e 5
eg. 50**0.5 i.e 7.07

Math.pow()  :   used to get power of any specific number
eg. Math.pow(5,2)   i.e 25
eg. Math.pow(5,3)   i.e 125

or use ** operator
eg. 5**2     i.e 25
eg. 5**3     i.e 125

 */ 

// var num = Number(prompt("Enter the Number : "))
// // var n = parseInt(Math.sqrt(num))
// var n = parseInt(num**0.5)
// n*n==num?document.write(`${num} is Perfect Square Number`):
// document.write(`${num} is not Perfect Square Number`)


// var num = Number(prompt("Enter the Number : "))
// parseInt(num**0.5)==num**0.5?document.write(`${num} is Perfect Square Number`):
// document.write(`${num} is not Perfect Square Number`)

/*
                Increment(++)  i.e x=x+1
        Pre-Increment           Post-Increment
        (++oprand)              (operand++)
        -------------           --------------
        First Increment         first Assignment
        then Assignment         then Increment

                 Decrement(--)  i.e x=x-1
        Pre-Decrement           Post-Decrement
        (--oprand)              (operand--)
        -------------           --------------
        First Decrement         first Assignment
        then Assignment         then Decrement
 */

// var a = 10
// var b = a++   //b=10    a=11
// var c = ++a   //a=12    c=12
// var d = a--   //d=12    a=11
// var e = --a   //a=10    e=10
// --a           //a=9
// a--           //a=8
// console.log(a,b,c,d,e)

// var a = 10
// var b = a++ + ++a
// console.log(a,b)

// var a = 10
// var b = --a - a--
// console.log(a,b)


// var a = 10
// var b = --a - a--
// var c = a-- - a-- + b-- - --b
// console.log(a,b,c)


// var a = 10
// var b = a-- + --a
// var c = --a - --a + --b - b--
// var d = a-- - a-- + b-- - b-- + c-- - c--
// console.log(a,b,c,d)


var a = 10
a = a--
var b = a++ - a--
var c = a++ - a++ + --b - b--
console.log(a,b,c)
