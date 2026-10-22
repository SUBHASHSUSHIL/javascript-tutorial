//to set date and time
//1st Style : new Date() : return Current Date and time
// var a = new Date()
// console.log(a)
// console.log(a.toString())
// console.log(a.toLocaleString())
// console.log(a.toLocaleDateString())
// console.log(a.toLocaleTimeString())

//2nd Style : new Date(year,month,day,hour,minute,second,milisecond)
// var a = new Date(2024,7,12,9,30,30,2000)
// var b = new Date(2024,7,12,9,30,30)
// var c = new Date(2024,7,12,9,30)
// var d = new Date(2024,7,12,9)
// var e = new Date(2024,7,12)
// var f = new Date(2024,7)
// var g = new Date(2024)
// console.log(a.toLocaleString())
// console.log(b.toLocaleString())
// console.log(c.toLocaleString())
// console.log(d.toLocaleString())
// console.log(e.toLocaleString())
// console.log(f.toLocaleString())
// console.log(g.toLocaleString())



//3rd Style : new Date(miliseconds)
// var a = new Date(1554545454545)
// console.log(a.toLocaleString())

//4th Style : new Date(dateString)
// var a = new Date("2024")
// var b = new Date("2024 8")
// var c = new Date("2024 8 12")
// var d = new Date("2024 8 12 09:30:30")
// console.log(a.toLocaleString())
// console.log(b.toLocaleString())
// console.log(c.toLocaleString())
// console.log(d.toLocaleString())


//to get date and time
var a=new Date()
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());
console.log(a.getUTCDate());
console.log(a.getTime());//miliseconds since 1 Jan 1970
console.log(a.getDay()); //week day
console.log(Date.now());//miliseconds since 1 Jan 1970