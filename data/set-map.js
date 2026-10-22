/**
 Set: collection of Unique Elements
      Does not Support Indexing
      Mutable Data Type
 */
//how to make a set
//how to make a set using new Set()

var a = [10,20,30,40,50,60,70,80,90,10,20,30,20,30,20,20,20,20,20,30,10,20,30,40,50,60,70,80,90,100]
var b = new Set(a)
// var c = Array.from(b)
// console.log(a)
// console.log(b)
// console.log(c)

//add item to set
//add() used to add an item in set,do nothing if item already exist

// b.add(100)
// console.log(b)
// b.add(110)
// console.log(b)

//delete() used to delete any particular item from Set
//do nothing if delete is empty
// b.delete(50)
// console.log(b)


//clear()   //remove all items from set
// b.clear()
// console.log(b)

//has() return true if item exist in set else return false
// console.log(b.has(50))
// console.log(b.has(500))


//size
// console.log(b.size)
/*
    values:     return an iterator containing all items of set
    keys:       return an iterator containing all items of set
    entries:    return an iterator in pair if value,value 
                containing all items of set
 */
// console.log(b.keys())
// console.log(b.values())
// console.log(b.entries())


//map: collection of item but in pair of key and value
//      keys must be unique but values may be duplicate
//if we use duplicate key in a map then only last key will used

//how to make a map

//set() of map insert an item in map and if key already exist then
//set() update keys value



//delete() used to delete any particular key from Map do nothing in case of Empty
//clear()   //used to delete all items from Map
//a.size  //return number of items of Map
//has() : return true is map has an item else return false

/*
    values:     return an iterator containing all keys of map
    keys:       return an iterator containing all values of map
    entries:    return an iterator in pair if key,value 
                containing all items of map
 */
