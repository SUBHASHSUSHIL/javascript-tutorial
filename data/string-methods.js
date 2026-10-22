/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
            eg. name,email,password etc
        
            immutable data type
            index start with 0
*/
//String Constant
// var a = 'Ducat Education Noida'
// var b = "Ducat Education Noida"
// var c = `Ducat
// Education
// Noida` 
// console.log(a,typeof(a))
// console.log(b,typeof(b))
// console.log(c,typeof(c))

//String using Loops
var a = "Ducat Education Noida"

// //string using for Loop
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// //string using while Loop
// let i=0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }

// //string using do while Loop
// let i=0
// do{
//     console.log(a[i])
//     i++
// }while(i<a.length)


// //string using for in Loop
// for(let i in a){
//     console.log(a[i])
// }

//string using for of Loop
// for(let i of a){
//     console.log(i)
// }

//string methods
//charAt() return character at any specific index
// console.log(a[0])
// console.log(a.charAt(0))
// for(let i in a){
//     // console.log(a[i])
//     console.log(a.charAt(i))
// }

/*
charCodeAt(): return Unicode of first character of String if no argument is provided and return unicode of particular character if argument is provided
*/
// console.log(a.charCodeAt());
// for(let i in a){
//     console.log(`${a[i]} = ${a.charCodeAt(i)}`)
// }
/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/

/*
fromCharCode(): convert a Unicode into Character
 */

// for(let i=0;i<=10000;i++){
//     document.write(`${i} = ${String.fromCharCode(i)} | `)
// }

/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string
lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string
search()      :   return first index of any substring in string
                  and return -1 if item not found in string
includes()    :   check whether a substring is exist in string or not
                  it return true of false
*/
console.log(a.indexOf("i"))
console.log(a.search("i"))
console.log(a.lastIndexOf("i"))
console.log(a.includes("i"))
console.log(a.indexOf("p"))
console.log(a.search("p"))
console.log(a.lastIndexOf("p"))
console.log(a.includes("p"))


// COpy a string into another

//concat() : concat one or more strings in a string

/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not
*/


//toUpperCase()
//toLocaleUpperCase()

//toLowerCase()
//toLocaleLowerCase()

//substr() return a substring from pos to number of characters
//substring() return a substring from pos to pos  characters

//repeat()  :   create number of copies of a string

//replace()
//replaceAll()


//slice()

//split()

//trim() remove all leading white space characters from string from both side
//ltrim()remove all leading white space characters from string from left side   
//rtrim()remove all leading white space characters from string from right side


/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/
