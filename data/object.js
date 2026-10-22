/*
objects store information in pair of keys and values
keys must be unique
values may be duplicate
if we use multiple keys then last key will be used
object is a mutable data type
*/

//object literal 
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 135000,
    city: "Faridabad",
    state: "Haryana"
}
// console.log(emp)


//Empty object literal 
// var emp = {}
// emp.id = 1001
// emp['name'] = "Nitin Chauhan"
// emp["dsg"] = "Trainer"
// emp[`salary`] = 150000
// emp.city = "Noida"
// emp.state = "UP"
// console.log(emp)

//new Object() 
// var emp = Object()
// emp.id = 1001
// emp['name'] = "Nitin Chauhan"
// emp["dsg"] = "Trainer"
// emp[`salary`] = 150000
// emp.city = "Noida"
// emp.state = "UP"
// console.log(emp)


//Accessing Object Values with help of keys
// console.log(emp)
// console.log(emp.id)
// console.log(emp.name)
// console.log(emp['dsg'])
// console.log(emp["salary"])
// console.log(emp[`city`])

//Accessing Object values through For in Loop 
// for(let key in emp){
//     console.log(`${key} = ${emp[key]}`)
// }


//Object.keys() Object.values() Object.entries()
// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))

//adding an item to existing object
// emp.email = "vishankchauhan@gmail.com"
// emp['phone'] = "9873848046"
// console.log(emp)


//deleting object item
// delete emp.name
// delete emp['dsg']
// console.log(emp)

//Nesting of Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:187000,
//     subject:["Mern Stack","Mean Stack","Python Full Stack","Php Full Stack"],
//     address:{
//         house:"82k",
//         street:"5A",
//         landmark:"Near Water Plant",
//         pin:121001,
//         city:"Faridabad",
//         state:"Haryana"
//     }
// }
// // console.log(emp)
// // console.log(emp.subject)
// // console.log(emp.subject[2])
// // console.log(emp.address)
// console.log(emp.address.city)



//function in Objects
// var add = {
//     a:10,
//     b:20,
//     calculate(){
//         this.sum = this.a+this.b
//     },
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// add.calculate()
// add.display()

// var add = {
//     a:10,
//     b:20,
//     calculate:function(){
//         this.sum = this.a+this.b
//     },
//     display:function(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// add.calculate()
// add.display()

// var add = {
//     a: 10,
//     b: 20,
//     calculate: () => add.sum = add.a + add.b,
//     display: () => console.log(`${add.a} + ${add.b} = ${add.sum}`)
// }
// add.calculate()
// add.display()


// var emp = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     email: "vishankchauhan@gmail.com",
//     phone: "9873848046",
//     basicSalary: 85000,
//     calculate() {
//         if (this.basicSalary < 50000) {
//             this.ta = this.basicSalary * 5 / 100
//             this.da = this.basicSalary * 6 / 100
//             this.ma = this.basicSalary * 7 / 100
//             this.hra = this.basicSalary * 8 / 100
//         }
//         else {
//             this.ta = this.basicSalary * 10 / 100
//             this.da = this.basicSalary * 12 / 100
//             this.ma = this.basicSalary * 15 / 100
//             this.hra = this.basicSalary * 17 / 100
//         }
//         this.gross = this.basicSalary+this.ta+this.da+this.hra+this.ma
//         if(this.gross<60000)
//         this.itax = 0
//         else
//         this.itax = (this.gross-60000)*10/100
        
//         this.net = this.gross-this.itax
//     },
//     display(){
//         console.log(`
//             Employee Id         :   ${this.id}
//             Name                :   ${this.name}
//             Designation         :   ${this.dsg}
//             Email Address       :   ${this.email}
//             Phone Number        :   ${this.phone}
//             Basic Salary        :   ${this.basicSalary}
//             Ta                  :   ${this.ta}
//             Da                  :   ${this.da}
//             Hra                 :   ${this.hra}
//             Ma                  :   ${this.ma}
//             Gross Salary        :   ${this.gross}
//             Income Tax          :   ${this.itax}
//             Net Salary          :   ${this.net}
//         `)
//     }
// }
// emp.calculate()
// emp.display()

//getter and setter
//get
//set

var emp = {
    id:1001,
    name:"Nitin",
    dsg:"Trainer",
    set setSalary(num){
        this.salary = num
    },
    get display(){
        console.log(`
            Employee Id : ${this.id}
            Name        : ${this.name}
            Designation : ${this.dsg}
            Salary      : ${this.salary}
        `);
    }
}
emp.setSalary = 135800
emp.display


//object destructuring
//object constructor


//object prototype
//need of object property

//solution
